var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
var highScore = document.querySelector("h3");
var timeStart = 75;
var questions = [
    {
        question: "What is my hebrew name?",
        answerChoices: ["Batsheva", "Chana", "Shiriel", "Lior"],
        correctAnswer: "Shiriel"
    },
    {
        question: "What is my dog's name?",
        answerChoices: ["Liba", "Sweetpea", "Lurch", "Sniffers"],
        correctAnswer: "Liba"
    },
    {
        question: "What is my brother's name?",
        answerChoices: ["Cole", "Eli", "Jackson", "Sam"],
        correctAnswer: "Sam"
    },
    {
        question: "What street did I grow up on?",
        answerChoices: ["Glenoaks Blvd", "Glenmore Blvd", "Chevy Chase Dr", "Burbank Blvd"],
        correctAnswer: "Glenmore Blvd"
    }
];
var answer;
var idCounter=0;
var answerChoicesDiv = document.querySelector(".answer-choices");

var playGame = function() {
    // start timer
    timer();

    // hide p element and start button
    hideEl();

    firstQuestion();

    
};

var firstQuestion = function() {
    var firstQItem = questions[0];
    question.textContent = firstQItem.question;
    for(let i = 0; i< questions[0].answerChoices.length; i++) {
        createAnswerButtons(firstQItem.answerChoices[i]);
    }
    // secondQuestion();
};

var highScores = function() {
    hideEl();

    highScore.textContent = "Start Over";
    question.textContent = "High Scores";
    
};

let createAnswerButtons = function(buttonTextIndex) {
    var button = document.createElement("button");
    button.textContent = buttonTextIndex;
    button.setAttribute("class", "btn");
    button.setAttribute("id", idCounter);
    answerChoicesDiv.appendChild(button);
    idCounter++;
};

var hideEl = function() {
    var hiddenP = document.querySelector(".questionP");
    hiddenP.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide")
};

var timer = function() {
    console.log('timer');

    // if !answer subtract 10 seconds from timer
};


startButton.addEventListener("click", playGame);
highScore.addEventListener("click", highScores);