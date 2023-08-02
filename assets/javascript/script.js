$(function () {

// elements
var currentDayEl = $("#currentDay")

// state
var dateInterval;


// functions

function init() {
  startTime();
}

function updateDateDisplay() {
  var today = dayjs()

  currentDayEl.text(today.format("dddd[,] MMMM DD[,] YYYY"));
}

function startTime() {
  updateDateDisplay()
  dateInterval = setInterval(function() {
    updateDateDisplay();

  },)
}

function currentTime() {

}

// Event listeners

document.getElementById("saveData").addEventListener("click", function() {

});



// initialize

init();

});