$(document).ready(function () {

    // toggle menu/navbar script


    // typing animation script

    var typed = new Typed(".typing", {
        strings: ["UI/UX design", "design for Android", "design for iOS", "user research", "HTML/CSS", "responsive web design", "motion design", "illustrations", "concepting"],
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









function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

