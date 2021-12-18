const express=require('express');
const router = require("./src/routes/api");
const app=new express();
const bodyParser = require('body-parser');

//Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet=require('helmet')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const hpp=require('hpp')
const cors=require('cors')
const mongoose= require('mongoose');

//Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

app.use(bodyParser.json());



//Request Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter)




// Mongo DB Database Connection

let URI="mongodb://127.0.0.1:27017/Schools";
let OPTION={user:'',pass:''};
mongoose.connect(URI,OPTION,(error)=>{
    console.log("Connection Success");
    console.log(error);
})





app.use("/api/v1",router);






//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",data:"Not found"})
})

module.exports=app;



