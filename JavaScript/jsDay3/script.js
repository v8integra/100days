const hex = document.querySelector(".hex");
const random = document.querySelector(".random");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("random")) {
    let color = Math.random().toString(16).substring(2, 8);
    hex.innerHTML = `#${color}`;
  }
  document.body.style.backgroundColor = hex.innerHTML;
})
