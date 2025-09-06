'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'Sobre Nós', href: '#about', icon: '/assets/svg-overall/company' },
    { name: 'Serviços', href: '#services', icon: '/assets/svg-overall/webdev-4' },
    { name: 'Portfolio', href: '#portfolio', icon: '/assets/svg-overall/target' },
    { name: 'Carreiras', href: '#careers', icon: '/assets/svg-overall/lightbulb' },
  ]

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#privacy' },
    { name: 'Termos de Uso', href: '#terms' },
    { name: 'LGPD', href: '#lgpd' },
    { name: 'Cookies', href: '#cookies' },
  ]

  const contactInfo = [
    { label: 'Email', value: 'contato@veto.dev', href: 'mailto:contato@veto.dev', icon: '/assets/svg-overall/link' },
    { label: 'Telefone', value: '+55 (11) 99999-9999', href: 'tel:+5511999999999', icon: '/assets/svg-overall/notification' },
    { label: 'WhatsApp', value: '+55 (11) 99999-9999', href: 'https://wa.me/5511999999999', icon: '/assets/svg-overall/notification' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/veto-dev', icon: '/assets/svg-overall/link' },
    { name: 'GitHub', href: 'https://github.com/veto-dev', icon: '/assets/svg-overall/code' },
    { name: 'Instagram', href: 'https://instagram.com/veto.dev', icon: '/assets/svg-overall/target' },
    { name: 'Twitter', href: 'https://twitter.com/veto_dev', icon: '/assets/svg-overall/exchange' },
  ]

  const trustIndicators = [
    { label: 'SSL Certificado', icon: '/assets/svg-overall/lock' },
    { label: 'LGPD Compliance', icon: '/assets/svg-overall/lock' },
    { label: 'ISO 27001', icon: '/assets/svg-overall/dashboard' },
    { label: '99.9% Uptime', icon: '/assets/svg-overall/monitoramento' },
  ]

  return (
    <footer className="w-full bg-gradient-to-br from-rose-200 via-pink-100 to-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9200B3]/5 via-transparent to-[#FFA600]/5" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-8 xs:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4 xs:mb-6">
              <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-lg overflow-hidden">
                <Image
                  src="/assets/logos/veto-logo.png"
                  alt="Veto Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg xs:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] bg-clip-text text-transparent">
                Veto
              </span>
            </div>
            
            <p className="text-gray-600 text-sm xs:text-base md:text-lg mb-4 xs:mb-6 max-w-md leading-relaxed">
              Transformamos suas ideias em soluções digitais personalizadas. 
              Desenvolvimento de software sob medida para empresas que buscam inovação e eficiência.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <Image
                    src={`${item.icon}.svg`}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="w-4 h-4 xs:w-5 xs:h-5"
                  />
                  <span className="text-gray-700 text-xs xs:text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-800 font-semibold mb-4 xs:mb-6 text-sm xs:text-base md:text-lg bg-gradient-to-r from-[#FFA600] to-[#CF0C0C] bg-clip-text text-transparent">
              Empresa
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#CF0C0C] transition-colors duration-200"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <Image
                      src={`${link.icon}.svg`}
                      alt={link.name}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="mt-6 xs:mt-8">
              <h4 className="text-gray-800 font-semibold mb-3 xs:mb-4 text-sm bg-gradient-to-r from-[#9200B3] to-[#FFA600] bg-clip-text text-transparent">
                Legal
              </h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-600 hover:text-[#9200B3] transition-colors duration-200 text-xs xs:text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 4 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-800 font-semibold mb-4 xs:mb-6 text-sm xs:text-base md:text-lg bg-gradient-to-r from-[#CF0C0C] to-[#9200B3] bg-clip-text text-transparent">
              Contato
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#9200B3] transition-colors duration-200"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                >
                  <Image
                    src={`${contact.icon}.svg`}
                    alt={contact.label}
                    width={16}
                    height={16}
                    className="w-4 h-4 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs xs:text-sm font-medium truncate">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 xs:mt-8">
              <h4 className="text-gray-800 font-semibold mb-3 xs:mb-4 text-sm bg-gradient-to-r from-[#FFA600] to-[#CF0C0C] bg-clip-text text-transparent">
                Redes Sociais
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-[#FFA600] transition-colors duration-200 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg px-3 py-2 hover:bg-white/80 shadow-sm hover:shadow-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={`${social.icon}.svg`}
                      alt={social.name}
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5"
                    />
                    <span className="text-xs font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-300/50 bg-white/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-500 text-xs xs:text-sm">
                © {currentYear} Veto. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <span>🏢 CNPJ: XX.XXX.XXX/0001-XX</span>
                <span>📍 São Paulo, Brasil</span>
              </div>
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-xs text-gray-500"
              whileHover={{ scale: 1.05 }}
            >
              <span>Desenvolvido com</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-[#CF0C0C]"
              >
                ❤️
              </motion.span>
              <span>pela equipe Veto</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer