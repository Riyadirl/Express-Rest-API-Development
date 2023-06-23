const mongoose = require('mongoose');

const deptSchema = new mongoose.Schema({
    Name: String,
    id: String,
    city: String,
    dept: String
},
    { timestamps: true, versionKey: false }
);

const DeptModel = mongoose.model('depts', deptSchema);

module.exports = DeptModel;




