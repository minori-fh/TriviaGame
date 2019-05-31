//Document ready
$(document).ready(function() {

$("#trivia-page").hide();

//On click functionality to start trivia game
$("#start").on("click", function(){
    $("#first-page").hide();
    $("#trivia-page").show();
});

//Create array of objects for trivia game questions and answers
var triviaGame = [
    {question: "What type of farm does Dwight own?",
     answer: ["Bear farm", "Beet farm", "Carrot farm", "Beetle farm"],
     correct: 2,
    },
    {question: "Which of Angela's cats does Dwight freeze?",
     answer: ["Bandit", "Sparkles", "Sprinkes", "Fluffy"],
     correct: 3,
    },
    {question: "What tattoo is Andy forced to get?",
     answer: ["A 'nard dog'", "A butt", "A naked man", "The Cornell logo"],
     correct: 1,
    },
    {question: "Which employee did Michael hit with his car?",
     answer: ["Angela", "Meredith", "Stanley", "Kelly"],
     correct: 2,
    },
    {question: "Whose mother does Michael date?",
     answer: ["Angela", "Pam", "Phyllis", "Erin" ],
     correct: 2,
    },
    {question: "Who marries Jim and Pam?",
     answer: ["Phyllis", "Dwight", "Kelly", "Michael"],
     correct: 4,
    }];

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
    stop();
    $("#message").html("You ran out of time!")
}


}); //END document ready