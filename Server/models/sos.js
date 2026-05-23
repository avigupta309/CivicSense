import mongoose, { model, Schema } from "mongoose";

const sosSchema = new Schema(
  {
    userInfo: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      default: null,
    },
    helperInfo: [
      {
        helper: {
          type: mongoose.Schema.ObjectId,
          ref: "users",
        },

        relation: {
          type: String,
          enum: [
            "brother",
            "sister",
            "father",
            "teacher",
            "uncle",
            "friend",
            "other",
          ],
          default: "other",
        },
      },
    ],
  },
  { timestamps: true },
);

export const sosModel = new model("sos", sosSchema);
