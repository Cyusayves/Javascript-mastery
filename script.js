 let randomNumber = Math.floor(Math.random() * 100) + 1;

 function checkGuess() {
  let guess = parseInt(document.getElementById('guess').value);
  let message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
  } else if (guess === randomNumber) {
    message.textContent = "🎉 Congratulations! You guessed it!";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low, try again.";
  } else {
    message.textContent = "📈 Too high, try again.";
}
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById('guess').value = "";
  document.getElementById('message').textContent = "Game reset! Guess a number between 1 and 100.";
}

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle theme & save it
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark':'light');
});