'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Conditions', href: '#conditions' },
    { name: 'Contact Us', href: '#footer' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Branding */}
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  PremierHelix Health
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-gray-700 hover:text-blue-600 relative group transition-colors text-sm font-medium"
                  >
                    {item.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="ml-2"
              >
                <Link
                  href='/book-now'
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center gap-2"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

            {/* User Authentication */}
            <div className="flex items-center ml-4">
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-full hover:bg-gray-100">
                      Sign In
                    </button>
                  </SignInButton>
                </motion.div>
              </SignedOut>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-[280px] bg-white/95 backdrop-blur-md shadow-xl z-50 md:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    PremierHelix Health
                  </span>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                
                {/* Mobile Nav Items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1 px-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between p-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight size={18} className="text-gray-400" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Mobile Authentication */}
                <div className="p-5 border-t border-b">
                  <SignedIn>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">Your Account</span>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="flex items-center justify-center w-full bg-blue-50 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition-all duration-300 font-medium mb-4">
                        Sign In
                      </button>
                    </SignInButton>
                  </SignedOut>
                  
                  {/* Mobile Book Now Button */}
                  <Link
                    href='/book-now'
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3.5 rounded-full hover:shadow-lg transition-all duration-300 font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}