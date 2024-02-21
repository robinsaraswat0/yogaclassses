// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup, 
  getUserDetails,
  logout
} = require("../controllers/Auth")

const {authentication} = require("../middlewares/authentication")

router.post("/login", login)
router.post("/signup", signup)
router.get("/me",authentication,getUserDetails)
router.get("/logout",logout)








// Export the router for use in the main application
module.exports = router
