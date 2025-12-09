let time = document.querySelector(".time");

function timeset() {
  let clock = new Date();
  let hours = clock.getHours();
  let minutes = clock.getMinutes();
  let seconds = clock.getSeconds();
  let AMPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  time.innerHTML = `${hours} : ${minutes} : ${seconds} ${AMPM}`;
}
setInterval(timeset, 1000);
timeset();

// .......menubar,,,,,,,

let ul = document.querySelector("#sidemenu");
let openmenu = document.querySelector("#menu-icon");
let closemenu = document.querySelector("#cross-icon");

openmenu.addEventListener("click", function () {
  ul.style.display = "block";
});

closemenu.addEventListener("click", function () {
  ul.style.display = "none";
  console.log("hai");
});

// contact


let form = document.querySelector("#contact-form");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let button = document.querySelector(".sub-btn");

button.addEventListener("click", function () {
  setTimeout(() => {
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }, 500); // wait for web3forms submit
});



// all popups
let popups = document.querySelectorAll(".react, .javascript, .html, .css, .sql, .java");

// Function to close all popups
function closeAll() {
  popups.forEach(p => p.style.display = "none");
}

// --- React ---
document.querySelector(".R").addEventListener("click", function () {
  closeAll();
  document.querySelector(".react").style.display = "block";
});
document.querySelector(".react-1 button").addEventListener("click", closeAll);


// --- JavaScript ---
document.querySelector(".J").addEventListener("click", function () {
  closeAll();
  document.querySelector(".javascript").style.display = "block";
});
document.querySelector(".javascript-1 button").addEventListener("click", closeAll);


// --- HTML ---
document.querySelector(".H").addEventListener("click", function () {
  closeAll();
  document.querySelector(".html").style.display = "block";
});
document.querySelector(".html-1 button").addEventListener("click", closeAll);


// --- CSS ---
document.querySelector(".C").addEventListener("click", function () {
  closeAll();
  document.querySelector(".css").style.display = "block";
});
document.querySelector(".css-1 button").addEventListener("click", closeAll);


// --- SQL ---
document.querySelector(".S").addEventListener("click", function () {
  closeAll();
  document.querySelector(".sql").style.display = "block";
});
document.querySelector(".sql-1 button").addEventListener("click", closeAll);


// --- JAVA ---
document.querySelector(".JV").addEventListener("click", function () {
  closeAll();
  document.querySelector(".java").style.display = "block";
});
document.querySelector(".java-1 button").addEventListener("click", closeAll);
