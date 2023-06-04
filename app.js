// app.js manage all configuration

const express = require("express");
const router = require("../Express-Rest-API/src/routes/route");
const app = express();

//security middleware import
const rateLimit = require("express-mongo-sanitize");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const hpp = require("hpp");

//security middleware implementation
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//requesting rate limit
const limiter = rateLimit({
  windowMs: 15 * 1000, //15 minutes
  max: 100, //limit each ip to 100 requests per window
});
//use limiter
app.use(limiter);

//version control
app.use("/api/v1", router);

//undefined route
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});

//export app
module.exports = app;
