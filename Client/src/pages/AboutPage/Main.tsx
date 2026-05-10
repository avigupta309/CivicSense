import { Zap } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { Sample } from "./Sample";
import { TechSkill } from "./TechSkill";
import { Footer } from "../../components/Footer";

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <TechSkill />

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
      <Sample />
    </div>
  );
};
