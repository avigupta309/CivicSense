export const Vision = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Our Vision for Change
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">⚡</div>
          <h4 className="font-bold text-gray-900 mb-2">Rapid Response</h4>
          <p className="text-sm text-gray-700">
            Real-time incident reporting enables faster emergency response and
            life-saving interventions
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">🔍</div>
          <h4 className="font-bold text-gray-900 mb-2">Evidence Based</h4>
          <p className="text-sm text-gray-700">
            Photo and location data provide concrete evidence for investigations
            and prosecutions
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">📊</div>
          <h4 className="font-bold text-gray-900 mb-2">Data Driven</h4>
          <p className="text-sm text-gray-700">
            Historical incident data identifies patterns for strategic
            prevention and resource allocation
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">🤝</div>
          <h4 className="font-bold text-gray-900 mb-2">Community Power</h4>
          <p className="text-sm text-gray-700">
            Citizens become active guardians of their environment and
            communities
          </p>
        </div>
      </div>
    </div>
  );
};
