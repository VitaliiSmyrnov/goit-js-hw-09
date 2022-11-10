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
  if (delay === '' || step === '' || amount === '') {
    Notify.failure("Please, fill in all the fields");
  } else {
    for (let i = 0; i < amount; i += 1) {
      // createPromise(position, delay)
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
