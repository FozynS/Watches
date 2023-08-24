//!Site Animation */
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header"),
            main = document.querySelector(".main"),
            mainSlideImages = document.querySelectorAll(".main__slide img"),
            titles = document.querySelectorAll(".title"),
            descriptions = document.querySelectorAll(".description");

    header.classList.add("hide");
    main.classList.add("hide");
    mainSlideImages.forEach(image => image.classList.add("hide"));
    titles.forEach(title => title.classList.add("hide"));
    descriptions.forEach(description => description.classList.add("hide"));

    function fadeIn(element, delay) {
        setTimeout(function () {
            element.style.transition = "opacity 1s ease-out";
            element.classList.remove("hide");
            element.classList.add("show");
        }, delay);
    }

    mainSlideImages.forEach((image, index) => {
        fadeIn(image, 300 * index); 
    });

    titles.forEach((title, index) => {
        fadeIn(title, 300 * mainSlideImages.length + 300 * index); 
    });

    descriptions.forEach((description, index) => {
        fadeIn(description, 300 * (mainSlideImages.length + titles.length) + 300 * index); 
    });

    fadeIn(header, 1000); 

    fadeIn(main, 1200); 
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
