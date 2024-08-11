var slideIndex = 1;
showDivs(slideIndex, 'mySlides1');
showDivs(slideIndex, 'mySlides2');
showDivs(slideIndex, 'mySlides3');
showDivs(slideIndex, 'mySlides4');
showDivs(slideIndex, 'mySlides5');
showDivs(slideIndex, 'mySlides6');
showDivs(slideIndex, 'mySlides7');
showDivs(slideIndex, 'mySlides8');
showDivs(slideIndex, 'mySlides9');
showDivs(slideIndex, 'mySlides10');
showDivs(slideIndex, 'mySlides11');

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