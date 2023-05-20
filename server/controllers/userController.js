const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");
const generateToken = require("../utils/generateToken.js");

// @description Auth user/set token
// route POST /api/users/auth
//@access Public

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});
// @description Register user/set token
// route POST /api/users/
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, username, password } = req.body;

    const userExists = await User.findOne({ email: email, });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        username,
        password,
    });

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User Data");
    }

});

// @description Logout user/reset token
// route POST /api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({
        message: "User Logged Out"
    })
});

// @description Get User Profile
// route GET /api/users/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        username: req.user.username,
    }

    res.status(200).json({ user });
});

// @description Update User Profile
// route PUT /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.username = req.body.username || user.username;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            username: updatedUser.username
        })
    } else {
        res.status(404);
        throw new Error("User Not Found");
    }

    res.status(200).json({
        message: "update user profile"
    })
});

module.exports  = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
}