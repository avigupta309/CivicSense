export const TechSkill = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Tech Stack & Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                React & TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                HTML & CSS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                JavaScript (ES6+)
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border-t-4 border-orange-400">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Node.js & Express
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                MongoDB & MySQL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                RESTful APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Authentication
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border-t-4 border-green-600">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                JWT
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Leaflet.js Maps
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Data Analysis (Learning)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                Git & GitHub
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
