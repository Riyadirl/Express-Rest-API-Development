const express = require("express");
const router = express.Router();


const sController = require("../controllers/studentController");
const deptController = require('../controllers/deptController');
const JWTPractice = require('../controllers/JWTPractice');
const TokenVerifyMiddleware = require('../middleware/TokenVerifyMiddleware');
const TokenIssueController = require('../controllers/TokenIssueController');

//this is my 1st get routing

//router.get("/hello-get", controller.Hello); //export from controller
//router.get("/hello-post", controller.Hello);

//mongose
//apply jwt auth
router.post("/insertStudent", sController.InsertStudent);

router.get('/TokenIssue', TokenIssueController.TokenIssue);

router.post('/departments', TokenVerifyMiddleware, deptController.insertDept);
router.get('/readDept', TokenVerifyMiddleware, deptController.readDept)
router.post('/updateDept/:id', TokenVerifyMiddleware, deptController.updateDept);
router.get('/deleteDept/:id', TokenVerifyMiddleware, deptController.deleteDept);


//practice jwt token encode decode
router.get('/createToken', JWTPractice.createToken);
router.get('/decodeToken', JWTPractice.decodeToken);



//export router
module.exports = router;
