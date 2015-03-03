
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
/*
$(function() {
    var $main = $('#main');

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
*/