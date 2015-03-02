
/* Timetable pressed */
function showTimeTable() {
    var id_hello = document.getElementById("ID_container_hello");
    var id_cont_timetable = document.getElementById("ID_container_timeTable");

    id_hello.style.display = "none";
    id_cont_timetable.style.display = "block";
}

/* back button pressed */

function back_showHome() {
    var id_hello = document.getElementById("ID_container_hello");
    var id_cont_timetable = document.getElementById("ID_container_timeTable");

    id_hello.style.display = "block";
    id_cont_timetable.style.display = "none";
}

function load_faq(){
    document.getElementById("ID_container_main").innerHTML='<object type="text/html" data="faq.html"></object>';
}

// document ready!
$(function() {
    var $main = $('#ID_container_main');

    var $content = $('<div class="content">hallo</div>');

    $main.prepend($content);

    var test = [
        {
            title: 'hallo',
            author: 'wusler'
        }, {
            title: 'title',
            author: 'wusler1'
        }
    ];

    for(var i = 0; i < test.length; i++) {
        $main.append('<div class="wusler">'+ test[i].title +' / ' + test[i].author + '</div>')
    }
});