const http = require('node:http');
const { readFileSync } = require('node:fs');

const _atry = async (fn, ...args) => {
  try {
    return { isError: false, value: await fn(...args) };
  } catch (e) {
    return { isError: true, value: e };
  }
};
const agaurd = async (msg, fn, ...args) => {
  const result = await _atry(fn, ...args);
  if (result.isError) throw new Error(msg);
  return result.value;
};
async function countStudentsStr(path) {
  const db = await agaurd('Cannot load the database', readFileSync, path, {
    encoding: 'utf8',
  });
  const [headers, ...rows] = db
    .split('\n')
    .map((e) => e.split(','))
    .filter((e) => e.length > 1);
  const fieldIndex = headers.indexOf('field');
  const firstNameIndex = headers.indexOf('firstname');
  const fields = rows.reduce(
    (fl, s) => (fl.includes(s[fieldIndex]) ? fl : fl.concat([s[fieldIndex]])),
    [],
  );
  const firstNamesByField = fields.map((f) => [
    f,
    rows.filter((s) => s[fieldIndex] === f).map((s) => s[firstNameIndex]),
  ]);

  return firstNamesByField
    .reduce(
      (res, [field, firstNames]) => res.concat([
        `Number of students in ${field}: ${
          firstNames.length
        }. List: ${firstNames.join(', ')}`,
      ]),
      [`Number of students: ${rows.length}`],
    )
    .join('\n');
}

const app = http.createServer(async (req, res) => {
  const { method, url } = req;
  if (method.toLowerCase() !== 'get') return;
  if (url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('This is the list of our students\n');
    try {
      const stds = await countStudentsStr(process.argv[2]);
      res.end(stds);
    } catch (e) {
      res.end('Cannot load the database');
    }
  }
});

module.exports = app;
app.listen(1245);
