const http = require('node:http');

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello Holberton School!');
});

module.exports = app;
app.listen(1245);
