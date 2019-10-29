import booksService from '../services/books';

export async function createBook(ctx) {
  await booksService.get()
}