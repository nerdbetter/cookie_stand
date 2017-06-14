// functions to get time to add
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
//function to add address and cookies

var storeLocationsContainer = document.getElementById('store-locations');
console.log(storeLocationsContainer);

for (var i = 0; i < stores.length; i++) {
  var store = stores[i];
  console.log(store);
  addStoreRow(storeLocationsContainer, store);
}

function addStoreRow(container, store) {
  var storeRow = document.createElement('tr');
  var storeNameCell = document.createElement('td');
  storeNameCell.textContent = store.address;
  storeNameCell.setAttribute('colspan', 2);
  storeRow.appendChild(storeNameCell);
  addCellForEachHour(storeRow, store.cookiePerHour);
  container.appendChild(storeRow);
}

function addCellForEachHour(row, cookiePerHour) {
  for (var j = 0; j < cookiePerHour.length; j++) {
    var hourCell = document.createElement('td');
    hourCell.textContent = cookiePerHour[j];
    row.appendChild(hourCell);
  }
}
