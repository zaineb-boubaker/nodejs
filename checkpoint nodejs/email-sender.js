const nodemailer = require("nodemailer");
require("dotenv").config();
const email = process.env.email;
const pwd = process.env.pwd;
 const danger = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spooky Email</title>
        <style>
            body {
                background-color: #000;
                color: #f1f1f1;
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 20px;
            }

            h1 {
                font-size: 48px;
                color: #ff0000;
                text-shadow: 0 0 8px #ff0000, 0 0 15px #ff0000;
                animation: flicker 2s infinite;
            }

            p {
                font-size: 24px;
                margin-top: 20px;
            }

            .skull {
                width: 150px;
                height: auto;
                margin: 20px auto;
                animation: float 3s infinite ease-in-out;
            }

            @keyframes flicker {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }

            @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
                100% { transform: translateY(0); }
            }
        </style>
    </head>
    <body>
        <h1>☠️ Beware...</h1>
        
        <img class="skull" src="https://mrwallpaper.com/images/hd/warning-skull-and-crossbones-ahead-1dl8u8co2zdlobcc.jpg" alt="Skull Image" />
        <p>YOU'RE BEING WATCHED</p>
    </body>
    </html>
  `;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: email,
    pass: pwd,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"UNKOWN"<${email}>`, // sender address
    to: "zaineb.boubaker.pxo3@gmail.com", // list of receivers
    subject: "YOUR ACCOUNT IS GOING TO BE HACKED", // Subject line
    // text: "Hello world?", // plain text body
    html: danger, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);




