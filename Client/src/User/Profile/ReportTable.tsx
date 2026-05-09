import { useEffect, useState } from "react";
import { Report } from "../../types";
import axios from "axios";
import { useDataContext } from "../../Context/ContextApi";
import { formatDateTime } from "../../pages/Report/FormattedDat";

export function ReportTable() {
  const { user } = useDataContext();
  const userId = user?._id;
  const [submittedReport, setSubmittedReport] = useState<Report[]>([]);
  useEffect(() => {
    if (!userId) return;
    async function extractReport() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/report/usereports",
          { id: userId },
        );
        setSubmittedReport(response.data.data);
      } catch (error: any) {
        console.log("error message: ", error.message);
      }
    }
    extractReport();
  }, [userId]);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
      <div className="border-b border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900">Your Submitted Reports</h2>
        <p className="text-gray-600 mt-2">
          Manage and track your submitted incidents
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-green-500 border">
          <thead>
            <tr className="bg-green-500 hover:bg-green-600 text-white border-green-600 ">
              <th className="px-6 py-4 text-left text-sm font-semibold">S.N</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Category
              </th>
              <th className=" px-6 py-4 text-left text-sm font-semibold">
                Location
              </th>
              <th className="hidden md:block px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {submittedReport.map((report, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200 hover:bg-blue-50 transition-colors index === reports.length - 1 ? "border-b-0" : `}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <p className="font-medium text-gray-900">{index + 1}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{report.category}</td>
                <td className="px-6 py-4 text-gray-700 text-sm">
                  {report.location.lat} {report.location.lng}
                </td>
                <td className="hidden md:block px-6 py-4 text-gray-700 text-sm">
                  {formatDateTime(report.createdAt)}
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border bg-orange-400 text-white w-fit font-medium text-sm`}
                  >
                    {report.status}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
