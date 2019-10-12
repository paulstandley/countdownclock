"use strict";

let title = "Hollyday in";
let clockDate = Date();
console.log(clockDate);
// get dom elements h2 section
const h2Title = document.getElementById("h2Id");
const dateClock = document.getElementById("clockId");

h2Title.innerText = title;
dateClock.innerText = clockDate;
console.log(h2Title);

