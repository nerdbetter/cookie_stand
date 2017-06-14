('use strict');
var form = document.querySelector('form');
form.addEventListener('submit', formSubmit);
function formSubmit(event){
  console.log(event);
  event.preventDefault();
  var address = document.querySelector('input[name="address"]');
  console.log(address.value);
  var minCust = document.querySelector('input[name="minCust"]');
  console.log(minCust.value);
  var maxCust = document.querySelector('input[name="maxCust"]');
  console.log(maxCust.value);
  var avgCookie = document.querySelector('input[name="avgCookie"]');
  console.log(avgCookie.value);

  var newAddressRow = document.createElement('tr');
  var newAddress = document.createElement('td');
  newAddress.textContent = address;
  newAddress.appendChild(address);
  var addressContainer = document.getElementsByTagName('td'[0]);
  newAddressRow.appendChild(newAddress);
};
