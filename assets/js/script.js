const $startButton = document.querySelector(".btn");
const $questionEl = document.querySelector("h1");
const $highScoreEl = document.querySelector("h3");
const $timerEl = document.querySelector(".timer");
const $questionDiv = document.querySelector(".questions");
const $answerChoicesDiv = document.querySelector(".answer-choices");
const $answerResponseDiv = document.querySelector(".answer-response");
const $infoP = document.querySelector(".info-p");

// start value
let timeRemaining = 75;

// get highscore array
saveFiles = [];

const questions = [
    {
        question: "which of these values is NOT falsy?",
        answerChoices: ["false", "0", "' '", "[ ]"],
        correctAnswer: "[ ]",
        index: 0
    },
    {
        question: "what kind of punctuation denotes an object?",
        answerChoices: ["curly brackets", "quotes", "parentheses", "square brackets"],
        correctAnswer: "curly brackets",
        index: 1
    },
    {
        question: "what type of validation puts you in danger of creating an infinite loop?",
        answerChoices: ["for loop", "while loop", "if/else statements", "for/in loop"],
        correctAnswer: "while loop",
        index: 2
    },
    {
        question: "which of the following is NOT a string method?",
        answerChoices: [".length", ".indexOf()", ".join()", ".slice()"],
        correctAnswer: ".join()",
        index: 3
    }
];
let questionCounter = 0;

// function to dynamically remove html elements
const removeEl = function(el) {
    el.remove();
};

const playGame = function() {
    // hide p element and start button
    removeEl($startButton);
    removeEl($infoP);

    const questionHandler = function(index) {
        let currentQuestionObj = questions[index];
        let currentQuestion = currentQuestionObj.question;
        let answers = currentQuestionObj.answerChoices;
        let correct = currentQuestionObj.correctAnswer;
        // set question text
        $questionEl.textContent = currentQuestion;
        // loop through creating buttons
        for(let i=0; i < answers.length; i++) {
            let $button = document.createElement("button");
            $button.setAttribute("class", "btn btn"+i);
            $button.textContent = answers[i];
            $answerChoicesDiv.appendChild($button);
            $button.addEventListener("click", function() {
                if($button.textContent === correct) {
                    correctAnswer();
                } else {
                    wrongAnswer();
                }
            });
        }
    
    };

    const nextQuestion = function() {
        // check index of current question
        let currentIndex = questionCounter;
        if(currentIndex >= questions.length) {
            clearInterval(countdown);
            endGame();
        } else {
        // pass current index into question Handler
            questionHandler(currentIndex);
        }
        
    };

    questionHandler(0);
    let countdown = setInterval(function() {
        timeRemaining--;
        document.querySelector(".timer").textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(countdown)
        }
    }, 1000);

    // wrongAnswer
    const wrongAnswer = function() {
        let $wrongEl = document.createElement("h2");
        $wrongEl.textContent = 'Incorrect. Try again!';
        $answerResponseDiv.appendChild($wrongEl);
    
        // stop timer
        clearInterval(countdown);
        // remove 10 seconds from value
        timeRemaining -= 10;
        $timerEl.textContent = timeRemaining;
        // validate timeRemaining > 0
        if(timeRemaining <= 0) {
            $timerEl.textContent = '0';
            endGame();
        } 
        // start new timer
        else {
            countdown = setInterval(function() {
                timeRemaining--;
                document.querySelector(".timer").textContent = timeRemaining;
                if (timeRemaining <= 0) {
                    clearInterval(countdown)
                }
            }, 1000);
        }
        
        // remove 'incorrect' after couple secs
        setTimeout(function() {$wrongEl.remove()}, 2000);
    };

    // correct answer
    const correctAnswer = function() {
        let $correctEl = document.createElement("h2");
        $correctEl.textContent = 'Correct!';
        $answerResponseDiv.appendChild($correctEl);

        // increase questionCounter
        questionCounter++;
        
        //pause for 2 seconds correct message
        setTimeout(function() {$correctEl.remove()}, 2000);

        // for loop to delete current buttons before moving on
        for(let i=0; i < 4; i++) {
            let $button = document.querySelector(".btn"+i);
            removeEl($button);
        }

        // move to next question
        nextQuestion();
    };
}; // playGame() end

const endGame = function() {
    let score = timeRemaining;
    // Dynamically adding title
    $questionEl.textContent = "game over.";
    let $questionSubtitle = document.createElement("p");
    $questionSubtitle.textContent = `your final score is ${score}`;
    $questionDiv.appendChild($questionSubtitle);
    // form label, input, and button
    let $inputLabel = document.createElement("label");
    $inputLabel.setAttribute("for", "initials");
    $inputLabel.textContent = "Enter your initials:";
    let $nameInput = document.createElement("input");
    $nameInput.setAttribute("type", "text");
    $nameInput.setAttribute("name", "initials");
    $nameInput.setAttribute("placeholder", "enter your initials");
    let $inputButton = document.createElement("input");
    $inputButton.setAttribute("type", "submit");
    $inputButton.setAttribute("class", "btn");

    const saveScore = function() {
        
        // stringify
        localStorage.setItem("highScores", JSON.stringify(saveFiles));
    };

    $answerChoicesDiv.appendChild($inputLabel);
    $answerChoicesDiv.appendChild($nameInput);
    $answerChoicesDiv.appendChild($inputButton);

    // event listeners
    $inputButton.addEventListener("click", function(e) {
        e.preventDefault();

        let initials = $nameInput.value;
        saveFiles = JSON.parse(localStorage.getItem("highScores"));
        let saveObj = {
            initials: initials,
            score: score
        };
        
        saveFiles.push(saveObj);
        console.log(saveFiles);
        
        saveScore();
        // redirects to high Scores page
        let redirect = function() {
            document.location.href = "./high-score.html";
        };
        redirect();
    });

};

$startButton.addEventListener("click", playGame);

