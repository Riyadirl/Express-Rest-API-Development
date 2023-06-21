// app.js manage all configuration

const express = require("express");
const router = require("./src/routes/api");
const app = express();

//security middleware import
const bodyParser = require('body-parser');
const rateLimit = require("express-mongo-sanitize");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const hpp = require("hpp");
const mongoose = require("mongoose");

//security middleware implementation
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())

// JSON Parser
app.use(bodyParser.json())



//requesting rate limit

const limiter = rateLimit({
  windowMs: 15 * 1000, //15 minutes
  max: 100, //limit each ip to 100 requests per window
});


//use limiter
app.use(limiter);

//mongodb database connection

const URI = "mongodb+srv://<username>:<password>@practice002.q7fqa2z.mongodb.net/mern";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: "practice002",
  pass: "practice002",
};

mongoose
  .connect(URI, options)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



/*
// server
const port = process.env.PORT || 5000;

// Connect to DB and start server
mongoose
 .connect(process.env.DATABASE)
 .then(() => {
   app.listen(port, () => {
     console.log(`Server Running on port ${port}`);
   });
 })
 .catch((err) => console.log(err));



*/


//routing
mongodb: app.use("/api/v1", router);

//undefined route
//app.use("*", (req, res) => {
// res.status(404).json(
//{ status: "Fail", data: "not found" });
//});

//export app
module.exports = app;
