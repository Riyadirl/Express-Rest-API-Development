const mongoose = require("mongoose");

//schema
const DataSchema = mongoose.Schema({
  name: String,
  id: String,
  email: String,
  cgpa: String,
});

//create and export
const StudenetModel = mongoose.model("student", DataSchema);
module.exports = StudenetModel;
