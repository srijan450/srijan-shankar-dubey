import myMail from "../utils/myMail.js";
import senderMail from "../utils/sender.js";

export const contactMe = async (req, res) => {
  console.log(req.body);
  try {
    const request = Object.keys(req.body);
    const validRequest = ["name", "email", "subject", "message"];
    const isValidRequest = request.every((requested) =>
      validRequest.includes(requested)
    );
    if (!isValidRequest) {
      res.status(400).json({ error: "invalid request made to server!" });
      return;
    }
    const { name, email, subject, message } = req.body;

    await senderMail(email, name);
    await myMail(name, subject, email, message);

    res.status(201).json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "internal server error due to some reason" });
  }
};
