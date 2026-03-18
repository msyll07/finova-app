"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 -z-10" />

      {/* GLOW */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[90px] font-extrabold leading-[0.95] text-white tracking-tight">
            Move your money <br />
            <span className="text-white/80">without limits.</span>
          </h1>

          <p className="mt-6 text-xl text-white/80 max-w-xl">
            Send, spend, save, and manage everything from one powerful app built for modern life.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
              Get the App
            </button>

            <button className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Live Demo
            </button>
          </div>
        </motion.div>

        {/* RIGHT (PHONE) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[520px] sm:h-[600px] bg-black rounded-[40px] p-2 shadow-2xl animate-[float_6s_ease-in-out_infinite]">

            {/* SCREEN */}
            <div className="w-full h-full bg-white rounded-[32px] p-5 flex flex-col justify-between">

              {/* TOP */}
              <div>
                <p className="text-xs text-slate-400">Balance</p>
                <h2 className="text-2xl font-bold text-slate-900">$12,450</h2>
              </div>

              {/* CARD */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
                <p className="text-sm opacity-80">Visa Card</p>
                <p className="text-lg font-semibold mt-2">•••• 4832</p>
              </div>

              {/* TRANSACTIONS */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Coffee</span>
                  <span className="text-red-500">- $4.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Salary</span>
                  <span className="text-green-600">+ $2,500</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}