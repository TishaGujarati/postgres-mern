import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "./middleware/passport";
import userRouter from "./routes/userRoutes";
import { CONFIG } from "./config";


const express = require("express");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", userRouter);

app.listen(CONFIG.PORT, () => {
  console.log(`Server is running on PORT ${CONFIG.PORT}`);
});