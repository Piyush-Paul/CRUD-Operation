const express = require('express');
const { createBook, getBooks, updateBook, deleteBook , bookSearch, issuedBook} = require('../controllers/bookController');

const router = express.Router();

router.post('/', createBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get('/booksName/:Title', bookSearch);
router.post('/issuedBook',issuedBook);

module.exports = router;
