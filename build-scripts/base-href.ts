import { readFile, writeFile } from 'fs-extra';
import { join } from 'path';

const baseHref = process.argv[2] || '/';

const filePath = join(__dirname, '..', 'dist', 'index.html');

readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  const modifiedHTML = data.replace(/<base href=".*"s*\/?>/, `<base href="${baseHref}">`);

  writeFile(filePath, modifiedHTML, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
    } else {
      console.log('base href replaced successfully!');
    }
  });
});
