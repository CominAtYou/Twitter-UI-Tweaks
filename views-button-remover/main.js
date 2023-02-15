new MutationObserver((_mutationList, _observer) => {
    document.querySelectorAll("[href$=analytics]").forEach(e => {
        if (e.getAttribute("data-testid") !== "analyticsButton") { // preserve the 'view tweet analytics' button
            e.parentElement.remove();
        }
    });
}).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});
