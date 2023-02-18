

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