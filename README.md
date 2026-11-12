# LTS Digital Store v1.0 — Preview

A responsive static storefront for Luqman Tech Solutions. No backend or payments are connected.

## Preview locally
Open `index.html` in your browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000.

## Deploy for RM0 upfront
Create a public GitHub repository containing only this store folder (do NOT upload the paid workbook). Enable GitHub Pages under Settings → Pages → Deploy from branch → main/root. Confirm current GitHub Pages eligibility and limits for your account. An alternative static host can be used.

## Before commercial launch
1. Choose and verify a hosted checkout and digital delivery provider supporting Malaysian sellers and bank payouts. Confirm its fees and compliance requirements.
2. Upload the final tested product ZIP privately to that provider. Never publish paid download files in the public website repository.
3. Replace the disabled checkout control in `index.html`/`assets/app.js` with a verified HTTPS checkout link. Only do this after a successful test transaction and delivery.
4. Add verified business identity and contact details, reviewed privacy/terms/refund policies and product support workflow.
5. Test mobile, keyboard navigation, purchase, refund and download paths.
6. Remove all BETA/PREVIEW language only after quality assurance and merchant readiness.

## Product scope
Professional v1.1: eight worksheets, proposed RM59 price. This site does not imply real sales, customer testimonials, verified metrics or product certification. Dashboard figures shown on the website are illustrative and are not workbook data.

## Maintenance
Edit text and prices in index.html; styles in assets/style.css; interactions in assets/app.js. No frameworks or build dependencies. Google Fonts loads from a third party; replace with system fonts if desired.
