const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  let responseText = 'This is the list of our students\n';

  countStudents(process.argv[2])
    .then((lines) => {
      responseText += lines.join('\n');
      res.status(200).send(responseText);
    })
    .catch(() => {
      res.status(500).send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT, () => {});

module.exports = app;
