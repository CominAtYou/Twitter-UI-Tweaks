# Twitter Font Switcher
Do you dislike the default Windows font, or hate Twitter's new 'Chirp' font?

Introducing... this extension!

## What does it do?
It vastly improves the font across Twitter, by switching the font to Windows 11's new "Segoe UI Variable"! Take a look for yourself:

![Screenshot of the Twitter home page](https://i.imgur.com/dyNqrJ2.png)

## How does it work?
It works like most other browser extensions. It just adds two CSS classes to set up the font - nothing more, nothing less.

## What do I need?
- A compatible web browser (e.g. Chrome or a Chromium derivative, Firefox)
- Windows 11

## Installation
1. Download or clone the source.
    - If you downloaded the source as a ZIP, be sure to extract it.
### Chrome (and Edge, Opera, etc.)
2. Navigate to `chrome://extensions`, and enable developer mode.
3. Click "Load unpacked" and find the folder you cloned/extracted. Inside it, select the folder for this extension.
### Firefox
2. Head to `about:debugging`, and click "This Firefox" in the sidebar.
3. Select "Load Temporary Add-on", and locate the folder you cloned/extracted. Inside it, open this folder, and select the `manifest.json` file.


## Why do I need Windows 11?
Segoe UI Variable Display (the new fancy font in Windows 11) is only available on, you guessed it, Windows 11. The licesnse for the font forbids redistribution, so the extension requires the font to already be present on the system.

## What happens if I install this on a non-Windows 11 device?
Nothing, really. Twitter will just fall back to the default system font. (Segoe UI on Windows, SF Pro Display on Apple devices) Useful if you just want to switch away from Twitter's 'Chirp' font.
