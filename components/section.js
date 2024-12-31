'use client'

import { motion } from 'framer-motion'

export default function Section({ 
  title, 
  description, 
  children,
  className = "",
  dark = false 
}) {
  return (
    <div className={`py-16 ${dark ? 'bg-gradient-to-r from-[#004225] to-[#007F5F] text-white' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {title && (
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-[#004225]'}`}>
              {title}
            </h2>
          )}
          {description && (
            <p className={`text-xl ${dark ? 'text-[#E0F2E8]' : 'text-[#4B4B4B]'}`}>
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </div>
  )
}
