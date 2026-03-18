"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Client 1",
    role: "Startup Founder",
    initials: "CF",
    text: "Finova completely changed how I manage my money. Everything is fast, clear, and incredibly intuitive.",
  },
  {
    name: "Client 2",
    role: "Freelancer",
    initials: "FR",
    text: "Tracking my expenses has never been this easy. The insights help me stay on top of my finances daily.",
  },
  {
    name: "Client 3",
    role: "Entrepreneur",
    initials: "EN",
    text: "The clean interface and powerful tools make Finova feel like the future of banking.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Loved by users worldwide
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Real feedback from people using Finova every day.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl border border-slate-200 bg-[#F8FAFC] hover:shadow-lg transition"
            >
              {/* STARS */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" />
                ))}
              </div>

              {/* TEXT */}
              <p className="text-slate-600 mb-6 leading-relaxed">
                "{t.text}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}