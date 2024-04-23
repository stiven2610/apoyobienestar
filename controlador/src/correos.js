const{db} = require("./config.js")

const nodemailer = require('nodemailer');
console.log(db)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: db.mail_user,
      pass: db.mail_password,
      clientId: db.oauth_client,
      clientSecret: db.oauth_client_secret,
      refreshToken: db.oauth_refresh_token
    }
  });
  let mailOptions = {
    from: 'stivenrozo1@gmail.com',
    to: 'stivenrozo57@gmail.com',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });