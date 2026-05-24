import { requestSosModel } from "../models/requestSos.js";
import { sosModel } from "../models/sos.js";

export async function handleRequestSos(data) {
  const { helperId, userId, relation } = data;
  try {
    let requestTakenUser = await requestSosModel.findOne({
      requestedTo: helperId,
    });
    if (!requestTakenUser) {
      requestTakenUser = await requestSosModel.create({
        requestedTo: helperId,
        requestedFrom: [
          {
            requesters: userId,
            relation: relation,
          },
        ],
      });
    } else {
      let alreadyExists = await requestTakenUser.requestedFrom.some(
        (item) => item.requesters.toString() === userId,
      );
      if (!alreadyExists) {
        requestTakenUser.requestedFrom.push({
          requesters: userId,
          relation: relation,
        });
        requestTakenUser.save();
      } else {
        throw new error("You Cannot Request Same User multiple Time");
      }
    }
  } catch (error) {
    throw new error("Cannot SetRequest here");
  }
}

export async function updateRequestStatus(req, res) {
  const { userId, requesters, status } = req.body;
  try {
    await handleUserSideSos(req.body);
    const requester = await requestSosModel.findOneAndUpdate(
      {
        requestedTo: userId,
        "requestedFrom.requesters": requesters,
      },
      {
        $set: {
          "requestedFrom.$.status": status,
        },
      },

      { returnDocument: "after" },
    );
    if (!requester) {
      return res.status(404).json({ messsage: "Requester not found" });
    }
    return res.status(200).json({ data: "updated sucessfully" });
  } catch (error) {
    return res
      .status(404)
      .json({ data: "cannot updated", ErMsg: error.message });
  }
}

export async function handleUserSideSos(data) {
  const { userId, requesters, status } = data;

  try {
    let userExist = await sosModel.findOne({ userInfo: requesters });
    if (userExist) {
      userExist = await sosModel.findOneAndUpdate(
        { userInfo: requesters, "helperInfo.helper": userId },
        { $set: { "helperInfo.$.status": status } },
        { returnDocument: "after" },
      );
    } else {
      throw new error("Sorry You havent send request yet");
    }
  } catch (error) {
    throw new error("Sorry You Not Here in Helper list");
  }
}
