import { reportModel } from "../models/report.js";
import { userModel } from "../models/user.js";
import { reportImages } from "../upload/report.js";

export async function SubmitReport(req, res) {
  const { id, description, location, category } = req.body;
  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(401).json({ message: "User Not Found" });
    console.log("here file==", req.files);
    const reportImagesUrl = await reportImages(req);
    console.log(reportImagesUrl)
    const submitReport = await reportModel.create({
      reporter: user.fullName,
      description: description,
      phoneNumber: user.phoneNumber,
      email: user.email,
      reporterInfo: id,
      imagesUrls: reportImagesUrl,
      location: {
        lat: location.lat,
        lng: location.lng,
      },
      category: category,
    });
    return res.status(201).json({ message: "Report Submit Sucessfully !!" });
  } catch (error) {
    console.log(error.message)
    return res.status(404).json({ message: "Something Went Wrong" });
  }
}

export async function reviewReport(req, res) {
  const { id } = req.params;
  try {
    const report = await reportModel.findById(id);
    if (!report)
      return res
        .status(400)
        .json({ message: "Report is Not Found In DataBase" });
    const sendReport = await reportModel.findById(id).populate("reporterInfo");
    return res.status(200).json({ data: sendReport });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export async function deleteReport(req, res) {
  const { id } = req.params;
  try {
    const report = await reportModel.findById(id);
    if (!report)
      return res
        .status(400)
        .json({ message: "Report is Not Found In DataBase" });
    await reportModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "Report Deleted Sucessfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}
