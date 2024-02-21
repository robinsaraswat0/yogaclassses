// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
    createYogaClass, getAllYogaClasses, getClassDetails
 
} = require("../controllers/YogaController")

// const { auth } = require("../middlewares/auth")


// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************



// Route for user signup
router.post("/createYogaClass", createYogaClass);
router.get("/getAllYogaClasses",getAllYogaClasses)
router.get("/getClassDetails/:id",getClassDetails)


// Export the router for use in the main application
module.exports = router
