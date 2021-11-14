
exports.HelloGet=(req,res)=>{
    res.status(203).json({status:"success",data:"Hello Get"})
}

exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"success",data:"Hello Post"})
}