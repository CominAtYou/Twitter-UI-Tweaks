/** @param { any[] } a @param { any[] } b */
function arrayEquals(a, b) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

function main() {
    /** @type { Element[] } */
    const elements = Array.prototype.slice.call(document.getElementsByClassName("r-1habvwh"));
    const verifiedButton = elements.find(elem => elem.getAttribute("href") === "/i/verified-choose");
    const communityNotesButton = elements.find(elem => elem.hasAttribute("href") && elem.getAttribute("href") === "/i/communitynotes");

    verifiedButton.parentElement.removeChild(verifiedButton);
    if (communityNotesButton) communityNotesButton.parentElement.removeChild(communityNotesButton); // community notes button only appears for community notes members
}

// Add a listener to wait for the sidebar to load
const observer = new MutationObserver((mutationList, observer) => {
    const SIDEBAR_CLASS_LIST = "css-1dbjc4n r-1pi2tsx r-1wtj0ep r-1rnoaur r-1pn2ns4 r-o96wvk".split(" ");
    const SMALL_SIDEBAR_CLASS_LIST = "css-1dbjc4n r-1pi2tsx r-1wtj0ep r-1rnoaur r-1pn2ns4 r-f9dfq4".split(" ");
    const TINY_SIDEBAR_CLASS_LIST = "css-1dbjc4n r-1pi2tsx r-1wtj0ep r-1rnoaur r-s1qlax r-1gymjhz".split(" ");

    for (const mutation of mutationList) {
        const addedNodes = Array.from(mutation.addedNodes);
        for (const node of addedNodes) {
            if (!(node instanceof Element)) {
                continue;
            }

            const classList = Array.from(node.classList);
            if (arrayEquals(classList, SIDEBAR_CLASS_LIST) || arrayEquals(classList, SMALL_SIDEBAR_CLASS_LIST) || arrayEquals(classList, TINY_SIDEBAR_CLASS_LIST)) {
                console.log("Found sidebar!");
                observer.disconnect();

                // The Blue button gets restored when the system theme is changed
                // listen for a theme change and run the button function again
                matchMedia("(prefers-color-scheme: dark)").onchange = main;
                main();

                return;
            }
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});
