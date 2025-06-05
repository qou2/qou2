import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { Social } from "@/components/social"
import { Footer } from "@/components/footer"
import { BackgroundEffects } from "@/components/background-effects"
import { MusicPlayer } from "@/components/music-player"
import { WelcomeOverlay } from "@/components/welcome-overlay"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background/80 to-background">
      <BackgroundEffects />
      <WelcomeOverlay />
      <MusicPlayer />
      <Navbar />
      <Hero />
      <Projects />
      <Social />
      <Footer />
    </main>
  )
}
