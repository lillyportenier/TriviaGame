
  

var questions= ["The part of an atom with a negative electrical charge is the?", "What is the fastest bird on foot?","A heptagon is a shape with how many sides?", "How long is one regular term of a U.S. Representative?", "What is the largest South American country by area?","Which of the floowing states is NOT part of the Four Corners?","'Carfeully' is an example of what type of word?", "In the Northern Hemisphere, what month is the autumnal equnox?", "Inca civilizations were concentrated on what continent?"];

 var options = {
    Q1: ["Nutron", "Electron", "Proton", "Atomic Nucleus"],
    Q2: ["Ostrich", "Sparrow", "Eagle", "Dragon"],
    Q3: ["Venus", "Mars", "Earth", "Mercury"],
    Q4: ["4", "7", "8", "20"],
    Q5: ["3", "1", "2", "4"],
    Q6: ["Argentina", "Brazil", "Chile", "Mexico"],
    Q7: ["New Mexico", "Utah", "Colorado", "Nevada"],
    Q8: ["Advjective", "Noun", "Verb", "Adverb"],
    Q9: ["August", "September", "October", "November"],
    Q10: ["South America", "Africa", "North America", "Europe"],
    };
var answers = {
    Q1: "Electron",
    Q2: "Ostrich",
    Q3: "Mercury",
    Q4: "7",
    Q5: "2",
    Q6: "Brazil",
    Q7: "Nevada",
    Q8: "Adverb",
    Q9: "September",
    Q10: "South America",
};


var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentSetAnswer = " ";
var timer = 20;
var timerOn = false;
var timerId;

var start = $("#start");
var button1 = $("#button1");
var button2 = $("#button2");
var button3 = $("#button3");
var button4 = $("#button4");




function onLoad(){
    start.show();
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    $("#remaining-time").hide();
}
onLoad();

// take the button text of said button and assign it to a variable 
button1.click(function(){
    currentSetAnswer = button1.text();
})
button2.click(function() {
    currentSetAnswer = button2.text();
});
button3.click(function() {
    currentSetAnswer = button3.text();
});
button4.click(function() {
    currentSetAnswer = button4.text();
});

// start game when user hits start button 

start.click (function() {
    start.hide();
    $("#remaining-time").show();
    $("#instructions").hide();
    button1.show();
    button2.show();
    button3.show();
    button4.show();
    question1();
    // setTimeout();
});

function question1() {
    var x = questions[0]
    $('#questions').text(x)
    button1.text(options.Q1[0]);
    button2.text(options.Q1[1]);
    button3.text(options.Q1[2]);
    button4.text(options.Q1[3]);

};

// var timer = setTiemout(function(){
//     // $("#timer").text(timerId);
//     if (timer <= 0){
//         question1();
//     }
//     else {
//         question2();
//     }
// }, 15000);

function question2() {
    var x = questions[1]
    $('#questions').text(x)
    button1.text(options.Q2[0]);
    button2.text(options.Q2[1]);
    button3.text(options.Q2[2]);
    button4.text(options.Q2[3]);
};
// start the timer, hide the start page, show first question 


// decrement the timer by 1 stop at 0, update on screen time change 
// stop timer and check answer
// hide qusetion and display if right or wrong answer
// 







// Q1: The part of an atom with a negative electrical charge is the?
// AS: Nutron, Electron, Proton, Atomic Nucleus
// A: Electron 

// Q2: What is the fastest bird on foot?
// AS: Ostrich, Sparrow, Eagle, Dragon 
// A: ostrich 

// Q3: What planet is closest to the sun?
// AS: Venus, Mars, Earth, Mercury 
// A: Mercury 

// Q4: A heptagon is a shape with how many sides?
// AS: 4, 7, 8, 20
// A: 7

// Q5: How long is one regular term of a U.S. Representative?
// AS: 3, 1, 2, 4
// A: 2

// Q6: What is the largest South American country by area?
// AS: Argentina, Brazil, Chile, Mexico 
// A: Brazil

// Q7:  Which of the floowing states is NOT part of the Four Corners?
// AS: New Mexico, Utah, Colorado, Nevada
// A: Nevada

// Q8: "Carfeully" is an example of what type of word?
// AS: Advjective, Noun, Verb, Adverb
// A: Adverb

// Q9: In the Northern Hemisphere, what month is the autumnal equnox? 
// AS: August, September, October, November
// A: September

// Q10: Inca civilizations were concentrated on what continent? 
// AS: South America, Africa, North America, Europe 
// A: South America 