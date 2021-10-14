var dateDisplayEL = $('#currentDay');

function displayDate() {
    var now = moment().format('MMM Do YY');
    dateDisplayEL.text(now);
}

setInterval(displayDate, 0);
  