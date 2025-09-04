'use client'

import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Component para carregar e renderizar ícones Lottie
const AnimatedIcon = ({ iconPath, className }: { iconPath: string, className?: string }) => {
  const [animationData, setAnimationData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(iconPath)
        const data = await response.json()
        setAnimationData(data)
      } catch (error) {
        console.error('Error loading animation:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadAnimation()
  }, [iconPath])

  if (isLoading) {
    return <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
  }

  if (!animationData) {
    return <div className={className}>⚠️</div>
  }

  return (
    <Lottie
      animationData={animationData}
      className={className}
      loop={true}
      autoplay={true}
    />
  )
}

// Componente do carrossel infinito - container fixo
const InfiniteCarousel = ({ partners }: { partners: Array<{name: string, logoPath: string}> }) => {
  return (
    <div className="relative w-full h-8 xs:h-10 md:h-12 overflow-hidden">
      <div 
        className="absolute flex items-center gap-4 xs:gap-6 md:gap-8 h-full"
        style={{
          animation: 'scroll-horizontal 65s linear infinite',
          left: '0',
          top: '0',
        }}
      >
        {/* Repetir 3 vezes para loop infinito */}
        {[...Array(3)].map((_, setIndex) =>
          partners.map((partner, index) => (
            <div
              key={`${setIndex}-${index}`}
              className="flex-shrink-0 w-10 h-6 xs:w-12 xs:h-7 md:w-16 md:h-9 flex items-center justify-center"
            >
              <Image
                src={partner.logoPath}
                alt={partner.name}
                width={64}
                height={36}
                className="w-full h-full object-contain opacity-40 hover:opacity-80 filter grayscale hover:grayscale-0 transition-opacity duration-300"
                draggable={false}
                sizes="(max-width: 374px) 40px, (max-width: 767px) 48px, 64px"
              />
            </div>
          ))
        )}
      </div>

      {/* Fade gradients nas bordas */}
      <div className="absolute inset-y-0 left-0 w-3 xs:w-4 md:w-6 bg-gradient-to-r from-white via-pink-100/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-3 xs:w-4 md:w-6 bg-gradient-to-l from-rose-200 via-pink-100/80 to-transparent pointer-events-none z-10" />
    </div>
  )
}

export default function Section1() {
  const services = [
    { name: 'Desenvolvimento Web', iconPath: '/assets/svg-overall/webdev.json', description: 'Aplicações modernas e responsivas' },
    { name: 'Mobile Apps', iconPath: '/assets/svg-overall/mobile.json', description: 'iOS e Android nativos' },
    { name: 'Sistemas Enterprise', iconPath: '/assets/svg-overall/company.json', description: 'Soluções corporativas escaláveis' },
    { name: 'API Development', iconPath: '/assets/svg-overall/API.json', description: 'Integrações robustas e seguras' },
    { name: 'Cloud Solutions', iconPath: '/assets/svg-overall/cloud.json', description: 'Infraestrutura moderna' },
    { name: 'UI/UX Design', iconPath: '/assets/svg-overall/uiux.json', description: 'Experiências excepcionais' },
    { name: 'DevOps', iconPath: '/assets/svg-overall/deploy.json', description: 'Automação e deploy contínuo' },
    { name: 'Consultoria Tech', iconPath: '/assets/svg-overall/lightbulb.json', description: 'Estratégias digitais' }
  ]

  const partners = [
    { name: 'AWS', logoPath: '/assets/partners/aws-amazon.svg' },
    { name: 'Google Cloud', logoPath: '/assets/partners/google-cloud.svg' },
    { name: 'Microsoft', logoPath: '/assets/partners/microsoft.svg' },
    { name: 'Vercel', logoPath: '/assets/partners/vercel.svg' },
    { name: 'Docker', logoPath: '/assets/partners/docker.svg' },
    { name: 'MongoDB', logoPath: '/assets/partners/mongodb.svg' },
    { name: 'Ethereum', logoPath: '/assets/partners/ethereum.svg' },
    { name: 'Tinder', logoPath: '/assets/partners/tinder.svg' },
    { name: 'Chanel', logoPath: '/assets/partners/chanel.svg' },
    { name: 'OLA', logoPath: '/assets/partners/ola.svg' },
    { name: 'Ryzen', logoPath: '/assets/partners/ryzen.svg' },
  ]

  return (
    <section className="h-screen w-full bg-gradient-to-br from-white via-pink-100 to-rose-200 relative overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFA600]/5 via-transparent to-[#CF0C0C]/5" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
        
        {/* Hero Text */}
        <div className="text-center mb-6 xs:mb-8">
          <motion.h1
            className="text-lg xs:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 xs:mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Suas ideias podem ser{' '}
            <motion.span
              className="bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              realidade
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-sm xs:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-3 xs:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Desenvolvimento de software <span className="text-[#FFA600] font-semibold">personalizado</span>, 
            soluções <span className="text-[#CF0C0C] font-semibold">inovadoras</span> e 
            tecnologia de <span className="text-[#9200B3] font-semibold">ponta</span> para transformar seu negócio.
          </motion.p>
          
          <motion.p
            className="text-xs xs:text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Está preparado para esta jornada?
          </motion.p>
        </div>

        {/* Partner Logos Carousel */}
        <motion.div
          className="mb-12 xs:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-center text-gray-500 text-[10px] xs:text-xs mb-6 xs:mb-4 uppercase tracking-wider">
            TECNOLOGIAS E PARCEIROS QUE CONFIAMOS
          </p>
          
          <InfiniteCarousel partners={partners} />
        </motion.div>

        {/* Service Buttons Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-1 xs:gap-2 md:gap-3 max-w-5xl mx-auto mb-4 xs:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {services.map((service, index) => (
            <motion.button
              key={service.name}
              className="group bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg p-2 xs:p-3 md:p-4 text-center hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 + 1.4 }}
            >
              <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 mb-1 xs:mb-2 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <AnimatedIcon 
                  iconPath={service.iconPath} 
                  className="w-full h-full" 
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-1 text-[10px] xs:text-xs md:text-sm">
                {service.name}
              </h3>
              <p className="text-gray-600 text-[8px] xs:text-[10px] md:text-xs leading-tight">
                {service.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] text-white px-4 xs:px-6 py-2 xs:py-3 rounded-full font-semibold text-xs xs:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(255, 166, 0, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Começar Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
