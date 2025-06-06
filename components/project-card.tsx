"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import BotModal from "./bot-modal"

interface ProjectCardProps {
  title: string
  description: string
  stats: string[]
  link: string
  iconPath: string
  isModal?: boolean
  badge?: string
}

export default function ProjectCard({
  title,
  description,
  stats,
  link,
  iconPath,
  isModal = false,
  badge,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (isModal) {
      e.preventDefault()
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <motion.div
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
            <Image
              src={iconPath || "/placeholder.svg"}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            {badge && (
              <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
                {badge}
              </span>
            )}
          </div>
        </div>

        <p className="text-white/60 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {stats.map((stat, index) => (
            <span key={index} className="bg-white/5 text-white/70 text-sm px-3 py-1 rounded-lg border border-white/5">
              {stat}
            </span>
          ))}
        </div>

        <Link
          href={link}
          onClick={handleClick}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white group-hover:translate-x-1 transition-all duration-300"
        >
          {isModal ? "Learn More" : "View Live Site"}
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </motion.div>

      {isModal && <BotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  )
}
