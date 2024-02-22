const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: { 
      type: String, required: true 
    },
    email: { 
      type: String, required: true, unique: true 
    },
    mobile: { 
      type: String, required: true, unique: true 
    }, // Include mobile number
  
})

module.exports = mongoose.model("User", userSchema)
