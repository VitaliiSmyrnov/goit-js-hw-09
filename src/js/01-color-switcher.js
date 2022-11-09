const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onButtonStartClick);
btnStop.addEventListener('click', onButtonStopClick);

const timerId = setInterval(changeBodyColor, 1000);

function changeBodyColor() {
   let intervalColor = getRandomHexColor()
   body.style.backgroundColor = intervalColor;
}

function onButtonStartClick() {
   changeBodyColor();
}

function onButtonStopClick() {
   clearInterval(timerId);
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }