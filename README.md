# Twitter-UI-Tweaks
A monorepo of browser extensions for reversing some of the UI changes made to Twitter and adding some UI improvements.

## Current Scripts

### Brading Restorer
Restores Twitter's previous bird icon, before it was switched to an "X" sourced from a free webfont. Switches back the icon that shows up in your browser tab, the splash screen, and above the sidebar. Also switches any mentions of of "X" in the tab title back to Twitter.

### Font Switcher
Changes the Twitter font to Segoe UI Variable Display. Useful for those who like the new Windows 11 font, or just dislike Twitter's "Chirp" font.

### Sidebar Declutterer
Removes the "revenue sharing" modal on the right sidebar, as well as removing the verified and Community Notes buttons from the left sidebar.

### Tweet Text Enlarger
Enlarges the Tweet text on the Tweet details page back to its previous larger, more-readable text size.

### Views Button Remover
Removes the view button from Tweets in your timeline, stopping accidental clicks due to a very awkwardly-placed button and just making your timeline look better overall.

## Installation
To install one of the extensions:
1. First, clone or download this repo.
    - If you downloaded the repo as a ZIP, be sure to extract it.
### For Chrome (or Edge, Opera, etc.)
2. Head to `chrome://extensions`, and toggle the switch for Developer Mode to on.
3. Find the folder you cloned/extracted, and inside it, select the folder of the extension you wish to install.
### For Firefox
2. Head to `about:debugging`, and click "This Firefox" in the sidebar.
3. Hit "Load Temporary Add-on", and locate the folder you cloned/extracted.
4. Open the folder of the extension you wish to install, and select the `manifest.json` file.
