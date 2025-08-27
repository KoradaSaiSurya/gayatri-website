// import express from "express";
// import Faculty from "../models/FacultyModel.js";

// const router = express.Router();

// // ➕ Add Faculty
// router.post("/", async (req, res) => {
//     try {
//         const newFaculty = new Faculty(req.body);
//         await newFaculty.save();
//         res.json(newFaculty);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // 📜 Get All Faculty
// router.get("/", async (req, res) => {
//     try {
//         const faculties = await Faculty.find();
//         res.json(faculties);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // ✏️ Update Faculty
// router.put("/:id", async (req, res) => {
//     try {
//         const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedFaculty);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// // ❌ Delete Faculty
// router.delete("/:id", async (req, res) => {
//     try {
//         await Faculty.findByIdAndDelete(req.params.id);
//         res.json({ message: "Faculty Deleted" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// export default router;




const express = require('express');
const router = express.Router();
const Faculty = require('../models/FacultyModel');

// Get all faculties
router.get('/', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.json(faculties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new faculty
router.post('/', async (req, res) => {
    const faculty = new Faculty({
        name: req.body.name,
        subject: req.body.subject,
        qualification: req.body.qualification,
        experience: req.body.experience,
    });
    try {
        const newFaculty = await faculty.save();
        res.status(201).json(newFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update faculty
router.put('/:id', async (req, res) => {
    try {
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete faculty
router.delete('/:id', async (req, res) => {
    try {
        await Faculty.findByIdAndDelete(req.params.id);
        res.json({ message: 'Faculty deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
