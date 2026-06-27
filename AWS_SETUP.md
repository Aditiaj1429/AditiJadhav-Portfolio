# AWS Deployment Checklist

This portfolio deploys automatically to **AWS S3 + CloudFront** via **GitHub Actions** on every push to `main`.

Estimated cost: **~$0** during AWS free tier, then roughly **$0.50–2/month** for low traffic with the free CloudFront URL (no custom domain required).

## 1. Create the S3 bucket

1. Open **AWS Console → S3 → Create bucket**
2. Bucket name example: `aditi-jadhav-portfolio-<unique-suffix>`
3. Region: **ap-south-1** (Mumbai)
4. Keep **Block all public access** enabled
5. Create the bucket

CloudFront will read from this private bucket using Origin Access Control (OAC).

## 2. Create CloudFront distribution

1. Open **CloudFront → Create distribution**
2. Origin domain: select your S3 bucket
3. Origin access: **Origin access control settings (recommended)** → create OAC
4. Apply the bucket policy CloudFront suggests after creation
5. Default root object: `index.html`
6. Viewer protocol policy: **Redirect HTTP to HTTPS**

### SPA routing (required for React)

Add custom error responses:

| HTTP error | Response page path | HTTP response code |
|------------|-------------------|--------------------|
| 403        | `/index.html`     | 200                |
| 404        | `/index.html`     | 200                |

This ensures direct links and refreshes work on CloudFront.

## 3. Create IAM user for GitHub Actions

1. Open **IAM → Users → Create user**
2. Name: `github-portfolio-deploy`
3. Attach a custom policy limited to your bucket and distribution:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    },
    {
      "Effect": "Allow",
      "Action": ["cloudfront:CreateInvalidation"],
      "Resource": "arn:aws:cloudfront::YOUR-ACCOUNT-ID:distribution/YOUR-DISTRIBUTION-ID"
    }
  ]
}
```

4. Create access keys for programmatic access

## 4. Add GitHub repository secrets

In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | IAM access key |
| `AWS_SECRET_ACCESS_KEY` | IAM secret key |
| `AWS_S3_BUCKET` | Your bucket name |
| `AWS_CLOUDFRONT_DISTRIBUTION_ID` | CloudFront distribution ID |

## 5. Add your resume PDF

Copy your resume to:

`public/resume/Aditi-Anand-Jadhav-Resume.pdf`

Then commit and push.

## 6. Push to GitHub

```bash
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aditi-portfolio.git
git push -u origin main
```

GitHub Actions will build and deploy automatically.

## 7. Set a billing alarm (recommended)

1. Open **AWS Billing → Budgets**
2. Create a budget with alert at **$1/month**

## 8. Share on LinkedIn

Use your free CloudFront URL, for example:

`https://d1234abcd.cloudfront.net`

Add it to:

- LinkedIn **Featured** section
- **Contact → Website**
- A short post introducing your portfolio

## Local development

```bash
npm install
npm run dev
```

Build locally:

```bash
npm run build
npm run preview
```

## Optional: custom domain later

1. Buy a domain (for example `aditijadhav.dev`)
2. Request an ACM certificate in **us-east-1** (required for CloudFront)
3. Add alternate domain names to CloudFront
4. Point DNS (Route 53 or another provider) to the CloudFront distribution

Custom domains are optional and usually cost ~$10–15/year.
