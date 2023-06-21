const DeptModel = require('../models/deptModel');



//CRUD


//C- Create
exports.insertDept = (req, res) => {
    let reqBody = req.body;

    DeptModel
        .create(reqBody)
        .then(() => {
            res.send({
                kq: 1,
                msg: 'success'
            });
        })
        .catch((err) => {
            res.send({
                kq: 0,
                msg: 'fail'
            });
            console.error(err);
        });
};






//R- Read
exports.readDept = (req, res) => {
    let query = {};
    let projection = "Name id city dept";

    // Use the find() method to query the database for documents matching the specified query and projection
    DeptModel.find(query, projection)
        .exec() // Execute the query
        .then((data) => {
            // If the query is successful, send a success response with the retrieved data
            res.status(200).json({ status: "success", data: data });
        })
        .catch((err) => {
            // If there is an error during the query, send a failure response with the error message
            res.status(400).json({ status: "fail", data: err });
        });
};
