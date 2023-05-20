var express = require('express');
var router = express.Router();
const { authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile } = require("../controllers/userController.js");

const protect  = require("../middleware/authMiddleware.js");

// Route To register a new user =>  pass the values in the body 
router.post('/register', registerUser);

// Route to authenticate a user => pass the values in the body & create jwt token
router.post('/auth', authUser);

// Route to logout a user => delete the jwt token 
router.post('/logout',logoutUser);

// Protected Routes for Logged in users to view and edit their profile
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

module.exports = router;
