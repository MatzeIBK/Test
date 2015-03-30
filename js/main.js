function growDiv() {
    var growDiv = document.getElementById('grow');
    if (growDiv.clientHeight) {
        growDiv.style.height = 0;
    } else {
        var wrapper = document.querySelector('.measWrapper');
        growDiv.style.height = wrapper.clientHeight + "px";
    }
    document.getElementById("social_btn").value=document.getElementById("social_btn").value=='Read more'?'Read less':'Read more';
}