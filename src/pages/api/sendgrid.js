import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(sendgrid);
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "webdev.shakil@gmail.com", // Your email where you'll receive emails
      from: req.body.email, // your website email address here
      subject: `${req.body.subject}`,
      html: `<div>You've got a mail</div> 
      <p>${req.body.message}</p>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
