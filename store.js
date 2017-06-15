// functions to get time to add
CookieStore.prototype.timeBar = function (){
  var storeTimeContainer = document.getElementById('storeTimes');
  var timeRow = document.createElement('tr');
  for (var k = 0; k < hours.length; k++) {
    var time = hours[k];
    console.log(time);
    addTimeRow(storeTimeContainer, time);
  }
  function addTimeRow(storeTimeContainer, time) {
    var storeTimeCell = document.createElement('td');
    storeTimeCell.textContent = time;
    storeTimeContainer.appendChild(timeRow);
    timeRow.appendChild(storeTimeCell);
  }
};
location1.timeBar();
CookieStore.prototype.render = function (){
  var newAddress = document.createElement('td');
  var addressText = document.createTextNode(this.address);
  newAddress.appendChild(addressText);
  var addressContainer = document.getElementsByTagName('tbody')[0];
  addressContainer.setAttribute('colspan', 2);
  addressContainer.appendChild(newAddress);

  for ( i = 0; i < this.cookiePerHour.length; i++ ){
    var cookies = this.cookiePerHour[i];
    var newCookiePerHour = document.createElement('td');
    var cookiePerHourText = document.createTextNode(cookies);
    newCookiePerHour.appendChild(cookiePerHourText);
    var cookieJar = document.getElementsByTagName('tbody')[0];
    cookieJar.appendChild(newCookiePerHour);
  }
};
location1.render();
