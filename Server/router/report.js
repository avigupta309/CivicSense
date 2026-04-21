import { Router } from "express";
import { deleteReport, SubmitReport } from "../controllers/report.js";

export const reportRouter = Router();

reportRouter.post('/',SubmitReport).delete('/del/:id',deleteReport)
