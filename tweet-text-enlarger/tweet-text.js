const LIGHT_CLASS_LIST = "div.css-901oao.r-18jsvk2.r-37j5jr.r-1inkyih.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0";
const DIM_CLASS_LIST = "div.css-901oao.r-vlxjld.r-37j5jr.r-1inkyih.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0";
const LIGHTS_OUT_CLASS_LIST = "div.css-901oao.r-1nao33i.r-37j5jr.r-1inkyih.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0";


new MutationObserver((_mutationList, _observer) => {
    document.querySelectorAll(`${LIGHT_CLASS_LIST}, ${DIM_CLASS_LIST}, ${LIGHTS_OUT_CLASS_LIST}`).forEach(e => {
        e.classList.remove("r-1inkyih");
        e.style.fontSize = "23px";
        e.style.lineHeight = "28px";
    });


}).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
});
