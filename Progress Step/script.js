const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let cuurentActive = 1
next.addEventListener('click', () => {
    cuurentActive++;

    if (cuurentActive > circles.length) {
        cuurentActive = circles.length;
    }
    if (cuurentActive < 1) {
        cuurentActive = 1;
    }
    update();
})

prev.addEventListener('click', () => {
    cuurentActive--;

    if (cuurentActive < 1) {
        cuurentActive = 1;
    }
    update();

})

function update() {
    circles.forEach((circle, id) => {
        if (id < cuurentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (cuurentActive === 1) {
        prev.disabled = true
    }
    else if (cuurentActive === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disables = false
    }

}