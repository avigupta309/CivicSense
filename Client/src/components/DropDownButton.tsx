import { LogOut, MoonIcon, Settings, Sun, TheaterIcon, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function DropDownButton() {
  const [theme, setTheme] = useState<boolean>(false);
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
          to="/settings"
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
          // onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </button>
      </>
    </div>
  );
}
