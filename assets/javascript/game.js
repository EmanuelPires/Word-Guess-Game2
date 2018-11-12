//Word Guess Game I like the eighties band picking game
//I'm gonna try the same thing
//Create an array that has the words/bandnames
//have the word be displayed as dashes
//Have the users guess letters and
//display as an incorrect letter and if wrong and take down guesses-1
//Have the users letter replace the dashes for the
//letters if the user letter is correct
//have the wins +1 once all letters are guessed.

// document.addEventListener("DOMContentLoaded", function() {
//   for (i = 0; i < bandGuess.length; i++) {
//     guessingWord[i] = "_";
//   }
//   currentWordIndex = guessingWord.join(" ");
//   document.getElementById("guessword").innerHTML = currentWordIndex;
// });

// //user input section

// document.onkeyup = function() {
//   var userKeyPress = String.fromCharCode(event.keyCode);
//   lettersGuessed.push(userKeyPress);

//   document.getElementById("guessedletter").innerHTML = lettersGuessed;
//   if (eve)
// };

var selectableWords = ["phil collins", "styx", "sting"];

const maxTries = 11;

var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var hasFinished = false;
var gameStarted = false;
var wins = 0;

function resetGame() {
  remainingGuesses = maxTries;
  gameStarted = false;

  currentWordIndex = Math.floor(Math.random() * selectableWords.length);

  guessedLetters = [];
  guessingWord = [];

  for (var i = 0; i < selectableWords[currentWordIndex].length; i++) {
    guessingWord.push("_");
  }
  updateDisplay();
}
function updateDisplay() {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = "";
  for (var i = 0; i < guessingWord.length; i++) {
    document.getElementById("currentWord").innerText += guessingWord[i];
  }
  document.getElementById("remainingGuesses").innerText = remainingGuesses;
  document.getElementById("guessedLetters").innerText = guessedLetters;
  if (remainingGuesses <= 0) {
    hasFinished = true;
  }
}

document.onkeydown = function(event) {
  if (hasFinished) {
    resetGame();
    hasFinished = false;
  } else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      makeGuess(event.key.toLowerCase());
    }
  }
};

function makeGuess(letter) {
  if (remainingGuesses > 0) {
    if (!gameStarted) {
      gameStarted = true;
    }
    if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      evaluateguess(letter);
    }
  }
  updateDisplay();
  checkWin();
}
