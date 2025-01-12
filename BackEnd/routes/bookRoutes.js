const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
