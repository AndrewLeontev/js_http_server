/* eslint linebreak-style: ["error", "windows"] */
import fs from 'fs';
/* eslint-disable-next-line */
import path from 'path';
import http from 'http';

export default (port, callback) => {
  // BEGIN (write your solution here)
  const server = http.createServer((req, res) => {
    let count = 0;
    const file = fs.readFileSync('./phonebook.txt');
    count = file.toString().split('\n').length - 1;

    res.write('Welcome to The Phonebook\n');
    res.write(`Records count: ${count}`);
    res.end();
  });

  server.listen(port, callback);

  // END

// решение учителя
// fs.readFile(path.resolve(__dirname, 'phonebook.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   const users = data.toString().trim().split('\n');
//   const s = http.createServer((request, response) => {
//     const messages = [
//       'Welcome to te Phonebook',
//       `Records count: ${users.length}`,
//     ];
//     response.end(messages.join('\n'));
//   });
//   s.listen(port, callback(s));
// });
};
