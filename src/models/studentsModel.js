const mongoose = require("mongoose");

//schema
const DataSchema = mongoose.Schema({
  Name: String,
  ID: String,
  Email: String,
  CGPA: String,
});

//create 
const StudenetsModel = mongoose.model("students", DataSchema);


//export
module.exports = StudenetsModel;
