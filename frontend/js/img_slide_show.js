var slideIndex = 1;
showDivs(slideIndex, 'mySlides1');
showDivs(slideIndex, 'mySlides2');
showDivs(slideIndex, 'mySlides3');
showDivs(slideIndex, 'mySlides4');

function plusDivs(n, clase) {
  showDivs(slideIndex += n, clase);
}

function showDivs(n, clase) {
  var i;
  var x = document.getElementsByClassName(clase);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}