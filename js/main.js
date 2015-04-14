$(document).ready(function(){
    $("a.item_main").click(function(){
        $("div.everything").animate({
            width: 'toggle'
        });
    });
});