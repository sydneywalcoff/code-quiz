var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
var timeStart = 75;
var questions = [];

var startGame = function() {
    timer();
    question.textContent = "placeholder question";

    // hides the `p` element and the start button 
    var hiddenP = document.querySelector(".questionP");
    hiddenP.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide")

    // defines answer-choices div
    var answerChoicesDiv = document.querySelector(".answer-choices");


    // button one
    var optionOne = document.createElement("button");
    optionOne.textContent = "Option One";
    optionOne.setAttribute("class", "btn");

    // button two
    var optionTwo = document.createElement("button");
    optionTwo.textContent = "Option Two";
    optionTwo.setAttribute("class", "btn");

    // button three
    var optionThree = document.createElement("button");
    optionThree.textContent = "Option Three";
    optionThree.setAttribute("class", "btn");

    // button four
    var optionFour = document.createElement("button");
    optionFour.textContent = "Option Four";
    optionFour.setAttribute("class", "btn");

    // adding buttons to answer-choices div
    answerChoicesDiv.appendChild(optionOne);
    answerChoicesDiv.appendChild(optionTwo);
    answerChoicesDiv.appendChild(optionThree);
    answerChoicesDiv.appendChild(optionFour);
   
};

var timer = function() {
    console.log('time');
};


startButton.addEventListener("click", startGame);