/*$(document).ready(function() {
    $("body").css("display", "none");
    $("body").fadeIn(2000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
});

 */


$(document).ready(function(){
    $("body").css("display", "none");
    $("body").fadeIn(1500);

    $("a#logo").click(function(){
      $('#ma').animate({
            width: 'toggle'
        });
        window.location.replace("");
    });
});