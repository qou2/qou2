"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">qou2</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/80">
            Front End Developer & Bot Creator
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/60 mb-8 leading-relaxed">
            Crafting innovative web applications and Discord bots with precision and creativity. Passionate about clean
            code, user experience, and pushing the boundaries of what's possible in modern web development.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="group">
              <a href="#projects" className="flex items-center gap-2">
                Explore My Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
