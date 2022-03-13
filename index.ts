import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

const sendEmail = async (sendTo: string) => {
  const transporterConfig = {
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
  };

  const transporter = nodemailer.createTransport(transporterConfig);

  const email = {
    from: process.env.email,
    to: sendTo,
    subject: "test",
    text: "This is a email test",
    html: "<b>Here you can send your own html message</b>",
  };

  transporter.sendMail(email, (err, result) => {
    if (err) return console.log(err);
    console.log("Mensagem enviada! " + result.response);
  });
};

//requires one argument (loremipsum@hotmail.com)
sendEmail();
app.listen(process.env.api, () => console.log("Application started"));
