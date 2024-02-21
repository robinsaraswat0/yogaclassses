const express = require("express");
const router = express.Router()

const { bookingList,createBooking, getClassCount } = require("../controllers/bookingController");
const {authentication}  = require("../middlewares/authentication")

router.post("/createBooking/:id",authentication,createBooking)
router.get("/getBookings",authentication,bookingList)
router.get("/classCount",getClassCount)
module.exports = router;