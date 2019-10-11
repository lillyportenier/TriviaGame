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
    var correctAnswer;

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
        
        intervalTimer = setInterval(timer, 1000);

        $("#questions").html(QS[current].question);
        optionsArr = QS[current].options;
        
        for (var i = 0; i < optionsArr.length; i++) {
            button = $("<button>");
            button.text(optionsArr[i]);
            button.attr("data-id", i);
            button.addClass("answer-buttons");
            $("#buttons-div").append(button);
        };
        $(".answer-buttons").on("click", function(){
        
            userAnswer = $(this).data("id");
            correctAnswer = QS[current].answer;
    
            if (userAnswer === correctAnswer) {
                // $("#Correct").text("Correct!!");
                handleCorrectAnswer();
            }
            else {
                // $("#Incorrect").text("Wrong answer!");
                handleWrongAnswer();
            }
    
        });
        $("#Unanswered").html("Unanswered: " + unanswered);
        $("#Correct").html("Correct: " + correct);
        $("#Incorrect").html("Incorrect: " + incorrect);
        console.log(unanswered);
    };
    
    function timer() {
        count--;
        $("#timer").html(count + " seconds");
        if (count <= 0) {
            unanswered++;
            nextQuestion();
        };
        
    };

    function handleCorrectAnswer() {
        correct++;
        nextQuestion();
    };

    function handleWrongAnswer() {
        // $("#buttons-div").hide();
        incorrect++;
        nextQuestion();
    };

    function nextQuestion() {
        current++;
        clearTimeout(intervalTimer);

        if (current > 9) {
            return end();
        };
        count = 10;
        $("#buttons-div").empty();
        questions();

    };
    function end() {
        restartButton = $("<button>");
        $("#buttons-div").append(restartButton);
        restartButton.text("Try again?");
        $(".answer-buttons").hide();
        $("#remaining-time").hide();


        $("#questions").hide();
        restartButton.on("click", function(){
            $(this).hide();
            $('#results').show();
            $("#remaining-time").show();
            current = 0;
            unanswered = 0;
            correct = 0;
            incorrect = 0;
            questions();
        });
    };
});