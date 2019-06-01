//Document ready
$(document).ready(function() {

$("#trivia-page").hide();

//On click functionality to start trivia game
$("#start").on("click", function(){
    $("#first-page").hide();
    $("#trivia-page").show();
    startClock();
});

//Create array of objects for trivia game questions and answers
var triviaGame = [
    {question: "What type of farm does Dwight own?",
     answer: ["Bear farm", "Beet farm", "Carrot farm", "Beetle farm"],
     correct: "B",
    },
    {question: "Which of Angela's cats does Dwight freeze?",
     answer: ["Bandit", "Sparkles", "Sprinkes", "Fluffy"],
     correct: "B",
    },
    {question: "What tattoo is Andy forced to get?",
     answer: ["A 'nard dog'", "A butt", "A naked man", "The Cornell logo"],
     correct: "A",
    },
    {question: "Which employee did Michael hit with his car?",
     answer: ["Angela", "Meredith", "Stanley", "Kelly"],
     correct: "B",
    },
    {question: "Whose mother does Michael date?",
     answer: ["Angela", "Pam", "Phyllis", "Erin" ],
     correct: "B",
    },
    {question: "Who marries Jim and Pam?",
     answer: ["Phyllis", "Dwight", "Kelly", "Michael"],
     correct: "D",
    }];

//Set initial variables
var time = 10;
var intervalID;
var questionIndex = 0; 
var answered = false; 
var correctCount = 0;
var incorrectCount = 0; 
var id = "" //the id of the input (answer) that was clicked on by the player

//FUNCTION DECLARATIONS
//function: start clock
function startClock(){
    time = 10; 
    console.log("working")
    intervalID = setInterval(decrement, 1000)
    $("#remaining-time").html(time)
}
//function: decrement
function decrement(){ 
    if (time > 0){
        time--; 
        $("#remaining-time").html(time)
    
        if (time === 0){
            stop();
            $("#message").html("You ran out of time!")
        }
    }
}
//function: stopClock
function stopClock(){ 
    clearInterval(intervalID); 
}

//function: to go through list of questions
function newQuestion(){
    if (questionIndex >= 0 && questionIndex <=5){
        questionIndex ++
        startClock();

        $("dwight-says").html("Question")
        $("#win-lose").html("")

        $("#question").html(triviaGame[questionIndex].question)
        $("#0").val(triviaGame[questionIndex].answer[0])
        $("#1").val(triviaGame[questionIndex].answer[1])
        $("#2").val(triviaGame[questionIndex].answer[2])
        $("#3").val(triviaGame[questionIndex].answer[3])
    }
}

//function: clear out radio buttons
function clearRadio(){
    $("input[type=radio]").attr("checked",false) //clear out radio buttons
}


//Initial load of first question/answers and timer start 
$("#question").html(triviaGame[0].question)
$("#0").val(triviaGame[0].answer[0])
$("#1").val(triviaGame[0].answer[1])
$("#2").val(triviaGame[0].answer[2])
$("#3").val(triviaGame[0].answer[3])

//NEW-START
$(".input-group-text").click(function(){
    id = $(this).attr("id");

    //if TIME IS AVAILABLE
    if(time > 0){   
        if (id === triviaGame[questionIndex].correct){ //if the id of the input that was clicked on matches the correct value 
            correctCount++;
            answered = true; 
            $("#win-lose").html("Correct!")
            $("#dwight-says").html("'FACT'")
            $("#site-left").css("background-color", "rgb(116, 187, 128)"); 
            stopClock(); //stop clock
            setTimeout(newQuestion, 5000) //delay nextQuestion 
            setTimeout(clearRadio,5000)

        } else if (id != triviaGame[questionIndex].correct){ //if the id of the input that was clicked on does not match the correct value 
            incorrectCount++; 
            answered = true; 
            $("#win-lose").html("Incorrect!")
            $("#dwight-says").html("'FALSE'")
            $("#site-left").css("background-color", "rgb(153, 28, 28)");
            stopClock(); //stop clock 
            setTimeout(newQuestion, 5000) //delay nextQuestion 
            setTimeout(clearRadio,5000)
        } else { //if the player does not pick an answer
            $("#win-lose").html("You have run out of time!")
            if (time === 0){
                stopClock();
                setTimeout(newQuestion, 5000) //delay nextQuestion 
                setTimeout(clearRadio,5000)
            }
        }
    //if TIME HAS RUN OUT
    } else if (time === 0){
        stopClock();
        if (answered === false){
            $("#message").html("You ran out of time!")
            setTimeout(newQuestion, 5000) //delay nextQuestion 
            setTimeout(clearRadio,5000)
        } else if (answered){
            setTimeout(newQuestion, 5000) //delay nextQuestion 
            setTimeout(clearRadio,5000)
        }
    }
    });
//NEW-END






















// //If statements based on how much time is left
// if (time > 0) { //if time is still available, perform the functions below

//     //on-click functionality for when a player picks an answer 
//     $(".input-group-text").click(function(){
//         answered = true; 
//         id = $(this).attr("id");
//         if (id === triviaGame[questionIndex].correct){ //if the id of the input that was clicked on matches the correct value 
//             correctCount++;
//             $("#win-lose").html("Correct!")
//             $("#dwight-says").html("FACT")
//             $("#site-left").css("background-color", "rgb(116, 187, 128)"); 
//         } else { //if the id of the input that was clicked on does not match the correct value 
//             incorrectCount++; 
//             $("#win-lose").html("Incorrect!")
//             $("#dwight-says").html("FALSE")
//             $("#site-left").css("background-color", "rgb(153, 28, 28)");
//         }
//     })

//     function decrement(){ //decrement function 
//         time--; 
//         console.log(time)
//         $("#remaining-time").html(time)

//         if (time === 0){
//             stop();
//             $("#message").html("You ran out of time!")
//         }
//     }

//     function stopClock(){ //stop function to clear out interval
//         clearInterval(intervalID); 
//     }
//     //if statements based on whether the question has been answered or not
//     if (answered = false){ 
//     } else if (answered){ //else if the question has been answered
//         function stop(){ //stop function to clear out interval
//             clearInterval(intervalID); 
//         }
//     }


// } else if (time === 0) { //if time has run out, perform the functions below 
//     stopClock();
//     $("#message").html("You ran out of time!")
// }

}); //END document ready