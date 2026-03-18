"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Take control of your finances today
          </h2>

          {/* TEXT */}
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of users already managing their money smarter with Finova.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
              Get Started
            </button>

            <button className="border border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
              Learn More
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}