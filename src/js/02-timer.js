import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStartEl.setAttribute("disabled", "");
let selectedDate;
let timerId = null;

const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      if (options.defaultDate >= selectedDates[0]) {
         Notify.failure("Please choose a date in the future");
      } else {
         btnStartEl.removeAttribute("disabled");
         console.log(selectedDates[0]);
         selectedDate = selectedDates[0];
      }
      
   },
};
flatpickr("#datetime-picker", options);

btnStartEl.addEventListener('click', () => {
   timerId = setInterval(durationTime, 1000);
   btnStartEl.setAttribute("disabled", "");
});

function durationTime() {
   const currentDate = new Date();
   const durationTime = selectedDate.getTime() - currentDate.getTime();
   const textTime = convertMs(durationTime);
 
   daysEl.textContent = addLeadingZero(textTime.days);
   hoursEl.textContent = addLeadingZero(textTime.hours);
   minutesEl.textContent = addLeadingZero(textTime.minutes);
   secondsEl.textContent = addLeadingZero(textTime.seconds);
}

function addLeadingZero(value) {
   value = String(value);
   return value.padStart(2, '0');
}

function convertMs(ms) {
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
 
   // Remaining days
   const days = Math.floor(ms / day);
   // Remaining hours
   const hours = Math.floor((ms % day) / hour);
   // Remaining minutes
   const minutes = Math.floor(((ms % day) % hour) / minute);
   // Remaining seconds
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
 
   return { days, hours, minutes, seconds };
 }
 
 console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
 console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
 console.log(convertMs(151624140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

