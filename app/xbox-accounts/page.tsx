"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function XboxAccountsPage() {
  // List of Xbox accounts
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
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-2] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      <div className="fixed inset-0 z-[-1] bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_100%)]"></div>

      {/* Floating Orbs */}
      <div className="fixed top-20 right-[20%] w-72 h-72 rounded-full bg-purple-600/20 blur-[100px] animate-pulse"></div>
      <div className="fixed bottom-20 left-[10%] w-64 h-64 rounded-full bg-fuchsia-600/20 blur-[100px] animate-pulse-slow"></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6">
        <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </header>

      <div className="container mx-auto px-6 pt-24 pb-16">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Xbox Accounts
        </motion.h1>

        <motion.div
          className="max-w-4xl mx-auto mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-lg text-white/70">
            A collection of my Xbox accounts, Probably only gonna list 4c's as thats what i mainly collect :p
          </p>
          <p className="mt-2 text-xl font-semibold text-purple-400">
            Total Accounts: <span className="text-pink-500">{xboxAccounts.length}</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {xboxAccounts.map((account, index) => (
            <motion.div
              key={account}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index % 10), duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <span className="font-mono text-lg font-medium">{account}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
