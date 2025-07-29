const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const word = document.querySelector(".input-text");

btn.addEventListener("click", vowelCounter);

function vowelCounter() {
  let vowelCount = 0;
  let wordValue = word.value.toLowerCase();

  for (let i = 0; i < wordValue.length; i++) {
    let letter = wordValue[i];
    if (letter.match(/([a,e,i,o,u])/)) {
      vowelCount++;
    }
  }

  result.innerHTML = `${wordValue.toUpperCase()} has ${vowelCount} vowels`;
}