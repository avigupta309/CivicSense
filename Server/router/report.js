import { Router } from "express";
import multer from "multer";
import {
  debouncedSearch,
  debounceFilter,
  deleteReport,
  editReportStatus,
  reviewReport,
  userReports,
  SubmitReport,
  viewAllReport,
} from "../controllers/report.js";

export const reportRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

reportRouter
  .post("/", upload.array("images", 3), SubmitReport)
  .delete("/del/:id", deleteReport)
  .get("/viewreport/:id", reviewReport)
  .post("/editreport", editReportStatus)
  .get("/viewallreport", viewAllReport)
  .post("/searchdebounse", debouncedSearch)
  .post("/filterdebounce", debounceFilter)
  .post("/usereports", userReports)
