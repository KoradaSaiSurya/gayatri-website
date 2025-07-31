const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
  name: String,
  subject: String,
  experience: Number,
});

module.exports = mongoose.model('Faculty', FacultySchema);

