const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');
let timerId = null;

btnStop.setAttribute("disabled", "");
btnStart.addEventListener('click', onButtonStartClick);
btnStop.addEventListener('click', onButtonStopClick);

function changeBodyColor() {
   let intervalColor = getRandomHexColor()
   body.style.backgroundColor = intervalColor;
}

function onButtonStartClick() {
   timerId = setInterval(changeBodyColor, 1000);
   btnStart.setAttribute("disabled", "");
   btnStop.removeAttribute("disabled");
}

function onButtonStopClick() {
   clearInterval(timerId);
   btnStop.setAttribute("disabled", "");
   btnStart.removeAttribute("disabled");
}

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }