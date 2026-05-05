import { Camera } from "lucide-react";
import { useDataContext } from "../../Context/ContextApi";

export function ProfileImageSection() {
  const { user } = useDataContext();
  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      <div className="relative group">
        <img
          src={user?.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-2xl object-cover border-4 border-blue-200 shadow-lg"
        />
        <label className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-2xl flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Camera className="text-white" size={28} />
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>
      <p className="text-xs text-gray-500 text-center md:text-left">
        Hover to change photo
      </p>
    </div>
  );
}
