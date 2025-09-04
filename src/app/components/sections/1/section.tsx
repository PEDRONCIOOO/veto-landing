'use client'

import { motion } from 'framer-motion'

export default function Section1() {
  const services = [
    { name: 'Desenvolvimento Web', icon: '💻', description: 'Aplicações modernas e responsivas' },
    { name: 'Mobile Apps', icon: '📱', description: 'iOS e Android nativos' },
    { name: 'Sistemas Enterprise', icon: '🏢', description: 'Soluções corporativas escaláveis' },
    { name: 'API Development', icon: '🔗', description: 'Integrações robustas e seguras' },
    { name: 'Cloud Solutions', icon: '☁️', description: 'Infraestrutura moderna' },
    { name: 'UI/UX Design', icon: '🎨', description: 'Experiências excepcionais' },
    { name: 'DevOps', icon: '⚙️', description: 'Automação e deploy contínuo' },
    { name: 'Consultoria Tech', icon: '💡', description: 'Estratégias digitais' }
  ]

  const partners = [
    { name: 'AWS', logo: 'aws' },
    { name: 'Google Cloud', logo: 'gcp' },
    { name: 'Microsoft', logo: 'ms' },
    { name: 'Vercel', logo: 'vercel' },
    { name: 'Docker', logo: 'docker' },
    { name: 'MongoDB', logo: 'mongo' },
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

        {/* Partner Logos */}
        <motion.div
          className="mb-4 xs:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-center text-gray-500 text-[10px] xs:text-xs mb-3 xs:mb-4 uppercase tracking-wider">
            TECNOLOGIAS E PARCEIROS QUE CONFIAMOS
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-4 opacity-60">
            {['React', 'Next.js', 'Node.js', 'AWS', 'Docker', 'MongoDB'].map((tech, index) => (
              <motion.div
                key={tech}
                className="text-gray-600 font-medium text-xs xs:text-sm"
                whileHover={{ scale: 1.1, color: '#FFA600' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
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
              <div className="text-lg xs:text-xl md:text-2xl mb-1 xs:mb-2 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
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
