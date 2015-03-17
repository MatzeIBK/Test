$(function() {

    /*  Weeks, days, hours, min, sec*/
    $('#clock').countdown('2015/07/09', function(event) {
        var $this = $(this).html(event.strftime(''
            + '<span>%w</span> weeks '
            + '<span>%d</span> days '
            + '<div>'
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec </div>'));
    })

    /* hours, min, sec
    $('#clock').countdown("2015/09/07", function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime(totalHours + ' hr %M min %S sec'));

    }) */
});
