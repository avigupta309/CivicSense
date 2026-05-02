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
} from "../controllers/user.js";
export const userRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

userRouter
  .post("/", HandleUserSignUp)
  .post("/login", HandleLogin)
  .get("/:id", ViewOneUSer)
  .put("/changepassword", changePassword)
  .delete("/del/:id", HandleUserDelete)
  .get("/alluser", viewAllUser)
  .post("/changerole/:id", handleChangeRole)
  .post("/edituser", upload.single("profilePic"), handleUserEditInfo);
