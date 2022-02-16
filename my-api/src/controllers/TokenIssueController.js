var jwt = require('jsonwebtoken');

exports.TokenIssue=(req,res)=>{
    let Payload={
        exp:Math.floor(Date.now() / 1000) + (60 *60),
        data:{Name:"Rabbil Hasan",City:"Dhaka",admin:true}
    }
    let Token= jwt.sign(Payload,"SecretKey123");
    res.send(Token)
}
