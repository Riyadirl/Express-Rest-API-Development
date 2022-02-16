const express=require('express');
const StudentsController = require("../controllers/StudentsController");
const TokenIssueController = require("../controllers/TokenIssueController");
const JWTPractice = require("../controllers/JWTPractice");
const TokenVerifyMiddleware = require("../middleware/TokenVerifyMiddleware");



const router=  express.Router();


// Apply JWT Auth
router.get("/TokenIssue",TokenIssueController.TokenIssue)
router.post("/InsertStudent",TokenVerifyMiddleware,StudentsController.InsertStudent)
router.get("/ReadStudent",TokenVerifyMiddleware,StudentsController.ReadStudent)
router.post("/UpdateStudent/:id",TokenVerifyMiddleware,StudentsController.UpdateStudent)
router.get("/DeleteStudent/:id",TokenVerifyMiddleware,StudentsController.DeleteStudent)



// Practice JWT Encode Decode
router.get("/CreateToken",JWTPractice.CreateToken)
router.get("/DecodeToken",JWTPractice.DecodeToken)





module.exports=router;