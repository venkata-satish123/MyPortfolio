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
