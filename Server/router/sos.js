import { Router } from "express";
import { sosSet, findSosUser } from "../controllers/sos.js";
import { updateRequestStatus } from "../controllers/requestedSos.js";

export const sosRouter = Router();

sosRouter
  .post("/set", sosSet)
  .post("/show", findSosUser)
  .put("/update", updateRequestStatus);
