// import pool from './config';
import { insertBook, updateBook, getBookById } from '../cosnstants/queries';
var query = require('./config').query;


async function get() {
  const res = pool.query('SELECT * FROM books', function (err, result, fields) {
    if (err) throw new Error(err)
    // Do something with result.
   
    return result
  })
  console.log(res)
} 

async function insert(obj) {
  await pool.query(insertBook(obj), err => {
    if (err) throw Error(err); 
  });
};

async function update(id, obj) {
  try {
    return await query(updateBook(id, obj));
  } catch (error) {
    throw error;
  } 
};


async function getById(id) {
  try {
    const book =  await query(getBookById(id), [id]);
    if (book[0]) return true;
    return false;
  } catch (error) {
    throw error;
  } 
};


export default { get, insert, update, getById }