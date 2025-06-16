"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(false)
    window.dispatchEvent(new Event("userInteraction"))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      window.dispatchEvent(new Event("userInteraction"))
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-filter backdrop-blur-xl flex items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          <motion.div
            className="text-center px-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-3 text-white"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              wazzah
            </motion.h2>
            <p className="text-white/60 text-base">click anywhere to enter</p>
            <p className="text-white/40 text-sm mt-2">(music will start playing)</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
