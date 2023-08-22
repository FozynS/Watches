// //!Site Animation */
// document.addEventListener("DOMContentLoaded", function () {
//     const header = document.querySelector(".header");
//     const main = document.querySelector(".main");
//     const mainSlideImages = document.querySelectorAll(".main__slide img");
//     const titles = document.querySelectorAll(".title");
//     const descriptions = document.querySelectorAll(".description");

//     // Спрятать элементы
//     header.style.opacity = "0";
//     main.style.opacity = "0";
//     mainSlideImages.forEach(image => image.style.opacity = "0");
//     titles.forEach(title => title.style.opacity = "0");
//     descriptions.forEach(description => description.style.opacity = "0");

//     // Функция для плавного появления элемента
//     function fadeIn(element, delay) {
//         setTimeout(function () {
//             element.style.transition = "opacity 1s ease-out";
//             element.style.opacity = "1";
//         }, delay);
//     }

//     // Плавное появление изображений слайдов поочередно
//     mainSlideImages.forEach((image, index) => {
//         fadeIn(image, 300 * index); // Задержка увеличена для последовательного появления
//     });

//     // Плавное появление заголовков после появления изображений
//     titles.forEach((title, index) => {
//         fadeIn(title, 300 * mainSlideImages.length + 300 * index); // Задержка после изображений
//     });

//     // Плавное появление описаний после появления заголовков
//     descriptions.forEach((description, index) => {
//         fadeIn(description, 300 * (mainSlideImages.length + titles.length) + 300 * index); // Задержка после заголовков
//     });

//     // Плавное появление header
//     fadeIn(header, 1000); // Задержка после описаний

//     // Плавное появление main
//     fadeIn(main, 1200); // Задержка после header
//      // Обработка события прокрутки
// });

