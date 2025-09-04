'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Section3() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const projects = [
    {
      id: 1,
      videoSrc: "/assets/works/jiu-jitsu-landing.mp4"
    },
    {
      id: 2,
      videoSrc: "/assets/works/abc-bank-landing.mp4"
    },
    {
      id: 3,
      videoSrc: "/assets/works/fintech-phenom.mp4"
    },
    {
      id: 4,
      videoSrc: "/assets/works/crm-system.mp4"
    },
    {
      id: 5,
      videoSrc: "/assets/works/dipa-dashboard.mp4"
    }
  ]

  return (
    <section className="h-screen w-full bg-gradient-to-br from-white via-pink-100 to-rose-200 relative overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1822EE]/5 via-transparent to-[#FFA600]/5" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
        
        {/* Header */}
        <div className="text-center mb-3 xs:mb-4">
          <motion.p
            className="text-gray-500 text-[8px] xs:text-sm md:text-base lg:text-lg mb-1 xs:mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            NOSSOS PROJETOS
          </motion.p>
          
          <motion.h2
            className="text-xs xs:text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mb-1 xs:mb-2 px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Inspiracao em{' '}
            <span className="bg-gradient-to-r from-[#1822EE] via-[#9200B3] to-[#FFA600] bg-clip-text text-transparent">
              Cada Projeto
            </span>
          </motion.h2>
          
          <motion.p
            className="text-[10px] xs:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore Nossas Realizacoes
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 xs:gap-2 md:gap-3 max-w-6xl mx-auto mb-3 xs:mb-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg overflow-hidden hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              {/* Video Container */}
              <div 
                className="relative w-full h-32 xs:h-36 md:h-48 lg:h-60 xl:h-68 overflow-hidden cursor-pointer"
                onClick={() => setSelectedVideo(project.videoSrc)}
              >
                <video
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                >
                  <source src={project.videoSrc} type="video/mp4" />
                  Seu navegador nao suporta videos.
                </video>
                
                {/* Click Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-4 h-4 xs:w-5 xs:h-5 text-gray-700" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-3 xs:mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#1822EE] via-[#9200B3] to-[#FFA600] text-white px-3 xs:px-6 py-1.5 xs:py-3 rounded-full font-semibold text-xs xs:text-base md:text-lg lg:text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(24, 34, 238, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Projetos
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 xs:top-6 xs:right-6 w-10 h-10 xs:w-12 xs:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white hover:text-gray-200 transition-all duration-200 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedVideo(null)}
            >
              <svg 
                className="w-6 h-6 xs:w-7 xs:h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={selectedVideo} type="video/mp4" />
                Seu navegador nao suporta videos.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}