import dotenv from "dotenv";
dotenv.config();

export const PORT: number = parseInt(process.env.PORT || "3000", 10);
export const jwtSecret: string | undefined = process.env.jwtSecret;
export const MAILGUN_API_KEY: string | undefined = process.env.MAILGUN_API_KEY;
export const MAILGUN_USER: string | undefined = process.env.MAILGUN_USER;
export const MAILGUN_PASS: string | undefined = process.env.MAILGUN_PASS;
export const NODEMAILER_TO: string | undefined = process.env.NODEMAILER_TO;

export const DATABASE_URL: string =
  process.env.DATABASE_URL ||
  "mongodb+srv://stephenjovon:dVrDGJkA9M6YoDWy@cluster0.i2yevbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
