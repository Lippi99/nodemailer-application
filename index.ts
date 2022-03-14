import express from "express";
import dotenv from "dotenv";
import emailRoute from "./Route/email";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/email", emailRoute);

app.listen(process.env.api, () => console.log("Application started"));
