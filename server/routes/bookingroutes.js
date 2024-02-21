const express = require("express");
const router = express.Router()

const { bookingList,createBooking } = require("../controllers/bookingController");
const {authentication}  = require("../middlewares/authentication")

router.post("/createBooking/:id",authentication,createBooking)
router.get("/getBookings",authentication,bookingList)
module.exports = router;