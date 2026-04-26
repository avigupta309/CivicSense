import { userModel } from "../models/user.js";
import { userDP } from "../upload/user.js";

export async function HandleUserSignUp(req, res) {
  const { fullName, email, phoneNumber, password, role, address } = req.body;
  const user = await userModel.findOne({ email: email });
  if (user) return res.status(409).json({ data: "Email is already Exist" });
  try {
    await userModel.create({
      fullName,
      email,
      role,
      phoneNumber,
      password,
      address,
    });
    return res.status(201).json({
      message: "SignUp Sucessfully ",
      data: { fullName: fullName, email: email },
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Cannot Signup because phoneNumber already exist" });
  }
}

export async function HandleLogin(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user) return res.status(404).json({ data: "Email is Not registred" });
  try {
    const isMatchPassword = await user.matchPassword(password);
    return res.status(200).json({
      data: "SignIn Sucessfully ",
      user: {
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        phone: user.phoneNumber,
      },
    });
  } catch (error) {
    return res.status(401).json({ message: "Password not match..." });
  }
}

export async function ViewOneUSer(req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.findById(id);
    return res.status(201).json({ data: user });
  } catch (error) {
    return res.status(400).json({ data: "User Not Found !!" });
  }
}

export async function changePassword(req, res) {
  const { email, oldpassword, newpassword } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ data: "Enter Valid Email" });
    user.matchPassword(oldpassword);

    if (newpassword === oldpassword) {
      return res.status(400).json({
        message: "New password cannot be same as old password",
      });
    }
    user.password = newpassword.trim();
    await user.save();
    return res.status(200).json({
      data: "Password Changed Successfully",
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message || "Something Went Wrong",
    });
  }
}

export async function HandleUserDelete(req, res) {
  const { id } = req.params;
  try {
    const userExist = await userModel.findById(id);
    if (!userExist)
      return res
        .status(400)
        .json({ message: "User Email is Not Found In DataBase" });
    await userModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "User Deleted Sucessfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export async function viewAllUser(req, res) {
  try {
    const users = await userModel.find();
    if (!users)
      return res.status(400).json({ data: "No any user yet registered" });
    return res.status(200).json({ users: users });
  } catch (error) {
    return res.status(500).json({ data: "Something Went Wrong" });
  }
}

export async function handleChangeRole(req, res) {
  const { id } = req.params;
  const { role } = req.body;
  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(401).json({ message: "User Not Found" });
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true },
    );
    return res.status(201).json({ message: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export const changeProfilePic = async (req, res) => {
  const { id } = req.body;
  const user = await userModel.findById(id);
  if (!user) {
    return res
      .status(400)
      .json({ message: "User Not Found To change Profile Image" });
  }

  try {
    const profilePicUrl = await userDP(req);
    user.profileImage = profilePicUrl;
    user.save();
    return res.status(200).json({
      message: "profile pic sucessfully change",
      name: user.fullName,
    });
  } catch (error) {
    return res.status(400).json({ message: "No file uploaded" });
  }
};
