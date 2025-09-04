'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const companyLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Carreiras', href: '#careers' },
  ]

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#privacy' },
    { name: 'Termos de Uso', href: '#terms' },
    { name: 'LGPD', href: '#lgpd' },
    { name: 'Cookies', href: '#cookies' },
  ]

  const contactInfo = [
    { label: 'Email', value: 'contato@veto.dev', href: 'mailto:contato@veto.dev' },
    { label: 'Telefone', value: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
    { label: 'WhatsApp', value: '+55 (11) 99999-9999', href: 'https://wa.me/5511999999999' },
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/veto-dev', icon: '💼' },
    { name: 'GitHub', href: 'https://github.com/veto-dev', icon: '💻' },
    { name: 'Instagram', href: 'https://instagram.com/veto.dev', icon: '📷' },
    { name: 'Twitter', href: 'https://twitter.com/veto_dev', icon: '🐦' },
  ]

  const trustIndicators = [
    { label: 'SSL Certificado', icon: '🔒' },
    { label: 'LGPD Compliance', icon: '🛡️' },
    { label: 'ISO 27001', icon: '⚡' },
    { label: '99.9% Uptime', icon: '📈' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/logos/veto-logo.png"
                  alt="Veto Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] bg-clip-text text-transparent">
                Veto
              </span>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Transformamos suas ideias em soluções digitais personalizadas. 
              Desenvolvimento de software sob medida para empresas que buscam inovação e eficiência.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-3">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-sm text-gray-400"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
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
            <h3 className="text-lg font-semibold mb-6 text-[#FFA600]">Empresa</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-[#CF0C0C] transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-[#FFA600]">Contato</h4>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="block text-sm text-gray-300 hover:text-[#CF0C0C] transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-medium">{contact.label}:</span> {contact.value}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#FFA600]">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-[#CF0C0C] transition-colors duration-200"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-[#FFA600]">Redes Sociais</h4>
              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-[#CF0C0C] transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
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
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Veto. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
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