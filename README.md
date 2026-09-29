# Japan, Slowly — public planning page

A public, static travel notebook with a generalized homepage and a separate detailed itinerary at `itinerary.html`. The itinerary includes the trip dates, destination areas, planned activities, food ideas, and flexible alternatives. It omits traveler names, the origin city, flight numbers/times, lodging names, and reservation references. The checklist remains local to each visitor's browser (`localStorage`) and does not sync.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. No build step or dependency install is required.

## Privacy boundary

The published pages and repository are public. The detailed itinerary names cities, neighborhoods, museums, and day-by-day destination sequence, and shows the travel dates. Anyone can read, copy, or archive it. Exact flight details, origin city, lodging names, and reservation data are excluded. A private GitHub repository would not make a GitHub Pages site private.

If private notes are needed on a static public host, one option is client-side encryption: a local tool encrypts a separate JSON document with a password-derived key (PBKDF2 + AES-GCM) before it is committed. The site serves only ciphertext; the visitor enters the password in their own browser to decrypt it locally. Share the password separately. The password and plaintext must never be committed. This protects the notes from casual readers and repository visitors, but not from a compromised device, a weak password, or malicious site code; for stronger access control, use an authenticated private host instead.
