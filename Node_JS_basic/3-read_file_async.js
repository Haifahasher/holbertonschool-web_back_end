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
async function countStudents(path) {
  const db = await agaurd('Cannot load the database', readFileSync, path, {
    encoding: 'utf8',
  });
  const [headers, ...rows] = db
    .split('\n')
    .map((e) => e.split(','))
    .filter((e) => e.length > 1);
  console.log(`Number of students: ${rows.length}`);
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

  firstNamesByField.forEach(([field, firstNames]) => {
    console.log(
      `Number of students in ${field}: ${
        firstNames.length
      }. List: ${firstNames.join(', ')}`,
    );
  });
}

module.exports = countStudents;
