const express = require('express');
const router = express.Router();
const Faculty = require('../models/FacultyModel');

// @route   POST /api/faculty/submit
// @desc    Save faculty form data
// @access  Public
router.post('/submit', async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    await newFaculty.save();
    res.status(201).json({ message: 'Faculty data saved successfully' });
  } catch (error) {
    console.error('Error saving faculty data:', error.message);
    res.status(500).json({ error: 'Failed to save faculty data' });
  }
});

// @route   GET /api/faculty/all
// @desc    Get all submitted faculty data
// @access  Public
router.get('/all', async (req, res) => {
  try {
    const allFaculty = await Faculty.find();
    res.status(200).json(allFaculty);
  } catch (error) {
    console.error('Error fetching faculty data:', error.message);
    res.status(500).json({ error: 'Failed to fetch faculty data' });
  }
});

module.exports = router;
