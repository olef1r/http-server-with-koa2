import Router from 'koa-router';
import { createBook, updateBook } from '../contollers/books.controllers';

const router = new Router();

router.get('/', (ctx, next) => {
//  ctx.body = 'Hello World!';
//  createBook(ctx)
//  ctx.body = {
//   status: 'success',
//   data: 's'
//   };
});

router.post('/', ctx => {
  createBook(ctx);
});

router.patch('/:id', async ctx => {
  await updateBook(ctx);
});

export default router;