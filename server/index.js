const express=require("express");
const app=express();
const cors = require("cors")

const {connect}=require("./config/database")

require("dotenv").config();
const cookieParser=require("cookie-parser");
// const cors=require("cors");


const PORT=process.env.PORT || 4000;
 



//connection with db
connect();



// //middlewares
app.use(express.json());
app.use(cookieParser());
// req comes from frontend must be entertained
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true,
    })
 )

//moute route

const userRoutes=require("./routes/User");

const yogaClass=require("./routes/YogaClass")

const booking = require("./routes/bookingroutes")


app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/yogaClass",yogaClass)
app.use("/api/v1/booking",booking)


//default route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'Your server is up and runnig',
    });
});

//active the server
app.listen(PORT,()=>{
    console.log(`App is running at PORT ${PORT}`);
});
