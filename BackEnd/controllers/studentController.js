const Student = require('../models/Student.js');

exports.createStudent = async (req, res) => {
  const { name , roll , semester } = req.body;
  
  try {
    const student = await Student.create({ name , roll , semester });
    res.status(201).json(student);
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStudent = async (req, res) => {
  const { roll } = req.params;
  const { name , semester } = req.body;

  try {
    const student = await Student.findByPk(roll);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    await student.update({ name , roll , semester });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  const { roll } = req.params;

  try {
    const student = await Student.findByPk(roll);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    await student.destroy();
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};