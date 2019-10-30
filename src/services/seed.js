import mysql from 'mysql';
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host:process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'books'
});

async function createTable() {
  pool.config.connectionConfig.database = 'books';
  await pool.query('CREATE TABLE IF NOT EXISTS pet ( name VARCHAR(20), owner VARCHAR(20) )', (err) => {
    if (err) throw new Error(err);
    console.log('Table created')
  });
} 

async function addBook(){ 
  await pool.query('insert into books (name, owner) values("name", "owner")');
};

const forLoop = async _ => {
  createTable();
  for (let index = 0; index < 5; index++) {
    await addBook()
  }
}
forLoop();

setTimeout((function() {
  return process.exit(0);
}), 100);