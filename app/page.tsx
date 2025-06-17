"use client"

import Link from "next/link"
import { ArrowUpRight, Copy, Github, ExternalLink } from "lucide-react"
import MusicPlayer from "@/components/music-player"
import ProjectCard from "@/components/project-card"
import WelcomeOverlay from "@/components/welcome-overlay"
import CryptoButton from "@/components/crypto-button"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const copyToClipboard = (text: string, platform: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: `${platform} copied!`,
      description: `${text} has been copied to your clipboard`,
    })
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <WelcomeOverlay />

      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/15 via-black to-black"></div>
      <div className="fixed inset-0 z-[-1] bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>

      <div className="fixed top-32 right-[15%] w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-40 left-[8%] w-80 h-80 rounded-full bg-fuchsia-600/8 blur-[100px] animate-pulse-slow"></div>

      <MusicPlayer audioFile="/travscot.mp3" />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-7 py-5">
        <div className="text-xl font-medium text-white/90">qou2</div>
        <nav className="hidden md:flex items-center gap-7">
          <Link href="#work" className="text-white/60 hover:text-white/90 transition-colors text-sm">
            work
          </Link>
          <Link href="#contact" className="text-white/60 hover:text-white/90 transition-colors text-sm">
            contact
          </Link>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center px-7 pt-24">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-5 text-white leading-tight">hey, i'm qou2</h1>
            <h2 className="text-xl md:text-2xl text-white/70 mb-7 font-normal max-w-2xl">
              i build websites and discord bots sometimes
            </h2>
            <p className="text-base text-white/50 max-w-xl leading-relaxed mb-9">
              mostly frontend stuff with react/next.js and sometimes i make discord bots
            </p>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 px-5 py-2.5 rounded-lg text-white/90 text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              check out my work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/xbox-accounts"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 text-sm transition-colors"
            >
              xbox accounts i own
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="py-24 px-7">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">stuff i've built</h2>
            <p className="text-white/60 text-base max-w-2xl">
              here's some projects
            </p>
          </div>

          <div className="space-y-8">
              <ProjectCard
                title="MCBETIERS Web Platform"
                description="built this entire website in like 2 hours at 4am. it's honestly pretty terrible code but it works and looks decent enough. sometimes that's all you need."
                stats={["12,796 lines", "html", "NOT next.js", "kinda uggo"]}
                link="https://mcbetiers.com/"
                iconPath="/logo.gif"
                tech={["html", "css", "Vercel"]}
              />

              <ProjectCard
                title="MCBETIERS Discord Bot"
                description="actually spent time on this one. handles moderation, has github integration, generates images, and got discord verification"
                stats={["4,217 lines", "discord.js", "verified ✓", "actually good"]}
                link="#"
                iconPath="/discord.png"
                isModal={true}
                badge="Discord Verified"
                tech={["Node.js", "Discord.js", "MongoDB"]}
              />
            </div>
          </div>
      </section>

      <section id="contact" className="py-20 px-7">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">let's talk</h2>
            <p className="text-white/60 text-base max-w-2xl leading-relaxed">
              hit me up if you want to work together, need help with something, or just want to chat about code. i'm
              usually pretty responsive unless iim sleeping
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                <Github className="w-5 h-5 text-white/70" />
                <span className="text-white/90 text-sm">github.com/qou2</span>
                <Link
                  href="https://github.com/qou2"
                  target="_blank"
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              <button
                onClick={() => copyToClipboard("@whoseqou2", "Discord")}
                className="flex items-center gap-3 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 rounded-lg px-4 py-3 border border-[#5865F2]/20 hover:border-[#5865F2]/30 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#5865F2" className="w-5 h-5">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="text-white/90 text-sm">@whoseqou2</span>
                <Copy className="w-4 h-4 text-white/60" />
              </button>
            </div>
            <div className="pt-6">
              <p className="text-white/50 text-sm mb-4">if you're feeling generous (crypto donations):</p>
              <div className="flex flex-wrap gap-3">
                <CryptoButton name="Bitcoin" address="1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb" imagePath="/btc.png" />
                <CryptoButton
                  name="Ethereum"
                  address="0x4258456433f8afea108f2717f06e35a1cbb74ace"
                  imagePath="/eth.png"
                />
                <CryptoButton name="Litecoin" address="MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH" imagePath="/ltc.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 px-7 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-white/40 text-sm">© 2025 qou2</p>
          <p className="text-white/40 text-sm">next js is annoying</p>
        </div>
      </footer>
    </main>
  )
}
