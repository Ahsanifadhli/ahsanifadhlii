"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe } from "lucide-react";

type AboutProps = {
  dict: {
    title: string;
    subtitle: string;
    subtitle_highlight: string;
    desc_1: string;
    desc_2: string;
    stats_exp: string;
    stats_proj: string;
    stats_happy: string;
    cards: {
      frontend: string;
      uiux: string;
      perf: string;
      seo: string;
    };
  };
};

export default function About({ dict }: AboutProps) {
  // Data kartu dibuat di dalam fungsi agar bisa akses 'dict'
  const cards = [
    {
      icon: <Code size={32} />,
      title: dict.cards.frontend,
      desc: "React, Next.js, Tailwind CSS",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      icon: <Palette size={32} />,
      title: dict.cards.uiux,
      desc: "Figma, Adobe XD, Prototyping",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      icon: <Zap size={32} />,
      title: dict.cards.perf,
      desc: "Lighthouse Score 100, SEO Optimization",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      icon: <Globe size={32} />,
      title: dict.cards.seo,
      desc: "Google Analytics, Search Console",
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#38bdf8] font-medium tracking-widest mb-3 uppercase">
            {dict.title}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            {dict.subtitle} <span className="text-gray-500">{dict.subtitle_highlight}</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed rtl:text-right"
          >
            <p>{dict.desc_1}</p>
            <p>{dict.desc_2}</p>
            
            <div className="pt-4 flex gap-8 rtl:justify-start">
              <div>
                <h4 className="text-4xl font-bold text-white">2+</h4>
                <p className="text-sm text-gray-500 mt-1">{dict.stats_exp}</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">10+</h4>
                <p className="text-sm text-gray-500 mt-1">{dict.stats_proj}</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">100%</h4>
                <p className="text-sm text-gray-500 mt-1">{dict.stats_happy}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border ${card.color} backdrop-blur-sm transition-all hover:shadow-lg text-left rtl:text-right`}
              >
                <div className="mb-4 rtl:flex rtl:justify-end">{card.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}