"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { RiSearchLine, RiStarLine, RiHeartFill, RiShieldCheckLine } from "@remixicon/react";

export default function GlowingComponents() {
  const [progress] = useState(65);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="space-y-8">
      {/* Glowing Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4"> Glowing Buttons</h3>
        <div className="flex flex-wrap gap-3">
          {/* Primary Glow Button */}
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <span className="relative flex items-center space-x-2">
              <RiStarLine size={16} />
              <span>Primary</span>
            </span>
          </motion.button>

          {/* Success Glow Button */}
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <span className="relative flex items-center space-x-2">
              <RiShieldCheckLine size={16} />
              <span>Success</span>
            </span>
          </motion.button>

          {/* Love Glow Button */}
          <motion.button
            className="group relative px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-medium overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <span className="relative flex items-center space-x-2">
              <RiHeartFill size={16} />
              <span>Love</span>
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Glowing Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4"> Glowing Input</h3>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-white rounded-xl p-1">
            <div className="flex items-center space-x-3 px-4 py-3">
              <RiSearchLine size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                className="flex-1 bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Glowing Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4"> Glowing Card</h3>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
          <div className="relative bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">UI</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Beautiful Component</h4>
                <p className="text-sm text-gray-500">Ready to use</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              재사용 가능한 컴포넌트로 개발 시간을 단축하세요.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Glowing Toggle Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ Glowing Toggle</h3>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600">Dark Mode</span>
          <button
            onClick={() => setIsToggled(!isToggled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              isToggled ? "bg-gradient-to-r from-blue-500 to-purple-600" : "bg-gray-300"
            }`}
          >
            {isToggled && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-70"></div>
            )}
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isToggled ? "translate-x-6" : "translate-x-1"
              } relative z-10`}
            />
          </button>
        </div>
      </motion.div>

      {/* Glowing Progress Bar Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="space-y-4"
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">✨ Glowing Progress</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">완성도</span>
            <span className="text-gray-900 font-medium">{progress}%</span>
          </div>
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-sm opacity-70"></div>
            <motion.div
              className="relative h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
