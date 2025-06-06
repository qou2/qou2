"use client"

import type React from "react"

import { useToast } from "@/hooks/use-toast"

interface SocialButtonProps {
  platform: string
  handle: string
  icon: React.ReactNode
}

export default function SocialButton({ platform, handle, icon }: SocialButtonProps) {
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(handle)
    toast({
      title: `${platform} handle copied`,
      description: `${handle} copied to clipboard`,
    })
  }

  return (
    <button
      onClick={copyToClipboard}
      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 hover:border-white/30 transition-all duration-300"
      aria-label={`Copy ${platform} handle: ${handle}`}
    >
      {icon}
    </button>
  )
}
