$(document).ready(function(){
    $("button.press").click(function(){
        $("div.main").animate({
            width: 'toggle'
        });
    });
});