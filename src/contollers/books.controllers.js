import Joi from 'joi';
import { pick } from 'lodash';
import booksService from '../services/books';

const ALLOWED_FILEDS_TO_UPDATE = ['title', 'author', 'description', 'image', 'date'];

const schema = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  image: Joi.string().required(),
  date: Joi.date().required(),
})

export async function getAllBooks(ctx) {
  try {
    console.log(ctx.query)
    const res = await booksService.getAll(ctx.query)
    console.log("#$#$%",res)
    ctx.body = res;
  } catch (error) {
    ctx.status = 400;
    ctx.body = error;
  };
};

export async function createBook(ctx) {
  try {
    let { body } = ctx.request;
    const result = await Joi.validate(body, schema);
    await booksService.insert(result);
    ctx.body = 'Succsess';
  } catch (error) {
    ctx.status = 400;
    ctx.body = error;
  };
};

export async function updateBook(ctx) {
  try {
    const { id } = ctx.params;
    const data = pick(ctx.request.body, ALLOWED_FILEDS_TO_UPDATE);
    const isExist = await booksService.getById(id)
    if (isExist) {
      const result = await booksService.update(id, data);
      ctx.body = `${result.message} for id ${id}`;
    } else {
      ctx.body = `There is any book with id = ${id}`;
    };
  } catch (error) {
    ctx.status = 400
    ctx.throw(error)
  };
};