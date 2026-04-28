import { verifyToken } from "../service/user.js";

export const CheckAuthUser = (cookieName) => {
  return (req, res, next) => {
    try {
      const clientToken = req.cookies[cookieName];
      const verifiedUser = verifyToken(clientToken);
      req.validUser = verifiedUser;
      next();
    } catch (error) {
        console.log(error.message)
      return res.status(400).json({ data: "Cookie Not Match" });
    }
  };
};
