const express = require('express');

const app = express();
module.exports = app;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);
