$(function () {

  // functions

  function init() {
    startTime();
    for (var i = 9; i <= 17; i++) {
      var text = localStorage.getItem("hour-" + i);
      $("#hour-" + i + " .description").val(text);
    }
  }

  function updateDateDisplay() {
    var today = dayjs()

    $("#currentDay").text(today.format("dddd[,] MMMM DD[,] YYYY"));
    var hour = today.hour();
    $(".time-block").each(function () {
      var blockHour = Number($(this).attr("id").substring(5));
      if (blockHour < hour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      else if (blockHour == hour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    });
  }

  function startTime() {
    updateDateDisplay()
    var dateInterval = setInterval(function () {
      updateDateDisplay();

    }, 1000)
  }

  // Event listeners
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var text = $(this).prev().val();
    localStorage.setItem(hour, text);

  });

  // initialize

  init();

});