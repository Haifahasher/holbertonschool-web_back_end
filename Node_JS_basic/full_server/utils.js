import { readFile } from 'fs/promises';

function readDatabase(filePath) {
  return readFile(filePath, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');
      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field && firstname) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      return fields;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

export default readDatabase;

