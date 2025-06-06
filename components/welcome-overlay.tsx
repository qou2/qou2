"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(false)
    // Dispatch custom event for music player to start
    window.dispatchEvent(new Event("userInteraction"))
  }

  // Auto-hide after 10 seconds if no interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      window.dispatchEvent(new Event("userInteraction"))
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-filter backdrop-blur-xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              Welcome
            </motion.h2>
            <p className="text-white/80 text-lg">Click anywhere to continue</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
