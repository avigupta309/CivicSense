import { Router } from "express";
import {
  changePassword,
  handleChangeRole,
  HandleLogin,
  HandleUserDelete,
  ViewOneUSer,
  HandleUserSignUp,
  viewAllUser,
} from "../controllers/user.js";

export const userRouter = Router();

userRouter
  .post("/", HandleUserSignUp)
  .post("/login", HandleLogin)
  .get("/:id", ViewOneUSer)
  .put("/changepassword", changePassword)
  .delete("/del/:id", HandleUserDelete)
  .get("/alluser",viewAllUser)
  .post('/changerole/:id',handleChangeRole);
