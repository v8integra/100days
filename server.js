const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 8000;

const users = [
  {id: 1, name: 'Smith'},
  {id: 2, name: 'James'},
  {id: 3, name: 'Abbey'},
]

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return res.status(404).json({
      message: 'Data not found',
    });
  }

  res.json({
    user,
  })
});

app.listen(PORT, () => {
  console.log(`Srever is running on ${PORT}.`);
})