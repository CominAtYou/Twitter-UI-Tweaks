const LIGHT_CLASS_LIST = "div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7";
const DIM_CLASS_LIST = "div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7";
const LIGHTS_OUT_CLASS_LIST = "div.css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6,r-rjixqe.r-16dba41.r-bnwqim";

const IGNORED_PARENTS_CLASSLIST = [
    "div.css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-16dba41",
    "div.css-175oi2r.r-adacv.r-1udh08x.r-1ets6dv.r-1867qdf.r-rs99b7.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21",
    "div.css-175oi2r.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu"
];

new MutationObserver((_mutationList, _observer) => {
    if (!window.location.href.includes("/status/")) return; // do not run when a timeline is being viewed
    document.querySelectorAll(`${LIGHT_CLASS_LIST}, ${DIM_CLASS_LIST}, ${LIGHTS_OUT_CLASS_LIST}`).forEach(e => {
        // do not run for comments in a thread, or children of quote tweets
        if (e.closest(IGNORED_PARENTS_CLASSLIST.join(", "))) return;
        e.classList.remove(".r-1inkyih");
        e.querySelector("span").style.lineHeight = "28px";
        e.style.fontSize = "23px";
    });

}).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});
