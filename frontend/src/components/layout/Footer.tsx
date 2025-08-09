import { RiGithubLine, RiDiscordLine, RiMailLine } from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left - Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            DevPlatform
          </Link>

          {/* Center - Copyright */}
          <div className="text-gray-600 text-sm">© 2025 DevPlatform. All rights reserved.</div>

          {/* Right - Social Links */}
          <div className="flex space-x-3">
            <a
              href="https://github.com/Aprasaks/devplatform"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <RiGithubLine size={20} />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <RiDiscordLine size={20} />
            </a>
            <a
              href="mailto:heavenin24@naver.com"
              className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <RiMailLine size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
