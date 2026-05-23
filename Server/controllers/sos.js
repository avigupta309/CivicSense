import { sosModel } from "../models/sos.js";
import { userModel } from "../models/user.js";

export async function sosSet(req, res) {
  const { userId, helperId, relation } = req.body;
  try {
    const helper = await userModel.findById(helperId);
    if (!helper) {
      return res.status(404).json({
        message: "Sorry this user is not available to add as a helper",
      });
    }

    let existingUserSos = await sosModel.findOne({ userInfo: userId });
    if (!existingUserSos) {
      existingUserSos = await sosModel.create({
        userInfo: userId,
        helperInfo: [
          {
            helper: helperId,
            relation: relation,
          },
        ],
      });
    } else {
      const alreadyExists = existingUserSos.helperInfo.some(
        (item) => item.helper.toString() === helperId,
      );
      if (!alreadyExists) {
        existingUserSos.helperInfo.push({
          helper: helperId,
          relation: relation,
        });
        await existingUserSos.save();
      } else {
        return res.status(400).json({
          message: "Sorry this helper is already added",
        });
      }
    }

    return res.status(200).json({
      message: "Helper added successfully",
      data: existingUserSos,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ data: "Something went wrong" });
  }
}

export async function findSosUser(req, res) {
  const { userId } = req.body;
  try {
    const helpers = await sosModel.findOne({userInfo:userId});
    if (!helpers) {
      return res.status(401).json({ message: "You Havent add any helper yet" });
    }

    const userDetail = await sosModel
      .findOne({ userInfo: userId })
      .populate("userInfo")
      .populate("helperInfo.helper");
    return res.status(201).json({ data: userDetail });
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: "not getting relative,try again" });
  }
}
