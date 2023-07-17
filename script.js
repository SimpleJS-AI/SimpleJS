

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

setColorPalette();

function setColorPalette() {
    fetch('https://flug8.github.io/SimpleJS/colors.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            /*data.forEach((color, i) => {
                document.documentElement.style.setProperty(`--c${i}`, color);
            });*/
        });
}

setTimeout(() => {
    window.parent.postMessage(window.getComputedStyle(document.documentElement).getPropertyValue('--c1'), '*');
}, 2000);