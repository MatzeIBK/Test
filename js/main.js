
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
function load_faq(){
    document.getElementById("main").innerHTML='<object type="text/html" data="faq.html"></object>';
}

// get the width of the textarea minus scrollbar


// width of our wrapper equals width of the inner part of the textarea










// document ready!
//mgölichkeit ein skelett zu füllen!

$(function() {
    var $timetable = $('#tt_element');

    var $content = $('<div class="content">hallo</div>');

    $timetable.prepend($content);


    for(var i = 0; i < 10; i++) {
        //$main.append('<div class="wusler">'+ test[i].title +' / ' + test[i].author + '</div>')

        $timetable.append('<div class="tt_e_left col-xs-3">'), $timetable.append('<div class="tt_e_right col-xs-9" id="rr_right">');



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
