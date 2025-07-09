"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import BotModal from "./bot-modal"
import McbetiersModal from "./mcbetiers-modal"

interface ProjectCardProps {
  title: string
  description: string
  stats: string[]
  link: string
  iconPath: string
  isModal?: boolean
  badge?: string
  tech?: string[]
}

export default function ProjectCard({
  title,
  description,
  stats,
  link,
  iconPath,
  isModal = false,
  badge,
  tech = [],
}: ProjectCardProps) {
  const [isBotModalOpen, setIsBotModalOpen] = useState(false)
  const [isMcbetiersModalOpen, setIsMcbetiersModalOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (isModal) {
      e.preventDefault()
      if (title.includes("MCBETIERS")) {
        setIsMcbetiersModalOpen(true)
      } else {
        setIsBotModalOpen(true)
      }
    }
  }

  return (
    <>
      <motion.div
        className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 group max-w-2xl"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-start gap-5 mb-5">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5 border border-white/10">
            <Image
              src={iconPath || "/placeholder.svg"}
              alt={title}
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold text-white leading-tight">{title}</h3>
              {badge && (
                <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/30 whitespace-nowrap ml-3">
                  {badge}
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="text-white/60 mb-6 leading-relaxed text-sm">{description}</p>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((item, index) => (
              <span
                key={index}
                className="bg-white/5 text-white/70 text-xs px-2.5 py-1 rounded-md border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-3 mb-6">
          {stats.map((stat, index) => (
            <span key={index} className="text-white/50 text-xs">
              {stat}
            </span>
          ))}
        </div>
        <Link
          href={link}
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white group-hover:translate-x-1 transition-all duration-200 text-sm"
        >
          {isModal ? "learn more" : "view project"}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>
      <BotModal isOpen={isBotModalOpen} onClose={() => setIsBotModalOpen(false)} />
      <McbetiersModal isOpen={isMcbetiersModalOpen} onClose={() => setIsMcbetiersModalOpen(false)} />
    </>
  )
}
