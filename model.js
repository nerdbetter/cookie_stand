('use strict');

function sum(a,b){
  var calculatedSum = a + b;
  return calculatedSum;
}

function randomCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function CookieStore(location, cookiePerHour, hoursOfOperation, minCustomers, maxCustomers, avgCookiePerSale ){
  this.location = location;
  this.cookiePerHour = [];
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
}
CookieStore.prototype.editDoc = function (){
  var newEl = document.createElement('h3');
  newEl.textContent = this.location;
  document.body.appendChild(newEl);
};
CookieStore.prototype.getCookieNeed = function (){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var cookies = randomCustomer( this.minCustomers , this.maxCustomers ) * this.avgCookiePerSale;
    console.log (cookies);
    this.cookiePerHour[i] = cookies;
    console.log (this.cookiePerHour);
  }
};
CookieStore.prototype.totalCookieSum = function (){
  var calculatedSum = 0;
  for(var i = 0; i < this.cookiePerHour.length; i++) {
    var valueFromArray = this.cookiePerHour[i];
    calculatedSum = sum(valueFromArray, calculatedSum)[0];
  }
};

var location1 = new CookieStore('First and Pike', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ], 23, 65, 6.3);
var location2 = new CookieStore('SeaTac Airport', 15, 20, 75);
var location3 = new CookieStore('Tres');
var location4 = new CookieStore('Tres');
var location5 = new CookieStore('Tres');

var stores = [location1, location2, location3, location4, location5];
location1.getCookieNeed();
location1.totalCookieSum();
location1.editDoc();

location2.getCookieNeed();
location2.totalCookieSum();
location2.editDoc();

location3.getCookieNeed();
location3.totalCookieSum();
location3.editDoc();

location4.getCookieNeed();
location4.totalCookieSum();
location4.editDoc();

location5.getCookieNeed();
location5.totalCookieSum();
location5.editDoc();

console.log(myAwesomeStores);
