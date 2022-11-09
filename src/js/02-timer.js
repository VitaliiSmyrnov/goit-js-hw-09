import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStartEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStartEl.setAttribute("disabled", "");
let selectedDate;

const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      if (options.defaultDate >= selectedDates[0]) {
         window.alert("Please choose a date in the future");
      } else {
         btnStartEl.removeAttribute("disabled");
         console.log(selectedDates[0]);
         selectedDate = selectedDates[0];
      }
      
   },
};
flatpickr("#datetime-picker", options);
// console.log('oj pfdujl');
btnStartEl.addEventListener('click', () => {
console.log(selectedDate);
   console.log('Тисну на кнопку');
});

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

