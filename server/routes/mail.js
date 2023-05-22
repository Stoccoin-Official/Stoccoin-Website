const nodemailer = require('nodemailer');
const mailRouter = require('express').Router();
mailRouter.post('/', (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'generated_password' // https://support.google.com/accounts/answer/185833?visit_id=638202710976856000-3260016626&p=InvalidSecondFactor&rd=1
        }
    });

    var mailOptions = {
        from: 'your-email@gmail.com',
        to: 'your-email@gmail.com', 
        subject: "Contact Request",
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You have a new contact request.</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: Contact Request </li>
            <li>Message: ${req.body.message}</li>
        </ul>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.json('Couldnot send Email')
        }
        else {
            console.log("Email Sent Successfully")
            res.json('Email Sent Successfully')
        }

    });
});

module.exports = mailRouter
