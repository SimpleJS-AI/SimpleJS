// SUPPORTED BROWSERS: Chromium desktop and Chromium for Android
window.scrollTo(0, 0);
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
if (!isChromiumDesktop() && !isChromiumAndroid() && !window.location.href.includes("?bypass")) {
    // Redirect to an unsupported browser page
    // window.location.href = "unsupported.html";

    // Or display a message
    document.body.innerHTML = "" +
        "<h1 style='margin: 15% 15% 20px 15%;font-size: clamp(32px, 6vw, 48px); color: var(--c5); text-align: center;'>Unsupported<br>Browser</h1>" +
        "<p style='margin: 20px 15% 20px 15%; font-family: Google Sans Text; font-size: clamp(16px, 3vw, 24px); color: var(--c5); text-align: center'>This website currently only supports Chromium desktop and Chromium for Android/iOS. <br><br> Against recommendation, this website can still be visited with this browser, but a good user experience is NOT guaranteed</p>" +
        "<button style='margin: 20px auto 15% auto' class='mainButton' onclick='bypass()'>Still visit</button>" +
        "<style>body{height: 100%; width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column;}</style>";
}

function bypass() {
    window.location.href += "?bypass";
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
//setTimeout(enableScroll, startAnimationLength, 0);
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
                document.getElementById("titleText").style.opacity = "1";
                document.querySelector(".imageContainer").style.opacity = "1";
            }, 1500);
            setTimeout(function () {
                t.classList.add("active");
                enableScroll(0);
            }, 5500);
        });
    }, 4000);
}

//document.getElementById("title").style.opacity = "1";

document.addEventListener("readystatechange", function () {
    if(document.readyState === "complete") animationSetup();
});
