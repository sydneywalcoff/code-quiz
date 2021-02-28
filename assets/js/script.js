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
        question: "What is my hebrew name?",
        answerChoices: ["Batsheva", "Chana", "Shiriel", "Lior"],
        correctAnswer: "Shiriel",
        index: 0
    },
    {
        question: "What is my dog's name?",
        answerChoices: ["Liba", "Sweetpea", "Lurch", "Sniffers"],
        correctAnswer: "Liba",
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

    // wrongAnswer
    const wrongAnswer = function() {
        let $wrongEl = document.createElement("h2");
        $wrongEl.textContent = 'Incorrect. Try again!';
        $answerResponseDiv.appendChild($wrongEl);
    
        // subtract 10 seconds
        let timeRemaining = document.querySelector('.timer');
        let currentScore = timeRemaining.textContent;
        currentScore -= 10;
        console.log(currentScore)
        timeRemaining = currentScore;
    
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

    questionHandler(0);
    timer();  
};


// function to dynamically remove html elements
const removeEl = function(el) {
    el.remove();
};


const timer = function() { 
    const countdown = setInterval(function() {
        timeRemaining--;
        document.querySelector(".timer").textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(countdown)
        }
    }, 1000);
};


$startButton.addEventListener("click", playGame);
