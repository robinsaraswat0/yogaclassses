const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  yogaClass: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'YogaClass', 
    required: true 
  },
  bookedAt: { 
    type: Date, 
    default: Date.now },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;