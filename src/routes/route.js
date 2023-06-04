const express = require("express");
const controller = require("../controllers/contoller");
const router = express.Router();

//this is my 1st get routing
router.get("/hello-get", controller.Hello); //export from controller
router.get("/hello-post", controller.Hello);

//export router
module.exports = router;
