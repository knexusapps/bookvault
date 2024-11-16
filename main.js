function get(id) {
    return document.getElementById(id)
}

window.setTimeout(
    function () {
        get("introducingText").className = "animate__animated animate__zoomIn";
        get("introducingText").style.visibility = "visible";
    }, 200
)

window.setTimeout(
    function() {
        get("bookvaultText").className = "animate__animated animate__jackInTheBox";
        get("bookvaultText").style.visibility = "visible"
    }, 1500
)

window.setTimeout(
    function() {
        get("millionbooksText").className = "animate__animated animate__fadeIn";
        get("millionbooksText").style.visibility = "visible"
    }, 1900
)

window.setTimeout(
    function() {
        get("appIcon").className = "animate__animated animate__fadeInUp";
        get("appIcon").style.visibility = "visible"
    }, 1900
)

window.setTimeout(
    function() {
        get("downloadButtonFrame").className = "animate__animated animate__flip";
        get("downloadButton").style.visibility = "visible"
    }, 3000
)

window.setTimeout(
    function() {
        get("availableforText").className = "animate__animated animate__fadeIn";
        get("availableforText").style.visibility = "visible"
    }, 3800
)
