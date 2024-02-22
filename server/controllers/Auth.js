const User = require("../models/User");
const YogaClass=require("../models/YogaClass")


const jwt = require("jsonwebtoken");
const cookie = require("cookie");

//signUp
exports.signup = async (req, res) => {
  try {
    const { firstName, email, mobile } = req.body;

    if (!firstName || !email || !mobile) {
      return res.status(403).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const checkUserExist = await User.findOne({ email });

    if (checkUserExist) {
      return res.status(401).json({
        success: true,
        message: "user already exist ,login please",
      });
    }

    //created entry in dp
    const user = await User.create({
      firstName,
      email,
      mobile,
    });

    const payload = {
      email: user.email,
      id: user._id,
      
    };
    //1 day me expire
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
  

    //cookie
    //3 DAY ME EXPIRE
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
  

    return res.cookie("token", token, options).status(200).json({
      success: true,
      message: "user is registered sucessfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      error:error
    })
  }
};

//Log in

exports.login = async (req, res) => {
  try {
    //get data from req body
    const {  mobile } = req.body;
    //validation data
    if (!mobile) {
      return res.status(403).json({
        success: false,
        message: "please enter email and password ",
      });
    }
    const user = await User.findOne({ mobile });

    //user not exist
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "please signup",
      });
    }

    //user exist
    //check password
   
    //generate token

    const payload = {
      email: user.email,
      id: user._id,
      
    };
    //1 day me expire
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
  

    //cookie
    //3 DAY ME EXPIRE
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      success: true,
      token,
      user,
      message: "user successfully login",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "login failed please try again",
    });
  }
};

exports.getUserDetails = async(req,res)=>{
  try {

    const user = await User.findById(req.user.id);

    res.status(201).json({
      success:true,
      user
    })
    
  } catch (error) {
    res.status(500).json({
      success:false,
      error:error
    })
  }

}

exports.logout =  async(req,res,next)=>{

  res.cookie("token",null,{
      expires: new Date(Date.now()),
      httpOnly:true
  })

  res.status(200).json({
      success:true,
      message:"Logout Successfully"
  })
}