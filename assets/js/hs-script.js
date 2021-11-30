const $answerChoicesDiv = document.querySelector(".answer-choices");
var highScores = JSON.parse(localStorage.getItem("highScores"));

for(let i =0; i < highScores.length; i++) {
    var $highScoreEl = document.createElement("p");
    $highScoreEl.setAttribute("class", "high-score");
    $highScoreEl.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
    $answerChoicesDiv.appendChild($highScoreEl);
}
