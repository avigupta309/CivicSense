import { configDotenv } from "dotenv";
import cloudinaryPkg from "cloudinary";
const { v2: cloudinary } = cloudinaryPkg;
import streamifier from "streamifier";
configDotenv();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export async function reportImages(req) {
   if (!req.files || req.files.length === 0) return [];
if (req.files && req.files.length > 0) {
  const uploadFromBuffer = (buffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "reportImages" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      streamifier.createReadStream(buffer).pipe(stream);
    });
  };

  try {
    const uploadPromises = req.files.map((file) =>
      uploadFromBuffer(file.buffer),
    );

    const results = await Promise.all(uploadPromises);

    const imageUrls = results.map((r) => r.secure_url);

    return imageUrls;
  } catch (error) {
    console.error("Cloudinary upload error:", error.message);
    return [];
  }
}

}
