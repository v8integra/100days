const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  const word = document.querySelector(".input-text").value;
  let length = word.length;

  let start = word.substring(0, Math.floor(length/2)).toLowerCase();
  let end = word.substring(length - Math.floor(length/2)).toLowerCase();
  let reversed = [...end].reverse().join("");

  if (start === reversed) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome!!!`
  } else {
    result.innerHTML = `${word.toUpperCase()} is not a palindrome!!!`
  }
}