import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('.form');
const inputDelayElem = document.querySelector('[name="delay"]');
const inputDelayStepElem = document.querySelector('[name="step"]');
const inputAmountElem = document.querySelector('[name="amount"]');
const btnElem = document.querySelector('.form button');


btnElem.addEventListener('click', (e) => {
  e.preventDefault();
  const delay = inputDelayElem.value;
  const step = inputDelayStepElem.value;
  const amount = inputAmountElem.value;

  if ((delay === '' || delay < 0) || (step === '' || step < 0) || (amount === '' || amount < 0)) {
    Notify.failure("Please, fill in all the fields, value must be positive or zero");
  } else {
    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay);
      delay += step;
    }
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
