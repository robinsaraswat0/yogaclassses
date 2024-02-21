const User = require("../models/User");
const YogaClass=require("../models/YogaClass")


const jwt = require("jsonwebtoken");
const cookie = require("cookie");

//signUp
//ye smjh me nhi aya otp expire kaise hogi
exports.signup = async (req, res) => {
  try {
    console.log("hey signup");
    //data fetch from request ki body
    const { firstName, email, mobile } = req.body;

    //validate krlo
    if (!firstName || !email || !mobile) {
      return res.status(403).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    //check user already exist or not
    const checkUserExist = await User.findOne({ email });
    console.log("checkUserExist", checkUserExist);

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
    console.log(user);
    //return response

    return res.status(200).json({
      success: true,
      message: "user is registered sucessfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `user cannot be register,please try again ${error}`,
    });
  }
};

//Log in

exports.login = async (req, res) => {
  try {
    //get data from req body
    console.log("inside login");
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
    console.log("ye role galat hai kya payload me ", payload);
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
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "login failed please try again",
    });
  }
};

exports.getUserDetails = async(req,res)=>{
  try {

    console.log(req.user.id)
    const user = await User.findById(req.user.id);

    res.status(201).json({
      success:true,
      user
    })
    
  } catch (error) {
    
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