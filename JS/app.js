'use strict'
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const txt = document.getElementById("info-txt");
const btnColor = document.getElementById("btn");
const btnColor2 = document.getElementById("btn1");

toggle.onclick = function() {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    txt.classList.toggle("active");
    btnColor.classList.toggle("active");
    btnColor2.classList.toggle("active");
};


