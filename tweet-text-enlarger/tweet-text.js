const LIGHT_CLASS_LIST = "div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7";
const DIM_CLASS_LIST = "div.css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7";
const LIGHTS_OUT_CLASS_LIST = "div.css-1rynq56.r-8akbws.r-krxsd3.r-dnmrzs.r-1udh08x.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6,r-rjixqe.r-16dba41.r-bnwqim";

new MutationObserver((_mutationList, _observer) => {
    if (!window.location.href.includes("/status/")) return; // do not run when a timeline is being viewed
    document.querySelectorAll(`${LIGHT_CLASS_LIST}, ${DIM_CLASS_LIST}, ${LIGHTS_OUT_CLASS_LIST}`).forEach(e => {
        // do not run for comments in a thread, or children of quote tweets
        if ((e.parentElement.classList.length === 1 && e.parentElement.classList.contains("css-175oi2r")) || e.closest("div.css-175oi2r.r-adacv.r-1udh08x.r-1kqtdi0.r-1867qdf.r-rs99b7.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21")) return;
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
