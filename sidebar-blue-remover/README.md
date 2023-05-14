# Twitter Sidebar Blue Remover
A Chrome extension that removes the 'Twitter Blue' button from the Twitter sidebar.

![A screenshot of the Twitter explore page.](https://i.imgur.com/gYIvujT.png)

## Features
- Quick access to lists again!
- Localized (still a work in progress)

## Installation
1. Download or clone the source.
    - If you downloaded the source as a ZIP, be sure to extract it.
### Chrome (and Edge, Opera, etc.)
2. Navigate to `chrome://extensions`, and enable developer mode.
3. Click "Load unpacked" and find the folder you cloned/extracted. Inside it, select the folder for this extension.
### Firefox
2. Head to `about:debugging`, and click "This Firefox" in the sidebar.
3. Select "Load Temporary Add-on", and locate the folder you cloned/extracted. Inside it, open this folder, and select the `manifest.json` file.


## How does it work?
Twitter is different from most of the web in the sense that everything on the page is laid out using JavaScript. That means you can't write a conventional script that just locates the element that needs to be modified and modifies it. So, to kick off the button replacement, the script uses a `MutationObserver` to listen for the creation of new elements, and checks if any of them are the sidebar. When the sidebar is found, the `MutationObserver` is disconnected and the button replacement is started.

However, only modifying the text and the icon of the button wouldn't work. If you were to just modify the button's text and icon, you'd still get sent to the Twtiter Blue sales pitch. Circumventing this isn't easy, because JavaScript is really funny in the sense that there is ***literally no way to remove event listeners from an element***, which means that the entire element needs to be cloned to remove the event listener. So, the script clones the button and deletes the original, slotting the new one in its place.

After that, it's mostly smooth sailing from there. The button is given its icon, and its text is set to the proper string. In order to have the button send you over to the lists page, the script takes the `href` attribute from the "Profile" button and appends `/lists` to it, and sets it as the target for the button. Lastly, a few CSS classes are added on to ensure that the button properly resizes when the viewport is resized.
