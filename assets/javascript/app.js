var triva = {
    correct: 0, 
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId: " ",

    questions: {
        Q1: "The part of an atom with a negative electrical charge is the?",
        Q2: "What is the fastest bird on foot?",
        Q4: "A heptagon is a shape with how many sides?",
        Q5: "How long is one regular term of a U.S. Representative?",
        Q6: "What is the largest South American country by area?",
        Q7: "Which of the floowing states is NOT part of the Four Corners?",
        Q8: "'Carfeully' is an example of what type of word?",
        Q9: "In the Northern Hemisphere, what month is the autumnal equnox?",
        Q10: "Inca civilizations were concentrated on what continent?",
    },
    options: {
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
    },
    answers: {
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
    }};

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

// start game when user hits start button 

start.click (function() {
    start.hide();
    $("#remaining-time").show();
    $("#instructions").hide();
    button1.show();
    button2.show();
    button3.show();
    button4.show();


});

// function questions() {
//     if (i = 0 ; i > trivia.questions.length; i++){
//         $("#questions").append(trivia.questions[i]);
//     }
    
// };
// var timer = setTiemout(function(){
//     // show correct answer
// }, 2000);
    
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