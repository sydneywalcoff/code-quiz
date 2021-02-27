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
    let answers = firstQItem.answerChoices;
    let correct;
    question.textContent = firstQItem.question;
    const firstChoice = document.createElement("button");
    firstChoice.textContent = answers[0];
    firstChoice.addEventListener("click", function(){
        if(firstChoice.textContent === firstQItem.correctAnswer) {
            correctAnswer();
        } else {
            wrongAnswer();
        }
    });
    const secondChoice = document.createElement("button");
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

    answerChoicesDiv.appendChild(firstChoice);
    answerChoicesDiv.appendChild(secondChoice);
    answerChoicesDiv.appendChild(thirdChoice);
    answerChoicesDiv.appendChild(fourthChoice);

    
    
};

const wrongAnswer = function() {
    alert('wrong!');

};

const correctAnswer = function() {
    alert("correct!");
};

var highScores = function() {
    hideEl();

    highScore.textContent = "Start Over";
    question.textContent = "High Scores";
    highScore.addEventListener("click", function(){
        location.reload(true);
    });
    
};


var hideEl = function() {
    var hiddenP = document.querySelector(".questionP");
    hiddenP.setAttribute("class", "hide");
    startButton.setAttribute("class", "hide")
};

var timer = function() {
    // grab timer element
    var timeRemaining = document.querySelector(".timer").textContent;
    timeRemaining = 75;
    var countdown = setInterval(function() {
        timeRemaining--;
        document.querySelector(".timer").textContent = timeRemaining;
        if (timeRemaining <= 0) clearInterval(countdown)
    }, 1000);
    return timeRemaining;
};



// const stopTimer = function(timeRemaining) {
//     clearInterval();
//     let score = timeRemaining;
//     return score;
// };

// const saveScore = function(score) {
//     let name = prompt("Congrats on making it to the end! What is your name?");
//     let saveFile = {
//         name: name,
//         score: score
//     }
//     let savedScore = localStorage.setItem("userNameScore", JSON.stringify(saveFile))
// };


startButton.addEventListener("click", playGame);
highScore.addEventListener("click", highScores);