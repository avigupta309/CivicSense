import { Vision } from "./Vision";
import { mockHazardData } from "./mockData";

export const ProblemPage = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          How CivicSense Makes a Real Difference
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Addressing critical challenges in Nepal through community-driven
          incident reporting.
        </p>

        {mockHazardData.map((item) => (
          <div
            key={item.id}
            className="mb-16 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="grid md:grid-cols-2">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-80 md:h-full object-cover"
              />

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>

                <p className="text-gray-700 mb-6">{item.description}</p>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                  <h4 className="font-bold mb-3">How CivicSense Helps:</h4>

                  <ul className="space-y-2">
                    {item.helpPoints.map((point, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-green-600 font-bold">✓</span>

                        <span>
                          <strong>{point.title}:</strong> {point.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                  <h4 className="font-bold mb-3">
                    Preventive Measures Enabled:
                  </h4>

                  <ul className="space-y-2 text-sm">
                    {item.preventiveMeasures.map((measure, index) => (
                      <li key={index}>• {measure}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Vision />
      </div>
    </section>
  );
};
