// pages/api/send-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, companyName, email, phoneNumber, website, query } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const currentDate = new Date().toLocaleDateString();

      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New Query from ${name}${
          companyName ? ` - ${companyName}` : ""
        }`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; margin-bottom: 20px;">
                🚀 New Contact Form Submission
              </h2>
              
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
                <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                ${
                  companyName
                    ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${companyName}</p>`
                    : ""
                }
                <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                ${
                  phoneNumber
                    ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${phoneNumber}" style="color: #007bff;">${phoneNumber}</a></p>`
                    : ""
                }
                ${
                  website
                    ? `<p style="margin: 8px 0;"><strong>Website:</strong> <a href="${website}" target="_blank" style="color: #007bff;">${website}</a></p>`
                    : ""
                }
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #fff; border-left: 4px solid #007bff; padding: 15px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                  <p style="margin: 0; line-height: 1.6; color: #555;">${query}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="mailto:${email}?subject=Re: Your Inquiry" style="background-color: #007bff; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                  📧 Reply to ${name}
                </a>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
                <p>Received on ${currentDate}</p>
                <p>Snowchild Studio Contact Form</p>
              </div>
              
            </div>
          </div>
        `,
      });

      return res.status(200).json({
        success: true,
        message: "Email sent successfully!",
      });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({
        success: false,
        message: "Email sending failed",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
