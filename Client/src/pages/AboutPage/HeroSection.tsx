import { Code2, Github, Linkedin, Mail, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-12 pb-20 px-4 md:px-8 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
                Abhinash Gupta
              </h1>

              <p className="text-lg md:text-xl text-green-600 font-semibold">
                Full-Stack Developer & Environmental Tech Enthusiast
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              I'm a passionate full-stack developer from{" "}
              <span className="text-green-600 font-semibold">
                Birgunj, Nepal
              </span>
              , dedicated to building meaningful solutions that solve real-world
              problems. Currently studying at{" "}
              <span className="text-green-600 font-semibold">
                Birgunj Public College
              </span>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Tech Stack</p>
                <p className="font-semibold text-gray-900">10+ Technologies</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Focus</p>
                <p className="font-semibold text-gray-900">
                  Impact-driven Apps
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-600 font-medium">Get in touch:</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/avigupta309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/avinash-gupta-9b35b6313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>

                <a
                  href="mailto:abhinashkumargupta309@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>

              <p className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-green-600" />
                Birgunj, Parsa, Nepal
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-fit">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-orange-400 rounded-2xl rotate-3"></div>

              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-green-500 rounded-2xl -rotate-2 opacity-30"></div>

              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="./profile.jpeg"
                  alt="Abhinash Gupta"
                  className="w-52 md:w-64 rounded-xl object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-full p-4 shadow-lg">
                <Code2 size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
