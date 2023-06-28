// Require necessary modules
const express = require("express");
const router = require("./src/routes/api");
const app = express();

// Import security middleware
const bodyParser = require('body-parser');
const rateLimit = require("express-mongo-sanitize");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const hpp = require("hpp");
const mongoose = require("mongoose");

// Set up security middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(bodyParser.json());

// Request rate limit
const limiter = rateLimit({
  windowMs: 15 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});

// Use the rate limiter middleware
app.use(limiter);

// MongoDB database connection
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




// Routing
app.use("/api/v1", router);

// Undefined route
/*
app.use("*", (req, res) => {
  res.status(404).json({ status: "Fail", data: "not found" });
});
*/

// Export the app
module.exports = app;
