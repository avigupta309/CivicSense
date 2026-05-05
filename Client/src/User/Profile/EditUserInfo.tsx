import { Save, X } from "lucide-react";
import React from "react";

interface editProfileProps {
  setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: boolean;
}
export function EditUserInfo({
  setEditProfile,
  editProfile,
}: editProfileProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile ss</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Namess
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Emailaaa
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium">
          <Save size={18} /> Save Changes
        </button>
        <button
          onClick={() => setEditProfile(!editProfile)}
          className="flex items-center gap-2 px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
        >
          <X size={18} /> Cancel xcx
        </button>
      </div>
    </div>
  );
}
