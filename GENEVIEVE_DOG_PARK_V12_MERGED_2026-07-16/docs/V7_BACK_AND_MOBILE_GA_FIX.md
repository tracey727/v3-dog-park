# V7 Back Step and Mobile GA Fix

Build: 2026.07.14.7

## Back navigation

- Added a visible **Back one step** control below the header.
- Each in-app page change creates a browser-history step.
- The app button, Android back gesture and browser back button return to the immediately previous page.
- The Back button is disabled on the first app page so it does not unexpectedly leave the app.
- Forms and locally saved information are not cleared when moving backward.

## GA logo fix

The approved uploaded GA asset contained large black bands above and below the white logo panel. The original file remains unchanged in `assets/genevieve-ga-logo-approved-original.png`.

For display only, V7:
- removes only those outer black bands and unused white margin;
- uses the exact original gold, black and pink-shadow pixels;
- preserves the original proportions;
- does not redraw, recolour, rotate, stretch or squash the mark;
- creates square 192px and 512px install icons from the same pixels.

The previous CSS also explicitly hid `.app-icon` on screens narrower than 420px. V7 overrides and removes that behaviour, keeping the GA visible on small phones.
