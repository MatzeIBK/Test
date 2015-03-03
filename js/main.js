
/* Timetable pressed */
function showTimeTable() {
    var hello = document.getElementById("first");
    var timetable = document.getElementById("timeTable");

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
function load_faq(){
    document.getElementById("main").innerHTML='<object type="text/html" data="faq.html"></object>';
}

// document ready!
//mgölichkeit ein skelett zu füllen!

$(function() {
    var $timetable = $('#tt_element');
    var $tt_right = $('#tt_right');

    var $content = $('<div class="content">hallo</div>');

    $timetable.prepend($content);


    for(var i = 0; i < 3; i++) {
        //$main.append('<div class="wusler">'+ test[i].title +' / ' + test[i].author + '</div>')

        $timetable.append('<div class="tt_e_left col-xs-3">'), $timetable.append('<div class="tt_e_right col-xs-9" id="rr_right">');
        $tt_right.append('<div class="tt_e_desc col-xs-12">'), $tt_right.append('<div class="tt_e_low">');


    }
});


/* comment maybe used
*
*

 var test = [
 {
 title: 'hallo',
 author: 'wusler'
 }, {
 title: 'title',
 author: 'wusler1'
 }
 ];*
*
*
*
*
*
*
*
*
* */
