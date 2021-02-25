$(document).ready(function () {

    // toggle menu/navbar script


    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["UI design", "design issues", "illustrations", "branding", "UX design", "product design", "user research", "design questions", "motion design", "a basic coded website (like this one)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })





})

var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 1);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}
