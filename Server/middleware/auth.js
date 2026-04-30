import { userModel } from "../models/user.js";
import { verifyToken } from "../service/user.js";

export const  CheckAuthUser = (cookieName) => {
  return async(req, res, next) => {
    try {
      const clientToken = req.cookies[cookieName];
      const decodedUser = verifyToken(clientToken);
     const verifiedUser=await userModel.findById(decodedUser.id).select("-password")
      req.validUser = verifiedUser;
      next();
    } catch (error) {
      return res.status(404).json({ data: "Cookie Not Match" });
    }
  };
};
