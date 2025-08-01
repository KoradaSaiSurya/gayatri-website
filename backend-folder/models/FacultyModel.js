// models/FacultyModel.js
const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  facultyName: { type: String, required: true },
  subjectName: { type: String, required: true },
  qualification: { type: String, required: true },
  experience: { type: String, required: true },
});

module.exports = mongoose.model('Faculty', FacultySchema);
