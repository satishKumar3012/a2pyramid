#!/bin/bash

# Setup CloudFront with custom domain for CORS fix
# This script configures CloudFront to use a custom domain and updates your S3 bucket

# Configuration - CHANGE THESE VALUES
S3_BUCKET_NAME="ai-app-school"
CLOUDFRONT_DISTRIBUTION_ID="E2R8GZUMQ5J8Z3"
CUSTOM_DOMAIN="dev.a2pyramid.com"
AWS_REGION="ap-south-1"

# Check if AWS CLI is installed and configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "AWS CLI is not configured. Please run 'aws configure' first."
    exit 1
fi

# Step 1: Request SSL certificate (if not already done)
echo "Checking for existing certificate for $CUSTOM_DOMAIN..."
CERT_ARN=$(aws acm list-certificates --region us-east-1 | grep -A 2 "$CUSTOM_DOMAIN" | grep "CertificateArn" | cut -d'"' -f4)

if [ -z "$CERT_ARN" ]; then
    echo "Requesting SSL certificate for $CUSTOM_DOMAIN..."
    CERT_ARN=$(aws acm request-certificate --domain-name $CUSTOM_DOMAIN --validation-method DNS --region us-east-1 | grep "CertificateArn" | cut -d'"' -f4)
    
    echo "Certificate requested. Please add the following DNS validation records:"
    aws acm describe-certificate --certificate-arn $CERT_ARN --region us-east-1
    
    echo "After adding DNS records, press Enter to continue..."
    read -p ""
else
    echo "Certificate found: $CERT_ARN"
fi

# Step 2: Update CloudFront distribution with custom domain
echo "Updating CloudFront distribution with custom domain..."

# Get current CloudFront config
aws cloudfront get-distribution-config --id $CLOUDFRONT_DISTRIBUTION_ID > /tmp/cf-config.json

# Extract ETag (required for update)
ETAG=$(grep -o '"ETag": "[^"]*' /tmp/cf-config.json | cut -d'"' -f4)

# Check if custom domain is already configured
if grep -q "$CUSTOM_DOMAIN" /tmp/cf-config.json; then
    echo "Custom domain is already configured in CloudFront."
else
    # Update the config to add custom domain
    # This is a simplified approach - for complex configurations, consider using AWS CLI with a JSON file
    # or the AWS Management Console
    echo "Please add the custom domain in the AWS CloudFront Console:"
    echo "1. Go to CloudFront in AWS Console"
    echo "2. Select your distribution ID: $CLOUDFRONT_DISTRIBUTION_ID"
    echo "3. Click 'Edit'"
    echo "4. Under 'Alternate domain names (CNAMEs)', add: $CUSTOM_DOMAIN"
    echo "5. Under 'Custom SSL Certificate', select the certificate for $CUSTOM_DOMAIN"
    echo "6. Save changes"
    
    echo "After updating CloudFront in the console, press Enter to continue..."
    read -p ""
fi

# Step 3: Create/update DNS record
echo "Please update your DNS settings to point $CUSTOM_DOMAIN to your CloudFront distribution:"
echo "1. Go to your DNS provider"
echo "2. Create a CNAME record:"
echo "   - Name: $CUSTOM_DOMAIN (or subdomain part only, depending on your DNS provider)"
echo "   - Value: The CloudFront domain name (found in the CloudFront console)"
echo "   - TTL: 300 seconds (or as recommended by your DNS provider)"

echo "After updating DNS, press Enter to continue..."
read -p ""

# Step 4: Update your deploy script to use CloudFront URL
echo "Updating deploy.sh to reference the custom domain..."
sed -i '' "s|Your CloudFront URL (check in AWS Console)|https://$CUSTOM_DOMAIN|g" deploy.sh

echo "Setup completed!"
echo ""
echo "IMPORTANT: DNS changes may take time to propagate (up to 48 hours)."
echo "Your application will be available at: https://$CUSTOM_DOMAIN"
echo ""
echo "If you still see CORS errors, make sure your backend allows requests from https://$CUSTOM_DOMAIN"