import { validationResult } from "express-validator";
import Book from "../models/book.mjs";

async function getAllBooks(req, res) {
  const books = await Book.find().sort({ updatedAt: -1 });
  console.log('Hello')
  console.log(res)
  console.log(books);
  res.status(200).json(books);
}

async function getBookById(req, res) {
  const _id = req.params.id;
  const book = await Book.findBy(_id);

  if (book === null) res.status(404).json({ msg: "Page not found" });
  res.json(book);
}

async function deleteBook(req, res) {
  const _id = req.params.id;
  const { deletedCount } = await Book.deleteOne({ _id });

  if (deletedCount === 0)
    res.status(404).json({ msg: "Target book is not found" });

  res.json({ msg: "Delete succeeded." });
}

async function registerBook(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const book = new Book(req.body);
  const newBook = await book.save();
  res.status(201).json(newBook);
}

async function updateBook(req, res) {
  debugger;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errs = errors.array();
    return res.status(400).json(errs);
  }

  const { title, description, comment, rating } = req.body;
  const _id = req.params.id;
  const book = await Book.findBy(_id);

  if (book === null) res.status(404).json({ msg: "Page not found" });

  if (title !== undefined) book.title = title;
  if (description !== undefined) book.description = description;
  if (comment !== undefined) book.comment = comment;
  if (rating !== undefined) book.rating = rating;
  await book.save();
  res.status(201).json(book);
}

export { registerBook, updateBook, getAllBooks, getBookById, deleteBook };
