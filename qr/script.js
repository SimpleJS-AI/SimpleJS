let popoverSupported = true;

function setup() {
    if (!HTMLElement.prototype.hasOwnProperty("popover")) {
        document.getElementById("popover").style.display = "none";
        console.log("popover")
        popoverSupported = false;
    }
}

function run(id) {
    id = window.innerWidth > 1180 && id === 3 ? 0 : id;
    switch (id) {
        case 0:
            window.open("https://simplejs.ai/", "_self");
            break;
        case 1:
            window.open("https://github.com/SimpleJS-AI", "_self");
            break;
        case 2:
            window.open("https://github.com/SimpleJS-AI/SimpleJS-lib", "_self");
            break;
        case 3:
            document.getElementById("popover").showPopover();
    }

}


window.addEventListener("DOMContentLoaded", setup);