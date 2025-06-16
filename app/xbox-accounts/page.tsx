"use client"

import Link from "next/link"
import { ArrowLeft, Search, Filter } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function XboxAccountsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showOnlyFourChar, setShowOnlyFourChar] = useState(false)

  const xboxAccounts = [
    "qou2", 
    "j8e1",
    "xup8",
    "o7e8",
    "sq3m",
    "a8jq",
    "z5ws",
    "vl3v",
    "ods4",
    "i1hh",
    "ec40",
    "m9n0",
    "d6lj",
    "ti9u",
    "i4c2",
    "zbe3",
    "fc2p",
    "shf6",
    "yz0x",
    "pgb8",
    "u1t6",
    "wta8",
    "ejv5",
    "zu40",
    "t9p8",
    "g3i2",
    "l65v",
    "u69k",
    "l8xl",
    "n6zw",
    "v1pv",
    "z2fb",
    "m3pr",
    "w3jl",
    "r5nw",
    "hr1d",
    "dr8h",
    "wy3q",
    "dpw8",
    "eg6f",
    "nap2",
    "pd0z",
    "z47g",
    "t5ov",
    "q6vs",
    "bz6h",
    "u9p6",
    "g7jj",
    "y8ec",
    "x538",
    "g9s3",
    "yve4",
    "u4fw",
    "gj4j",
    "t8u6",
    "q19k",
    "ulk0",
    "mke0",
    "cc5v",
    "qd3m",
    "phe1",
    "f6o4",
    "iy1m",
    "i3jt",
    "ak8u",
    "lco5",
    "whl6",
    "fh2h",
    "fqw5",
    "w7jo",
    "nv9u",
    "ad9h",
    "k2p9",
    "x7m4",
    "b3n8",
    "f9q1",
    "h5r6",
    "j2w7",
    "l4y3",
    "n8z5",
    "p1x9",
    "r6v2",
    "s9t4",
    "v3u7",
    "w8q1",
    "y5e6",
    "z2r9",
    "a7i3",
    "c4o8",
    "e1p5",
    "g6s2",
    "akadonutt",
    "whoseqou2",
  ]

  const filteredAccounts = xboxAccounts.filter((account) => {
    const matchesSearch = account.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = showOnlyFourChar ? account.length === 4 : true
    return matchesSearch && matchesFilter
  })

  const fourCharCount = xboxAccounts.filter((account) => account.length === 4).length

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/15 via-black to-black"></div>
      <div className="fixed inset-0 z-[-1] bg-grid-white/[0.015] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>
      <div className="fixed top-32 right-[15%] w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
      <div className="fixed bottom-40 left-[8%] w-80 h-80 rounded-full bg-fuchsia-600/8 blur-[100px] animate-pulse-slow"></div>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-7 py-5">
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white/90 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">back home</span>
        </Link>
      </header>
      <div className="container mx-auto px-7 pt-24 pb-16">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">my xbox account collection</h1>
          <div className="max-w-3xl">
            <p className="text-white/60 text-base leading-relaxed mb-4">
              so i have this slight obsession with collecting 4char xbox gamertags. started with just wanting a
              4-character one and somehow ended up with... well, this many.
            </p>
            <p className="text-white/50 text-sm">
              probably excessive...
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/5 rounded-lg px-4 py-2 border border-white/10">
                <span className="text-white/90 font-medium">{xboxAccounts.length}</span>
                <span className="text-white/50 text-sm ml-2">total accounts</span>
              </div>
              <div className="bg-purple-500/10 rounded-lg px-4 py-2 border border-purple-500/20">
                <span className="text-purple-300 font-medium">{fourCharCount}</span>
                <span className="text-purple-200/70 text-sm ml-2">4 chars</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="search accounts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/40 focus:border-white/20 focus:outline-none w-48"
                />
              </div>
              <button
                onClick={() => setShowOnlyFourChar(!showOnlyFourChar)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                  showOnlyFourChar
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                }`}
              >
                <Filter className="w-4 h-4" />
                4-char only
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {filteredAccounts.map((account, index) => {
            const isFourChar = account.length === 4
            const isMain = account === "qou2"

            return (
              <motion.div
                key={account}
                className={`
                  relative rounded-xl p-4 flex items-center justify-center transition-all duration-200 cursor-default
                  ${
                    isMain
                      ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 shadow-lg shadow-purple-500/10"
                      : isFourChar
                        ? "bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                        : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                  }
                `}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.05 * (index % 20),
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2 },
                }}
              >
                {isMain && (
                  <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">
                    main
                  </div>
                )}
                <span
                  className={`
                  font-mono text-base font-medium
                  ${isMain ? "text-white" : isFourChar ? "text-white/90" : "text-white/70"}
                `}
                >
                  {account}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {filteredAccounts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-white/50 text-base">no accounts found matching your search</p>
            <button
              onClick={() => {
                setSearchTerm("")
                setShowOnlyFourChar(false)
              }}
              className="text-purple-400 hover:text-purple-300 text-sm mt-2 transition-colors"
            >
              clear filters
            </button>
          </motion.div>
        )}

        <motion.div
          className="mt-16 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">random facts about this collection</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
              <h3 className="text-white/90 font-medium mb-3">why 4-character tags?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                they're rare, clean, and honestly just look cool. also 3-chars are like impossible to get other than buying, while these can still be sniped
              </p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
              <h3 className="text-white/90 font-medium mb-3">do i use them all?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                honestly? no. most just sit there looking pretty. qou2 is my main and probably always will be. the rest
                are just for the collection
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-white/40 text-sm">
            contact me on discord if you're interested in selling your gamertag
          </p>
        </motion.div>
      </div>
    </main>
  )
}
