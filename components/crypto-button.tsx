"use client"

import Image from "next/image"
import { useToast } from "@/hooks/use-toast"

interface CryptoButtonProps {
  name: string
  address: string
  imagePath: string
}

export default function CryptoButton({ name, address, imagePath }: CryptoButtonProps) {
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
    toast({
      title: `${name} address copied`,
      description: "Address copied to clipboard",
    })
  }

  return (
    <button
      onClick={copyToClipboard}
      className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 hover:scale-110 hover:border-white/30 transition-all duration-300 overflow-hidden"
      aria-label={`Copy ${name} address`}
    >
      <Image src={imagePath || "/placeholder.svg"} alt={name} width={30} height={30} className="object-contain" />
    </button>
  )
}
