import mysql from 'mysql';
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host:process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'books'
});

exports.query = function (sql, props) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      connection.query(sql, props, (err, res) => {
          if (err) reject(err);
          else resolve(res);
        });
    connection.release();
    });
  });
};
