// functions to get time to add
CookieStore.prototype.timeBar = function (){
  var timeRow = document.createElement('tr');
  var storeTimeContainer = document.getElementById('storeTimes');
  storeTimeContainer.appendChild(timeRow);
  var blankCell = document.createElement('td');
  timeRow.appendChild(blankCell);
  timeRow.appendChild(blankCell);
  for (var k = 0; k < this.hoursOfOperation.length; k++) {
    var time = this.hoursOfOperation[k];
    var newTime =  document.createElement('td');
    var newTimeText = document.createTextNode(time);
    newTime.appendChild(newTimeText);
    timeRow.appendChild(newTime);
  }
};
location1.timeBar();

CookieStore.prototype.render = function (){
  var newAddress = document.createElement('td');
  var addressText = document.createTextNode(this.address);
  newAddress.appendChild(addressText);
  var newRow = document.createElement('tr');
  newRow.appendChild(newAddress);
  var tableContainer = document.getElementsByTagName('tbody')[0];
  tableContainer.appendChild(newRow);

  for ( i = 0; i < this.cookiePerHour.length; i++ ){
    var cookies = this.cookiePerHour[i];
    var newCookiePerHour = document.createElement('td');
    var cookiePerHourText = document.createTextNode(cookies);
    newCookiePerHour.appendChild(cookiePerHourText);
    newRow.appendChild(newCookiePerHour);
  }
};
location1.render();
location2.render();
location3.render();
location4.render();
location5.render();
