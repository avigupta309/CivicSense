import { Leaf, Menu, X, Filter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterComponent } from "./FilterComponent";
import { useDataContext } from "../Context/ContextApi";
import { AuthUser } from "../hook/Auth";
import { DropDownButton } from "./DropDownButton";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState<boolean>(false);
  const { selectedCategory, selectedProvince, user } = useDataContext();
  const isAuthenticated = AuthUser();

  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">
              Civic Sense
            </span>
          </div>

          <div className="">
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-8">
                <button
                  onClick={() => navigate("/about-us")}
                  className="font-medium transition-colors hover:text-green-600"
                >
                  About-Us
                </button>
                <button
                  onClick={() => navigate("/reports")}
                  className="font-medium transition-colors hover:text-green-600"
                >
                  Reports
                </button>
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="flex items-center space-x-1 font-medium text-stone-600 hover:text-green-600 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                  {(selectedCategory.length > 0 ||
                    selectedProvince.length > 0) && (
                    <span className="bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
                      {selectedCategory.length + selectedProvince.length}
                    </span>
                  )}
                </button>
                <div
                  onClick={() => {
                    setShowDropMenu(!showDropMenu);
                  }}
                  className="cursor-pointer"
                >
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={user?.profileImage}
                    alt=""
                  />
                </div>
                  {showDropMenu && <DropDownButton />}
              </div>
            ) : (
              <div className="hidden md:flex gap-x-5">
                <button
                  className="bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg text-white"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  SignUp
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex justify-center">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={user?.profileImage}
              alt=""
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => {
                setFiltersOpen(!filtersOpen);
                setMobileMenuOpen(false);
              }}
              className="flex items-center space-x-1 font-medium text-stone-600 hover:text-green-600 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
              {(selectedCategory.length > 0 || selectedProvince.length > 0) && (
                <span className="bg-green-600 text-white text-xs rounded-full px-2 py-0.5">
                  {selectedCategory.length + selectedProvince.length}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                navigate("/reports");
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 rounded-lg font-medium text-stone-600 hover:bg-stone-50"
            >
              Reports
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {filtersOpen && (
        <FilterComponent
          setFiltersOpen={setFiltersOpen}
          filtersOpen={filtersOpen}
        />
      )}
    </nav>
  );
}
