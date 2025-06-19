"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

interface MusicPlayerProps {
  audioFile: string
}

export default function MusicPlayer({ audioFile }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { toast } = useToast()

  // Create audio element when component mounts
  useEffect(() => {
    audioRef.current = new Audio(audioFile)
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioFile])

  // Listen for user interaction from welcome overlay
  useEffect(() => {
    const handleUserInteraction = () => {
      setHasInteracted(true)
      setIsVisible(true)

      // Try to autoplay music after user interaction
      if (audioRef.current) {
        const playPromise = audioRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
              toast({
                title: "Music playing",
                description: "Background music has started",
              })
            })
            .catch((error) => {
              console.error("Autoplay failed:", error)
              toast({
                title: "Music ready",
                description: "Click the music button to play",
              })
            })
        }
      }
    }

    window.addEventListener("userInteraction", handleUserInteraction)
    return () => window.removeEventListener("userInteraction", handleUserInteraction)
  }, [toast])

const toggleMusic = () => {
  if (!audioRef.current) return

  if (isPlaying) {
    audioRef.current.pause()
    setIsPlaying(false)
    toast({
      title: "Music paused",
    })
  } else {
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
          if (hasInteracted) {
            toast({
              title: "Music playing",
            })
          }
        })
        .catch((error) => {
          console.error("Play failed:", error)
          toast({
            title: "Playback failed",
            description: "Please try again",
          })
        })
    }
  }
}

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-black/30 backdrop-blur-lg rounded-full px-4 py-2 flex items-center gap-2 border border-white/10"
        >
          <button
            onClick={toggleMusic}
            disabled={!hasInteracted}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <span className="text-sm text-white/80">Music</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
