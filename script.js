var dateDisplayEL = $('#currentDay');
var nineAmEL = document.querySelector('#nine-activity');
var tenAmEL = document.querySelector('#ten-activity');
var elevenAmEL = document.querySelector('#eleven-activity');
var noonEL = document.querySelector('#noon-activity');
var onePmEL = document.querySelector('#one-activity');
var twoPmEL = document.querySelector('#two-activity');
var threePmEL = document.querySelector('#three-activity');
var fourPmEL = document.querySelector('#four-activity');
var fivePmEL = document.querySelector('#five-activity');
var nineBlockEL = document.querySelector('#nine-time-block');
var tenBlockEL = document.querySelector('#ten-time-block');
var elevenBlockEL = document.querySelector('#eleven-time-block');
var twelveBlockEL = document.querySelector('#twelve-time-block');
var oneBlockEL = document.querySelector('#one-time-block');
var twoBlockEL = document.querySelector('#two-time-block');
var threeBlockEL = document.querySelector('#three-time-block');
var fourBlockEL = document.querySelector('#four-time-block');
var fiveBlockEL = document.querySelector('#five-time-block');


// sets the current date at the header
function displayDate() {
    var now = moment().format('MMM Do YY');
    dateDisplayEL.text(now);
}

// color codes time blocks based on which ones passed

function colorBlocks() {
    //var currentHour = moment().format('H a');
    var currentHour = moment().hours();
    console.log(currentHour);
    
    for (var hour=0; hour<25; hour++) {

    }

    if (currentHour > 9) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 10) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 11) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }
    
    if (currentHour > 12) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 13) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        oneBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 14) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        oneBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twoBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 15) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        oneBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twoBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        threeBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 16) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        oneBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twoBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        threeBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        fourBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour > 17) {
        nineBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        tenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        elevenBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twelveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        oneBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        twoBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        threeBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        fourBlockEL.setAttribute('style', 'background-color: #CD5C5C');
        fiveBlockEL.setAttribute('style', 'background-color: #CD5C5C');
    }

    if (currentHour == 9) {
        nineBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 10) {
        tenBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 11) {
        elevenBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 12) {
        twelveBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 13) {
        oneBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 14) {
        twoBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 15) {
        threeBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 16) {
        fourBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }

    if (currentHour == 17) {
        fiveBlockEL.setAttribute('style', 'background-color: #9DEF70');
    }
}

// lines 19 - 63: function sets event for specific time blocks
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
colorBlocks();
