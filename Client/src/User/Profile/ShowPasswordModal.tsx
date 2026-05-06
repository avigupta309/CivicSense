import axios from "axios";
import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDataContext } from "../../Context/ContextApi";
interface showPasswordModalProps {
  showPasswordModal: boolean;
  setShowPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}
interface userCredentialProps {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function ShowPasswordModal({
  setShowPasswordModal,
  showPasswordModal,
}: showPasswordModalProps) {
  const [eye, setEye] = useState<boolean>(false);
  const { user } = useDataContext();
  const userId = user?._id;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<userCredentialProps>();

  const onSubmit = async (data: userCredentialProps) => {
    console.log("clicked", data);
    try {
      const response = await axios.put(
        "http://localhost:3000/api/user/changepassword",
        { ...data, id: userId },
      );
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Change Password</h3>
          <button
            onClick={() => setShowPasswordModal(!showPasswordModal)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  {...register("currentPassword", {
                    required: "Current Password is Required",
                    minLength: {
                      value: 4,
                      message: "Current Password Length must be 4",
                    },
                  })}
                  type={eye ? "text" : "password"}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.currentPassword?.message}
                </p>
                <button
                  onClick={() => {
                    setEye(!eye);
                  }}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {eye ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  {...register("newPassword", {
                    required: "New Password is required",
                    minLength: {
                      value: 4,
                      message: "New Password Length must be 4",
                    },
                  })}
                  type={eye ? "text" : "password"}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword?.message}
                </p>
                <button
                  onClick={() => {
                    setEye(!eye);
                  }}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {eye ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    minLength: {
                      value: 4,
                      message: "Confirm Password Length must be 4",
                    },
                  })}
                  type={eye ? "text" : "password"}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
                />
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword?.message}
                </p>
                <button
                  onClick={() => {
                    setEye(!eye);
                  }}
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {eye ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
