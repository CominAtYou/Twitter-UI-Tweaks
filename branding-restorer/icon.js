const TOP_ICON_SELECTOR = "#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > header > div > div > div > div.css-175oi2r.r-1habvwh > div.css-175oi2r.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg > g > path";

new MutationObserver(async () => {
    if (document.querySelector(TOP_ICON_SELECTOR)) {
        if (document.body.style.backgroundColor === 'rgb(0, 0, 0)' || document.body.style.backgroundColor === 'rgb(21, 32, 43)') {
            document.querySelector(TOP_ICON_SELECTOR).style.fill = "white";
        }
        else {
            document.querySelector(TOP_ICON_SELECTOR).style.fill = "";
        }
    }
}).observe(document.body, {
    attributeFilter: ['style'],
    children: true,
    subtree: true
});
