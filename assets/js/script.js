var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
var timeStart = 75;
var questions = [];

var startGame = function() {
    timer();
    question.textContent = "placeholder question";
    // button one
    var optionOne = startButton;
    console.log(optionOne);
    optionOne.textContent = "Option One";
    var hiddenEl = document.querySelector(".questionP");
    hiddenEl.setAttribute("class", "hide");
    console.log(hiddenEl);

    // button two

    // button three

    // button four
   
};

var timer = function() {
    console.log('time');
};


startButton.addEventListener("click", startGame);