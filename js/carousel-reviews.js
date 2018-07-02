'use strict';

var slideIndex = [1,1];
var carouselId = ['.carousel-reviews__item--1', '.carousel-reviews__item--2'];
var carouselPreviousButton = document.querySelectorAll('.carousel-reviews__previous');
var carouselNextButton = document.querySelectorAll('.carousel-reviews__next');
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var slides = document.querySelectorAll(carouselId[no]);
  if (n > slides.length) {slideIndex[no] = 1};
  if (n < 1) {slideIndex[no] = slides.length};
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex[no]-1].style.display = 'flex';
}

carouselPreviousButton[0].addEventListener('click', function () {
  plusSlides(-1, 0);
});

carouselNextButton[0].addEventListener('click', function () {
  plusSlides(1, 0);
});

carouselPreviousButton[1].addEventListener('click', function () {
  plusSlides(-1, 1);
});

carouselNextButton[1].addEventListener('click', function () {
  plusSlides(1, 1);
});
