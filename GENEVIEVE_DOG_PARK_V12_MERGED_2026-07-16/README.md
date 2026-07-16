# GENEVIEVE App™ Dog Park — Complete Restore Deployable Build

Version: **2026.07.14.10**

This V10 package is built directly from the complete V9 package and preserves the full Dog Park structure into one clean static web/PWA repository that can be deployed directly to GitHub Pages or Vercel without npm, Vite, React or a build command.

## Main navigation

The public app deliberately shows only five main choices:

- Today
- Journey
- Parks
- Dogs
- More

The remaining operational pages stay under More so the complete feature set does not overload users.

## Included

- 31 functional screens;
- complete home-to-park-to-home journey;
- lead-on route and gate checklist;
- park search, details, live state and beaches;
- owner-controlled dog profiles and Mr Gruff’s date of birth;
- puppy and young-dog socialisation assessment;
- consistent interaction and heat risk engine;
- prospective companions and best-mate relationships;
- voluntary, auto-expiring check-in/out with a clear skip option, plus incognito, needs-space, on-lead and training states;
- Owner Duty and unattended-dog reports;
- etiquette/body-language prompts;
- hazards, travel, emergency, lost/found and incidents;
- park superintendent maintenance and public notices;
- notifications, membership, privacy and legal pages;
- local data and patent-evidence export;
- launch checker;
- GitHub Actions and Vercel configuration;
- PWA service worker;
- Supabase starting schema; and
- Node risk-engine tests.

## Risk scale

All risk percentages use one direction:

- 0–24: Green — lower risk
- 25–49: Yellow — moderate risk
- 50–74: Amber — high risk
- 75–100: Red — very high risk

The Today result uses the highest current risk component so a serious heat, interaction or crowding risk is not averaged away.

## Deployment

Read:

- `docs/SITE_SETUP_TODAY.md`
- `docs/GITHUB_VERCEL_DEPLOY.md`
- `docs/PAYMENTS_AND_STORE_URLS.md`
- `docs/TEST_REPORT.md`

## Current technical boundary

The site is fully deployable and its local functions work in the browser. Browser local storage holds profiles, plans, check-ins, relationships, predictions, reports and evidence.

A real multi-user public service still needs:

- final domain and public support details;
- secure authentication and production backend integration;
- verified official park/council data;
- push notifications;
- server-side subscription verification and entitlements;
- exact Stripe product-link mapping;
- Apple and Google native wrappers/billing;
- final privacy/data-safety declarations; and
- professional legal, privacy, veterinary-safety, insurance and patent review.

The Launch Check displays these as blockers rather than pretending they are complete.

## Official GA logo and phone icon

The exact supplied GA artwork remains unchanged in `assets/genevieve-ga-logo-approved-original.png`. V10 uses the pixel-identical square crop with its pink glow for display and uses that same approved artwork for the in-app header, browser favicon, Apple home-screen icon and Android/PWA install icon. It is not redrawn, recoloured, rotated, stretched or squashed.


## Visibility and deployment fixes

- Mobile users can change the local demonstration role under **More → App View**.
- The **Park Superintendent** module is always listed and explains how to unlock the local view.
- **More → Refresh latest app version** removes old GENEVIEVE website caches without deleting locally saved dog records.
- Core asset URLs are versioned, and Vercel receives no-cache headers for HTML, configuration and the service worker.
- The footer and More page display build **2026.07.14.10** so the live version can be identified immediately.


## Voluntary check-in policy

Check-in and check-out are optional community features in build 2026.07.14.10. The app must not present the displayed count as an official headcount or require participation unless a competent authority formally adopts and verifies such a requirement.


## V7 navigation and branding

Build 2026.07.14.7 adds true one-step history navigation and keeps the approved GA visible on phones, including screens narrower than 420px. Phone install icons now use the approved GA mark.
