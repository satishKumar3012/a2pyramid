#!/bin/bash

# AWS S3 and CloudFront Setup Script
# This script creates the necessary AWS resources for hosting a React application

# Configuration - CHANGE THESE VALUES
S3_BUCKET_NAME="ai-app-school"
AWS_REGION="ap-south-1"  # Change to your preferred region
PROJECT_NAME="ai-app-school"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI is not installed. Please install it first."
    echo "Visit: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"
    exit 1
fi

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

echo "=== Creating S3 bucket ==="
aws s3api create-bucket \
    --bucket $S3_BUCKET_NAME \
    --region $AWS_REGION \
    $(if [ "$AWS_REGION" != "ap-south-1" ]; then echo "--create-bucket-configuration LocationConstraint=$AWS_REGION"; fi)

if [ $? -ne 0 ]; then
    echo "S3 bucket creation failed. The bucket might already exist or the name is taken."
    read -p "Do you want to continue with the existing bucket? (y/n): " continue_with_existing
    if [ "$continue_with_existing" != "y" ]; then
        exit 1
    fi
fi

echo "=== Configuring S3 bucket for static website hosting ==="
aws s3 website s3://$S3_BUCKET_NAME/ --index-document index.html --error-document index.html

echo "=== Setting bucket policy for public read access ==="
cat > /tmp/bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$S3_BUCKET_NAME/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $S3_BUCKET_NAME --policy file:///tmp/bucket-policy.json

echo "=== Creating CloudFront distribution ==="
DISTRIBUTION_CONFIG=$(cat << EOF
{
    "CallerReference": "$PROJECT_NAME-$(date +%s)",
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3Origin",
                "DomainName": "$S3_BUCKET_NAME.s3.amazonaws.com",
                "S3OriginConfig": {
                    "OriginAccessIdentity": ""
                }
            }
        ]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3Origin",
        "ViewerProtocolPolicy": "redirect-to-https",
        "AllowedMethods": {
            "Quantity": 2,
            "Items": ["GET", "HEAD"],
            "CachedMethods": {
                "Quantity": 2,
                "Items": ["GET", "HEAD"]
            }
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000
    },
    "Comment": "$PROJECT_NAME website distribution",
    "Enabled": true,
    "DefaultRootObject": "index.html",
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    }
}
EOF
)

DISTRIBUTION_RESULT=$(aws cloudfront create-distribution --distribution-config "$DISTRIBUTION_CONFIG")
CLOUDFRONT_DISTRIBUTION_ID=$(echo $DISTRIBUTION_RESULT | grep -o '"Id": "[^"]*' | cut -d'"' -f4)
CLOUDFRONT_DOMAIN=$(echo $DISTRIBUTION_RESULT | grep -o '"DomainName": "[^"]*' | cut -d'"' -f4)

if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "Failed to create CloudFront distribution."
    exit 1
fi

echo "=== Updating deploy.sh with your configuration ==="
sed -i '' "s/your-bucket-name/$S3_BUCKET_NAME/g" deploy.sh
sed -i '' "s/your-cloudfront-distribution-id/$CLOUDFRONT_DISTRIBUTION_ID/g" deploy.sh
sed -i '' "s/us-east-1/$AWS_REGION/g" deploy.sh

echo "=== Setup completed successfully ==="
echo "S3 Bucket: $S3_BUCKET_NAME"
echo "CloudFront Distribution ID: $CLOUDFRONT_DISTRIBUTION_ID"
echo "CloudFront Domain: $CLOUDFRONT_DOMAIN"
echo ""
echo "Your application will be available at: https://$CLOUDFRONT_DOMAIN after deployment"
echo "Run './deploy.sh' to build and deploy your application"