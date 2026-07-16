# V13 Simplified grouped layout record

Build 2026.07.16.13 — 16 July 2026

## Changed
- The More screen's 23 function buttons are now inside five collapsible
  groups (tap to open/close). Every button, label and destination is
  unchanged; only the grouping is new. "At the park today" opens by default.
    1. At the park today — Check In/Out, Owner Duty, Park Etiquette,
       Heat & Hazards, Dog Status & Alerts, Emergency (green dot)
    2. Dogs & matching — Puppy Socialisation, Compatibility, Find
       Companions, Best Mates (elf green dot)
    3. Places & travel — Dog Beaches, Trip Planner (gold dot)
    4. Reports & notices — Lost & Found, Incident Report, Council Notices
       (amber dot)
    5. App, roles & account — Roles, Superintendent, Notifications,
       Membership, Settings & Privacy, Legal, Data & Account, Launch Check
       (timber dot)
- The App View selector and App Version cards moved below the groups so
  functions come first. Both are unchanged.
- Today screen: the risk-scale explainer and the patent-evidence card are
  now collapsible reference cards. The live answer, snapshot, one-tap
  status, interaction alerts, supervision and the safety boundary stay
  fully visible.
- No colours changed: all group markers use the existing palette
  variables (green #00a651, elf, gold, amber #ff9500, timber).

## Verified
- static-check: PASS (32 screens, 25 bound forms).
- Headless test: 5 groups render, first open; all 23 buttons present and
  navigating (superintendent lock redirect intact); role/version cards
  preserved; Today collapsibles and interaction alerts working;
  footer marker correct. Service worker cache renamed for a clean refresh.
