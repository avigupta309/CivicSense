import { Save, X } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userProps } from "../../types";
import { useDataContext } from "../../Context/ContextApi";
import axios from "axios";
import { toast } from "react-toastify";

interface editProfileProps {
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: boolean;
}
export function EditUserInfo({
  setEditProfile,
  editProfile,
}: editProfileProps) {
  const { user } = useDataContext();
  const userId = user?._id;
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<userProps>();

  const onSubmit = async (data: userProps) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/edituser",
        { ...data, id: userId },
      );
      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error("Failed to update profile. Please try again");
    }
  };

  useEffect(() => {
    if (user) {
      setValue("address", user.address);
      setValue("fullName", user.fullName);
    }
  }, []);
  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Namess
            </label>
            <input
              {...register("fullName", {
                required: "Name is Required",
                minLength: {
                  value: 4,
                  message: "Name Must be greateer than 4 digit",
                },
              })}
              type="text"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName?.message}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              value={user?.email}
              {...register("email", { required: "Email is Required" })}
              readOnly
              type="email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              value={user?.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone Number is Required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone Number must be exactly 10 digits",
                },
              })}
              readOnly
              type="tel"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              {...register("address", { required: "Address is Required" })}
              type="text"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.address?.message}
            </p>
          </div>
          
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            <Save size={18} /> Save Changes
          </button>
          <button
            onClick={() => setEditProfile(!editProfile)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
          >
            <X size={18} /> Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
