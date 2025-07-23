#!/bin/bash

# AWS S3 and CloudFront Deployment Script
# This script builds and deploys a React application to AWS S3 and CloudFront

# Configuration - CHANGE THESE VALUES
S3_BUCKET_NAME="ai-app-school"
CLOUDFRONT_DISTRIBUTION_ID="E2R8GZUMQ5J8Z3"
AWS_REGION="ap-south-1"  # Change to your preferred region

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

echo "=== Building React application ==="
npm run build

if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

echo "=== Deploying to S3 ==="
aws s3 sync dist/ s3://$S3_BUCKET_NAME/ --delete --region $AWS_REGION

if [ $? -ne 0 ]; then
    echo "S3 deployment failed. Exiting."
    exit 1
fi

echo "=== Creating CloudFront invalidation ==="
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*" --region $AWS_REGION

echo "=== Deployment completed successfully ==="
echo "Your application is now available at:"
echo "https://$S3_BUCKET_NAME.s3.amazonaws.com/index.html (S3 direct access)"
echo "https://dev.a2pyramid.com"