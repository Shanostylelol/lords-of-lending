# Google Search Console Setup Guide

## 1. Verify Domain Ownership
- Go to [Google Search Console](https://search.google.com/search-console)
- Add property: `https://lordsoflending.com`
- Verification: TXT record already exists: `google-site-verification=D0sF8orsIn4T0JKSU7ZYVwuxnssKaN326v5MdAJehj4`
- If needed, add via Vercel DNS settings

## 2. Submit Sitemap
- In GSC → Sitemaps → Add: `https://lordsoflending.com/sitemap.xml`
- Expected: 170+ URLs indexed

## 3. Request Indexing (Priority Pages)
Request indexing for these 5 pillar articles first:
1. `/complete-guide-sba-7a-loans`
2. `/art-of-sba-deal-structuring`
3. `/how-to-become-sba-loan-broker`
4. `/sba-loan-process-timeline`
5. `/sba-loan-originator-training`

Then request indexing for tools:
6. `/tools/sba-loan-calculator`
7. `/tools/dscr-calculator`
8. `/tools/sba-eligibility-checker`

## 4. Bing Webmaster Tools
- Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- Import from Google Search Console (easiest method)
- Or add property and submit sitemap: `https://lordsoflending.com/sitemap.xml`

## 5. Monitor
- Check Coverage report weekly for first month
- Core Web Vitals: review after 28 days of data
- Set up email alerts for indexing issues
- Search Performance: track impressions and clicks for target keywords

## 6. Ongoing
- Re-submit sitemap after adding new content
- Use URL Inspection tool to request indexing for new articles
- Monitor for crawl errors and fix immediately
