import sendMail from "./sendMail.js";

const senderMail = async (to,name) => {
  const message = `
    Hello ${name},<br/>
    Greetings
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    This email is on behalf of Srijan Shankar Dubey, Full Stack Web Developer, and software engineer.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Thanks for visiting my <a href="https://srijan450.github.io/srijan-shankar-dubey/" target="_blank">portfolio_website</a>.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    I have got your message and would be replying soon to you regarding your message.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Let us be in touch now. Follow me on <a href="https://www.linkedin.com/in/srijan-shankar-dubey-140bb920b/" target="_blank">LinkedIn</a>.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Please note that this is an auto-generated email, so please do not reply to this email.
    <div style="opacity: 0;">${parseInt(Math.random() * 10000000000)}</div>
    Regards,<br/>
    Srijan Shankar Dubey
`;
  const res = await sendMail(to, "Message Delivered Successfully", message);
  return res;
};

export default senderMail;
