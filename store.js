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
