const mongoose= require('mongoose')
const DataSchema= mongoose.Schema({
    Name:{type:String},
    Roll:{type:String},
    Class:{type:String}
},{versionKey:false})
const  StudentsModel= mongoose.model('students',DataSchema);
module.exports=StudentsModel;