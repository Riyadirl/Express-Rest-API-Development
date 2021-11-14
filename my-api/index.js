const app = require("./app");
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})


app.listen(process.env.RUNNING_PORT,function () {
    console.log("This is from env "+ process.env.RUNNING_PORT)
});


