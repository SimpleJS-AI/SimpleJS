function setup() {
    if (!HTMLElement.prototype.hasOwnProperty("popover")) {
        document.getElementById("popover").style.display = "none";
        console.log("popover")
    }
}



window.addEventListener("DOMContentLoaded", setup);