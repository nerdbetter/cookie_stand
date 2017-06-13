('use strict');

function addToPage(){
  var newEl = document.createElement('h3');
  var newText = document.createTextNode(this.location);
  var position = document.getElementsByTagName('body')[0];
  position.appendChild(newEl);
}

function getCookieNeed(){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
    console.log (cookies);
    this.cookiePerHour[i] = cookies;
    console.log (this.cookiePerHour);
  }
}
function totalCookieSum(){
  var calculatedSum = 0;
  for(var i = 0; i < this.cookiePerHour.length; i++) {
    var valueFromArray = this.cookiePerHour[i];
    calculatedSum = sum(valueFromArray, calculatedSum)[0];
  }
  return calculatedSum;
}
