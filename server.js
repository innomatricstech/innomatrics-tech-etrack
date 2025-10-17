import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Setup path variables for frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend build folder
app.use(express.static(path.join(__dirname, "frontend/dist")));

// Zoho Mail transporter
const ZOHO_PASSWORD = process.env.ZOHO_PASS
  ? process.env.ZOHO_PASS.trim()
  : process.env.ZOHO_APP_PASSWORD;

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_USER,
    pass: ZOHO_PASSWORD,
  },
});

// -------------------- API ROUTES --------------------

// 1️⃣ Send Order Email
app.post("/send-order", async (req, res) => {
  const order = req.body;

  const mailOptions = {
    from: `"ETrack Orders" <${process.env.ZOHO_USER}>`,
    to: order.customer_email,
    cc: process.env.REACT_APP_ZOHO_COPY,
    subject: `✅ Order Confirmation - ${order.order_number}`,
    html: `<h2>Order #${order.order_number} Confirmed</h2><p>Dear ${order.first_name}, your order has been received!</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.messageId);
    res.status(200).json({ message: "Order email sent successfully!" });
  } catch (err) {
    console.error("❌ Failed to send order email:", err);
    res.status(500).json({ error: "Failed to send order email" });
  }
});

// 2️⃣ Contact Us Email
app.post("/contact-us", async (req, res) => {
  const inquiry = req.body;

  const contactMailOptions = {
    from: `"Website Inquiry" <${process.env.ZOHO_USER}>`,
    to: process.env.REACT_APP_ZOHO_COPY,
    replyTo: inquiry.email,
    subject: `🌐 New Website Inquiry: ${inquiry.service} from ${inquiry.name}`,
    html: `<h2>New Contact Inquiry</h2><p>Name: ${inquiry.name}<br>Email: ${inquiry.email}<br>Message: ${inquiry.message}</p>`,
  };

  try {
    const info = await transporter.sendMail(contactMailOptions);
    console.log("✅ Contact inquiry email sent:", info.messageId);
    res.status(200).json({ message: "Inquiry email sent successfully!" });
  } catch (err) {
    console.error("❌ Failed to send contact inquiry email:", err);
    res.status(500).json({ error: "Failed to send contact inquiry email" });
  }
});

// -------------------- Serve Frontend --------------------

// Catch all other routes and serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

// -------------------- Start Server --------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
