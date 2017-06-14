('use strict');

function randomCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function CookieStore(address, minCustomers, maxCustomers, avgCookiePerSale ){
  this.address = address;
  this.cookiePerHour = [];
  this.hoursOfOperation = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm' ];
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerSale = avgCookiePerSale;
  this.getCookieNeed();
  this.totalCookieSum();
}
/*CookieStore.prototype.editDoc = function (){
  var newEl = document.createElement('h3');
  newEl.textContent = this.location;
  document.body.appendChild(newEl);
};*/ // not needed but saving in case I need later.
CookieStore.prototype.getCookieNeed = function (){
  for (var i = 0; i < this.hoursOfOperation.length; i++){
    var cookies = randomCustomer( this.minCustomers , this.maxCustomers ) * this.avgCookiePerSale;
    //console.log (cookies);
    this.cookiePerHour[i] = Math.round(cookies);
    //console.log (this.cookiePerHour);
  }
};
CookieStore.prototype.totalCookieSum = function (){
  var calculatedSum = 0; var i = this.cookiePerHour.length; while(i--) calculatedSum += this.cookiePerHour[i];
  console.log(calculatedSum);
};

var location1 = new CookieStore('First and Pike', 23, 65, 6.3);
var location2 = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var location3 = new CookieStore('Seattle Center', 11, 38, 3.7);
var location4 = new CookieStore('Capitol Hill', 20, 38, 2.3);
var location5 = new CookieStore('Alki', 2, 16, 4.6);

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm' ];
var stores = [location1, location2, location3, location4, location5];

console.log(stores);
