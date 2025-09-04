'use client'

import { motion } from 'framer-motion'

export default function Section2() {
  const services = [
    {
      title: "Desenvolvimento Web Moderno",
      description: "Plataformas web escaláveis e responsivas, construídas com as mais modernas tecnologias e frameworks.",
      features: [
        { icon: "⚛️", text: "React & Next.js" },
        { icon: "🚀", text: "Performance Otimizada" },
        { icon: "📱", text: "Design Responsivo" }
      ]
    },
    {
      title: "Aplicações Mobile Nativas",
      description: "Desenvolvimento de aplicativos móveis nativos e multiplataforma para iOS e Android.",
      features: [
        { icon: "📱", text: "iOS & Android" },
        { icon: "⚡", text: "React Native" },
        { icon: "🔔", text: "Push Notifications" }
      ]
    },
    {
      title: "Sistemas Enterprise",
      description: "Soluções corporativas robustas e escaláveis, integradas aos principais fornecedores de nuvem.",
      features: [
        { icon: "☁️", text: "Cloud Native" },
        { icon: "🔐", text: "Segurança Avançada" },
        { icon: "📊", text: "Analytics Integrado" }
      ]
    },
    {
      title: "API & Integrações",
      description: "APIs RESTful e GraphQL para conectar sistemas e automatizar processos empresariais.",
      features: [
        { icon: "🔗", text: "RESTful & GraphQL" },
        { icon: "⚙️", text: "Automação" },
        { icon: "🔄", text: "Sincronização em Tempo Real" }
      ]
    },
    {
      title: "DevOps & Infraestrutura",
      description: "Implementação de CI/CD, monitoramento e deploy automatizado para máxima eficiência.",
      features: [
        { icon: "🚀", text: "Deploy Automatizado" },
        { icon: "📈", text: "Monitoramento 24/7" },
        { icon: "🔄", text: "CI/CD Pipeline" }
      ]
    },
    {
      title: "Consultoria Tecnológica",
      description: "Consultoria especializada para transformação digital e otimização de processos tecnológicos.",
      features: [
        { icon: "🎯", text: "Estratégia Digital" },
        { icon: "📋", text: "Auditoria de Código" },
        { icon: "🏗️", text: "Arquitetura de Software" }
      ]
    }
  ]

  return (
    <section className="h-screen w-full bg-gradient-to-br from-rose-200 via-pink-100 to-white relative overflow-hidden flex items-center">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CF0C0C]/5 via-transparent to-[#FFA600]/5" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
        
        {/* Header */}
        <div className="text-center mb-3 xs:mb-4">
          <motion.p
            className="text-gray-500 text-[7px] xs:text-xs mb-1 xs:mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            NOSSOS SERVIÇOS
          </motion.p>
          
          <motion.h2
            className="text-xs xs:text-sm md:text-lg lg:text-2xl font-bold text-gray-800 mb-1 xs:mb-2 px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Um Ecossistema{' '}
            <span className="bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] bg-clip-text text-transparent">
              Completo
            </span>
          </motion.h2>
          
          <motion.p
            className="text-[8px] xs:text-[10px] md:text-xs text-gray-600 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Descobra um ecossistema customizável que oferece soluções completas em
            tecnologia e inovação para simplificar o dia a dia da sua empresa.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-1 xs:gap-2 md:gap-3 max-w-6xl mx-auto mb-3 xs:mb-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg p-2 xs:p-3 md:p-4 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <h3 className="text-gray-800 font-semibold mb-1 xs:mb-2 text-[9px] xs:text-[10px] md:text-xs">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-[7px] xs:text-[8px] md:text-[10px] mb-1 xs:mb-2 leading-tight">
                {service.description}
              </p>
              
              <div className="space-y-0.5 xs:space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center space-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[8px] xs:text-[10px]">{feature.icon}</span>
                    <span className="text-gray-700 text-[6px] xs:text-[7px] md:text-[8px] font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
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
            className="bg-gradient-to-r from-[#CF0C0C] via-[#9200B3] to-[#FFA600] text-white px-4 xs:px-6 py-2 xs:py-3 rounded-full font-semibold text-xs xs:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(207, 12, 12, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Soluções
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
