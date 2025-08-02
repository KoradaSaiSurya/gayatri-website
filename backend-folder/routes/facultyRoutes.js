// routes/facultyRoutes.js
const express = require('express');
const Faculty = require('../models/FacultyModel');
const router = express.Router();

// 📌 1. Get All Faculty
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.find();
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch faculty' });
  }
});

// 📌 2. Add New Faculty
router.post('/', async (req, res) => {
  try {
    const { facultyName, subjectName, qualification, experience } = req.body;
    const newFaculty = new Faculty({ facultyName, subjectName, qualification, experience });
    await newFaculty.save();
    res.status(201).json(newFaculty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add faculty' });
  }
});

// 📌 3. Delete Faculty
router.delete('/:id', async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Faculty deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete faculty' });
  }
});

module.exports = router;
