import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();
const secretKey = process.env.SECRET_KEY;

export function createToken(user) {
  try {
    const userPayload = {
      id: user._id,
      role: user.role,
    };

    const token = jwt.sign(userPayload, secretKey);
    return token;
  } catch (error) {
    throw new Error("Something went Wrong While Making token");
  }
}

export const verifyToken = (token) => {
  try {
    const verifiedUser = jwt.verify(token, secretKey);
    if (!verifiedUser) return res.status(400).json({ data: "Token is  Match" });
    return verifiedUser;
  } catch (error) {
    throw new Error("Password Not match");
  }
};
