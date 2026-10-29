// Declare global variables
let randomNumber, guessesLeft, previousGuesses;

// Target elements in HTML
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const guessesLeftDisplay = document.getElementById("guessesLeft");
const previousGuessesDisplay = document.getElementById("previousGuesses");
const restartButton = document.getElementById("restartButton");

function initGame() {
  // Create a random number
  randomNumber = Math.floor(Math.random() * 100) + 1;

  // reset feedback p
  feedback.textContent = "";

  // Reset gueses left to 10 and p
  guessesLeft = 10;
  guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;

  // Previous Guesses reset array and p
  previousGuesses = [];
  previousGuessesDisplay.textContent = "";

  // reenable guessInput and guessButton
  guessInput.disabled = false;
  guessButton.disabled = false;

  // hide restartGame button
  restartButton.classList.toggle("visible");

  // empty the input
  guessInput.value = "";
}

// Run the initGame function on page load
initGame();

// run the check guess function when we click the guess button
guessButton.addEventListener("click", checkGuess);
// run the initGame function when we click the restart game button
restartButton.addEventListener("click", initGame);

function checkGuess() {
  // get the value the user put in the input
  const userGuess = Number(guessInput.value);

  // Validate the user's input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  // reduce guesses left by 1
  guessesLeft--;
  // update the guesses left p
  guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;

  // update the previous guesses array
  previousGuesses.push(userGuess);
  //   update the previous guesses p
  previousGuessesDisplay.textContent = `Previous Guesses: ${previousGuesses.join(", ")}`;

  // update the feedback p based on the users num vs random num
  // too high, too low, really close (if within 5), correct, you lose
  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You win! The number was ${randomNumber}`;
    endGame();
    return;
  } else if (Math.abs(userGuess - randomNumber) <= 5) {
    feedback.textContent = `You're really close! Within 5!`;
  } else if (userGuess < randomNumber) {
    feedback.textContent = `Too low! Guess higher!`;
  } else {
    feedback.textContent = `Too high! Guess lower!`;
  }

  //   End the game if no guesses remain
  if (guessesLeft === 0) {
    feedback.textContent = `Game over! No guesses left! The number was ${randomNumber}`;
    endGame();
  }
}

function endGame() {
  // disable the input and guess button
  guessInput.disabled = true;
  guessButton.disabled = true;

  // show the restart button
  restartButton.classList.toggle("visible");
}

// Bonus sidequest!  Run the guess function when we hit enter on our keyboard
window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Bonus sidequest!  Restart the game when we press R on keyboard
window.addEventListener("keydown", function (event) {
  if (
    event.key.toLowerCase() === "r" &&
    !restartButton.classList.contains("visible")
  ) {
    initGame();
  }
});
