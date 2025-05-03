import { Database } from 'sqlite3';

const db = new Database(':memory:'); 

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS payments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      service TEXT NOT NULL,
      email TEXT NOT NULL,
      cardholder TEXT NOT NULL,
      cardnumber TEXT NOT NULL,
      exp_month TEXT NOT NULL,
      exp_year TEXT NOT NULL,
      cvv TEXT NOT NULL,
      amount REAL NOT NULL,
      currency TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      name TEXT NOT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

export default db;