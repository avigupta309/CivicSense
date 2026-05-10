import { Zap } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { ProblemPage } from "./Problems";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />

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

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Featured Project
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-green-200">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-green-500 text-white p-3 rounded-lg">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">CivicSense</h3>
                <p className="text-green-600 font-semibold mt-1">
                  Environmental & Civic Incident Reporting Platform
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              An innovative platform enabling citizens to report environmental
              and civic incidents in real-time. Leveraging modern web
              technologies including React, TypeScript, and Leaflet.js for
              location-based mapping, CivicSense bridges the gap between
              communities and environmental action.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Key Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span>
                    Location-based incident mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span>
                    Photo upload with validation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">→</span>
                    Dynamic province/district selection
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    React
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    Leaflet.js
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    react-hook-form
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProblemPage />
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg opacity-90 mb-8">
            Interested in collaborating on innovative projects or discussing web
            development? Reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:abhinashkumargupta309@gmail.com"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Send me an Email
            </a>
            <a
              href="https://github.com/avigupta309"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-600 transition"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
