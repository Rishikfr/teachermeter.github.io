const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
  _id: String,
  name: String,
  subject: String,
  school: String,
  ratings: [{ type: mongoose.Schema.Types.Mixed }],
  gradeSubmissions: [{ type: mongoose.Schema.Types.Mixed }]
}, { strict: false });

const Teacher = mongoose.model('Teacher', TeacherSchema, 'teachers');

// GET /api/teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find().lean();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/teachers/:name
router.get('/:name', async (req, res) => {
  try {
    const teacher = await Teacher.findOne({ name: req.params.name }).lean();
    if (!teacher) return res.status(404).json({ error: 'Teacher not found' });
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
