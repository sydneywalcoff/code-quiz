const $startButton = document.querySelector(".btn");
const $questionEl = document.querySelector("h1");
const $highScoreEl = document.querySelector("h3");
const $answerChoicesDiv = document.querySelector(".answer-choices");
const $answerResponseDiv = document.querySelector(".answer-response");
const $infoP = document.querySelector(".info-p");

const timeStart = 75;
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
    // start timer
    timer();

    // hide p element and start button
    removeEl($startButton);
    removeEl($infoP);

    firstQuestion();

};

const nextQuestion = function() {
// check index of current question
    let currentIndex = idCounter;
    console.log(idCounter);

// if index < 4 ++ (that's new question object)

    
};


const firstQuestion = function() {
    let firstQItem = questions[0];
    let answers = firstQItem.answerChoices;
    $questionEl.textContent = firstQItem.question;
    let firstChoice = document.createElement("button");
    firstChoice.textContent = answers[0];
    firstChoice.addEventListener("click", function(){
        if(firstChoice.textContent === firstQItem.correctAnswer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });
    let secondChoice = document.createElement("button");
    secondChoice.textContent = answers[1];
    secondChoice.addEventListener("click", function(){
        if(secondChoice.textContent === firstQItem.correctAnswer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });
    const thirdChoice = document.createElement("button");
    thirdChoice.textContent = answers[2];
    thirdChoice.addEventListener("click", function(){
        if(thirdChoice.textContent === firstQItem.correctAnswer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });
    const fourthChoice = document.createElement("button");
    fourthChoice.textContent = answers[3];
    fourthChoice.addEventListener("click", function(){
        if(fourthChoice.textContent === firstQItem.correctAnswer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });

    $answerChoicesDiv.appendChild(firstChoice);
    $answerChoicesDiv.appendChild(secondChoice);
    $answerChoicesDiv.appendChild(thirdChoice);
    $answerChoicesDiv.appendChild(fourthChoice);
};

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


    // remove 'incorrect' after couple secs=
    setTimeout(function() {$wrongEl.remove()}, 2000);
};

const correctAnswer = function() {
    let $correctEl = document.createElement("h2");
    $correctEl.textContent = 'Correct!';
    $answerResponseDiv.appendChild($correctEl);
    
    //pause for correct message
    setTimeout(function() {$correctEl.remove()}, 2000);

    // increase idCounter
    idCounter++;

    // move to next question
    nextQuestion();
};

// function to dynamically remove html elements
const removeEl = function(el) {
    el.remove();
};

// timer
const timer = function() {
    // grab timer element
    let timeRemaining = document.querySelector(".timer").textContent;
    timeRemaining = 75;
    const countdown = setInterval(function() {
        timeRemaining--;
        document.querySelector(".timer").textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(countdown)
        }
    }, 1000);
    
};




$startButton.addEventListener("click", playGame);