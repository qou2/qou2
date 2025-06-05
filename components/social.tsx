"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Copy, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export function Social() {
  const { toast } = useToast()
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const [copiedStates, setCopiedStates] = useState({
    discord: false,
    bitcoin: false,
    ethereum: false,
    litecoin: false,
  })

  const socialLinks = [
    {
      id: "discord",
      title: "Discord",
      handle: "@whoseqou2",
      value: "@whoseqou2",
      icon: "/discord.png",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      id: "github",
      title: "GitHub",
      handle: "github.com/qou2",
      link: "https://github.com/qou2",
      icon: "/placeholder.svg?height=80&width=80",
      gradient: "from-gray-700 to-gray-900",
    },
  ]

  const cryptoAddresses = [
    {
      id: "bitcoin",
      title: "Bitcoin",
      address: "1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb",
      icon: "/btc.png",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      id: "ethereum",
      title: "Ethereum",
      address: "0x4258456433f8afea108f2717f06e35a1cbb74ace",
      icon: "/eth.png",
      gradient: "from-blue-400 to-purple-600",
    },
    {
      id: "litecoin",
      title: "Litecoin",
      address: "MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH",
      icon: "/ltc.png",
      gradient: "from-blue-500 to-blue-700",
    },
  ]

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedStates({ ...copiedStates, [id]: true })

    toast({
      title: "Copied to clipboard",
      description: `${id.charAt(0).toUpperCase() + id.slice(1)} address copied successfully.`,
    })

    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [id]: false })
    }, 2000)
  }

  return (
    <section id="connect" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Connect & Support
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/60 max-w-2xl mx-auto">
            Follow me on social media or support my work through crypto donations
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          {socialLinks.map((social) => (
            <motion.div key={social.id} variants={itemVariants}>
              <Card className="card-gradient card-hover border border-border/50 overflow-hidden h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br ${social.gradient} p-1`}>
                      <div className="h-full w-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                        <Image
                          src={social.icon || "/placeholder.svg"}
                          alt={social.title}
                          width={80}
                          height={80}
                          className="w-4/5 h-4/5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-center text-2xl">{social.title}</CardTitle>
                  <CardDescription className="text-center text-foreground/70 bg-secondary/20 py-2 px-4 rounded-full mx-auto mt-2 inline-block">
                    {social.handle}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center pb-6">
                  {social.link ? (
                    <Button variant="outline" className="gap-2" asChild>
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" className="gap-2" onClick={() => handleCopy(social.id, social.value)}>
                      {copiedStates[social.id as keyof typeof copiedStates] ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-8 text-center">
            Crypto Donations
          </motion.h3>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            {cryptoAddresses.map((crypto) => (
              <div key={crypto.id} className="flex flex-col items-center">
                <button
                  onClick={() => handleCopy(crypto.id, crypto.address)}
                  className={`h-16 w-16 rounded-full overflow-hidden bg-gradient-to-br ${crypto.gradient} p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background`}
                >
                  <div className="h-full w-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                    <Image
                      src={crypto.icon || "/placeholder.svg"}
                      alt={crypto.title}
                      width={64}
                      height={64}
                      className="w-4/5 h-4/5 object-contain"
                    />
                  </div>
                </button>
                <span className="text-sm mt-2 text-foreground/70">{crypto.title}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
