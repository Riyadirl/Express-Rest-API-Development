const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
//schema
const DataSchema = mongoose.Schema({
  Name: String,
  ID: Number,
  Email: String,
  CGPA: String,
},
  { timestamps: true, versionKey: false }
);

//create 
const studentsModel = mongoose.model("students", DataSchema);


//export
module.exports = studentsModel;


/*

{
"Name" : "Mahbub",
"ID" : "98563",
"Email" : "iug@gmail.com",
"CGPA" : "3.33"
}

*/