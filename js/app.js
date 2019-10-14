"use strict";

let title = "Hollyday starts";
let clockDate = new Date();
let dateStringTarget = new Date('November 2, 2019 15:05:00');
let dateString = dateStringTarget.toDateString();

// get dom elements
const targetTitle = document.getElementById("targetTitle");
const dateClock = document.getElementById("clockId");
const targetDate = document.getElementById("targetDate");
const diff = document.getElementById('diff');

// get form values
const submit = document.getElementById('submit');

function submitInfo(evt) {
  evt.preventDefault();
  const title = document.getElementById("newTitle");
  console.log(title)
}

// add to dom
targetTitle.innerText = title;
dateClock.innerText = clockDate;
targetDate.innerText = dateString;

// update current time
setInterval(function() {  
  let upDate = new Date();
  let time = new Date().getTime();
  let nexttime = new Date('November 2, 2019 15:05:00').getTime();
  diff.innerHTML = `<p>milliseconds :${calculate(time, nexttime)}</p>
    <p>seconds : ${Math.floor(calculate(time, nexttime) / 1000)}
    <p>minutes : ${Math.floor((calculate(time, nexttime) / 1000) / 60)}</p>
    <p>hours : ${Math.floor(((calculate(time, nexttime) / 1000) / 60) / 60)}</p>
    <p>days : ${Math.floor((((calculate(time, nexttime) / 1000) / 60) / 60) / 24)}</p>
    `;
  targetTitle.innerText = `${title}`;
  dateClock.innerText = upDate;
}, 100);

// calculate difference between two dates
function calculate(time, nexttime) {
  return nexttime - time;
}

console.log(clockDate);
console.log(newTitle);
console.log(newDate);
