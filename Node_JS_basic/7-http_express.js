const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = process.argv[2];
  const header = 'This is the list of our students\n';

  countStudents(databaseFile)
    .then((lines) => {
      // lines is expected to be an array of strings from 3-read_file_async.js
      res.send(header + lines.join('\n'));
    })
    .catch(() => {
      // When database is not available
      res.send(`${header}Cannot load the database`);
    });
});

app.listen(PORT);

module.exports = app;
