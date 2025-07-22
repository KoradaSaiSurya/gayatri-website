const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({
  facultyName: String,
  subjectName: String,
  qualification: String,
  experience: String,
});

module.exports = mongoose.model("Faculty", facultySchema);
