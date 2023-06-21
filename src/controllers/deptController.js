const DeptModel = require('../models/deptModel');

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
