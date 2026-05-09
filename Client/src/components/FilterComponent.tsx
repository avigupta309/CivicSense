import { ISSUE_CATEGORIES, Provinces } from "../mockData";
import { useDataContext } from "../Context/ContextApi";
import { IssueCategory, Province } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

interface filterBarToggle {
  setFiltersOpen: (data: boolean) => void;
  filtersOpen: boolean;
}

export const FilterComponent = ({
  setFiltersOpen,
  filtersOpen,
}: filterBarToggle) => {
  const [filterKeyWord, setFilterKeyWord] = useState<string[]>([]);
  const {
    selectedCategory,
    selectedProvince,
    setSelectedCategory,
    setSelectedProvince,
    setFilterReport,
  } = useDataContext();

  function addCategory(cate: IssueCategory) {
    if (selectedCategory.includes(cate)) {
      setSelectedCategory((prev) => prev.filter((c) => c != cate));
    } else {
      setSelectedCategory((prev) => [...prev, cate]);
    }
  }

  function addProvinces(prov: Province) {
    if (selectedProvince.includes(prov)) {
      setSelectedProvince((prev) => prev.filter((p) => p !== prov));
    } else {
      setSelectedProvince((prev) => [...prev, prov]);
    }
  }

  function clearAllFilter() {
    setSelectedCategory([]);
    setSelectedProvince([]);
  }

  useEffect(() => {
    setFilterKeyWord(() => [...selectedCategory, ...selectedProvince]);
  }, [selectedCategory, selectedProvince]);

  useEffect(() => {
    async function fetchFilterreports() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/report/filterdebounce",
          { filterKeyWord },
        );
        setFilterReport(response.data.data);
      } catch (error) {}
    }
    fetchFilterreports();
  }, [filterKeyWord]);

  return (
    <>
      <div className="bg-stone-50 border-t border-stone-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-stone-800">Filter Reports</h3>
            <div className="flex justify-between gap-10">
              <button
                onClick={clearAllFilter}
                className={`text-sm text-green-600 hover:text-green-700 font-medium
             `}
              >
                Clear All
              </button>
              <button
                onClick={() => {
                  setFiltersOpen(!filtersOpen);
                }}
                className={`text-sm text-red-600 hover:text-red-700 font-medium
             `}
              >
                Close
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-stone-700 mb-2">
                Issue Categories
              </h4>
              <div className="flex flex-wrap gap-2">
                {ISSUE_CATEGORIES.map((cate) => (
                  <button
                    key={cate}
                    onClick={() => addCategory(cate)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors 
                       ${
                         selectedCategory.includes(cate)
                           ? "bg-green-600 text-white"
                           : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-300"
                       }`}
                  >
                    {cate}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-stone-700 mb-2">
                Provinces
              </h4>
              <div className="flex flex-wrap gap-2">
                {Provinces.map((prov) => (
                  <button
                    key={prov}
                    onClick={() => addProvinces(prov)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedProvince.includes(prov)
                        ? "bg-green-600 text-white"
                        : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-300"
                    }`}
                  >
                    {prov}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
