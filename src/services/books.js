import pool from './config';

async function get() {
  pool.query('SELECT * FROM books', function (err, result, fields) {
    if (err) throw new Error(err)
    // Do something with result.
    console.log(result)
    return result
  })
} 

export default {get}