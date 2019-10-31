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

export const getBooks = (obj) => {
  return `
    SELECT * FROM books
    ${obj.sort ? createSorting(obj.sort) : ''}
  `
};

function createSorting(sortSorting) {
  if (sortSorting === '') return [];
  const arr = sortSorting.split(',');
  const ordering =  arr.map(item => {
    if (item.charAt(0) === '-') {
      return [item.substr(1), 'DESC'];
    }
    return [item, 'ASC'];
  });
  let str = ' ';
  ordering.map((o, i) => {
    str += `${o[0]} ${o[1]}${(i === ordering.length - 1) ? ' ' : ',' }`
  });
  console.log(`ORDER BY ${str}`)
  return `ORDER BY${str}`;
}