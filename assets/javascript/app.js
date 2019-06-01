//Document ready
$(document).ready(function() {
    // $("#stats").hide()

// $("#trivia-page").hide();

//On click functionality to start trivia game
$("#start").on("click", function(){
    // $("#first-page").hide();
    $("#trivia-page").show();
    startClock();
    $("input:radio").removeAttr("checked");
});

//Create array of objects for trivia game questions and answers
var triviaGame = [
    {question: "What type of farm does Dwight own?",
     answer: ["A: Bear farm", "B: Beet farm", "C: Carrot farm", "D: Beetle farm"],
     correct: "B",
    },
    {question: "Which of Angela's cats does Dwight freeze?",
     answer: ["A: Bandit", "B: Sparkles", "C: Sprinkes", "D: Fluffy"],
     correct: "B",
    },
    {question: "What tattoo is Andy forced to get?",
     answer: ["A: A 'nard dog'", "B: A butt", "C: A naked man", "D: The Cornell logo"],
     correct: "A",
    },
    {question: "Which employee did Michael hit with his car?",
     answer: ["A: Angela", "B: Meredith", "C: Stanley", "D: Kelly"],
     correct: "B",
    },
    {question: "Whose mother does Michael date?",
     answer: ["A: Angela", "B: Pam", "C: Phyllis", "D: Erin" ],
     correct: "B",
    },
    {question: "Who marries Jim and Pam?",
     answer: ["A: Phyllis", "B: Dwight", "C: Kelly", "D: Michael"],
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
    $("#remaining-time").html("Time remaining: " + time)
}
//function: decrement
function decrement(){ 
    if (time > 0){
        time--; 
        $("#remaining-time").html("Time remaining: " + time)
    
        if (time === 0){
            stop();
            $("#dwight-says").html("You ran out of time!")
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

        $("input:radio").removeAttr("checked"); //NOT WORKING

        $("dwight-says").html("Question")
        $("#win-lose").html("")
        $("#correct-answer").html("")
        $("#site-left").css("background-color", "rgb(145, 215, 236)"); 

        $("#question").html(triviaGame[questionIndex].question)
        $("#0").val(triviaGame[questionIndex].answer[0])
        $("#1").val(triviaGame[questionIndex].answer[1])
        $("#2").val(triviaGame[questionIndex].answer[2])
        $("#3").val(triviaGame[questionIndex].answer[3])
    }
}

//function: clear out radio buttons
function clearRadio(){
    console.log("clear")

    $("input:radio").removeAttr("checked");

    // $("#0").attr("checked",false) 
    // $("#1").attr("checked",false) 
    // $("#2").attr("checked",false) 
    // $("#3").attr("checked",false) 
}

//function: show stats
function showStats(){
    $("#stats").show();
    $("#trivia-page").hide();
    $("#wins").html("Wins: " + correctCount)
    $("#losses").html("Losses: " + incorrectCount)
    console.log("theEnd")
}

//function: restart game
function playAgain(){
    time = 10;
    intervalID;
    questionIndex = 0; 
    answered = false; 
    correctCount = 0;
    incorrectCount = 0; 
    id = ""
}


//Initial load of first question/answers and timer start 
$("#question").html(triviaGame[0].question)
$("#0").val(triviaGame[0].answer[0])
$("#1").val(triviaGame[0].answer[1])
$("#2").val(triviaGame[0].answer[2])
$("#3").val(triviaGame[0].answer[3])

//NEW-START
$(".input-group-text").click(function(){
    console.log($(this))
    answered = true; 
    id = $(this).attr("id");
    stopClock(); //stop clock 
    setTimeout(newQuestion, 5000) //delay nextQuestion 
    

    //if statement for TIME
    if(time > 0){//if TIME IS AVAILABLE   
        if (id === triviaGame[questionIndex].correct){ //if the id of the input that was clicked on matches the correct value 
            correctCount++;
            $("#dwight-says").html("'FACT'")
            $("#site-left").css("background-color", "rgb(116, 187, 128)"); 

        } else if (id != triviaGame[questionIndex].correct){ //if the id of the input that was clicked on does not match the incorrect value 
            incorrectCount++;
            $("#dwight-says").html("'FALSE'")
            $("#correct-answer").html("The correct answer is: " + triviaGame[questionIndex].correct)
            $("#site-left").css("background-color", "rgb(153, 28, 28)");
       
        } else { //if the player does not pick an answer
            $("#dwight-says").html("You have run out of time!")
            $("#correct-answer").html("The correct answer is: " + triviaGame[questionIndex].correct)
        };

    } else if (time === 0){//if TIME HAS RUN OUT
        if (answered === false){
            $("#dwight-says").html("You ran out of time!")
            $("#correct-answer").html("The correct answer is: " + triviaGame[questionIndex].correct)
    }
    }

    //if statement for INDEX (last question)
    if (questionIndex === 5){
        setTimeout(showStats, 5000)

        $("#restart").click(function(){
            $("#stats").hide();
            $("#trvia-page").hide();
            $("#first-page").show();
            playAgain(); 
        })

    };
});
//NEW-END

}); //END document ready