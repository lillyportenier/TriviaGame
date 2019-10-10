$(document).ready(function(){
    $("#remaining-time").hide();



    var count = 10;
    var current = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var userAnswer;
    var intervalTimer;
    var button;
    var optionsArr;



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
    }];

    $("#start").click(function() {
        $(this).hide();
        $('#result').hide();
        $("#instructions").hide();
        $("#remaining-time").show();
        questions();
    });
    function questions() {
        
        setInterval(timer, 1000);

        $("#questions").html(QS[current].question);
        optionsArr = QS[current].options;
        
        for (var i = 0; i < optionsArr.length; i++) {
            button = $("<button>");
            button.text(optionsArr[i]);
            button.attr("data-id", i);
            $("#buttons-div").append(button);
        };
        // $("#Unanswered").html("Unanswered: " + unanswered);
        // $("#Correct").html("Correct: " + correct);
        // $("#Incorrect").html("Incorrect: " + incorrect);

    };
    

    function timer() {
        count--;
        $("#timer").html(count + " seconds");

        if (count <= 0) {
            unanswered++;
            nextQuestion();
        } 
        else if (userChoice === correctAnswer) {
            $("#buttons-div").hide();
            correctAnswer();
        }
        else {
            $("#buttons-div").hide();
            wrongAnswer();
        }
    };

    function correctAnswer() {
        correct++;
        nextQuesion();
    };

    function wrongAnswer() {
        // $("#buttons-div").hide();
        incorrect++;
        nextQuestion();
    };

    function nextQuestion() {
        current++;
        count = 10;
        questions();

        // setTimeout(function() {
        //     // reset();
        //     questions();
        // },1000)

    };
    // reset fix needed
    // function reset() {
    //     // $('div[id]').each(function(item) {
    //     //     $(this).html('');
    //     // });
    //     $("#Unanswered").html("Unanswered: " + unanswered);
    //     $("#Correct").html("Correct: " + correct);
    //     $("#Incorrect").html("Incorrect: " + incorrect);

    // };
    // function answer() {
        

    // };

    $("#buttons-div").on("click", "button", function(){
        
        userChoice = $(this).data("id");
        index = QS[current].answer;
        correct = QS[current].options[index];

    //     if (userChoice === index) {
    //         $("#resluts-div").text("Wrong answer!");
    //         // answer(false);
    //     }
    //     else {
    //         $("#resluts-div").text("Correct!!");
    //         // answer(true);
    //     }
    //     nextQuestion();
        console.log(userChoice);
    
    // // answer function work needed

    });

});

// start the timer, hide the start page, show first question 


// decrement the timer by 1 stop at 0, update on screen time change 
// stop timer and check answer
// hide qusetion and display if right or wrong answer
//  