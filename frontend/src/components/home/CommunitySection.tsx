'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { RiArrowRightLine, RiUser3Line, RiSendPlaneLine } from '@remixicon/react'

export default function CommunitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  const chatMessages = [
    {
      user: "김개발",
      message: "React Hook useEffect 무한루프가 계속 발생해요 😅",
      time: "2분 전",
      isQuestion: true
    },
    {
      user: "박멘토",
      message: "dependency array를 확인해보세요! 아마 빠뜨린 의존성이 있을 거예요",
      time: "1분 전",
      isQuestion: false
    },
    {
      user: "이초보",
      message: "저도 같은 문제가 있었는데 정말 도움됐어요! 감사합니다 🙏",
      time: "방금",
      isQuestion: false
    }
  ]

  // 메시지 순차 표시 애니메이션
  useEffect(() => {
    if (isInView && currentMessageIndex < chatMessages.length) {
      setIsTyping(true)
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1)
        setIsTyping(false)
      }, 1000 + currentMessageIndex * 800)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, currentMessageIndex, chatMessages.length])

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Chat Window */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white bg-opacity-30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="ml-4 text-white font-medium">DevPlatform Community</div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-80 p-6 space-y-4 overflow-y-auto bg-gray-50">
                {chatMessages.slice(0, currentMessageIndex).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`flex ${msg.isQuestion ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs px-4 py-3 rounded-2xl ${
                      msg.isQuestion 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'bg-white text-gray-800 shadow-md'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <RiUser3Line size={14} className={msg.isQuestion ? 'text-white' : 'text-gray-600'} />
                        <span className={`text-xs font-medium ${msg.isQuestion ? 'text-white' : 'text-gray-600'}`}>
                          {msg.user}
                        </span>
                        <span className={`text-xs ${msg.isQuestion ? 'text-purple-100' : 'text-gray-400'}`}>
                          {msg.time}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">{msg.message}</p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && currentMessageIndex < chatMessages.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white px-4 py-3 rounded-2xl shadow-md">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="질문을 입력해보세요..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  />
                  <button className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-200">
                    <RiSendPlaneLine size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-md opacity-60"
            />
            
            <motion.div
              animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute -bottom-6 -right-6 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-md opacity-60"
            />
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              때로는 찾아보는 것보다
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                질문을 통해 얻는게 많은 법
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              혼자 고민하지 마세요. 경험 많은 개발자들과
              <br />
              실시간으로 소통하며 더 빠르게 성장할 수 있어요.
            </motion.p>

            {/* Glowing Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <div className="relative flex items-center space-x-2">
                  <span>Go to Community</span>
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
        </div>
      </div>
    </section>
  )
}