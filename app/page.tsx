"use client"

import Link from "next/link"
import { ArrowUpRight, Copy } from "lucide-react"
import MusicPlayer from "@/components/music-player"
import ProjectCard from "@/components/project-card"
import SocialButton from "@/components/social-button"
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
      {/* Welcome Overlay */}
      <WelcomeOverlay />

      {/* Background Elements */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="fixed inset-0 z-[-1] bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>

      {/* Floating Orbs */}
      <div className="fixed top-20 right-[20%] w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] animate-pulse"></div>
      <div className="fixed bottom-20 left-[10%] w-64 h-64 rounded-full bg-fuchsia-600/20 blur-[100px] animate-pulse-slow"></div>

      {/* Music Player */}
      <MusicPlayer audioFile="/travscot.mp3" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          qou2
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-white/70 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#social" className="text-white/70 hover:text-white transition-colors">
            Social
          </Link>
          <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
            qou2
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-white/80 mb-6">Front End Developer & Bot Creator</h2>
          <p className="text-lg text-white/60 max-w-2xl mb-10">
            Crafting innovative web applications and Discord bots with precision and creativity. Passionate about clean
            code, user experience, and pushing the boundaries of what's possible in modern web development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Explore My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/xbox-accounts"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              My Xbox Accounts
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="MCBETIERS Web Platform"
              description="A comprehensive web platform featuring modern UI/UX design, responsive layout, and seamless user interactions. Built with cutting-edge web technologies and optimized for performance across all devices."
              stats={["12,796 lines of code", "Web Platform", "Modern Stack"]}
              link="https://mcbetiers.com/"
              iconPath="/logo.gif"
            />

            <ProjectCard
              title="MCBETIERS Discord Bot"
              description="A sophisticated Discord bot with advanced moderation and community management tools. Officially verified by Discord, serving servers with high reliability, performance optimization, and seamless user experience."
              stats={["4,217 lines of code", "Discord Bot", "✅ Verified", "High Performance"]}
              link="#"
              iconPath="/discord.png"
              isModal={true}
              badge="Discord Verified"
            />
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section id="social" className="py-20 px-6 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
            Connect & Support
          </h2>
          <p className="text-center text-white/60 mb-16 max-w-2xl mx-auto">
            Follow me on social media or support my work through crypto donations
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <SocialButton
              platform="Discord"
              handle="@whoseqou2"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              }
            />

            <CryptoButton name="Bitcoin" address="1C6C21WnJAaipbEGz1nDEiqr4o3XNTPJQb" imagePath="/btc.png" />

            <CryptoButton name="Ethereum" address="0x4258456433f8afea108f2717f06e35a1cbb74ace" imagePath="/eth.png" />

            <CryptoButton name="Litecoin" address="MAYhW2jgVw9hXYuwjLpktVsbKJ9avPmrjH" imagePath="/ltc.png" />
          </div>

          {/* Social Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-xl bg-[#5865F2] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.30zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">Discord</h3>
              <div className="bg-gray-800/80 rounded-lg py-3 px-4 text-center mb-6 font-mono text-sm text-gray-200 border border-gray-600/50">
                @whoseqou2
              </div>
              <button
                onClick={() => copyToClipboard("@whoseqou2", "Discord")}
                className="w-full flex items-center justify-center gap-2 h-10 px-4 py-2 bg-gray-700/50 text-white rounded-md border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-colors group-hover:border-[#5865F2]/30 group-hover:bg-[#5865F2]/10"
              >
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-gray-500/30 transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-xl bg-[#24292e] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">GitHub</h3>
              <div className="bg-gray-800/80 rounded-lg py-3 px-4 text-center mb-6 font-mono text-sm text-gray-200 border border-gray-600/50">
                github.com/qou2
              </div>
              <Link
                href="https://github.com/qou2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 h-10 px-4 py-2 bg-gray-700/50 text-white rounded-md border border-gray-600/50 hover:bg-gray-600/50 hover:border-gray-500/50 transition-colors group-hover:border-gray-500/30 group-hover:bg-gray-500/10"
              >
                <ArrowUpRight className="w-4 h-4" />
                <span>Visit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-white/10 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <p className="text-white/50 text-sm">© 2025 qou2. Crafted with passion and attention to detail.</p>
            </div>
            <div className="text-center">
              <p className="text-white/50 text-sm">
                Ready to collaborate? Let's build something extraordinary together.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => copyToClipboard("@whoseqou2", "Discord")}
                className="flex items-center gap-3 px-4 py-2 bg-gray-800/60 border border-gray-600/50 rounded-full hover:bg-gray-700/60 hover:border-gray-500/50 transition-all duration-300"
              >
                <span className="text-white/90 font-medium">Discord:</span>
                <span className="text-gray-200 font-mono bg-gray-700/50 px-2 py-1 rounded text-sm">@whoseqou2</span>
                <Copy className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
