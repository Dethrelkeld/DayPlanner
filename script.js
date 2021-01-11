$(document).ready(function () {
    var currentTime = luxon.DateTime.local();
    console.log(currentTime);

    $(".save-button").on("click", function () {
        var task = $(this).siblings(".description").val().trim();
        console.log(task);
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, task);



    })
    function checkHour() {
      var luxonHour = luxon.DateTime.local().hour;
      console.log(luxonHour);
        $(".row").each(function () {
            var calendarHour = parseInt($(this).attr("id").split("-")[1]);
            console.log(calendarHour);
            
            // compare real time to time slot 
            if (luxonHour < calendarHour) {
                // add class of past
            } else if (luxonHour === calendarHour) {
                // add class of present
                $(this).addClass("present")
            }
            else {
                // add class of future
            }

        });
    }
    $("#hour-9 .description").val(localStorage.getItem('hour-9'));
    $("#hour-10 .description").val(localStorage.getItem('hour-10'));
    $("#hour-11 .description").val(localStorage.getItem('hour-11'));
    $("#hour-12 .description").val(localStorage.getItem('hour-12'));
    $("#hour-13 .description").val(localStorage.getItem('hour-13'));
    $("#hour-14 .description").val(localStorage.getItem('hour-14'));
    $("#hour-15 .description").val(localStorage.getItem('hour-15'));
    $("#hour-17 .description").val(localStorage.getItem('hour-16'));
    $("#hour-18 .description").val(localStorage.getItem('hour-17'));
    $("#hour-19 .description").val(localStorage.getItem('hour-18'));


checkHour();

})