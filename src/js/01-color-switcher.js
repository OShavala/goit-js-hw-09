const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  document.body.style.background = getRandomHexColor();
}

function startColorChanging() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorChanging() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}


startButton.addEventListener('click', startColorChanging);
stopButton.addEventListener('click', stopColorChanging);


