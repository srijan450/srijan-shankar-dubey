import sendMail from "./sendMail.js";

const myMail = async (
  name,
  subject,
  email,
  message,
  to = "srijanshankardubey99@gmail.com"
) => {
  const msg = `
    Hello Srijan,<br/>
    Greetings!
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    This is to inform you that <b>${name}</b> have sent the following messge on your portfolio. Please do reply accordingly.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Sender Email is <a href="mailto:${email}" target="_blank">${email}</a>.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    <div>Message is starting from next line.</div>
    <blockquote>${message}</blockquote>
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Regards,<br/>
    Porfolio Website
`;
  const res = await sendMail(to, subject, msg, email);
  return res;
};

export default myMail;
