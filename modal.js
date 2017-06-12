('use strict');

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiePerSale: 6.3,
  getCookieNeed: function neededCookies(){
    return Math.random(this.minCustomers,this.maxCustomers) * this.avgCookiePerSale;
  }
};
