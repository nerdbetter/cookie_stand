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
};
CookieStore.prototype.render = function (){
  var newAddress = document.createElement('td');
  var addressText = document.createTextNode(this.address);
  newAddress.appendChild(addressText);
  var addressContainer = document.getElementsByTagName('tbody')[0];
  addressContainer.setAttribute('colspan', 2);
  addressContainer.appendChild(newAddress);

  for ( i = 0; i < this.cookiePerHour.length; i++ ){
    var cookies = this.cookiePerHour[i];
    var newCookiePerHour = document.createElement('td');
    var cookiePerHourText = document.createTextNode(cookies);
    newCookiePerHour.appendChild(cookiePerHourText);
    var cookieJar = document.getElementsByTagName('tbody');
    cookieJar.appendChild(newCookiePerHour);
  }
};
location1.render();
location2.render();
