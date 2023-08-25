//!Site Animation */
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"),
            main = document.querySelector(".main"),
            mainSlideImages = document.querySelectorAll(".main__slide img"),
            titles = document.querySelectorAll(".title"),
            descriptions = document.querySelectorAll(".description");

    // Спрятать элементы
    header.style.opacity = "0";
    main.style.opacity = "0";
    mainSlideImages.forEach(image => image.style.opacity = "0");
    titles.forEach(title => title.style.opacity = "0");
    descriptions.forEach(description => description.style.opacity = "0");

    // Функция для плавного появления элемента
    function fadeIn(element, delay) {
        setTimeout(function () {
            element.style.transition = "opacity 1s ease-out";
            element.style.opacity = "1";
        }, delay);
    }

    // Плавное появление изображений слайдов поочередно
    mainSlideImages.forEach((image, index) => {
        fadeIn(image, 300 * index); // Задержка увеличена для последовательного появления
    });

    // Плавное появление заголовков после появления изображений
    titles.forEach((title, index) => {
        fadeIn(title, 300 * mainSlideImages.length + 300 * index); // Задержка после изображений
    });

    // Плавное появление описаний после появления заголовков
    descriptions.forEach((description, index) => {
        fadeIn(description, 300 * (mainSlideImages.length + titles.length) + 300 * index); // Задержка после заголовков
    });

    // Плавное появление header
    fadeIn(header, 1000); // Задержка после описаний

    // Плавное появление main
    fadeIn(main, 1200); // Задержка после header
     // Обработка события прокрутки
});

//*!Scroll Animation */
const main = document.querySelector('.main'),
        slideWrapper = document.querySelector('.main__slider_container-wrapper'),
        slides = document.querySelectorAll('.main__slide'),
        slideImage = document.querySelectorAll('.main__slide-img'),
        slideTitleCompany = document.querySelectorAll('.title__company'),
        slideTitleModal = document.querySelectorAll('.title__modal'),
        slideDescription = document.querySelectorAll('.description'),
        clickMe = document.querySelector('.header-clickMe');

let currentSlideIndex = 0;

function changeSlide(index) {
    currentSlideIndex = index;
    const translateY = -currentSlideIndex * 100;

    slideWrapper.style.transform = `translateY(${translateY}%)`;
    slideWrapper.style.transition = 'all 1.3s ease-in-out';
}

clickMe.addEventListener('click', () => {
    animateHideBlocks();
    
    setTimeout(() => {
        const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
        changeSlide(nextSlideIndex);
        animateShowBlocks();

        if (nextSlideIndex === 3) {
            setTimeout(() => {
                changeSlide(0);
            }, 1700); 
        }
    }, 1700); 
});

function animateHideBlocks() {
    setTimeout(() => {
        slides[currentSlideIndex].classList.remove('show');
        slides[currentSlideIndex].classList.add('hide');
    }, 1700);
    slideImage[currentSlideIndex].classList.add('hide-up');
    slideTitleCompany[currentSlideIndex].classList.add('hide-left');
    slideTitleModal[currentSlideIndex].classList.add('hide-right');
    slideDescription[currentSlideIndex].classList.add('hide-down');

    slideImage[currentSlideIndex].classList.remove('show-down');
    slideTitleCompany[currentSlideIndex].classList.remove('show-right');
    slideTitleModal[currentSlideIndex].classList.remove('show-left');
    slideDescription[currentSlideIndex].classList.remove('show-down');
}

function animateShowBlocks() {
    setTimeout(() => {
        slides[currentSlideIndex].classList.remove('hide');
        slides[currentSlideIndex].classList.add('show');
    }, 1700);
    slideImage[currentSlideIndex].classList.add('show-down');
    slideTitleCompany[currentSlideIndex].classList.add('show-right');
    slideTitleModal[currentSlideIndex].classList.add('show-left');
    slideDescription[currentSlideIndex].classList.add('show-down');

    slideImage[currentSlideIndex].classList.remove('hide-up');
    slideTitleCompany[currentSlideIndex].classList.remove('hide-left');
    slideTitleModal[currentSlideIndex].classList.remove('hide-right');
    slideDescription[currentSlideIndex].classList.remove('hide-down');
}

//*!Menu Burger */
document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burgerButton'),
            menu = document.getElementById('menu'),
            lineCross = document.querySelector('.header__nav_list-line'),
            shortLineCross = document.querySelector('.header__nav_list-line_short');
    
    burgerButton.addEventListener('click', function () {
        lineCross.classList.toggle('line-cross');
        shortLineCross.classList.toggle('short_line-cross');
    
        if(menu.classList.contains('show-menu')){
            menu.classList.remove('show-menu');
            menu.classList.add('hide-menu');
        } else {
            menu.classList.add('show-menu');
            menu.classList.remove('hide-menu');
        }
    });
});