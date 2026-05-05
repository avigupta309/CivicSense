import { Eye, EyeOff, X } from "lucide-react";
import React from "react";
interface showPasswordModalProps {
  showPasswordModal: boolean;
  setShowPasswordModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ShowPasswordModal({
  setShowPasswordModal,
  showPasswordModal,
}: showPasswordModalProps) {
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

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type="text"
                // type={showPasswords.current ? "text" : "password"}
                // value={passwordData.currentPassword}
                // onChange={(e) =>
                //   setPasswordData({
                //     ...passwordData,
                //     currentPassword: e.target.value,
                //   })
                // }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
              />
              <button
                type="button"
                // onClick={() =>
                //   setShowPasswords({
                //     ...showPasswords,
                //     current: !showPasswords.current,
                //   })
                // }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {true ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type="text"
                // type={showPasswords.new ? "text" : "password"}
                // value={passwordData.newPassword}
                // onChange={(e) =>
                //   setPasswordData({
                //     ...passwordData,
                //     newPassword: e.target.value,
                //   })
                // }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
              />
              <button
                type="button"
                // onClick={() =>
                //   setShowPasswords({
                //     ...showPasswords,
                //     new: !showPasswords.new,
                //   })
                // }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {true ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="text"
                // type={showPasswords.confirm ? "text" : "password"}
                // value={passwordData.confirmPassword}
                // onChange={(e) =>
                //   setPasswordData({
                //     ...passwordData,
                //     confirmPassword: e.target.value,
                //   })
                // }
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors pr-10"
              />
              <button
                type="button"
                // onClick={() =>
                //   setShowPasswords({
                //     ...showPasswords,
                //     confirm: !showPasswords.confirm,
                //   })
                // }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {true ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            // onClick={handlePasswordChange}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Update Password
          </button>
          <button
            onClick={() => setShowPasswordModal(!showPasswordModal)}
            className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors duration-200 font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
