const btn = document.querySelector('.nav__btn'),
    menu = document.querySelector('.menu');

btn.addEventListener('click', (e) => {
    e.preventDefault()
    menu.classList.toggle('active')
    btn.classList.toggle('active__btn')
})

const btnNext = document.querySelector('.slider__btn--next'),
    btnPrev = document.querySelector('.slider__btn--prev'),
    slideLine = document.querySelector('.slider__line'),
    slideItem = document.querySelectorAll('.slider__item');
let count = 0
btnNext.addEventListener('click', (e) => {
    e.preventDefault()
    count++
    if (count < slideItem.length) {
        changeSlide()
    } else {
        count = 0
        changeSlide()
    } 
})
btnPrev.addEventListener('click', (e) => {
    e.preventDefault()
    count--
    if (count < 0) {
        count = slideItem.length - 1
        changeSlide()
    } else {
        changeSlide()
    }
})

function changeSlide() {
    slideLine.style.transform = `translate(-${count*100}%)`
}