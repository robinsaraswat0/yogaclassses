const mongoose = require("mongoose")
const yogaClassSchema = new mongoose.Schema({
    name:{
      type: String,
      required:true
    },
    teacherName: { 
      type: String, required: true 
    },
    level: { 
      type: String, required: true 
    },
    style:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    img: { 
      type: String 
    },
    price: { 
      type: Number, required: true 
    },
    rating: { 
      type: Number, required: true 
    },
    schedule:{
      type:String,
      required:true
    },
    bookedCounter:{
      type:Number,
      default:0,
    }
    // startTime: { type: Date, required: true },
    // duration: { type: Number, required: true }, // in minutes
    // maxCapacity: { type: Number, required: true },
})

const YogaClass = mongoose.model("YogaClass", yogaClassSchema)

module.exports = YogaClass
