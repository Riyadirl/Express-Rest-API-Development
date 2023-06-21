//Mongoose create data using model
//crud
const StudenetsModel = require("../models/studentsModel");
exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  StudenetsModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "success", data: data });
    }
  });
};
