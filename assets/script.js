$(document).ready(function () {
    // luxon api used to get time
    var currentTime = luxon.DateTime.local();
    console.log(currentTime);

    // button to save the information
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val().trim();
        console.log(task);
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, task);



    })

    // check if the row is past, present or future by comparing to the api's hour value
    function checkHour() {
        // luxon syntax for hour
      var luxonHour = luxon.DateTime.local().hour;
      console.log(luxonHour);

    //   cycle through each row to compare them
        $(".row").each(function () {
            // turn the time slot id into an integer for comparison
            var calendarHour = parseInt($(this).attr("id").split("-")[1]);
            
            // compare real time to time slot 
            if (luxonHour < calendarHour) {
                // add class of past
                $(this).addClass("past")
            } else if (luxonHour === calendarHour) {
                // add class of present
                $(this).addClass("present")
            }
            else {
                // add class of future
                $(this).addClass("future")
            }

        });
    }

    // Populate the slots with saved information from local storage
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