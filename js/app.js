"use strict";

let title = "Hollyday starts";
let clockDate = new Date();
let dateStringTarget = new Date('November 2, 2019 15:05:00');
let dateString = dateStringTarget.toDateString();

// get dom elements
const targetTitle = document.getElementById("targetTitle");
const dateClock = document.getElementById("clockId");
const targetDate = document.getElementById("targetDate");

// get form values

newTitle.addEventListener('click', (evt) => {
  evt.preventDefault();
  const newTitle = document.getElementById("newTitle");
  const newDate = document.getElementById("newDate");
  console.log(newTitle);
  console.log(newDate);
  console.log(evt);
}, false);

// add to dom
targetTitle.innerText = title;
dateClock.innerText = clockDate;
targetDate.innerText = dateString;

// update current time
setInterval(function() {  
  let upDate = new Date();
  targetTitle.innerText = `${title}`;
  dateClock.innerText = upDate;
}, 1000);


console.log(clockDate);
console.log(newTitle);
console.log(newDate);
