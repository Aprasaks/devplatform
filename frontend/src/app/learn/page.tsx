'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiSearchLine, RiArrowDownSLine, RiBookOpenLine, RiCalendarLine, RiUserLine } from '@remixicon/react'
import CategoryFilter, { MainCategory, SubCategory } from '@/components/learn/CategoryFilter'

// 샘플 데이터 (나중에 API에서 가져올 예정)
const samplePosts = [
  {
    id: 1,
    title: "HTML 기초부터 시맨틱 마크업까지",
    mainCategory: "Frontend",
    subCategory: "HTML",
    author: "김웹개발",
    date: "2024-01-15",
    slug: "html-basics-to-semantic"
  },
  {
    id: 2,
    title: "CSS Flexbox 완벽 가이드",
    mainCategory: "Frontend",
    subCategory: "CSS",
    author: "이스타일",
    date: "2024-01-14",
    slug: "css-flexbox-guide"
  },
  {
    id: 3,
    title: "JavaScript ES6+ 문법 정리",
    mainCategory: "Frontend",
    subCategory: "JavaScript",
    author: "박스크립트",
    date: "2024-01-13",
    slug: "javascript-es6-syntax"
  },
  {
    id: 4,
    title: "React 컴포넌트 설계 패턴",
    mainCategory: "Frontend",
    subCategory: "React",
    author: "최리액트",
    date: "2024-01-12",
    slug: "react-component-patterns"
  },
  {
    id: 5,
    title: "Next.js App Router 완전정복",
    mainCategory: "Frontend",
    subCategory: "Next.js",
    author: "정넥스트",
    date: "2024-01-11",
    slug: "nextjs-app-router"
  },
  {
    id: 6,
    title: "Python 기초 문법과 실습",
    mainCategory: "Backend",
    subCategory: "Python",
    author: "김파이썬",
    date: "2024-01-10",
    slug: "python-basics"
  },
  {
    id: 7,
    title: "Node.js Express 서버 구축",
    mainCategory: "Backend",
    subCategory: "Node.js",
    author: "이노드",
    date: "2024-01-09",
    slug: "nodejs-express-server"
  },
  {
    id: 8,
    title: "Java Spring Boot 시작하기",
    mainCategory: "Backend",
    subCategory: "Java",
    author: "박자바",
    date: "2024-01-08",
    slug: "java-spring-boot"
  }
]



export default function LearnPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMain, setSelectedMain] = useState<MainCategory | '전체'>('전체')
  const [selectedSub, setSelectedSub] = useState<SubCategory | '전체'>('전체')
  const [sortBy, setSortBy] = useState("최신순")
  const [sortOpen, setSortOpen] = useState(false)

  // 필터링 로직
  const filteredPosts = samplePosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    
    // 대분류 필터링
    if (selectedMain !== '전체' && post.mainCategory !== selectedMain) {
      return false
    }
    
    // 중분류 필터링  
    if (selectedSub !== '전체' && post.subCategory !== selectedSub) {
      return false
    }
    
    return matchesSearch
  })

  // 정렬 로직
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "최신순") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "오래된순") {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    } else if (sortBy === "제목순") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return "1일 전"
    if (diffDays <= 7) return `${diffDays}일 전`
    return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn</h1>
          <p className="text-xl text-gray-600">
            개발 지식을 체계적으로 학습하세요
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search & Category Filter */}
            <div className="flex gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <CategoryFilter
                selectedMain={selectedMain}
                selectedSub={selectedSub}
                onMainChange={setSelectedMain}
                onSubChange={setSelectedSub}
              />

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-[100px] justify-between"
                >
                  <span className="text-gray-700">{sortBy}</span>
                  <RiArrowDownSLine className={`transform transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {sortOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                  >
                    <div className="py-1">
                      {["최신순", "오래된순", "제목순"].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option)
                            setSortOpen(false)
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="col-span-6 flex items-center space-x-2">
              <RiBookOpenLine size={16} />
              <span>제목</span>
            </div>
            <div className="col-span-2 text-center">카테고리</div>
            <div className="col-span-2 text-center flex items-center justify-center space-x-1">
              <RiUserLine size={16} />
              <span>작성자</span>
            </div>
            <div className="col-span-2 text-center flex items-center justify-center space-x-1">
              <RiCalendarLine size={16} />
              <span>날짜</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {sortedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => {
                  // TODO: 상세 페이지로 이동
                  console.log(`Navigate to /learn/${post.slug}`)
                }}
              >
                <div className="col-span-6">
                  <h3 className="font-medium text-gray-900 hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
                <div className="col-span-2 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    {post.subCategory}
                  </span>
                </div>
                <div className="col-span-2 text-center text-gray-600">
                  {post.author}
                </div>
                <div className="col-span-2 text-center text-gray-500 text-sm">
                  {formatDate(post.date)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {sortedPosts.length === 0 && (
            <div className="py-12 text-center">
              <div className="text-gray-400 mb-2">📚</div>
              <p className="text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}
        </motion.div>

        {/* Pagination Placeholder */}
        <div className="mt-8 text-center">
          <div className="inline-flex space-x-2">
            <button className="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
              이전
            </button>
            <button className="px-3 py-2 text-sm bg-indigo-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-2 text-sm text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}