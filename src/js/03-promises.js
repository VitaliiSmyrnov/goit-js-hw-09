import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', (e) => {
  e.preventDefault();
  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);

  if (delay <= 0 || step <= 0 || amount <= 0) {
    Notify.failure("values must be positive");
  } else {
    for (let position = 1; position <= amount; position += 1) {
      createPromise(position, delay);
      delay += step;
    }
  }
});

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise.then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  }).catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}


