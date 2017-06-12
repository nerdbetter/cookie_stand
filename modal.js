('use strict');

function randomCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var location1 = {
  location: 'First and Pike',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};
var location2 = {
  location: 'SeaTac Airport',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};
var location3 = {
  location: 'Seattle Center',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiePerSale: 3.7,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};
var location4 = {
  location: 'Capitol Hill',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiePerSale: 2.3,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};
var location5 = {
  location: 'Alki',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiePerSale: 4.6,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};
