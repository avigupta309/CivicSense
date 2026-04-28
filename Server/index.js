import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import { ConnectDataBase } from "./connection.js";
import { userRouter } from "./router/user.js";
import cors from "cors";
import { reportRouter } from "./router/report.js";
import { CheckAuthUser } from "./middleware/auth.js";
import cookieParser from "cookie-parser";
const app = express();
configDotenv();
const mongo_URI = process.env.MONGO_URI;

const corsOperation = {
  origin: ["http://localhost:5173"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOperation));
app.use(urlencoded({ extended: true }));
app.use(express.json());

ConnectDataBase(mongo_URI);
app.get("/", CheckAuthUser("userToken"), (req, res) => {
  return res
    .status(200)
    .json({ data: req.validUser, message: "Your Are Authorized User " });
});

app.use("/api/user", userRouter);
app.use("/api/report", reportRouter);
app.listen(3000, () => {
  console.log("Server is Started at port 3000");
});
