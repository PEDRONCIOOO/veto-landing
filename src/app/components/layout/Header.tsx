'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.95)']
  )
  
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(10px)', 'blur(10px)']
  )

  const navigationItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBlur,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <Image
                src="/assets/logos/veto-logo.png"
                alt="Veto Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Veto
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#CF0C0C]'
                    : 'text-gray-700 hover:text-[#CF0C0C]'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className="hidden lg:flex items-center px-6 py-2.5 bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] text-white font-medium rounded-full hover:shadow-lg transition-all duration-200 transform"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(255, 166, 0, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Fale Conosco
            <motion.span
              className="ml-2"
              animate={{ x: [0, 4, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: 'easeInOut'
              }}
            >
              👈
            </motion.span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 text-gray-700 hover:text-[#CF0C0C] transition-colors"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="w-5 h-0.5 bg-current block mb-1"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current block mb-1"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-current block"
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          initial={false}
          animate={isMenuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: isMenuOpen ? 'easeOut' : 'easeIn' }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: isMenuOpen ? index * 0.05 + 0.1 : 0 }}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#CF0C0C] bg-orange-50'
                    : 'text-gray-700 hover:text-[#CF0C0C] hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMenuOpen(false)
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: isMenuOpen ? navigationItems.length * 0.05 + 0.1 : 0 }}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[#FFA600] via-[#CF0C0C] to-[#9200B3] text-white font-medium rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Fale Conosco
            </motion.button>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}

export default Header