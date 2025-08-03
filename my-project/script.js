let form = document.getElementById('timer-form');
let timersDiv = document.getElementById('timers');
let alarm = document.getElementById('alarm');

let themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
  document.body.setAttribute('data-theme', themeSwitch.value);
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let datetime = new Date(document.getElementById('datetime').value);
  let label = document.getElementById('event-name').value;
  let now = new Date();

  let seconds = Math.floor((datetime - now) / 1000);
  if (seconds <= 0) {
    alert("Choose a future time.");
    return;
  }

  createTimer(seconds, label);
});

document.querySelectorAll('.presets button').forEach(btn => {
  btn.addEventListener('click', () => {
    let mins = parseInt(btn.getAttribute('data-minutes'));
    createTimer(mins * 60, btn.innerText);
  });
});

function createTimer(seconds, label) {
  let timerBox = document.createElement('div');
  timerBox.className = 'timer';

  let timeDisplay = document.createElement('p');
  let progressBar = document.createElement('div');
  progressBar.className = 'progress';
  let pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pause';

  let original = seconds;
  let paused = false;

  let interval = setInterval(() => {
    if (!paused) {
      seconds--;
      timeDisplay.textContent = formatTime(seconds);
      progressBar.style.width = (seconds / original * 100) + '%';
    }

    if (seconds <= 0) {
      clearInterval(interval);
      alarm.play();
      timeDisplay.textContent = "⏰ " + label + " finished!";
      progressBar.style.width = "100%";
      showNotification(label + " finished!");
    }
  }, 1000);

  pauseButton.addEventListener('click', () => {
    paused = !paused;
    pauseButton.textContent = paused ? "Resume" : "Pause";
  });

  timerBox.innerHTML = `<strong>${label}</strong>`;
  timerBox.appendChild(timeDisplay);
  timerBox.appendChild(progressBar);
  timerBox.appendChild(pauseButton);
  timersDiv.appendChild(timerBox);
}

function formatTime(s) {
  let d = Math.floor(s / 86400);
  let h = Math.floor((s % 86400) / 3600);
  let m = Math.floor((s % 3600) / 60);
  let sec = s % 60;
  return `${d}d ${h}h ${m}m ${sec}s`;
}

function showNotification(msg) {
  if ("Notification" in window) {
    Notification.requestPermission().then(p => {
      if (p === "granted") new Notification("⏰ Timer done!", { body: msg });
    });
  }
}
