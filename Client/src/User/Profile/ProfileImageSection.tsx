import { Camera } from "lucide-react";
import { useDataContext } from "../../Context/ContextApi";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export function ProfileImageSection() {
  const { user } = useDataContext();
  const userId = user?._id as string;
  const [previewImage, setPreviewImage] = useState(user?.profileImage);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [sucess, setSucess] = useState<boolean>(false);
  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };
  const handleProfileChangeImage = async () => {
    if (!selectedFile) {
      return toast.error("Select the image first");
    }
    setSucess(true)
    const formData = new FormData();
    formData.append("profilePic", selectedFile);
    formData.append("id", userId);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/edituser",
        formData,
      );
      toast.success("Profile Image Updated Sucessfully");
      setSucess(false);
    } catch (error: any) {
      console.log(error.message);
      toast.error("Profile Image Cannot updated");
    }
  };
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="relative group">
        <img
          src={previewImage || user?.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-2xl object-cover border-4 border-blue-200 shadow-lg"
        />
        <label className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-2xl flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Camera className="text-white" size={28} />
          <input
            onChange={handlePreviewImage}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      </div>
      <div>
        {sucess ? (
          <p className="flex justify-center items-center ml-5 px-2">
            Loading...
            <span className="loading loading-infinity loading-lg "></span>
          </p>
        ) : (
          <button
            onClick={handleProfileChangeImage}
            className="p-2 border-2 border-green-300 hover:border-green-400 text-green-700 rounded-lg transition-colors duration-200 font-medium"
          >
            Change Profile
          </button>
        )}
      </div>
    </div>
  );
}
