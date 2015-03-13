
/* Timetable pressed */
function showTimeTable() {
    var hello = document.getElementById("first");
    var timetable = document.getElementById("tt_element");

    hello.style.display = "none";
    timetable.style.display = "block";
};

/* back button pressed */

function back_showHome() {
    var hello = document.getElementById("first");
    var timetable = document.getElementById("timeTable");

    hello.style.display = "block";
    timetable.style.display = "none";
};


//html zu laden ist eher kontraproduktiov
function load_faq() {
    document.getElementById("main").innerHTML = '<object type="text/html" data="faq.html"></object>';
};


//document ready
function googleLoad(){

    var timetable = document.getElementById("first");
    var temp = document.getElementById("second map_canvas");
    timetable.style.display = "none";
    temp.style.display = "block";
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("second map_canvas"),
        mapOptions);

};


$(function() {

    var $timetable = $('#tt_element');
    var $content = $('<div class="content">hallo</div>');
    $timetable.prepend($content);
    for(var i = 0; i < 10; i++) {

        $timetable.append('<div class="tt_e_left col-xs-3">');
        $timetable.append('<div class="tt_e_right col-xs-9" id="tt_right">') ;
    }
    $(".tt_e_right").append('<div class="tt_e_desc col-xs-12">');
    $(".tt_e_right").append('<div class="tt_e_low row" style="margin: 0px"> <div class="tt_e_stage col-xs-8"></div> <div class="tt_e_date col-xs-4"></div>');


});

$('#rightnow').click(showTimeTable());
$('#thursday').click(googleLoad());

