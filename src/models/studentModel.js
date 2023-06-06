const mongoose = require("mongoose");

//schema
const DataSchema = mongoose.Schema({
  Mame: String,
  ID: String,
  Email: String,
  CGPA: String,
});

//create and export
const StudenetModel = mongoose.model("student", DataSchema);
module.exports = StudenetModel;
