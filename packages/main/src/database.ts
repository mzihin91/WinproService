import {Database} from 'sqlite3';
const db = new Database('./file.db');
// create a table and insert a row
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS Servers (id, name, ipAddress, status, directory)');
  // db.run('INSERT INTO Servers VALUES (?, ?, ?, ?, ?)', [
  //   1,
  //   'Server A',
  //   '128.100.77.01',
  //   true,
  //   'asd',
  // ]);
});

export default db;
