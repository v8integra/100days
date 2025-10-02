const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener('click', () => {
  fetch('http:localhost:8000/1')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      output.innerHTML = `<h1>${data.user.name}</h1>`;
    })
})