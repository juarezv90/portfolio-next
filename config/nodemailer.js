const nodemailer = require('nodemailer')

const email = process.env.EMAIL;
const pass =  process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    host:"smtp.gmail.com",
    auth: {
        user: email,
        pass,
    },
    secure: true,
})

export const mailOptions = {
    from: email,
    to:email,
}