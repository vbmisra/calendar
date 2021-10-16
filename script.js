var dateDisplayEL = $('#currentDay');
var nineAmEL = document.querySelector('nine-activity');
var tenAmEL = document.querySelector('ten-activity');
var elevenAmEL = document.querySelector('eleven-activity');
var noonEL = document.querySelector('noon-activity');
var onePmEL = document.querySelector('one-activity');
var twoPmEL = document.querySelector('two-activity');
var threePmEL = document.querySelector('three-activity');
var fourPmEL = document.querySelector('four-activity');
var fivePmEL = document.querySelector('five-activity');

function displayDate() {
    var now = moment().format('MMM Do YY');
    dateDisplayEL.text(now);
}

function getValNine() {
    var val = document.getElementById('nine-input').value;
    localStorage.setItem('9am: ', val);
}

function getValTen() {
    var val = document.getElementById('ten-input').value;
    localStorage.setItem('10am: ', val);
}

function getValEleven() {
    var val = document.getElementById('eleven-input').value;
    localStorage.setItem('11am: ', val);
}

function getValNoon() {
    var val = document.getElementById('noon-input').value;
    localStorage.setItem('12pm: ', val);
}

function getValOne() {
    var val = document.getElementById('one-input').value;
    localStorage.setItem('1pm: ', val);
}

function getValTwo() {
    var val = document.getElementById('two-input').value;
    localStorage.setItem('2pm: ', val);
}

function getValThree() {
    var val = document.getElementById('three-input').value;
    localStorage.setItem('3pm: ', val);
}

function getValFour() {
    var val = document.getElementById('four-input').value;
    localStorage.setItem('4pm: ', val);
}

function getValFive() {
    var val = document.getElementById('five-input').value;
    localStorage.setItem('5pm: ', val);
}

setInterval(displayDate, 0);
