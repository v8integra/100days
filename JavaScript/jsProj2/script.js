const count = document.querySelector(".count");
const random = document.querySelector(".random");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("random")) {
    count.innerHTML = Math.floor(Math.random()*100);
  }
})
