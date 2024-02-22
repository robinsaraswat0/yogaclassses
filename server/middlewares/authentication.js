const jwt=require("jsonwebtoken");
require('dotenv').config();


//auth
exports.authentication=async (req,res,next)=>{
   try {
      const token=req.cookies.token || req.body.token ||req.header("Authorization").replace("Bearer ","");
      if(!token){
        return res.status(401).json({
            success:false,
            message:'Token not found'
        })
      }
      try {

        const payload=jwt.verify(token,process.env.JWT_SECRET);
        req.user=payload;
        next();
      } catch (error) {
        return res.status(401).json({
            success:false,
            message:'token is invalid'
        })
       
      }
   
   } catch (error) {
      return res.status(401).json({
        success:false,
        message:'something went wrong while validating the token'
      })
   }
}





