const express = require('express');
const { createStudent , getStudents , updateStudent , deleteStudent, students } = require('../controllers/studentController');

const router = express.Router();

router.post('/', createStudent);
router.get('/', getStudents);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);
router.get('/students',students)

module.exports = router;
