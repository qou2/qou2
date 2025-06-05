"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export function Projects() {
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

  const projects = [
    {
      id: "bptt-web",
      title: "BPTT Web Platform",
      description:
        "A comprehensive web platform featuring modern UI/UX design, responsive layout, and seamless user interactions. Built with cutting-edge web technologies and optimized for performance across all devices with advanced animations and interactive elements.",
      stats: [
        { label: "Lines of code", value: "12,796" },
        { label: "Type", value: "Web Platform" },
        { label: "Stack", value: "Modern Stack" },
      ],
      link: "https://qou2.github.io/btt/",
      linkText: "View Live Site",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: "bptt-bot",
      title: "BPTT Discord Bot",
      description:
        "A sophisticated Discord bot with advanced moderation and community management tools. Officially verified by Discord, serving servers with high reliability, performance optimization, and seamless user experience.",
      stats: [
        { label: "Lines of code", value: "3,301" },
        { label: "Type", value: "Discord Bot" },
        { label: "Status", value: "✅ Verified" },
        { label: "Performance", value: "High Performance" },
      ],
      badge: "Discord Verified",
      modalContent: {
        title: "BPTT Discord Bot",
        description:
          "A comprehensive Discord bot built with advanced moderation capabilities, community engagement tools, and seamless server management features. Officially verified by Discord for reliability and performance.",
        stats: [
          { label: "Lines of Code", value: "3,301" },
          { label: "Uptime", value: "24/7" },
          { label: "Commands", value: "50+" },
          { label: "Reliability", value: "99.9%" },
        ],
        features: [
          {
            title: "Custom made for BPTT",
            description: "Custom made for BPTT discord with Github and website integration.",
            icon: "Network",
          },
          {
            title: "Community Tools",
            description:
              "Welcome messages, role management, polls, and engagement features to build strong communities.",
            icon: "Users",
          },
          {
            title: "Performance Monitoring",
            description: "Real-time server analytics, performance metrics, and detailed activity reporting.",
            icon: "LineChart",
          },
          {
            title: "Custom server-made commands",
            description: "Custom made commands tailored to the needs of BPTT.",
            icon: "Lock",
          },
        ],
      },
      image: "/discord.png",
    },
  ]

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-foreground/60 max-w-2xl mx-auto">
            A showcase of my recent work in web development and Discord bot creation
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="card-gradient card-hover border border-border/50 overflow-hidden h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden bg-secondary/30 flex items-center justify-center">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.badge && (
                        <Badge variant="secondary" className="mt-1">
                          {project.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="py-4 flex-grow">
                  <CardDescription className="text-foreground/70 text-sm mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="bg-secondary/20 px-3 py-1 rounded-md text-xs text-foreground/70">
                        {stat.label === "Lines of code" ? (
                          <span>
                            <span className="font-semibold text-foreground">{stat.value}</span> {stat.label}
                          </span>
                        ) : (
                          stat.value
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  {project.id === "bptt-bot" ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full justify-between group">
                          Learn More
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2 text-2xl">
                            <div className="h-10 w-10 rounded-md overflow-hidden">
                              <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {project.modalContent?.title}
                          </DialogTitle>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="secondary">✅ Discord Verified</Badge>
                            <Badge variant="secondary">High Performance</Badge>
                            <Badge variant="secondary">24/7 Uptime</Badge>
                          </div>
                        </DialogHeader>
                        <DialogDescription className="text-foreground/70 mt-4">
                          {project.modalContent?.description}
                        </DialogDescription>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                          {project.modalContent?.stats.map((stat, index) => (
                            <div key={index} className="bg-secondary/20 p-3 rounded-lg text-center">
                              <span className="block text-lg font-bold text-foreground">{stat.value}</span>
                              <span className="text-xs text-foreground/60">{stat.label}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                          {project.modalContent?.features.map((feature, index) => (
                            <div key={index} className="bg-secondary/10 p-4 rounded-lg">
                              <h4 className="font-medium mb-2">{feature.title}</h4>
                              <p className="text-sm text-foreground/70">{feature.description}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 text-center">
                          <Button onClick={() => navigator.clipboard.writeText("@whoseqou2")}>
                            Contact for Custom Bot
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="outline" className="w-full justify-between group" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.linkText}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
