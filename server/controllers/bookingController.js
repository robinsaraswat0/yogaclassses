const Booking = require("../models/Booking");
const YogaClass = require("../models/YogaClass")
const mongoose= require('mongoose');

exports.createBooking = async(req,res,next) => {
    try {
        const classId = req.params.id;
        const {from,to,teacher} = req.body;
        const booking = await Booking.create({
            user:req.user.id,
            yogaClass:classId,
            from,
            to,
            teacher
        })
        const yogaClass = await YogaClass.findById(classId);
        bookCounter = yogaClass.bookedCounter; 
        yogaClass.bookedCounter = bookCounter+1;
        await yogaClass.save();
        res.status(201).json({
            success:true,
            message:"Booking Completed"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
          })
    }
}
exports.bookingList = async(req,res,next) => {
    try {
        const bookings = await Booking.find({user:req.user.id}).populate("yogaClass");

        res.status(201).json({
            success:true,
            BookingList:bookings
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            error:error
          })
    }
}

exports.getClassCount = async(req,res,next)=>{
    try {
        const teacher = req.query.teacher;

        const booked = await Booking.find({"teacher":teacher});

        res.status(201).json({
            success:true,
            classCount:booked.length
        })
    } catch (error) {
       console.log(error) 
       res.status(500).json({
        success:false,
        error:error
      })
    }
}