//Mongoose create data using model
//crud create

//create
const StudenetModel = require("../models/studentModel");
exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  StudenetModel.create(reqBody, (err, data) => {
    if (err) {
      res.status(400).json({ status: "fail", data: err });
    } else {
      res.status(201).json({ status: "success", data: data });
    }
  });
};
