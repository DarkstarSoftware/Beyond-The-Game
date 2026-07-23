# Season Locker landing page

Deployment-ready static site for GitHub Pages.

## Files
- `index.html`
- `styles.css`
- `script.js`
- `assets/season-locker-hero.png`
- `assets/season-locker-icon.png`

The landing page links to the existing legal/support pages:
- `privacy-policy.html`
- `terms-of-service.html`
- `support.html`

Keep those existing files in the repository when replacing the homepage.

## Deploy
1. Copy these files into the root of the `Beyond-The-Game` GitHub repository.
2. Preserve the current privacy, terms, and support HTML files.
3. Commit and push to the branch used by GitHub Pages.
4. Hard-refresh the live page after GitHub Pages completes its build.

## Google Play launch
The Google button currently displays “Coming soon.” When the Play Store listing is live:
1. Replace the `div.store-button.google` in `index.html` with an anchor.
2. Add the Google Play URL.
3. Change the final CTA copy from “finishing testing” to “available now.”
4. Replace the Android notification button with a direct Google Play link.

## Notes
- The site is responsive and keyboard accessible.
- It includes reduced-motion support.
- The navigation and Android notification modal include accessible interaction states.
