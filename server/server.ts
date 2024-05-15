import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/api";


dotenv.config();
const port = process.env.PORT || 3000;

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "";
const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(DATABASE_URL, {})
  .then(() => {
    console.log("Connected to MongoDB");
    console.log(DATABASE_URL);
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get("/", (_req: Request, res: Response) => {
  res.json("Hello, TypeScript Express!");
});

app.use("/api", apiRoutes);
