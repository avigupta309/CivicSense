import { STATUS_CODES } from "http";
import { reportModel } from "../models/report.js";
import { userModel } from "../models/user.js";
import { reportImages } from "../upload/report.js";

export async function SubmitReport(req, res) {
  const { id, description, location, category, province, district, address } =
    req.body;

  // const coordinates = JSON.parse(location);

  try {
    const user = await userModel.findById(id);
    if (!user) return res.status(401).json({ message: "User Not Found" });
    const reportImagesUrl = await reportImages(req);
    const submitReport = await reportModel.create({
      category: category,
      province: province,
      district: district,
      address: address,
      description: description,
      reporterInfo: id,
      imagesUrls: reportImagesUrl,
      location: {
        lat: 27.700769,
        lng: 85.30014,
        // lat: coordinates.latww | 27.700769,
        // lng: coordinates.lngww | 85.30014,
      },
    });
    return res.status(201).json({ message: "Report Submit Sucessfully !!" });
  } catch (error) {
    console.log(error.message);
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

export async function viewAllReport(req, res) {
  try {
    const report = await reportModel.find({});
    if (!report)
      return res
        .status(400)
        .json({ message: "Report is Not Found In DataBase" });
    return res.status(200).json({ data: report });
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export async function debouncedSearch(req, res) {
  const { searchTerm } = req.body;
  let report;

  try {
    if (searchTerm.trim()) {
      report = await reportModel.find({
        $or: [
          { province: { $regex: searchTerm, $options: "i" } },
          { district: { $regex: searchTerm, $options: "i" } },
          { category: { $regex: searchTerm, $options: "i" } },
        ],
      });
    } else {
      report = await reportModel.find({});
    }
    return res.status(200).json({ data: report });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export async function debounceFilter(req, res) {
  const { filterKeyWord } = req.body;
  let report;

  try {
    if (filterKeyWord.length > 0) {
      report = await reportModel.find({
        $or: [
          { category: { $in: filterKeyWord } },
          { province: { $in: filterKeyWord } },
          { district: { $in: filterKeyWord } },
        ],
      });
    } else {
      report = await reportModel.find({});
    }

    return res.status(200).json({ data: report });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
}

export async function userReports(req, res) {
  const { id } = req.body;

  try {
    const report = await reportModel.find({ reporterInfo: id });
    return res
      .status(200)
      .json({ data: report, message: "Report Extract Sucessfully" });
  } catch (error) {
    return res.status(401).json({ message: "Report Cannot Extracted " });
  }
}

export async function editReportStatus(req, res) {
  const { status, id } = req.body;
  console.log(status);
  try {
    const report = await reportModel.findById(id);
    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }
    const updatedReport = await reportModel.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );
    return res
      .status(200)
      .json({ data: updatedReport, message: "Report modified Sucessfully" });
  } catch (error) {
    console.log("error msg : ", error.message);
    return res.status(401).json({ message: "Report Cannot Modified " });
  }
}
