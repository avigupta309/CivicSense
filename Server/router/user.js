import { Router } from "express";
import multer from "multer";
import {
  changePassword,
  handleChangeRole,
  HandleLogin,
  HandleUserDelete,
  ViewOneUSer,
  HandleUserSignUp,
  viewAllUser,
  handleUserEditInfo,
  handleLogOut,
} from "../controllers/user.js";
export const userRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

userRouter
  .post("/", HandleUserSignUp)
  .post("/login", HandleLogin)
  .get("/logout", handleLogOut)
  .get("/alluser", viewAllUser)
  .get("/:id", ViewOneUSer)
  .put("/changepassword", changePassword)
  .delete("/del/:id", HandleUserDelete)
  .put("/changerole/:id", handleChangeRole)
  .post("/edituser", upload.single("profilePic"), handleUserEditInfo);
