const Book = require('../models/Book.js');
const Sequelize = require('sequelize');
const IssuedBook = require('../models/IssuedBook.js');
const sequelize = require('../config/database.js');
const Op = Sequelize.Op;

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

exports.bookSearch = async (req,res)=>{
  const title = req.params.Title;
  try {
    const searchedBook = await Book.findAll({
      where: {
        title: { [Op.like]: `%${title}%`}
      }
    }); 
    return res.status(200).json({Books: searchedBook});
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({Error: error});
  }
}

exports.issuedBook = async (req,res) => {
  const {SudentRoll,BookId,AvailableQuantity} = req.body[0];
  const t = await sequelize.transaction();
  try {
    await Book.update({availableQuantity: (AvailableQuantity-1)},{where: {id: BookId}}, {transaction: t});
    try {
      const issuedBook = await IssuedBook.create({
        bookId: BookId,
        studentId: SudentRoll
      },{transaction: t});
      await t.commit();
      return res.status(200).json(issuedBook);
    } catch (error) {
      await t.rollback();
      return res.status(500).json({error: error.message});
    }
  } catch (error) {
    await t.rollback();
    return res.status(500).json({error: error.message});
  }
}