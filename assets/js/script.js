var startButton = document.querySelector(".btn");
var question = document.querySelector("h1");
var timeStart = 75;
var questions = [
    {
        question: "What is my hebrew name?",
        answerChoices: ["Batsheva", "Chana", "Shiriel", "Lior"]
    },
    {
        question: "What is my dog's name",
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

var startGame = function() {
    timer();

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
   
    // for loop to add questions to h1 el
    for(let i = 0; i < questions.length; i++) {
        question.textContent = questions[i].question;
        console.log(question.textContent);
    }

};

var timer = function() {
    console.log('time');

    // if !answer subtract 10 seconds from timer
};


startButton.addEventListener("click", startGame);