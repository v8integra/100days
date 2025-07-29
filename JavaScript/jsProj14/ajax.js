const btn = document.querySelector('.get-quotes');
btn.addEventListener('click', getQuotes);
const number = document.getElementById('number');

function getQuotes(event) {
  event.preventDefault();

  if(number.value.length == 0) {
    return alert('Please eneter a number.')
  }else {
    const https = new XMLHttpRequest();

    https.open('GET', 'https://zenquotes.io/api/quotes', true);
    https.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        let output = "";

        for(let i = 0; i < number.value; i++) {
          output += `
            <li>Quote: ${response[i].q}</li>
            <li>Author: ${response[i].a}</li>
            <hr>
          `
        }

        document.querySelector('.quotes').innerHTML = output;
      }
    }
    https.send();
  }
}