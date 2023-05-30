import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import report from "./middleware/report.js";
import sendMail from "./middleware/sendMail.js";

//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(path.resolve(), "./client/build")));
} else {
  app.use(express.static(path.join(path.resolve(), "./client/public")));
}

//
app.post("/report", report, sendMail);

//💦
export default app;
