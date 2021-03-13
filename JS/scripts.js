var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) { 
    showSlides(slideIndex += n); 
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  if (n >= slides.length ) {slideIndex = slides.length - 1;}
  if (n < 0) { slideIndex = 0; }
  for (i=0; i<slides.length; i++) {slides[i].style.display = "none";}
  slides[slideIndex].style.display = "flex"; 
}