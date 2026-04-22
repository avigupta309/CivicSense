import mongoose, { model, Schema } from "mongoose";

const reportSchema = new Schema(
  {
    reporter: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: true,
    },
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
      // required: true,
      default: [],
    },
  },
  { timestamps: true },
);

export const reportModel = model("reports", reportSchema);
