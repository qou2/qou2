"use client"

import { useEffect } from "react"
import { X, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface BotModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BotModal({ isOpen, onClose }: BotModalProps) {
  const { toast } = useToast()

  // Close modal with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const copyDiscord = () => {
    navigator.clipboard.writeText("@whoseqou2")
    toast({
      title: "Discord handle copied",
      description: "@whoseqou2 copied to clipboard",
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/90 border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="w-16 h-16 rounded-xl overflow-hidden">
                <img src="/discord.png" alt="BPTT Discord Bot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">MCBETIERS Discord Bot</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                    ✅ Discord Verified
                  </span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">High Performance</span>
                  <span className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">24/7 Uptime</span>
                </div>
              </div>
            </div>

            <p className="text-white/70 mb-8">
              A comprehensive Discord bot built with advanced moderation capabilities, community engagement tools, and
              seamless server management features. Officially verified by Discord for reliability and performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <span className="block text-xl font-bold">4,217</span>
                <span className="text-xs text-white/50">Lines of Code</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <span className="block text-xl font-bold">24/7</span>
                <span className="text-xs text-white/50">Uptime</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <span className="block text-xl font-bold">50+</span>
                <span className="text-xs text-white/50">Commands</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center">
                <span className="block text-xl font-bold">99.9%</span>
                <span className="text-xs text-white/50">Reliability</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
                    <path d="M15 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
                    <path d="M9 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Custom made for MCBETIERS</h4>
                <p className="text-sm text-white/60">
                  Custom made for MCBETIERS discord with Github and website integration.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Community Tools</h4>
                <p className="text-sm text-white/60">
                  Welcome messages, role management, polls, and engagement features to build strong communities.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Performance Monitoring</h4>
                <p className="text-sm text-white/60">
                  Real-time server analytics, performance metrics, and detailed activity reporting.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <circle cx="12" cy="16" r="1" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Custom server-made commands</h4>
                <p className="text-sm text-white/60">Custom made commands tailored to the needs of BPTT.</p>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-white/50 mb-4">Interested in a custom made bot for your server?</p>
              <Button
                onClick={copyDiscord}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Contact Now
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
