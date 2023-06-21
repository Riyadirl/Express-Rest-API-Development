//Mongoose create data using model
//crud
const studentsModel = require("../models/studentsModel");

exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  studentsModel
    .create(data)
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
}
/*

exports.InsertStudent = (req, res) => {
  if (err) {
    res.status(400).json({ status: "fail", data: err });
  } else {
    res.status(201).json({ status: "success", data: data });
  }
};
*/