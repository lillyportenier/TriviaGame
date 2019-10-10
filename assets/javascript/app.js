$(document).ready(function(){
    $("#remaining-time").hide();



var count = 20;
var current = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var QS = [{
    question: "The part of an atom with a negative electrical charge is the?",
    options: ["Nutron", "Electron", "Proton", "Atomic Nucleus"],
    answer: 1
}, {
    question: "What is the fastest bird on foot?",
    options: ["Ostrich", "Sparrow", "Eagle", "Dragon"],
    answer: 0
} , {
    question: "What planet is closest to the sun?",
    options: ["Venus", "Mars", "Earth", "Mercury"],
    answer: 3
} , {
    question: "A heptagon is a shape with how many sides?",
    options: ["4", "7", "8", "20"],
    answer: 1
} , {
    question: "How long is one regular term of a U.S. Representative?",
    options: ["3", "1", "2", "4"],
    answer: 2
} , {
    question: "What is the largest South American country by area?",
    options: ["Argentina", "Brazil", "Chile", "Mexico"],
    answer: 1
} , {
    question: "Which of the floowing states is NOT part of the Four Corners?",
    options: ["New Mexico", "Utah", "Colorado", "Nevada"],
    answer: 3
} , {
    questoin: "'Carfeully' is an example of what type of word?", 
    options: ["Advjective", "Noun", "Verb", "Adverb"],
    answer: 3
} , {
    question: "In the Northern Hemisphere, what month is the autumnal equnox?",
    options: ["August", "September", "October", "November"],
    answer: 1
} , {
    question: "Inca civilizations were concentrated on what continent?", 
    options: ["South America", "Africa", "North America", "Europe"],
    answer: 0
}
] 

$("#start").click(function() {
    $(this).hide();
    $('#result').hide();
    $("#instructions").hide();
    $("#remaining-time").show();
    questions();
});
function questions() {
    
    if (QS[current]) {
        $("#timer").html(count + " secs");
        $("#questions").html(QS[current].question);
        optionsArr = QS[current].options;
        
        for (var i = 0; i < optionsArr.length; i++) {
            button = $("<button>");
            button.text(optionsArr[i]);
            button.attr("data-id", i);
            $("#buttons-div").append(button);
        };

        window.trivaCounter = setInterval(timer, 1000);
    }
    else { 
        $("#Unanswered").html("Unanswered: " + unanswered);
        $("#Correct").html("Correct: " + correct);
        $("#Incorrect").html("Incorrect: " + incorrect);
    };
};

function timer() {
    count--;
    if (count <= 0) {
        setTimeout(function() {
            nextQuestion();
        });
    } 
    else {
        $("#timer").html(count + " secs");
    }
};
function nextQuestion() {
    current++;
    clearInterval(window.triviaCounter);
    count = 20;
    $("#timer").html("00");
   
    setTimeout(function() {
        reset();
        question();
    },5000)
};
function reset() {

    $("#Unanswered").html("Unanswered: " + unanswered);
    $("#Correct").html("Correct: " + correct);
    $("#Incorrect").html("Incorrect: " + incorrect);

};
});

// start the timer, hide the start page, show first question 


// decrement the timer by 1 stop at 0, update on screen time change 
// stop timer and check answer
// hide qusetion and display if right or wrong answer
//  