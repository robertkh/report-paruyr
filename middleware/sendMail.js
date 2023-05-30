import nodemailer from "nodemailer";

//💦
export default (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dimord2015@gmail.com",
      pass: "areg-2013",
    },
  });

  let htmlBody = `<h4>Report link</h4> <p> ${res.locals.data} </p>`;

  let mailOptions = {
    from: '"make report" <dimord2015@gmail.com>',
    to: req.body.email,
    subject: "Get Report",
    html: htmlBody,
  };
  console.log("💥💥💥💥💥", htmlBody);
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("👉👉👉🔷", err.message);
    }

    console.log(`🔥🔥🔥message sent: ${info.response}`);
  });
};
