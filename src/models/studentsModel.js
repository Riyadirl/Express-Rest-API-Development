const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
//schema
const DataSchema = mongoose.Schema({
  Name: String,
  ID: String,
  Email: String,
  CGPA: String,
},
  { timestamps: true, versionKey: false }
);

//create 
const studentsModel = mongoose.model("students0", DataSchema);


//export
module.exports = studentsModel;
