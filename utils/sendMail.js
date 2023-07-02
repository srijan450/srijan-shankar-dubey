import { createTransport } from "nodemailer";

const transport = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendMail = (
  to,
  subject = "",
  text = "",
  from = "Srijan Shankar Dubey"
) => {
  const mailOptions = {
    from,
    to,
    subject,
    html: text,
  };
  const promise = new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
  return promise;
};

export default sendMail;
