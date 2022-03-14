import nodemailer from "nodemailer";
import { Request, Response } from "express";

interface SendEmail {
  from?: string;
  to: string;
  subject: string;
  text: string;
  htmlText?: string;
}

export const Email = {
  sendEmail: async (req: Request, res: Response) => {
    let sendEmail: SendEmail;

    sendEmail = {
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text,
    };

    const { to, subject, text } = sendEmail;

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
      to: to,
      subject: subject,
      text: text,
      html: "<b>Here you can send your own html message</b>",
    };

    transporter.sendMail(email, (err, result) => {
      if (err)
        return res
          .sendStatus(400)
          .json({ error: "An error has occurred" + err.message });
      res
        .sendStatus(200)
        .json({ success: "Your Email has been sent" + result.accepted });
    });
  },
};
