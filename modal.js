('use strict');
function sum(a,b){
  var calculatedSum = a + b;
  return calculatedSum;
}

function randomCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function addToPage(){
  var newEl = document.createElement('h3');
  newEl.textContent = this.location;
  document.body.appendChild(newEl);
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
}

var location1 = {
  location: 'First and Pike',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  neededcookies:getCookieNeed,
  cookieTotal:totalCookieSum,
  editDoc:addToPage,
};

var location2 = {
  location: 'SeaTac Airport',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  neededcookies:getCookieNeed,
  cookieTotal:totalCookieSum,
  editDoc:addToPage,
};
var location3 = {
  location: 'Seattle Center',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  neededcookies:getCookieNeed,
  cookieTotal:totalCookieSum,
  editDoc:addToPage,
};
var location4 = {
  location: 'Capitol Hill',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  neededcookies:getCookieNeed,
  cookieTotal:totalCookieSum,
  editDoc:addToPage,
};
var location5 = {
  location: 'Alki',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  neededcookies:getCookieNeed,
  cookieTotal:totalCookieSum,
  editDoc:addToPage,
};
var storeModel = [ location1, location2, location3, location4, location5 ];

location1.neededcookies();
location1.cookieTotal();
location1.editDoc();

location2.neededcookies();
location2.cookieTotal();
location2.editDoc();

location3.neededcookies();
location3.cookieTotal();
location3.editDoc();

location4.neededcookies();
location4.cookieTotal();
location4.editDoc();

location5.neededcookies();
location5.cookieTotal();
location5.editDoc();
