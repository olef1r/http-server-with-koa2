import Router from 'koa-router';
import { createBook, updateBook, getAllBooks } from '../contollers/books.controllers';

const router = new Router();

router.get('/', async ctx => {
  await getAllBooks(ctx);
});

router.post('/', async ctx => {
  await createBook(ctx);
});

router.patch('/:id', async ctx => {
  await updateBook(ctx);
});

export default router;