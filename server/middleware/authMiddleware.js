const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const protect  = asyncHandler( async(req,res,next) => {
    let token;
    token = req.cookies.jwt;
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not Authorized, Invalid Token");
        }

    } else {
        res.status(401);
        throw new Error("Not Authorized, No Token");
    }
})

module.exports = protect;