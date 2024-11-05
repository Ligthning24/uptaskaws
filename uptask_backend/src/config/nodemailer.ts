import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const config = () => {
    return {
      host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1300af08b8e9bb",
    pass: "42f3e592060073"
  }
    }
}

export const transporter = nodemailer.createTransport(config());