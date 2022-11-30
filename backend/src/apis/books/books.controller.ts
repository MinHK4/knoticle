import { Request, Response } from 'express';

import booksService from '@apis/books/books.service';

import { FindBooks, SearchBooks } from './books.interface';

const getBook = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  let userId = res.locals.user?.id;

  if (!userId) userId = 0;

  const book = await booksService.findBook(+bookId, userId);

  res.status(200).send(book);
};

const getBooks = async (req: Request, res: Response) => {
  const { order, take, editor } = req.query as unknown as FindBooks;

  let userId = res.locals.user?.id;

  if (!userId) userId = 0;

  const books = await booksService.findBooks({ order, take: +take, userId, editor });

  res.status(200).send(books);
};

const getSearchedBooks = async (req: Request, res: Response) => {
  const { query, page, userId } = req.query as unknown as SearchBooks;

  const books = await booksService.searchBooks({ query, userId, page });

  res.status(200).send(books);
};

export default {
  getBook,
  getBooks,
  getSearchedBooks,
};
