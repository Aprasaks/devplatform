"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowDownSLine } from "@remixicon/react";

// 카테고리 데이터 구조
const categories = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind"],
  Backend: ["Java", "Python", "Node.js"],
};

type MainCategory = keyof typeof categories;
type SubCategory = string;

interface CategoryFilterProps {
  selectedMain: MainCategory | "전체";
  selectedSub: SubCategory | "전체";
  onMainChange: (category: MainCategory | "전체") => void;
  onSubChange: (subcategory: SubCategory | "전체") => void;
}

export default function CategoryFilter({
  selectedMain,
  selectedSub,
  onMainChange,
  onSubChange,
}: CategoryFilterProps) {
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  // 대분류 선택 시 중분류 초기화
  const handleMainChange = (main: MainCategory | "전체") => {
    onMainChange(main);
    onSubChange("전체"); // 중분류 초기화
    setMainDropdownOpen(false);
  };

  // 현재 선택된 대분류에 따른 중분류 옵션들
  const getSubCategories = (): SubCategory[] => {
    if (selectedMain === "전체") return [];
    return categories[selectedMain as MainCategory] || [];
  };

  return (
    <div className="flex gap-3">
      {/* 대분류 드롭다운 */}
      <div className="relative">
        <button
          onClick={() => setMainDropdownOpen(!mainDropdownOpen)}
          className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-[120px] justify-between"
        >
          <span className="text-gray-700 font-medium">{selectedMain}</span>
          <RiArrowDownSLine
            className={`transform transition-transform duration-200 ${
              mainDropdownOpen ? "rotate-180" : ""
            }`}
            size={16}
          />
        </button>

        <AnimatePresence>
          {mainDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden"
            >
              <div className="py-2">
                <button
                  onClick={() => handleMainChange("전체")}
                  className={`block w-full text-left px-4 py-2.5 hover:bg-indigo-50 transition-colors ${
                    selectedMain === "전체"
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  전체
                </button>
                {(Object.keys(categories) as MainCategory[]).map((category) => (
                  <button
                    key={category}
                    onClick={() => handleMainChange(category)}
                    className={`block w-full text-left px-4 py-2.5 hover:bg-indigo-50 transition-colors ${
                      selectedMain === category
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 중분류 드롭다운 */}
      <div className="relative">
        <button
          onClick={() => setSubDropdownOpen(!subDropdownOpen)}
          disabled={selectedMain === "전체"}
          className={`flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-[120px] justify-between transition-colors ${
            selectedMain === "전체" ? "opacity-50 cursor-not-allowed" : "hover:border-indigo-300"
          }`}
        >
          <span className="text-gray-700">
            {selectedMain === "전체" ? "카테고리 선택" : selectedSub}
          </span>
          <RiArrowDownSLine
            className={`transform transition-transform duration-200 ${
              subDropdownOpen ? "rotate-180" : ""
            }`}
            size={16}
          />
        </button>

        <AnimatePresence>
          {subDropdownOpen && selectedMain !== "전체" && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 overflow-hidden"
            >
              <div className="py-2">
                <button
                  onClick={() => {
                    onSubChange("전체");
                    setSubDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 hover:bg-indigo-50 transition-colors ${
                    selectedSub === "전체"
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  전체
                </button>
                {getSubCategories().map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => {
                      onSubChange(subcategory);
                      setSubDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 hover:bg-indigo-50 transition-colors ${
                      selectedSub === subcategory
                        ? "bg-indigo-50 text-indigo-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 선택된 필터 표시 */}
      {(selectedMain !== "전체" || selectedSub !== "전체") && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2"
        >
          <span className="text-sm text-gray-500">필터:</span>
          {selectedMain !== "전체" && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
              {selectedMain}
              {selectedSub !== "전체" && ` > ${selectedSub}`}
            </span>
          )}
          <button
            onClick={() => {
              onMainChange("전체");
              onSubChange("전체");
            }}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            초기화
          </button>
        </motion.div>
      )}
    </div>
  );
}

// 카테고리 데이터와 타입 export
export { categories };
export type { MainCategory, SubCategory };
