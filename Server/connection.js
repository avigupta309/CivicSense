import mongoose from "mongoose";
export const ConnectDataBase = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("DataBase Connected Sucessfully")
  } catch (error) {
    console.log("Cannot Connect The Database");
  }
};
