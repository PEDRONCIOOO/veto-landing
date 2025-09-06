'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Section4() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      })
    }
  }

  const testimonials = [
    {
      id: 1,
      name: "Marcos Soubar",
      position: "CEO - AS Auditoria e Consultoria", 
      avatar: "/assets/partners/filipe.jpg",
      text: "Eu tenho a agradecer a Veto, agradeco pelo suporte e pela fidelidade, muito obrigado e ser uma parceira que nos tem ajudado nossas demandas. As solucoes pela Veto tem nos permitido uma solucao completa da nossa empresa, tem nos tornado que me tem ajudado que tem muito que me tem resolvido todos meus desafios."
    },
    {
      id: 2,
      name: "Any Balbinotti",
      position: "Sourcing Analyst - Dilianz Group",
      avatar: "/assets/partners/any.jpg", 
      text: "Nos da Dilianz estamos profundamente gratos pela parceria estabelecida com a Veto. Desde o inicio da nossa colaboracao, temos testemunhado o comprometimento excepcional da Veto em superar nossas expectativas e entregar resultados que superam nossas necessidades dinamicas do mercado agricola e tecnologico. Agradecemos a Veto por sua parceria continua e ansiamos por mais um ano de sucesso e crescimento mutuo."
    },
    {
      id: 3,
      name: "Gabriel Coelho", 
      position: "Conselheiro - Fingermark",
      avatar: "/assets/partners/gabriel.jpg",
      text: "Conhecemos a Veto atraves de um parceiro de negocios. Ja haviamos buscado, sem sucesso, plataformas de tokenizacao que fossem auditadas conforme as regras de governanca que precisavamos. A Veto conseguiu criar um sistema excelente e um atendimento excepcional. Isso foi o sucesso para qualquer software house. Estao de parabens."
    },
    {
      id: 4,
      name: "Douglas Dias",
      position: "Senior Engineer - Globoo.io", 
      avatar: "/assets/partners/dougla.jpg",
      text: "Gostaria de expressar minha gratidao a Veto por sua criacao do sistema de tokenizacao para a Tokeniza. Decidimos investir nos projetos operacionais de topo para obter mais suporte, a equipe da Veto esta prontamente disponivel, demonstrando profissionalismo e dedicacao. Estamos confiantes de que voces continuarao a fortalecer nossas operacoes e impulsionar nosso crescimento. Obrigado, Veto, por ser um parceiro tao valioso e confiavel."
    },
    {
      id: 5,
      name: "Isabella Viana",
      position: "3D Modeler - Creative Minds",
      avatar: "/assets/partners/isabella.jpg",
      text: "A Veto revolucionou completamente nossa infraestrutura tecnologica. Em apenas 6 meses conseguimos implementar um sistema robusto que aumentou nossa produtividade em 300%. A equipe e altamente qualificada e o suporte tecnico e excepcional. Recomendo para qualquer empresa que busca inovacao e resultados rapidos."
    },
    {
      id: 6,
      name: "Roberta Costa",
      position: "Diretora de TI - TrustPay",
      avatar: "/assets/partners/roberta.jpg",
      text: "Trabalhamos com a Veto no desenvolvimento de nossa plataforma de pagamentos. O resultado superou todas as expectativas. Sistema seguro, escalavel e com performance excelente. A metodologia de trabalho e impressionante e a entrega sempre dentro do prazo. Parceria de longo prazo garantida."
    },
    {
      id: 7,
      name: "Vitoria Carolina",
      position: "CEO - StartupLab",
      avatar: "/assets/partners/ana.jpg",
      text: "Como startup, precisavamos de uma solucao rapida e eficiente. A Veto entregou exatamente o que precisavamos em tempo record. O MVP ficou perfeito e conseguimos captar investimento logo apos o lancamento. A consultoria estrategica foi fundamental para nosso sucesso."
    },
    {
      id: 8,
      name: "Carlos Mendez",
      position: "CIO - Enterprise Corp",
      avatar: "/assets/partners/carlos.jpg",
      text: "Migracao completa de legacy systems para arquitetura moderna executada com maestria pela Veto. Zero downtime, zero perda de dados e ganho significativo em performance. Equipe extremamente profissional e com dominio tecnico impressionante. Investimento que se pagou rapidamente."
    }
  ]

  const companyLogos = [
    { name: 'BrasilBitCoin', logoPath: '/assets/partners/brasil-bitcoin.svg' },
    { name: 'Bybit', logoPath: '/assets/partners/bybit.png' }, 
    { name: 'Casa do Crédito', logoPath: '/assets/partners/casa-do-credito.png' },
    { name: 'Axia', logoPath: '/assets/partners/logo-axia.png' }
  ]

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-rose-200 via-pink-100 to-white relative overflow-hidden flex items-center py-8 xs:py-12 sm:py-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9200B3]/5 via-transparent to-[#1822EE]/5" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-1 xs:px-2 sm:px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-3 xs:mb-4">
          <motion.p
            className="text-gray-500 text-[8px] xs:text-sm md:text-base lg:text-lg mb-1 xs:mb-2 uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            NOSSOS CLIENTES
          </motion.p>
          
          <motion.h2
            className="text-xs xs:text-lg md:text-2xl lg:text-4xl font-bold text-gray-800 mb-1 xs:mb-2 px-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Depoimentos
          </motion.h2>

          <motion.div
            className="flex justify-center mb-2 xs:mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#9200B3] via-[#1822EE] to-[#FFA600] text-white px-3 xs:px-6 py-1.5 xs:py-3 rounded-full font-semibold text-xs xs:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 md:mb-4 md:mt-4"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(146, 0, 179, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Conversar com um especialista
            </motion.button>
          </motion.div>

          {/* Company Logos */}
          <motion.div
            className="flex justify-center items-center gap-3 xs:gap-4 md:gap-6 mb-2 xs:mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                className="w-12 h-6 xs:w-16 xs:h-8 md:w-20 md:h-10 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={company.logoPath}
                  alt={company.name}
                  width={80}
                  height={40}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials Horizontal Scroll */}
        <div className="relative w-full max-w-full">
          {/* Left Arrow */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-0 xs:left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#9200B3] via-[#1822EE] to-[#FFA600] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(146, 0, 179, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <svg 
              className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={scrollRight}
            className="absolute right-0 xs:right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#9200B3] via-[#1822EE] to-[#FFA600] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(146, 0, 179, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <svg 
              className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white transition-colors duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
            <div className="flex gap-3 xs:gap-4 md:gap-6 min-w-max px-2">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-72 xs:w-80 md:w-96 min-h-[200px] xs:min-h-[220px] md:min-h-[240px] bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg p-2 xs:p-3 md:p-4 hover:bg-white/80 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <p className="text-gray-600 text-xs xs:text-sm md:text-base lg:text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center space-x-3 xs:space-x-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-gray-800 font-semibold text-sm xs:text-base md:text-lg truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs xs:text-sm md:text-base leading-tight">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-rose-200/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}