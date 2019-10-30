import pool from './config';
import faker from 'faker';
import moment from 'moment';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS books (
    id CHAR(64) NOT NULL,
    title VARCHARACTER(50) NOT NULL,
    date DATE,
    author VARCHARACTER(50) NOT NULL,
    descripion VARCHARACTER(300) NOT NULL,
    image VARCHARACTER(50)	 
)`;

const insertBook = (obj) => {
  return `INSERT INTO books VALUES( 
    '${obj.id}', '${obj.title}', '${obj.date}',
    '${obj.author}', '${obj.description}', '${obj.image}'  
  )`
}

async function createTable() {
  try {
    await pool.query(createTableQuery);
    console.log('Table created');
  } catch(e) {
    throw new Error(err);
  }
} 

async function addBook(obj){ 
  try {
    console.log(insertBook(obj))
    await pool.query(insertBook(obj));
  } catch (error) {
    console.log(error)
  }
};

const fakeDate = date => moment(date).format('YYYY-MM-DD');

const seed = async () => {
  createTable();
  for (let i = 0; i < 5; i++) {
    const obj = {
      id: faker.random.uuid(),
      title: faker.random.words(2),
      date: fakeDate(faker.date.past()),
      author: faker.random.words(2),
      description: faker.random.words(4),
      image: faker.image.abstract()
    }
    await addBook(obj);
  }
}
seed();

setTimeout((function() {
  return process.exit(0);
}), 100);