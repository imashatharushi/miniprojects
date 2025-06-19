const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber);

const attempts = 10;
let guessCount = 0;

const guessingNumber = document.getElementById('guessingNumber');
const guessingForm = document.getElementById('guessingForm');
const resetBtn = document.getElementById('resetBtn');

const hint = document.getElementById('hint');
const attemptsEl = document.getElementById('attempts');
const history = document.getElementById('history');

let guessHistory = [];

guessingForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const guess = parseInt(guessingNumber.value);

  checkGuess(guess);
  guessingNumber.value = '';
});

resetBtn.addEventListener('click', function () {
  location.reload();
});

function checkGuess(guess) {
  guessCount++;
  guessHistory.push(guess);

  attemptsEl.textContent = `Attempts left: ${attempts - guessCount}`;

  if (guess === randomNumber) {
    guessingForm.style.display = 'none';
    hint.textContent = 'You guessed the correct number!';
    attemptsEl.textContent = `You took ${guessCount} attempts to guess the number.`;
    history.textContent = `Your guess history: ${guessHistory.join(', ')}`;
  } else if (guess < randomNumber) {
    hint.textContent = 'Too low! Try Again....';
    history.textContent = `Your guess history: ${guessHistory.join(', ')}`;
  } else if (guess > randomNumber) {
    hint.textContent = 'Too High! Try Again....';
    history.textContent = `Your guess history: ${guessHistory.join(', ')}`;
  }

  if (guessCount === attempts) {
    guessingForm.style.display = 'none';
    hint.textContent = `You have used all your attempts! Refresh the page to try again. `;
  }
}
