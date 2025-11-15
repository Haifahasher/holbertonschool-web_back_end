const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  const output = [];
  const originalLog = console.log;
  console.log = (...args) => {
    output.push(args.join(' '));
  };
  countStudents(process.argv[2])
    .then(() => {
      console.log = originalLog;
      res.end(output.join('\n'));
    })
    .catch((error) => {
      console.log = originalLog;
      res.status(500).end(error.message);
    });
});

app.listen(1245);

module.exports = app;
