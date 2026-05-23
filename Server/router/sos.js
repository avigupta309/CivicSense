import { Router } from "express";
import { sosSet, findSosUser } from "../controllers/sos.js";

export const sosRouter = Router();

sosRouter.post("/set", sosSet).post("/show", findSosUser);
