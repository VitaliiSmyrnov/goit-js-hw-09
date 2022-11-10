import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDelayElem = document.querySelector('[name="delay"]');
const inputDelayStepElem = document.querySelector('[name="step"]');
const inputAmountElem = document.querySelector('[name="amount"]');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
