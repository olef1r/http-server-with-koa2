import Router from 'koa-router';
import { createBook } from '../contollers/books.controllers';

const router = new Router();

router.get('/a', (ctx, next) => {
 ctx.body = 'Hello World!';
 createBook(ctx)
 ctx.body = {
  status: 'success',
  data: 's'
};
});

export default router;