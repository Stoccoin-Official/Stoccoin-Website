const { loginController } = require("./authController");

const loginRouter = require("express").Router();

loginRouter.post('/', loginController)
module.exports = loginRouter
