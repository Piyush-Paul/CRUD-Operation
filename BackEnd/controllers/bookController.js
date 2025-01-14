const Book = require('../models/Book.js');

exports.createBook = async (req, res) => {

  const { title, author, totalQuantity , availableQuantity , publishedYear } = req.body;

  try {
    const book = await Book.create({ title, author, totalQuantity , availableQuantity , publishedYear });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, totalQuantity , availableQuantity , publishedYear } = req.body;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.update({ title, author, totalQuantity , availableQuantity , publishedYear });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    await book.destroy();
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
