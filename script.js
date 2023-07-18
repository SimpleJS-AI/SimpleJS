// SUPPORTED BROWSERS: Chromium desktop and Chromium for Android

// Check if the user agent is from a Chromium desktop browser
function isChromiumDesktop() {
    var userAgent = navigator.userAgent.toLowerCase();
    return /chrome|edge|opera/.test(userAgent) && !/android/.test(userAgent);
}

// Check if the user agent is from Chromium for Android
function isChromiumAndroid() {
    var userAgent = navigator.userAgent.toLowerCase();
    return /chrome/.test(userAgent) && /android/.test(userAgent);
}

// Redirect or display a message to unsupported browsers
if (!isChromiumDesktop() && !isChromiumAndroid()) {
    // Redirect to an unsupported browser page
    // window.location.href = "unsupported.html";

    // Or display a message
    document.body.innerHTML = "<h1>Unsupported Browser</h1><p>This website currently only supports Chromium desktop and Chromium for Android/iOS.</p>";
}

// Split title into letters (used for animation)

const titleElements = document.querySelectorAll('#title div .right');

for (const e of titleElements) {
    const text = e.innerHTML;
    let textF = '';
    for (const c of text) {
        textF += `<span>${c}</span>`;
    }
    e.innerHTML = textF;
}

const startAnimationLength = 4600;
disableScroll();
function disableScroll() {
    document.body.style.overflow = 'hidden';
}
setTimeout(enableScroll, startAnimationLength, 0);
function enableScroll(pos) {
    document.body.style.overflow = 'auto';
    window.scrollTo(0, pos);
}

//setColorPalette();

function setColorPalette() {
    fetch('https://raw.githubusercontent.com/flug8/SimpleJS/master/colors.json')
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach((key) => {
                document.documentElement.style.setProperty(`--${key}`, data[key]);
            })
        });
}

// ANIMATION V2
function animationSetup() {
    let e1 = document.getElementById("svgText");
    let e2 = document.getElementById("svgDot");
    let l = document.getElementById("loadingAnimation");
    let t = document.getElementById("title");
    setTimeout(function () {
        e1.addEventListener("animationiteration", function () {
            e1.classList.remove("start");
            e2.classList.remove("start");
            e1.classList.add("end");
            e2.classList.add("end");
            setTimeout(function () {
                l.style.width = "clamp(200px, 90%, 1000px";
            }, 1500);
            setTimeout(function () {
                t.style.opacity = "1";
                t.classList.add("active");
            }, 5500);
        });
    }, 4000);
}

//document.getElementById("title").style.opacity = "1";

document.addEventListener("readystatechange", function () {
    if(document.readyState === "complete") animationSetup();
});
