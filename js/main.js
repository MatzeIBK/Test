
/* Timetable pressed */
function showTimeTable() {
    var hello = document.getElementById("first");
    var timetable = document.getElementById("tt_element");

    hello.style.display = "none";
    timetable.style.display = "block";
}

/* back button pressed */

function back_showHome() {
    var hello = document.getElementById("first");
    var timetable = document.getElementById("timeTable");

    hello.style.display = "block";
    timetable.style.display = "none";
}


//html zu laden ist eher kontraproduktiov
function load_faq() {
    document.getElementById("main").innerHTML = '<object type="text/html" data="faq.html"></object>';
}




$(function() {

    var $timetable = $('#tt_element');


    var $content = $('<div class="content">hallo</div>');

    $timetable.prepend($content);


    for(var i = 0; i < 10; i++) {
        //$main.append('<div class="wusler">'+ test[i].title +' / ' + test[i].author + '</div>')

        $timetable.append('<div class="tt_e_left col-xs-3">');
        $timetable.append('<div class="tt_e_right col-xs-9" id="tt_right">') ;
    }
    $(".tt_e_right").append('<div class="tt_e_desc col-xs-12">');
    $(".tt_e_right").append('<div class="tt_e_low row" style="margin: 0px"> <div class="tt_e_stage col-xs-8"></div> <div class="tt_e_date col-xs-4"></div>');

});

$('#rightnow').click(showTimeTable());

