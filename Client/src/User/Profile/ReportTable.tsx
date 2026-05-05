import { FakeData } from "../fakeData";

export function ReportTable() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
      <div className="border-b border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900">Your Reports</h2>
        <p className="text-gray-600 mt-2">
          Manage and track your submitted incidents
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-green-500 border">
          <thead>
            <tr className="bg-green-500 hover:bg-green-600 text-white border-green-600 ">
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Location
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
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
            {FakeData.map((report) => (
              <tr
                key={report.id}
                className={`border-b border-gray-200 hover:bg-blue-50 transition-colors index === reports.length - 1 ? "border-b-0" : `}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={report.image}
                      alt=""
                      className="w-10 h-10 rounded object-cover"
                    />
                    <p className="font-medium text-gray-900">{report.title}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{report.category}</td>
                <td className="px-6 py-4 text-gray-700 text-sm">
                  {report.location}
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">
                  {new Date(report.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`flex items-center gap-2 px-3 py-1 rounded-full border ${report.status} w-fit font-medium text-sm`}
                  >
                    {/* {getStatusIcon(report.status)} */}
                    {report.status === "solved" && "Solved"}
                    {report.status === "pending" && "Pending"}
                    {report.status === "in_progress" && "In Progress"}
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
