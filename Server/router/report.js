import { Router } from "express";
import multer from "multer";
import { deleteReport, SubmitReport } from "../controllers/report.js";

export const reportRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

reportRouter
  .post("/", upload.array("images", 3), SubmitReport)
  .delete("/del/:id", deleteReport);
