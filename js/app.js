"use strict";

let submitInputValue = false; 
let newDate;

function submitInfo() {
  const newTitle = document.getElementById("newTitle").value;
  newDate = document.getElementById("newDate").value;
  targetTitle.innerText = newTitle;
  submitInputValue = true;
}

// update current time

runtime();

function runtime() {

  let dateStringTarget;
  let title = "New Year 2031 starts in ";
  let clockDate = new Date();

  // get dom elements
  const targetTitle = document.getElementById("targetTitle");
  const dateClock = document.getElementById("clockId");
  const targetDate = document.getElementById("targetDate");
  const display = document.getElementById('display');
  const displayClock = document.getElementById('displayClock');

  let upDate, time, nexttime, milliseconds, seconds, minutes, hours, days, weeks, years;

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
    weeks = ((((calculate(time, nexttime) / 1000) / 60) / 60) / 24) / 7;
    years = (((((calculate(time, nexttime) / 1000) / 60) / 60) / 24) / 7) / 52;

    display.innerHTML = `
      <p>milliseconds : <strong>${milliseconds} </strong></p>
      <p>seconds : <strong>${Math.floor(seconds)} </strong></p>
      <p>minutes : <strong>${Math.floor(minutes)} </strong></p>
      <p>hours : <strong>${Math.floor(hours)} </strong></p>
      <p>days : <strong>${Math.floor(days)} </strong></p>
      <p>weeks : <strong>${Math.floor(weeks)} </strong></p>
      <p>years : <strong>${Math.floor(years)} </strong></p>
    `;

    displayClock.innerHTML = `
      <p class="countdown">
        <strong>${Math.floor(years)}</strong> Years
        <strong>${Math.floor(weeks) % 52}</strong> Weeks
        <strong>${Math.floor(days % 7)}</strong> Days  
        <strong>${Math.floor(hours % 24)}</strong> Hours  
        <strong>${Math.floor(minutes % 60)}</strong> Minutes 
        <strong>${Math.floor(seconds % 60)}</strong> Seconds 
      </p>
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