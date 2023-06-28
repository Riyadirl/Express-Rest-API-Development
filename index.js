// Require the necessary modules
const app = require("./app");
const dotenv = require("dotenv");

// Load environment variables from the config.env file
dotenv.config({ path: "./config.env" });

// Start the server and listen on the specified port
app.listen(process.env.PORT, function () {
  console.log("Server is running on port " + process.env.PORT);
});
