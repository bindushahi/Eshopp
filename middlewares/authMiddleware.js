import JWT from "jsonwebtoken"
import UserModel from '../models/UserModel.js';

//protected routes token base
//next validate the authencate user
export const requireSignIn= async (req,res,next)=>{
try{
const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
req.user=decode;
next()
    
}catch(error){
    console.log(error)
    res.status(401).send({
        success:false,
        error,
        message:"error in admin middleware"
    })
}

};

//admin access
export const isAdmin=async (req,res,next)=>{
    try{
        const user=await UserModel.findById(req.user._id)
        if(user.role !==1){
        return res.status(401).send({
    success:false,
message:"Unauthorized Access",
});
    }else{
        next();
    }

    }catch(error){
        console.log(error)
    }
};
