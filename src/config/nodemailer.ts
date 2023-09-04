import nodemailer from "nodemailer"
import * as dotenv from 'dotenv';

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'guttu.sf@gmail.com',
      pass: process.env.PASS,
    }
});
