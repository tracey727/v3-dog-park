# V10 final verification report

Build: **2026.07.14.10**  
Base: supplied complete **Version 9** ZIP

## Preservation result

- V9 files checked: **74**
- V9 files missing from V10: **0**
- V9 files unchanged: **66**
- V9 files intentionally updated for V10 versioning, cache paths, documentation or the inherited checker: **8**
- V10 total files: **85**
- All 31 screens preserved: **PASS**
- All 23 bound forms preserved: **PASS**
- Five main navigation areas preserved: **Today, Journey, Parks, Dogs, More**

## Logo result

- The V10 square logo is pixel-for-pixel identical to the 750 × 750 white logo panel in the uploaded image, including its pink glow: **PASS**
- Header logo, favicon, Apple touch icon and 192/512 PWA icons point to new V10 filenames: **PASS**
- 1024 × 1024 store-preparation icon added: **PASS**

## Functional checks

- Static local links, files, navigation targets and form bindings: **PASS**
- Risk-engine tests: **PASS**
- JavaScript syntax checks: **PASS**
- Manifest and Vercel JSON parsing: **PASS**
- Service-worker asset list: **PASS**
- Local HTTP checks for index, logo, icons, manifest, service worker and legal pages: **PASS (HTTP 200)**

## Preserved key content

- Mr Gruff profile: **PASS**
- Mr Gruff DOB 2021-08-08: **PASS**
- Permanent emergency button: **PASS**
- Emergency screen: **PASS**
- Call 000 link: **PASS**
- Lost and found: **PASS**
- Incident reporting: **PASS**
- Lone walker timer: **PASS**
- Tree/infinity/roots image: **PASS**
- Pink-glow GA header image: **PASS**
- Voluntary check-in: **PASS**
- Owner Duty: **PASS**
- Grey Nomad/trip planning: **PASS**
- Park Superintendent: **PASS**
- Legal centre: **PASS**

## Files intentionally changed from V9

- `README.md`
- `app.js`
- `docs/CHANGELOG.md`
- `index.html`
- `legal/ip-notice.html`
- `manifest.webmanifest`
- `service-worker.js`
- `tests/static-check.py`

These changes are version/cache references, relative deployment paths, accurate logo wording, V10 documentation and a correction to the inherited static checker. The 31-screen app structure and operational feature code were not removed.

## Image limitation found in V9

The supplied V9 package contains the GA logo and the tree/infinity/roots image. It does **not** contain separate photo files of Tracey or Mr Gruff. V10 did not remove them; they were not present in the supplied V9 ZIP. Mr Gruff’s profile and date of birth remain in the app.
