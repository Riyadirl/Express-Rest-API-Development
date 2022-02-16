var jwt = require('jsonwebtoken');

exports.CreateToken=(req,res)=>{

  let Payload={
      exp:Math.floor(Date.now() / 1000) + (20),
      data:{Name:"Rabbil Hasan",City:"Dhaka",admin:true}
  }

  let Token= jwt.sign(Payload,"SecretKey123");

  res.send(Token)

}


exports.DecodeToken=(req,res)=>{

    let Token= req.headers['token-key']

    jwt.verify(Token,"SecretKey123",function (err, decoded) {
        if(err){
            res.status(401).json({status:"invalid token",data:err})
        }
        else {
            res.status(200).json({status:"success",data:decoded})
        }
    })

}