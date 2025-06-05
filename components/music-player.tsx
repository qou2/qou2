"use client"

import { useState, useEffect, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio()
    audioRef.current.volume = 0.3
    audioRef.current.loop = true

    // Show music controls after a delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (!hasInteracted) {
      setHasInteracted(true)

      // Set audio source to travscot.mp3 in the public folder
      audioRef.current.src = "/travscot.mp3"

      audioRef.current.addEventListener("error", (e) => {
        console.error("Audio error:", e)
        toast({
          title: "Music Error",
          description: "Could not load music file. Please check if travscot.mp3 exists in the public folder.",
          variant: "destructive",
        })
        setIsPlaying(false)
      })
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      toast({
        title: "Music paused",
        description: "Background music has been paused",
      })
    } else {
      const playPromise = audioRef.current.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            toast({
              title: "Music playing",
              description: "Background music is now playing",
            })
          })
          .catch((error) => {
            toast({
              title: "Playback failed",
              description: "Could not play music. Please try again.",
              variant: "destructive",
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
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-background/50 backdrop-blur border-border/50 shadow-lg"
            onClick={toggleMusic}
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
