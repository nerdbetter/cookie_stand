('use strict');
var form = document.querySelector('form');
form.addEventListener('submit', formSubmit);
function formSubmit(event){
  console.log(event);
  event.preventDefault();
  var address = document.querySelector('input[name="address"]');
  console.log(address.value);
  var minCustomers = document.querySelector('input[name="minCust"]');
  console.log(minCustomers.value);
  var maxCustomers = document.querySelector('input[name="maxCust"]');
  console.log(maxCustomers.value);
  var avgCookiePerSale = document.querySelector('input[name="avgCookie"]');
  console.log(avgCookiePerSale.value);

  var newLocation = new CookieStore( address.value, minCustomers.value, maxCustomers.value, avgCookiePerSale.value );
  console.log (newLocation);
  newLocation.render();
};
//slides function
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slides');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
