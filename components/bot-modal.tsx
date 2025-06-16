"use client"

import { useEffect } from "react"
import { X, ArrowUpRight, Zap, Users, Shield, BarChart3 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface BotModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BotModal({ isOpen, onClose }: BotModalProps) {
  const { toast } = useToast()

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
      title: "Discord copied",
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-black/90 border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                <img src="/discord.png" alt="Discord Bot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">MCBETIERS Bot</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full border border-green-500/30">
                    ✓ Discord Verified
                  </span>
                  <span className="text-white/50 text-sm">4,217 lines of code</span>
                </div>
              </div>
            </div>

            <p className="text-white/70 mb-8 leading-relaxed">
              this bot actually took some effort to build properly. started as a simple moderation tool but ended up
              becoming a full-featured server management system.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">moderation that works</h4>
                  <p className="text-white/60 text-sm">
                    auto-mod, custom filters, role management. the usual stuff but done right
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">github integration</h4>
                  <p className="text-white/60 text-sm">
                    automatically posts updates from repos, handles webhooks, tracks commits
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">community features</h4>
                  <p className="text-white/60 text-sm">
                    welcome messages, custom commands, polls, and other engagement stuff
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">image generation</h4>
                  <p className="text-white/60 text-sm">custom image gen for bi-user elo amounts</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">24/7</span>
                <span className="text-xs text-white/50">uptime</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">50+</span>
                <span className="text-xs text-white/50">commands</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">verified</span>
                <span className="text-xs text-white/50">by discord</span>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-white/50 mb-4 text-sm">need a custom bot for your server?</p>
              <Button onClick={copyDiscord} className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
                hit me up on discord
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
