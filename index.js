const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

app.listen(process.env.PORT, function () {
  console.log("success!, this is from env " + process.env.PORT);
});
