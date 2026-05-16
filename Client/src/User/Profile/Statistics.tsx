import { useEffect, useState } from "react";
import { useDataContext } from "../../Context/ContextApi";
import axios from "axios";
interface reportStat {
  status: string;
}
export function Statistics() {
  const { user } = useDataContext();
  const [reportStat, setReportStat] = useState<reportStat[]>([]);
  const userId = user?._id;

  let rejected: number = 0,
    pending: number = 0,
    solved: number = 0,
    inprogress: number = 0;

  reportStat.forEach((repo) => {
    if (repo.status == "pending") {
      pending += 1;
    } else if (repo.status == "rejected") {
      rejected += 1;
    } else if (repo.status == "solved") {
      solved += 1;
    } else {
      inprogress += 1;
    }
  });

  useEffect(() => {
    if (!userId) return;
    async function reportStat() {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/report/usereports",
          { id: userId },
        );
        setReportStat(response.data.data);
      } catch (error: any) {
        console.log("error message: ", error.message);
      }
    }

    reportStat();
  }, [userId]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Reports</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {reportStat.length}
            </p>
          </div>
          <div className="text-5xl text-blue-100">📊</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Solved</p>
            <p className="text-4xl font-bold text-emerald-600 mt-2">{solved}</p>
          </div>
          <div className="text-5xl text-emerald-100">✅</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-4xl font-bold text-amber-600 mt-2">{pending}</p>
          </div>
          <div className="text-5xl text-amber-100">⏳</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">In Progress</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              {inprogress}
            </p>
          </div>
          <div className="text-5xl text-blue-100">🔄</div>
        </div>
      </div>
    </div>
  );
}
