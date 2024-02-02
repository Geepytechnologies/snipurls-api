import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import "./config/db";

const app = express();
const port = 3000;

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true, // enable cookies and other credentials
  exposedHeaders: ["Set-Cookie"],
};

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN); // Replace with your Vercel app URL
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("home1");
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
