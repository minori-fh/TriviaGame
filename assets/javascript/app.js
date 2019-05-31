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
var questionIndex = 0; 
var answered = false; 

//Place questions and answers in HTML DOM with a for loop


//Initial load of question and answers
$("#question").html(triviaGame[0].question)
for (var i=0; i < triviaGame.length; i++){
    $("#0").val(triviaGame[0].answer[0])
    $("#1").val(triviaGame[0].answer[1])
    $("#2").val(triviaGame[0].answer[2])
    $("#3").val(triviaGame[0].answer[3])
}

//On click functionality for when a player picks an answer
$(".input-group-text").on("click", function(){
    answered = true; 
    console.log("answered!")
})


//If statements based on how much time is left
if (time > 0) { //if time is still available, perform the functions below
    
    function run(){
        intervalID = setInterval(decrement, 1000)
        $("#remaining-time").html(time)
    }
    //if the question has not been answered yet
    if (answered = false){ 
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
    }
    //if the question has been answered
    if (answered){
        function stop(){ //stop function to clear out interval
            clearInterval(intervalID); 
        }
    }

    run();

} else if (time === 0) { //if time has run out, perform the functions below 
    stop();
    $("#message").html("You ran out of time!")
}


}); //END document ready