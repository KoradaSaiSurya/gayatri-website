// const express = require('express');
// const router = express.Router();
// const Faculty = require('../models/FacultyModel');

// router.post('/submit', async (req, res) => {
//   try {
//     const newFaculty = new Faculty(req.body);
//     await newFaculty.save();
//     res.status(201).json({ message: 'Faculty data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to save faculty data' });
//   }
// });

// router.get('/all', async (req, res) => {
//   try {
//     const allFaculty = await Faculty.find();
//     res.status(200).json(allFaculty);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch faculty data' });
//   }
// });

// module.exports = router;




const express = require('express');
const router = express.Router();
const Faculty = require('../models/FacultyModel');

// ➕ Add new faculty
router.post('/submit', async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    await newFaculty.save();
    res.status(201).json({ message: 'Faculty data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save faculty data' });
  }
});

// 📥 Get all faculty
router.get('/all', async (req, res) => {
  try {
    const allFaculty = await Faculty.find();
    res.status(200).json(allFaculty);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch faculty data' });
  }
});

// ✏️ Edit faculty
router.put('/edit/:id', async (req, res) => {
  try {
    const updated = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update faculty' });
  }
});

// ❌ Delete faculty
router.delete('/delete/:id', async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Faculty deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete faculty' });
  }
});

module.exports = router;
