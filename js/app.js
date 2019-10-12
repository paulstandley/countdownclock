"use strict";

let title = "Hollyday in";
let clockDate = new Date();
// get dom elements h2 section
const h2Title = document.getElementById("h2Id");
const dateClock = document.getElementById("clockId");
// add to dom
h2Title.innerText = title;
dateClock.innerText = clockDate;

setInterval(function() {  
let clockDate = new Date();
let dateYear = new Date().getFullYear();
//console.dir(clockDate);
// add to dom
h2Title.innerText = title;
dateClock.innerText = clockDate;
}, 1000);
console.log(h2Title);
