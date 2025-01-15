const express = require('express');
const { createBook, getBooks, updateBook, deleteBook , booksName} = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/booksName', booksName);

module.exports = router;
