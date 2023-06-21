const express = require("express");
const router = express.Router();

const controller = require("../controllers/contoller");
const sController = require("../controllers/studentController");
const deptController = require('../controllers/deptController');



//this is my 1st get routing

router.get("/hello-get", controller.Hello); //export from controller
//router.get("/hello-post", controller.Hello);

//mongose
router.post("/insertStudent", sController.InsertStudent);

router.post('/departments', deptController.insertDept);


router.get('/readDept', deptController.readDept)

//export router
module.exports = router;
