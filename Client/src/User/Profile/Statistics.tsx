export function Statistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-10">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Reports</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">stats.total</p>
          </div>
          <div className="text-5xl text-blue-100">📊</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Solved</p>
            <p className="text-4xl font-bold text-emerald-600 mt-2">
              stats.solved
            </p>
          </div>
          <div className="text-5xl text-emerald-100">✅</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Pending</p>
            <p className="text-4xl font-bold text-amber-600 mt-2">
              stats.pending
            </p>
          </div>
          <div className="text-5xl text-amber-100">⏳</div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">In Progress</p>
            <p className="text-4xl font-bold text-blue-600 mt-2">
              stats.inProgress
            </p>
          </div>
          <div className="text-5xl text-blue-100">🔄</div>
        </div>
      </div>
    </div>
  );
}
