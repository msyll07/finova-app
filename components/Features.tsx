"use client";

import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, CreditCard } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    title: "Instant Payments",
    desc: "Send and receive money in seconds anywhere in the world.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Smart Analytics",
    desc: "Track spending with real-time insights and reports.",
  },
  {
    icon: <Shield size={22} />,
    title: "Secure Banking",
    desc: "Your data is protected with bank-level encryption.",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Virtual Cards",
    desc: "Create and manage cards instantly for safer payments.",
  },
];

export default function Features() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Powerful tools to manage your money smarter and faster.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow">
                {feature.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-500 mt-1">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}