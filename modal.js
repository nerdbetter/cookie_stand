('use strict');

function randomCustomer(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var firstAndPike = {
  location: 'First and Pike',
  cookiePerHour:[],
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  getCookieNeed: function(){
    for (var i = 0; i < this.hoursOfOperation.length; i++){
      var pikeCookies = randomCustomer(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
      console.log (pikeCookies);
      this.cookiePerHour[i] = pikeCookies;
      console.log (this.cookiePerHour);
    }
  }
};
firstAndPike.getCookieNeed();
console.log(firstAndPike);
