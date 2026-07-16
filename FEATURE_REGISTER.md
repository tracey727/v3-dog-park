# V12 Dog Status and Interaction Alerts merge record

Build 2026.07.16.12 — 16 July 2026

## Decision
The V13 colour prototype and V11 were compared feature by feature. V11 already
contained the layered five-tab design and working versions of travel, beaches,
dog-friendly search, owner document reminders and emergency. The only V13
features absent from V11 were the custom dog status interaction alerts. V12
therefore keeps the V11 codebase as the single app and merges that alert
engine into it. No V11 function was removed.

## Added
- New screen `status-alerts` (group: dogs; reachable from Today, Dogs profile
  area and the More grid).
- Per-dog owner-chosen fields: `onHeat`, `desexStatus`
  (undisclosed/desexed/entire — private, alert matching only), `trigWheels`,
  `trigMobility`, `trigGate`. Fields survive dog profile edits.
- Alert preferences in notifications state: `alertStyle`, `alertSensitivity`
  (early ≥0 / medium ≥50 / close ≥75, red always shown), `whenUnsure`
  (amber / confirm / off).
- `computeInteractionAlerts(parkId)` matches checked-in dogs:
  on heat + entire = Red 100; on heat alone = Amber 60; on heat + undisclosed
  = Yellow 45 per whenUnsure; reactive-today = Yellow 45; trigger matches
  against reported hazards/incidents = Red 80; gate-sensitivity uses live
  gate risk; mutual approved mates both present = Green friendly notice.
  All scores use the universal 0–100 Green/Yellow/Amber/Red classifier.
- Alerts render on Today, the new screen and Live Park state.
- Evidence log records `dog_status_updated`, `interaction_alert_prefs` and
  `interaction_alert_active` (red alerts, deduplicated by signature).

## Safety wording
Alerts are on-device demonstrations, do not contact anyone, and statuses are
temporary owner-selected states, not permanent labels. Desexing status stays
undisclosed unless the owner selects otherwise.

## Verified
- tests/static-check.py: PASS (32 screens, 25 bound forms, links/files ok).
- tests/test-logic.js: unchanged results.
- Headless browser smoke test: boot, navigation, save/refill, red
  heat+entire alert on Today/alerts screen/Live Park, sensitivity filtering,
  owner switch-off clearing, evidence records, state version, existing
  Journey flow regression — 13/13 pass.
- Service worker cache renamed to force one clean refresh on installed
  devices.
