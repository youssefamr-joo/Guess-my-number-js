'use strict';
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const numberPlace = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScoreValue = 0;
let highScore = document.querySelector('.highscore');

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// ! control check btn
checkButton.addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    numberPlace.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // check high score
    if (score > highScoreValue) {
      highScoreValue = score;
      highScore.textContent = highScoreValue;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈 Too High!' : ' 📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      changeMessage.textContent = '🤬 You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// handle reset button
againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(' Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
