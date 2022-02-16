const express=require('express');
const StudentsController = require("../controllers/StudentsController");
const JWTPractice = require("../controllers/JWTPractice");

const router=  express.Router();
router.post("/InsertStudent",StudentsController.InsertStudent)
router.get("/ReadStudent",StudentsController.ReadStudent)
router.post("/UpdateStudent/:id",StudentsController.UpdateStudent)
router.get("/DeleteStudent/:id",StudentsController.DeleteStudent)



// Create JWT TOken
router.get("/CreateToken",JWTPractice.CreateToken)

// Decode JWT TOken
router.get("/DecodeToken",JWTPractice.DecodeToken)



module.exports=router;