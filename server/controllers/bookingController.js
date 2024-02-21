const Booking = require("../models/Booking");
const YogaClass = require("../models/YogaClass")

exports.createBooking = async(req,res,next) => {
    try {
        const classId = req.params.id;
        const booking = await Booking.create({
            user:req.user.id,
            yogaClass:classId
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
    }
}
exports.bookingList = async(req,res,next) => {
    try {
        const bookings = await Booking.find({user:req.user.id}).populate("user yogaClass");

        res.status(201).json({
            success:true,
            BookingList:bookings
        })
    } catch (error) {
        console.log(error)
    }
}