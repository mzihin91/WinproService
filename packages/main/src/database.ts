import {Database} from 'sqlite3';
const db = new Database('./file.db');
// create a table and insert a row
console.log('creating table...');
db.serialize(() => {
  db.run(
    // 'CREATE TABLE IF NOT EXISTS Servers (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(200) NOT NULL, ipAddress VARCHAR(200) NOT NULL, status BOOLEAN NOT NULL, directory TEXT NOT NULL)',
    'CREATE TABLE IF NOT EXISTS Servers (name VARCHAR(200) NOT NULL, ipAddress VARCHAR(200) NOT NULL, status BOOLEAN NOT NULL, directory TEXT NOT NULL)',
  );
  // db.run('INSERT INTO Servers VALUES (name, ipAddress, status, directory)', [
  //   'Server A',
  //   '128.100.77.01',
  //   true,
  //   'asd',
  // ]);
});

export default db;
