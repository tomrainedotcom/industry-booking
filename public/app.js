(function($){
    var calendar_id = '#main-calendar';
    $(document).ready(function(e){
        $(calendar_id).fullCalendar({
            // put your options and callbacks here
            dayClick: showDayDetails
        })
    });

    function showDayDetails (){
        alert("Showing day detail");
    }
})(jQuery);