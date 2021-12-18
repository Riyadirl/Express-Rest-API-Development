const express=require('express');
const HelloController = require("../controllers/HelloController");
const StudentsController = require("../controllers/StudentsController");

const router=  express.Router();


// This is my first get routing
router.get("/hello-get",HelloController.HelloGet)
router.post("/hello-post",HelloController.HelloPost)


//Mongooes
router.post("/InsertStudent",StudentsController.InsertStudent)
router.get("/ReadStudent",StudentsController.ReadStudent)
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent)
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent)

module.exports=router;