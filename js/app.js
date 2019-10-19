"use strict";

let submitInputValue = false; 
let newDate;

function submitInfo() {
  const newTitle = document.getElementById("newTitle").value;
  newDate = document.getElementById("newDate").value;
  const newTime = document.getElementById("newTime").value;
  let newDateTime = new Date(`${newDate}, ${newTime}`).getTime();
  targetTitle.innerText = newTitle;
  submitInputValue = true;
  console.log(newDateTime);
}

// update current time

runtime();

function runtime() {
  let dateStringTarget;
  let title = "New Year starts in ";
  let clockDate = new Date();

  // get dom elements
  const targetTitle = document.getElementById("targetTitle");
  const dateClock = document.getElementById("clockId");
  const targetDate = document.getElementById("targetDate");
  const display = document.getElementById('display');
  const displayClock = document.getElementById('displayClock');

  let upDate, time, nexttime, milliseconds, seconds, minutes, hours, days;

  setInterval(() => {

    upDate = new Date();
    time = new Date().getTime();
    if(submitInputValue) {
      nexttime = new Date(`${inputFunc()}`).getTime();
    }else{
      nexttime = new Date('December 31, 2030 23:59:59').getTime();
    }

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

    displayClock.innerHTML = `
      <p>
      <strong>${Math.floor(days)}</strong> Days  
      <strong>${Math.floor(hours % 24)}</strong> Hours  
      <strong>${Math.floor(minutes % 60)}</strong> Minutes 
      <strong>${Math.floor(seconds % 60)}</strong> Seconds </p>
    `;

    dateClock.innerText = upDate;
    targetDate.innerText =  inputFunc();

  }, 100);
    
  // add to dom
  targetTitle.innerText = title;
  dateClock.innerText = clockDate;

  function inputFunc() {
    
    if(submitInputValue) {
      dateStringTarget = new Date(newDate);
    }
    else{
      dateStringTarget = new Date('December 31, 2030 23:59:59');
    }
    let dateString = dateStringTarget.toDateString();
    return dateString;
  }
}

// calculate difference between two dates
function calculate(time, nexttime) {
  if(time - nexttime < 0) {
    return nexttime - time;
  }else{
    return 0;
  }
}