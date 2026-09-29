# Japan, Slowly — public planning page

A deliberately generalized, static travel notebook designed for sharing. It contains no traveler names, exact travel dates, airports, flight numbers, hotel bookings, reservation references, or day-by-day route. The small planning checklist is stored in the visitor's browser (`localStorage`) and is not shared or synced.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. No build step or dependency install is required.

## Privacy boundary

The published page is public. A private GitHub repository restricts access to the source repository; it does not make the GitHub Pages website private. Only put information here that is acceptable for anyone to see. The detailed trip plan remains in the personal vault and is not copied into this repository.

If private notes are needed on a static public host, one option is client-side encryption: a local tool encrypts a separate JSON document with a password-derived key (PBKDF2 + AES-GCM) before it is committed. The site serves only ciphertext; the visitor enters the password in their own browser to decrypt it locally. Share the password separately. The password and plaintext must never be committed. This protects the notes from casual readers and repository visitors, but not from a compromised device, a weak password, or malicious site code; for stronger access control, use an authenticated private host instead.
