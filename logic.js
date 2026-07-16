# V14 Collapsible dogs/mates and document traffic lights

Build 2026.07.16.14 — 16 July 2026

## Changed
- Dogs screen: "Add or update a dog" is now a collapsible group (closed by
  default; tapping Edit on a saved dog opens it automatically) and "Your
  saved dogs" is a collapsible group (open by default). All fields kept.
- Best Mates screen: "Create or update a mate link" (collapsible, closed)
  and "Your saved mates" (collapsible, open). All functions kept.
- More screen groups from V13 unchanged.
- Journey → Before leaving: the "Supplies and checks" checklist (lead,
  waste bags, water, ID/microchip, vaccination boxes) is removed — supplies
  are the owner's responsibility and documents are tracked separately. The
  plan check still returns one clear risk answer from dog, destination and
  temperament. The risk engine treats the removed items as handled, so no
  hidden penalty applies.
- Document traffic lights (registration, vaccination, flea/tick,
  medication review):
    GREEN  — current, more than 60 days remaining
    YELLOW — midrange, 15–60 days remaining
    RED    — due within 14 days, or overdue
    Grey "Not entered" when no date is saved.
  Shown as pills on every saved dog card, on the dog profile restricted
  card, and in the Journey owner-only expiry reminders (same bands
  everywhere). Reminders now update live when the plan's dog changes.
- Bug fix: a V11 quirk force-reset the second dog dropdown in the document
  (the Journey plan selector) to the second saved dog on every render,
  so it could never stay on the chosen dog. Removed; the compatibility
  screen's own A/B collision fix still applies.

## Verified
- static-check PASS (32 screens, 25 bound forms); logic tests unchanged.
- Headless test: both Dogs groups and both Mates groups render with correct
  open/closed defaults; Edit opens the form group; pills show
  green/yellow/red/red for +120/+30/+5/−3 day dates; supplies fieldset gone
  and plan check returns a result with no supply nags; Journey reminders
  follow the selected dog and survive re-renders; compatibility A/B intact.
- Service worker cache renamed (v14) for a clean refresh on installed phones.
