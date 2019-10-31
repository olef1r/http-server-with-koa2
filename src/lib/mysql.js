import { isEmpty } from 'lodash';

export function createSorting(sortSorting) {
  if (sortSorting === '' || '-') return [];
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
  return `ORDER BY${str}`;
};

export function createCondition(filters) {
  let str = '';
  if (isEmpty(filters)) return '';
  Object.keys(filters).map((key, i) => {
    console.log(key,"#@$",  i)
    str += `${key} = '${filters[key]}' AND `
  }); 
  str = str.slice(0, -4);
  return `WHERE ${str}`;
};
