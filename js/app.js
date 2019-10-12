"use strict";

let title = "Hollyday starts";
let clockDate = new Date();
let birthdayHollday = new Date('November 2, 2019 15:05:00');
let date1 = birthdayHollday.toDateString();

console.log(date1);
console.dir(clockDate);
// get dom elements h2 section
const targetTitle = document.getElementById("targetTitle");
const dateClock = document.getElementById("clockId");
const targetDate = document.getElementById("targetDate");
// add to dom
targetTitle.innerText = title;
dateClock.innerText = clockDate;
targetDate.innerText = date1;

setInterval(function() {  
let clockDate = new Date();
let dateYear = new Date().getFullYear();
//console.dir(clockDate);
// add to dom
targetTitle.innerText = `${title}`;
dateClock.innerText = clockDate;
}, 1000);
console.log(targetTitle);
