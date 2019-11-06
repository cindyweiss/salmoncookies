'use strict';




var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldHourly = [];

  this.randomCustomer = function () {
    return Math.random() * (this.max - this.min) + this.min;
  };

  this.cookiePerHour = function () {
    return Math.round(this.randomCustomer() * this.avg);
  };

  this.eachHourTotals = function () {
    for (var i = 0; i < time.length; i++) {
      this.cookiesSoldHourly.push(this.cookiePerHour());
    }
  };

  this.totalDailySales = function () {
    var allsweets = 0;
    for (var i = 0; i < this.cookiesSoldHourly.length; i++) {
      allsweets = allsweets + this.cookiesSoldHourly[i];
    }
    return allsweets;
  };

  this.render = function (domReference) {
    var tableContents = document.getElementById('salmoncookies');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = this.name;
    tr.append(td);

    for (var i = 0; i < time.length; i++) {
      td = document.createElement('td');
      td.textContent = this.cookiesSoldHourly[i];
      tr.append(td);
    }


    td = document.createElement('td');
    td.textContent = this.totalDailySales();
    tr.append(td);
    tableContents.append(tr);
  };
}

var renderHoursRow = function (domReference) {
  var tableContents = document.getElementById('salmoncookies');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = ('');
  tr.append(td);

  for (var i = 0; i < time.length; i++) {
    td = document.createElement('td');
    td.textContent = time[i];
    tr.append(td);
  }

  td = document.createElement('td');
  td.textContent = (' Totals ');
  tr.append(td);

  tableContents.append(tr);
};

var renderHourlyTotalsRow = function (domReference) {
  var tableContents = document.getElementById('salmoncookies');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = ('Hourly Totals');
  tr.append(td);

  for (var hourlyTotals = 0; hourlyTotals < time.length; hourlyTotals++) {
    var total = 0;
    for (var i = 0; i < storeName.length; i++) {
      total += storeName[i].cookiesSoldHourly[hourlyTotals];

    }
    console.log(`total ${total}`);
    var td = document.createElement('td');
    td.textContent = total;
    tr.append(td);
  }

  tableContents.append(tr);
};


var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);
var storeName = [seattle, tokyo, dubai, paris, lima];
// console.log(seattle)
// console.log(seattle.randomCustomer());
// console.log(seattle.cookiePerHour());
// console.log(seattle.eachHourTotals());
// console.log(seattle.cookiesSoldHourly);


renderHoursRow();

seattle.eachHourTotals();
seattle.render();
tokyo.eachHourTotals();
tokyo.render();
dubai.eachHourTotals();
dubai.render();
paris.eachHourTotals();
paris.render();
lima.eachHourTotals();
lima.render();
renderHourlyTotalsRow();



















// var limalist = document.getElementById('lima');
// for (var i = 0; i < time.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${time[i]}: ${lima.cookiesperhour[i]}     cookies`;
//   limalist.append(li);
// }
// var totalLi = document.createElement('li');
// totalLi.textContent = `Total: ${lima.totalDailySales()}
// cookies`;
// limalist.append(totalLi);


// var seattlelist = document.getElementById('seattle');
// for (var i = 0; i < time.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${time[i]}:${seattle.cookiesperhour[i]} cookies`;
//   seattlelist.append(li);
// }
// var totalLi = document.createElement('li');
// totalLi.textContent = `Total: ${seattle.totalDailySales()} cookies`;
// seattlelist.append(totalLi);



// var tokyolist = document.getElementById('tokyo');
// for (var i = 0; i < time.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${time[i]}:${tokyo.cookiesperhour[i]}  cookies`;
//   tokyolist.append(li);
// }
// var totalLi = document.createElement('li');
// totalLi.textContent = `Total: ${tokyo.totalDailySales()} cookies`;
// tokyolist.append(totalLi);


// var dubailist = document.getElementById('dubai');
// for (var i = 0; i < time.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${time[i]}: ${dubai.cookiesperhour[i]} cookies`;
//   dubailist.append(li);
// }
// var totalLi = document.createElement('li');
// totalLi.textContent = `Total: ${dubai.totalDailySales()} cookies`;
// dubailist.append(totalLi);
// console.log(dubai.totalDailySales());

// var parislist = document.getElementById('paris');
// for (var i = 0; i < time.length; i++) {
//   var li = document.createElement('li');
//   li.textContent = `${time[i]}: ${paris.cookiesperhour[i]} cookies`;
//   parislist.append(li);
// }
// var totalLi = document.createElement('li');
// totalLi.textContent = `Total: ${paris.totalDailySales()} cookies`;
// parislist.append(totalLi);

