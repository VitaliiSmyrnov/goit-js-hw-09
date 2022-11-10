import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('.form');
const inputDelayElem = document.querySelector('[name="delay"]');
const inputDelayStepElem = document.querySelector('[name="step"]');
const inputAmountElem = document.querySelector('[name="amount"]');
const btnElem = document.querySelector('.form button');


btnElem.addEventListener('click', (e) => {
  e.preventDefault();
  const times = inputAmountElem.value;
  console.log(times);
  for (let i = 0; i < times; i += 1) {
    createPromise(position, delay)
  }
});



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
