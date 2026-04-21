import express, { urlencoded } from "express";
import { configDotenv } from "dotenv";
import { ConnectDataBase } from "./connection.js";
import { userRouter } from "./router/user.js";
import cors from "cors";
import { reportRouter } from "./router/report.js";
const app = express();
configDotenv();
const mongo_URI = process.env.MONGO_URI;

const corsOperation = {
  origin: ["http://localhost:5173/"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOperation));
app.use(urlencoded({ extended: true}));
app.use(express.json());

ConnectDataBase(mongo_URI);
app.get("/", (req, res) => {
  res.end("hello,from server");
});

app.use("/api/user", userRouter);
app.use("/api/report", reportRouter);
app.listen(3000, () => {
  console.log("Server is Started at port 3000");
});
