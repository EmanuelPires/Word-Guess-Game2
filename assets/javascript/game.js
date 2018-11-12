//Word Guess Game I like the eighties band picking game
//I'm gonna try the same thing
//Create an array that has the words/bandnames
//have the word be displayed as dashes
//Have the users guess letters and
//display as an incorrect letter and if wrong and take down guesses-1
//Have the users letter replace the dashes for the
//letters if the user letter is correct
//have the wins +1 once all letters are guessed.

var randomWordArr = ["phil collins", "styx", "sting"];
bandGuess = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

var currentWordIndex;
var answerArray = [];
var lettersGuessed = [];
var remainingGuesses = 11;

document.addEventListener("DOMContentLoaded", function() {
  for (i = 0; i < bandGuess.length; i++) {
    answerArray[i] = "_";
  }
  currentWordIndex = answerArray.join(" ");
  document.getElementById("guessword").innerHTML = currentWordIndex;
});

//user input section

document.onkeyup = function() {
  var userKeyPress = String.fromCharCode(event.keyCode);
  lettersGuessed.push(userKeyPress);

  document.getElementById("guessedletter").innerHTML = lettersGuessed;
};
