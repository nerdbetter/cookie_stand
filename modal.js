('use strict');
function sum(a,b){
  var calculatedSum = a + b;
  return calculatedSum;
}

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
  addToPage: function(){
    var newEl = document.createElement('h3');
    var newText = document.createTextNode(this.location);
    var position = document.getElementsByTagName('body')[0];
    position.appendChild(newEl);
  },

  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  },
  totalCookieSum: function(){
    var calculatedSum = 0;
    for(var i = 0; i < this.cookiePerHour.length; i++) {
      var valueFromArray = this.cookiePerHour[i];
      calculatedSum = sum(valueFromArray, calculatedSum)[0];
    }
    return calculatedSum;
  }
};
var location2 = {
  location: 'SeaTac Airport',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiePerSale: 1.2,
  addToPage: function(){
    var newEl = document.createElement('h3');
    var newText = document.createTextNode(this.location);
    var position = document.getElementsByTagName('body')[1];
    position.appendChild(newEl);
  },

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
  addToPage: function(){
    var newEl = document.createElement('h3');
    var newText = document.createTextNode(this.location);
    var position = document.getElementsByTagName('body')[2];
    position.appendChild(newEl);
  },

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
  addToPage: function(){
    var newEl = document.createElement('h3');
    var newText = document.createTextNode(this.location);
    var position = document.getElementsByTagName('body')[3];
    position.appendChild(newEl);
  },

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
  addToPage: function(){
    var newEl = document.createElement('h3');
    var newText = document.createTextNode(this.location);
    var position = document.getElementsByTagName('body')[4];
    position.appendChild(newEl);
  },

  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var cookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (cookies);
      this.cookiePerHour[i] = cookies;
      console.log (this.cookiePerHour);
    }
  }
};

location1.getCookieNeed();
location1.addToPage();
location1.totalCookieSum();
