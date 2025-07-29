const count = document.querySelector(".count");
const sub = document.querySelector(".subtract");
const resetCount = document.querySelector(".reset");
const add = document.querySelector(".add");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
  }
  setColor();
})

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}
