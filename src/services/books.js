import  { query } from './config';
import { insertBook, updateBook, getBookById, getBooks } from '../cosnstants/queries';

async function getAll() {
  try {
    const books =  await query(getBooks());
    console.log("@#!@#", books);
    return books;
  } catch (error) {
    throw error;
  } 
} 

async function insert(obj) {
  try {
    await query(insertBook(obj));
  } catch (error) {
    throw error;
  }
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
    const book = await query(getBookById(id));
    if (book[0]) return true;
    return false;
  } catch (error) {
    throw error;
  } 
};


export default { getAll, insert, update, getById }