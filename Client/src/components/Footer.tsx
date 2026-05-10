import { Github, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-green-500 mb-3">
              CivicSense
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through real-time environmental and civic
              incident reporting.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  About
                </Link>
              </li>
           
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:abhinashkumargupta309@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition text-sm"
              >
                <Mail size={18} />
                <span>abhinashkumargupta309@gmail.com</span>
              </a>
              <a
                href="tel:+9809809176832"
                className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition text-sm"
              >
                <Phone size={18} />
                <span>+977 9809176832</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300 text-sm pt-2">
                <MapPin size={18} />
                <span>Birgunj, Parsa, Nepal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500 border-opacity-30 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex">
            © {currentYear} CivicSense. All rights reserved. | Made with
            <img src="./leaf.png" alt="CivicSense" className="h-5" /> for communities
          </p>
          <div>
            <img src="./leaf.png" alt="" />
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/avigupta309"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-black p-2 rounded-full transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/avinash-gupta-9b35b6313"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-black p-2 rounded-full transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:abhinashkumargupta309@gmail.com"
              className="bg-green-500 hover:bg-green-600 text-black p-2 rounded-full transition transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
