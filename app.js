// Initialize variables
let highest = 20;
let secretNumber = Math.floor(Math.random() * highest) + 1;
let score = 20;
let highscore = localStorage.getItem('highscore') || 0;

// Display the stored highscore on page load
document.querySelector('.highscore').textContent = highscore;

// Function to display a message
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

// Function to handle the game logic
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    // When the Number is out of range
} else if(guess > highest || guess < 1){
    displayMessage('🤦🏽 Number is out of range please try another number');
  // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#6600cc';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      localStorage.setItem('highscore', highscore);
      document.querySelector('.highscore').textContent = highscore;
    }

  // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Function to reset the game
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.floor(Math.random() * highest) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Function to reset the highscore
document.querySelector('.reset-highscore').addEventListener('click', function() {
    highscore = 0;
    localStorage.removeItem('highscore');
    document.querySelector('.highscore').textContent = highscore;
  });