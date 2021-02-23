var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
var timeStart = 75;
var questions = [
    {
        question: "What is my hebrew name?",
        answerChoices: ["Batsheva", "Chana", "Shiriel", "Lior"]
    },
    {
        question: "What is my dog's name?",
        answerChoices: ["Liba", "Sweetpea", "Lurch", "Sniffers"]
    },
    {
        question: "What is my brother's name?",
        answerChoices: ["Cole", "Eli", "Jackson", "Sam"]
    },
    {
        question: "What street did I grow up on?",
        answerChoices: ["Glenoaks Blvd", "Glenmore Blvd", "Chevy Chase Dr", "Burbank Blvd"]
    }
];
var answer;
var idCounter=0;
var answerChoicesDiv = document.querySelector(".answer-choices");

var startGame = function() {
    timer();

    hideEl();

    firstQuestion();

    var createDynamicEl = function() {


        // // button one
        // var optionOne = document.createElement("button");
        // optionOne.textContent = "Option One";
        // optionOne.setAttribute("class", "btn");
        // optionOne.setAttribute("id", idCounter);

        // // button two
        // var optionTwo = document.createElement("button");
        // optionTwo.textContent = "Option Two";
        // optionTwo.setAttribute("class", "btn");

        // // button three
        // var optionThree = document.createElement("button");
        // optionThree.textContent = "Option Three";
        // optionThree.setAttribute("class", "btn");

        // // button four
        // var optionFour = document.createElement("button");
        // optionFour.textContent = "Option Four";
        // optionFour.setAttribute("class", "btn");

        // // adding buttons to answer-choices div
        // answerChoicesDiv.appendChild(optionOne);
        // answerChoicesDiv.appendChild(optionTwo);
        // answerChoicesDiv.appendChild(optionThree);
        // answerChoicesDiv.appendChild(optionFour);
        
    

        
    };
   createDynamicEl();

    
};

var firstQuestion = function() {
    var firstQItem = questions[0];
    question.textContent = firstQItem.question;
    for(let i = 0; i< questions[0].answerChoices.length; i++) {
        createAnswerButtons(firstQItem.answerChoices[i]);
    }

};

var secondQuestion = function() {
    var secondQItem = questions[1];
    question.textContent = secondQItem.question;
    for(let i = 0; i< questions[1].answerChoices.length; i++) {
        createAnswerButtons(secondQItem.answerChoices[i]);
    }
};

var thirdQuestion = function() {
    var thirdQItem = questions[2];
    question.textContent = thirdQItem.question;
    for(let i = 0; i< questions[2].answerChoices.length; i++) {
        createAnswerButtons(thirdQItem.answerChoices[i]);
    }
};

var fourthQuestion = function() {
    var fourthQItem = questions[3];
    question.textContent = fourthQItem.question;
    for(let i = 0; i< questions[3].answerChoices.length; i++) {
        createAnswerButtons(fourthQItem.answerChoices[i]);
    }
};

let createAnswerButtons = function(buttonTextIndex) {
    var button = document.createElement("button");
    button.textContent = buttonTextIndex;
    button.setAttribute("class", "btn");
    button.setAttribute("id", idCounter);
    answerChoicesDiv.appendChild(button);
    idCounter++;
    console.log(idCounter);
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


startButton.addEventListener("click", startGame);