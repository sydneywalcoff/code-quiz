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

const questions = [
    {
        question: "Which of these values is NOT falsy",
        answerChoices: ["false", "0", "' '", "[ ]"],
        correctAnswer: "[ ]",
        index: 0
    },
    {
        question: "What kind of punctuation denotes an object?",
        answerChoices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        correctAnswer: "curly brackets",
        index: 1
    },
    {
        question: "What is my brother's name?",
        answerChoices: ["Cole", "Eli", "Jackson", "Sam"],
        correctAnswer: "Sam",
        index: 2
    },
    {
        question: "What street did I grow up on?",
        answerChoices: ["Glenoaks Blvd", "Glenmore Blvd", "Chevy Chase Dr", "Burbank Blvd"],
        correctAnswer: "Glenmore Blvd",
        index: 3
    }
];
let idCounter = 0;

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
        let currentIndex = idCounter;
        if(currentIndex >= questions.length) {
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
        // start new timer
        countdown = setInterval(function() {
            timeRemaining--;
            document.querySelector(".timer").textContent = timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(countdown)
            }
        }, 1000);

        if(timeRemaining <= 0) {
            endGame();
            $timerEl.textContent = '';
        }
    
        // remove 'incorrect' after couple secs
        setTimeout(function() {$wrongEl.remove()}, 2000);
    };

    // correct answer
    const correctAnswer = function() {
        let $correctEl = document.createElement("h2");
        $correctEl.textContent = 'Correct!';
        $answerResponseDiv.appendChild($correctEl);

        // increase idCounter
        idCounter++;
        
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


// function to dynamically remove html elements
const removeEl = function(el) {
    el.remove();
};

const endGame = function() {
    alert('the game is over');
};

$startButton.addEventListener("click", playGame);
