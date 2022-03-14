import express from "express";
import { Email } from "../controller/SendEmail";

const route = express.Router();

route.post("/send", Email.sendEmail);

export default route;
