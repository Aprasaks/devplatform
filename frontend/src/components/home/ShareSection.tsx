"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  RiArrowRightLine,
  RiHeartLine,
  RiHeartFill,
  RiEyeLine,
  RiShareLine,
  RiGithubLine,
} from "@remixicon/react";

export default function ShareSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [likedProjects, setLikedProjects] = useState<number[]>([]);
  const [animatingHearts, setAnimatingHearts] = useState<number[]>([]);

  const projects = [
    {
      id: 1,
      title: "날씨 앱 만들기",
      author: "김초보",
      description: "OpenWeather API를 사용한 첫 번째 React 프로젝트",
      likes: 24,
      views: 156,
      tech: ["React", "JavaScript", "API"],
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "투두리스트 with 로컬스토리지",
      author: "박개발",
      description: "로컬스토리지를 활용한 할 일 관리 앱",
      likes: 18,
      views: 89,
      tech: ["HTML", "CSS", "JavaScript"],
      gradient: "from-green-400 to-emerald-400",
    },
    {
      id: 3,
      title: "포트폴리오 사이트",
      author: "이성장",
      description: "Tailwind CSS로 만든 반응형 포트폴리오",
      likes: 42,
      views: 234,
      tech: ["Next.js", "Tailwind", "TypeScript"],
      gradient: "from-purple-400 to-pink-400",
    },
  ];

  const handleLike = (projectId: number) => {
    if (likedProjects.includes(projectId)) {
      setLikedProjects((prev) => prev.filter((id) => id !== projectId));
    } else {
      setLikedProjects((prev) => [...prev, projectId]);
      setAnimatingHearts((prev) => [...prev, projectId]);

      // 하트 애니메이션 제거
      setTimeout(() => {
        setAnimatingHearts((prev) => prev.filter((id) => id !== projectId));
      }, 600);
    }
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-red-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h2
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              작품은 공유할 때
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                가치가 더 높아지는 법
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              당신의 프로젝트를 세상에 공개하고
              <br />
              좋아요를 받아보세요. 피드백이 성장의 열쇠입니다.
            </motion.p>

            {/* Input and Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="프로젝트 GitHub URL을 입력하세요..."
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400 shadow-sm"
                />
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button content */}
                  <div className="relative flex items-center space-x-2">
                    <RiShareLine size={20} />
                    <span>공유하기</span>
                  </div>
                </motion.button>
              </div>

              <motion.button
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Button content */}
                <div className="relative flex items-center justify-center space-x-2">
                  <span>공유하고 좋아요를 받아보세요</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <RiArrowRightLine size={20} />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right - Project Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative space-y-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{ y: -5 }}
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6">
                  {/* Project Info */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{project.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">by {project.author}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <RiGithubLine size={24} className="text-gray-400 ml-4" />
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <RiEyeLine size={16} />
                        <span className="text-sm">{project.views}</span>
                      </div>
                    </div>

                    <motion.button
                      onClick={() => handleLike(project.id)}
                      className="relative flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors group"
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Floating hearts animation */}
                      {animatingHearts.includes(project.id) && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute"
                              initial={{
                                opacity: 1,
                                scale: 0.5,
                                x: Math.random() * 20 - 10,
                                y: 0,
                              }}
                              animate={{
                                opacity: 0,
                                scale: 1.5,
                                y: -30,
                                x: Math.random() * 40 - 20,
                              }}
                              transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                              }}
                              style={{
                                left: "50%",
                                top: "50%",
                              }}
                            >
                              ❤️
                            </motion.div>
                          ))}
                        </div>
                      )}

                      <motion.div
                        animate={likedProjects.includes(project.id) ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {likedProjects.includes(project.id) ? (
                          <RiHeartFill size={18} className="text-red-500" />
                        ) : (
                          <RiHeartLine
                            size={18}
                            className="text-gray-400 group-hover:text-red-400"
                          />
                        )}
                      </motion.div>
                      <span
                        className={`text-sm font-medium ${
                          likedProjects.includes(project.id)
                            ? "text-red-500"
                            : "text-gray-500 group-hover:text-red-400"
                        }`}
                      >
                        {project.likes + (likedProjects.includes(project.id) ? 1 : 0)}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-sm opacity-60"
            />

            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-sm opacity-60"
            />

            <motion.div
              animate={{
                y: [-5, 15, -5],
                x: [-5, 5, -5],
                rotate: [0, 10, 0],
              }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-sm opacity-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
