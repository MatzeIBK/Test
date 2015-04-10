$(document).ready(function() {
    $("main2").css("display", "none");
    $("main2").fadeIn(2000);

    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("main2").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
});
