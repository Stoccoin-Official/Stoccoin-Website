var express = require("express");
var router = express.Router();

const userActivity = require("../controller/userActivity");

const app = express();
app.use(router);

router.get("/", (req, res) => {
  res.status(200).send({ success: true, message: "Api is working!" });
});


// user login, register route
router.post("/api/register", userActivity.registerUser);
router.post("/api/login", userActivity.loginUser);
router.post("/api/verifyOtp", userActivity.verifyOtp);

module.exports = router;
