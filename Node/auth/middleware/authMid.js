const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization

    if(!token){
        return res.status(401).json({message:"Tokem missing"})
    }

    try{
        const decode=jwt.verify(token,"secretkey")
        req.user=decode
        next()
    }
    catch(err){
         return res.status(403).json({ message: "Invalid token" });
    }
}