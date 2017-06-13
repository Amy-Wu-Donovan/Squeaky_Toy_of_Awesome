var squeaky = new Audio("Slow Squeak.wav");

$(document).ready(function () {
    $(".baseimage").hover(
        function() {
            $(this).addClass("flashyimage");
            },
        function() {
            $(this).removeClass("flashyimage");
            }
        );
    
    $(".baseimage").on("mousedown mouseup", function mouseState(e) {
        if (e.type === "mousedown") {
            $(this).addClass("squeakyimage");
            squeaky.play();
        }
        if (e.type === "mouseup") {
            $(this).removeClass("squeakyimage");
            squeaky.pause();
            squeaky.currentTime = 0;
        }
    });
    
    $(".links").hover(
        function(){
            $(this).addClass("active");
        },
        function(){
            $(this).removeClass("active");
        });
});