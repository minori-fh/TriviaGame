//Document ready
$(document).ready(function() {

$("#trivia-page").hide();

//On click functionality to start trivia game
$("#start").on("click", function(){
    $("#first-page").hide();
    $("#trivia-page").show();
});

//Set initial variables
var time = 5;
var intervalID; 

//If statements based on how much time is left
if (time > 0) { //if time is still available, perform the functions below
    
    function run(){
        intervalID = setInterval(decrement, 1000)
        $("#remaining-time").html(number)
    }

    function decrement(){ //decrement function 
        time--; 
        $("#remaining-time").html(time)

        if (time === 0){
            stop();
            $("#message").html("You ran out of time!")
        }
    }

    function stop(){ //stop function to clear out interval
        clearInterval(intervalID); 
    }

    run();

} else if (time === 0) { //if time has run out, perform the functions below 

}


}); //END document ready