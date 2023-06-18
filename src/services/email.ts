import { ContactForm } from "@/app/types/contact-form"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function sendEmail(data: ContactForm) {
  const info = {
    from: data.email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${data.email}`,
    html: `
            <h1>New message from ${data.email}</h1>
            <p>${data.message}</p>
        `,
  }
  return transporter.sendMail(info)
}
