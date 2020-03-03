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
