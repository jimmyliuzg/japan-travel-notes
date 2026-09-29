# Japan, Slowly — public planning page

A public, static travel notebook designed for sharing. It now includes a dated, day-by-day outline with major city names and activity themes. It intentionally omits traveler names, departure city, flight identifiers, lodging names, and reservation references. Treat the published itinerary as public information: it reveals the travel window and broad route. The planning checklist is stored in each visitor's browser (`localStorage`) and is not shared or synced.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. No build step or dependency install is required.

## Privacy boundary

The published page and the repository are public. The repository includes the broad travel window and day-by-day itinerary, so anyone can read, copy, or archive it. Exact flight details, departure city, lodging names, and reservation data are excluded. A private GitHub repository would not make a GitHub Pages site private.

If private notes are needed on a static public host, one option is client-side encryption: a local tool encrypts a separate JSON document with a password-derived key (PBKDF2 + AES-GCM) before it is committed. The site serves only ciphertext; the visitor enters the password in their own browser to decrypt it locally. Share the password separately. The password and plaintext must never be committed. This protects the notes from casual readers and repository visitors, but not from a compromised device, a weak password, or malicious site code; for stronger access control, use an authenticated private host instead.
