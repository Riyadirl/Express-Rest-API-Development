const express = require("express");
const router = express.Router();

const controller = require("../controllers/contoller");
const sController = require("../controllers/studentController");
const deptController = require('../controllers/deptController');
const JWTPractice = require('../controllers/JWTPractice');


//this is my 1st get routing

router.get("/hello-get", controller.Hello); //export from controller
//router.get("/hello-post", controller.Hello);

//mongose
router.post("/insertStudent", sController.InsertStudent);

router.post('/departments', deptController.insertDept);
router.get('/readDept', deptController.readDept)
router.post('/updateDept/:id', deptController.updateDept);
router.get('/deleteDept/:id', deptController.deleteDept);


//jwt token
router.get('/createToken', JWTPractice.createToken);
router.get('/decodeToken', JWTPractice.decodeToken);



//export router
module.exports = router;
