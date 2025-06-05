"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const { toast } = useToast()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [copied, setCopied] = useState(false)

  const handleCopyDiscord = () => {
    navigator.clipboard.writeText("@whoseqou2")
    setCopied(true)

    toast({
      title: "Discord handle copied",
      description: "Discord handle copied to clipboard",
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <footer
      id="contact"
      className="relative py-12 border-t border-border/30 bg-gradient-to-t from-background/80 to-transparent"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h2>

          <p className="text-foreground/60 mb-8">Ready to collaborate? Let's build something extraordinary together.</p>

          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-8">
            <span className="text-foreground/80">Discord:</span>
            <span className="font-medium">@whoseqou2</span>
            <button
              onClick={handleCopyDiscord}
              className="ml-2 p-1 rounded-full hover:bg-secondary/30 transition-colors"
              aria-label="Copy Discord handle"
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-foreground/70" />}
            </button>
          </div>

          <div className="text-sm text-foreground/40 mt-12">
            <p>© {new Date().getFullYear()} qou2. Crafted with passion and attention to detail.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
