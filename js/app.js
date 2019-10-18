"use strict";

runtime();

let inputValueArray = [];

function submitInfo() {
  const newTitle = document.getElementById("newTitle").value;
  const newDate = document.getElementById("newDate").value;
  const newTime = document.getElementById("newTime").value;
  let newDateTime = new Date(`${newDate}, ${newTime}`).getTime();
  targetTitle.innerText = newTitle;
  console.log(newDateTime);
}

// update current time
function runtime() {

  let title = "Hollyday starts";
  let clockDate = new Date();
  let dateStringTarget = new Date('November 2, 2019 15:05:00');
  let dateString = dateStringTarget.toDateString();

  // get dom elements
  const targetTitle = document.getElementById("targetTitle");
  const dateClock = document.getElementById("clockId");
  const targetDate = document.getElementById("targetDate");
  const display = document.getElementById('display');

  let upDate, time, nexttime, milliseconds, seconds, minutes, hours, days;

  setInterval(() => {
    upDate = new Date();
    time = new Date().getTime();
    nexttime = new Date('November 2, 2019 15:05:00').getTime();
    milliseconds = calculate(time, nexttime);
    seconds = calculate(time, nexttime) / 1000;
    minutes = (calculate(time, nexttime) / 1000) / 60;
    hours = ((calculate(time, nexttime) / 1000) / 60) / 60;
    days = (((calculate(time, nexttime) / 1000) / 60) / 60) / 24;
    display.innerHTML = `
      <p>milliseconds :${milliseconds}</p>
      <p>seconds : ${Math.floor(seconds)}
      <p>minutes : ${Math.floor(minutes)}</p>
      <p>hours : ${Math.floor(hours)}</p>
      <p>days : ${Math.floor(days)}</p>
    `;
    dateClock.innerText = upDate;
  }, 100);
    
  // add to dom
  targetTitle.innerText = title;
  dateClock.innerText = clockDate;
  targetDate.innerText = dateString;
  targetTitle.innerText = title;

}

// calculate difference between two dates
function calculate(time, nexttime) {
  return nexttime - time;
}