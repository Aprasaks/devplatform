"use client";

import { RiLoginBoxLine, RiMenuLine, RiCloseLine } from "@remixicon/react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              DevPlatform
            </Link>
          </div>

          {/* Center - Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/learn"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/community"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Community
            </Link>
            <Link
              href="/product"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Product
            </Link>
          </nav>

          {/* Right - Login Icon & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Login Button */}
            <button className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <RiLoginBoxLine size={24} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="space-y-3">
              <Link
                href="/learn"
                className="block py-2 px-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/community"
                className="block py-2 px-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                href="/product"
                className="block py-2 px-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
