# ProFix Condo Care (Astro + Tailwind)

Static-first marketing site for ProFix Condo Care (Edmonton condo maintenance). Ready for GitHub + Netlify deploy. Content uses placeholders for phone, rates, bios, compliance, and images.

## Stack
- Astro 4 + TypeScript
- Tailwind CSS (custom palette, typography)
- Netlify deploy (static build)

## Install
```bash
npm install
```
*(If npm registry is blocked, run once you have network access.)*

## Run dev
```bash
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/` (Netlify publish path).

## Pages
- `/` Home
- `/services`
- `/subscriptions`
- `/pricing`
- `/about`
- `/service-area`
- `/contact`

## Forms
Netlify Forms enabled on Home and Contact (`data-netlify="true"`, honeypot field). Update the `form-name` if you change forms.

## Placeholders to replace
- Phone number, rates, materials markup, after-hours surcharge
- Founder name/bio/headshot; compliance proofs (WCB/insurance)
- Real testimonials and photos
- Service area confirmation; social link for schema

## Deployment (Netlify)
1. Push this folder as a Git repo (main branch).
2. In Netlify: **New site from Git** → repo → build command `npm run build`, publish directory `dist`.
3. Add environment var `NPM_FLAGS=--legacy-peer-deps` if needed for CI.

## DNS / Email (Microsoft 365)
See `Tech Notes` in prior deliverable: MX, SPF, DKIM, autodiscover CNAMEs.

