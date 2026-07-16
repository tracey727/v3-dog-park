# V8 — approved GA display, phone icon and emergency layout fix

Build: 2026.07.14.9

## Fixed

- The full approved GA artwork now appears in the app header. The source image was not redrawn or recoloured; only the black storage bands around the supplied original were removed.
- New GA-only icons are supplied for browser favicon, Apple home-screen shortcut and Android/PWA installation.
- Icon filenames were changed in V8 to prevent phones and browsers from reusing the older paw-print or cropped icon from cache.
- The emergency control now sits in its own black safety bar in the normal page layout. It no longer floats over writing or the mobile navigation.
- Mobile bottom safe-area spacing was added for phones with browser/home-indicator controls.

## After deployment on a phone

An already-installed home-screen shortcut can keep its old icon. Remove the old shortcut/app from the phone, open the production site again, then use Add to Home Screen / Install App. The new shortcut will use the GA icon.
