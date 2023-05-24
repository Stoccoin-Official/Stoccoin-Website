let nodemailer = require("nodemailer");
const otpModel  = require("../models/otp");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "laveshkhairajani01@gmail.com",
    pass: "pzjjxxsudqisevwy",
  },
});

exports.Otpemail = async (body) => {
  let randomOtp = Math.floor(100000 + Math.random() * 900000);
  let data = {};

  let mailOptions = {
    from: "laveshkhairajani01@gmail.com",
    to: `${body.email}`,
    subject: "OTP for your transaction",
    html: `<p>Dear valued customer,</p><p>This email is to inform you that we have sent a one-time password (OTP) to your registered email address/mobile number. Please use the following OTP to complete your transaction: <b>${randomOtp}</b>.</p><p>Please note that the OTP is valid only for a limited time and can only be used once. If you did not initiate this request, please ignore this message and contact our customer support team immediately.</p><p>Thank you for choosing our e-commerce website for your online shopping needs.</p><p>Best regards,</p><p>Lavesh Khairajani </p><p>Customer Support Team</p>`,
  };

  data = {
    email: body.email,
    otp: randomOtp,
  };

  let tempUser = otpModel(data);
  tempUser.save(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  });
};