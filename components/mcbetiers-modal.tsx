"use client"

import { useEffect } from "react"
import { X, ArrowUpRight, Trophy, Users, BarChart3, Shield, Gamepad2, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

interface McbetiersModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function McbetiersModal({ isOpen, onClose }: McbetiersModalProps) {
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
            className="bg-black/90 border border-white/10 rounded-2xl p-8 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                <img src="/logo.gif" alt="MCBETIERS" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">MCBE TIERS</h3>
                <div className="flex items-center gap-2">
                  <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full border border-green-500/30">
                    ✓ Rebuilt
                  </span>
                  <span className="text-white/50 text-sm">Minecraft Bedrock PvP Ranking Platform</span>
                </div>
              </div>
            </div>

            <p className="text-white/70 mb-8 leading-relaxed">
              A comprehensive, modern web application for ranking and tracking Minecraft Bedrock Edition PvP players
              across multiple competitive game modes. Built from the ground up with a focus on performance, scalability,
              and user experience.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Multi-Game Mode Rankings</h4>
                    <p className="text-white/60 text-sm">
                      Skywars, Midfight, Crystal, Bridge, UHC, Sumo, Bedfight, Nodebuff
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">5-Tier Ranking System</h4>
                    <p className="text-white/60 text-sm">
                      Combat General → Combat Rookie with detailed player profiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Real-time Analytics</h4>
                    <p className="text-white/60 text-sm">
                      Dynamic leaderboards, user engagement tracking, and performance monitoring
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Admin Dashboard</h4>
                    <p className="text-white/60 text-sm">
                      Comprehensive management system with role-based access control
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Gamepad2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Advanced Features</h4>
                    <p className="text-white/60 text-sm">
                      Snowfall API integration, mass data import, discord bot integrations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Modern Architecture</h4>
                    <p className="text-white/60 text-sm">React 18, TypeScript, Supabase, component-driven design</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4 mb-8 border border-white/10">
              <h4 className="text-white font-medium mb-3">Tech Stack</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div>
                  <span className="text-white/50">Frontend:</span>
                  <p className="text-white/90">React 18 + TypeScript + Vite</p>
                </div>
                <div>
                  <span className="text-white/50">Styling:</span>
                  <p className="text-white/90">Tailwind + Framer Motion</p>
                </div>
                <div>
                  <span className="text-white/50">Backend:</span>
                  <p className="text-white/90">Supabase + PostgreSQL</p>
                </div>
                <div>
                  <span className="text-white/50">Deployment:</span>
                  <p className="text-white/90">Vercel</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">8+</span>
                <span className="text-xs text-white/50">game modes</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">5-tier</span>
                <span className="text-xs text-white/50">ranking system</span>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <span className="block text-lg font-semibold text-white">modern</span>
                <span className="text-xs text-white/50">architecture</span>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-white/50 mb-4 text-sm">check out the live platform</p>
              <Link href="https://mcbetiers.com/" target="_blank">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  visit mcbetiers.com
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
