"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppPreview() {
  return (
    <section className="py-28 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            A powerful dashboard
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Designed to give you clarity, control, and confidence over your finances.
          </p>
        </motion.div>

        {/* IMAGE CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-5xl"
        >
          {/* MAIN IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Finova App Dashboard"
              width={1200}
              height={700}
              className="w-full object-cover"
            />
          </div>

          {/* GLOW EFFECT */}
          <div className="absolute -inset-10 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-3xl -z-10 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}