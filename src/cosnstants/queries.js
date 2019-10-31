import moment from 'moment';
import faker from 'faker';

export const insertBook = (obj) => {
  const date = moment(obj.date).format('YYYY-MM-DD');
  return `INSERT INTO books VALUES( 
    '${obj.id || faker.random.uuid()}', '${obj.title}', '${date}',
    '${obj.author}', '${obj.description}', '${obj.image}'  
  )`;
};

export const updateBook = (id, body) => {
  let str = ' ';
  const array = Object.entries(body)
  array.map((a, i) => {
    str += `${a[0]} = '${a[1]}' ${(i === array.length - 1) ? ' ' : ',' }`
  });
  return `
    UPDATE books
    SET ${str}
    WHERE id = '${id}' `
};

export const getBookById = id => `SELECT id FROM books WHERE id='${id}'`;

export const getBooks = () => `SELECT * FROM books`;