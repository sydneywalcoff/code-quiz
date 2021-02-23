var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
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

var secondQuestion = function() {
    var secondQItem = questions[1];
    question.textContent = secondQItem.question;
    for(let i = 0; i< questions[1].answerChoices.length; i++) {
        createAnswerButtons(secondQItem.answerChoices[i]);
    }

    // thirdQuestion();
};

var thirdQuestion = function() {
    var thirdQItem = questions[2];
    question.textContent = thirdQItem.question;
    for(let i = 0; i< questions[2].answerChoices.length; i++) {
        createAnswerButtons(thirdQItem.answerChoices[i]);
    }

    // fourthQuestion();
};

var fourthQuestion = function() {
    var fourthQItem = questions[3];
    question.textContent = fourthQItem.question;
    for(let i = 0; i< questions[3].answerChoices.length; i++) {
        createAnswerButtons(fourthQItem.answerChoices[i]);
    }

    // highScores();
};

var highScores = function() {

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
    console.log('time');

    // if !answer subtract 10 seconds from timer
};


startButton.addEventListener("click", playGame);