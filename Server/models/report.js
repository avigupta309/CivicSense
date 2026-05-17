import mongoose, { model, Schema } from "mongoose";

const reportSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      required: true,
    },
    province: {
      type: String,
    },
    district: {
      type: String,
    },
    address: {
      type: String,
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
    imagesUrls: {
      type: [String],
      default: [],
    },
    reporterInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      default: [],
    },
    status: {
      type: String,
      enum: ["solved", "rejected", "pending", "inprogress"],
      default: "inprogress",
    },
  },
  { timestamps: true },
);

export const reportModel = model("reports", reportSchema);
