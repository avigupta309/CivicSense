import axios from "axios";
import { LogOut, MoonIcon, Settings, Sun, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function DropDownButton() {
  const [theme, setTheme] = useState<boolean>(false);
  async function handleLogOut() {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/logout",
        { withCredentials: true },
      );
      console.log(response.data);
      toast.success("LogOut SucesssFully");
    } catch (error) {
      toast.warning("Cannot LogOut");
    }
  }
  return (
    <div className="absolute right-0 mt-60 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
      <>
        <Link
          to="/profile"
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <User className="h-4 w-4 mr-2" />
          Profile
        </Link>
        <Link
          to="/settingpage"
          className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Link>
        <button
          onClick={() => {
            setTheme(!theme);
          }}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          {theme ? (
            <Sun className="h-4 w-4 mr-2 text-yellow-500" />
          ) : (
            <MoonIcon className="h-4 w-4 mr-2 text-blue-700" />
          )}
          Toggle Theme
        </button>

        <button
          onClick={handleLogOut}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </>
    </div>
  );
}
