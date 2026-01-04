"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Data Dummy Project (Nanti bisa diganti dengan real project kamu)
const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    desc: "Platform manajemen toko online dengan analisis data real-time dan manajemen stok.",
    tech: ["Next.js", "Tailwind", "Recharts"],
    color: "from-blue-600 to-cyan-500", // Warna gradasi placeholder
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Travel Booking App",
    desc: "Aplikasi pemesanan tiket wisata dengan fitur peta interaktif dan pembayaran gateway.",
    tech: ["React Native", "Node.js", "MongoDB"],
    color: "from-purple-600 to-pink-500",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "AI Chatbot Assistant",
    desc: "Chatbot cerdas berbasis AI yang dapat membantu customer service 24/7.",
    tech: ["OpenAI API", "TypeScript", "Vercel"],
    color: "from-green-600 to-emerald-500",
    link: "#",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0f1c]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#38bdf8] font-medium tracking-widest mb-3 uppercase">
            My Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Recent <span className="text-gray-500">Projects.</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek pilihan yang telah saya kerjakan. 
            Setiap proyek dibangun dengan detail dan performa tinggi.
          </p>
        </motion.div>

        {/* Grid Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }} // Efek kartu naik saat hover
              className="group bg-[#111827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#38bdf8]/50 transition-all shadow-lg hover:shadow-[#38bdf8]/20"
            >
              
              {/* Image Placeholder Area */}
              {/* Nanti kalau ada gambar, ganti div ini dengan <Image /> */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                 <Folder size={64} className="text-white/50 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-[#1e293b] text-[#38bdf8] rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <Link href={project.link} className="flex items-center gap-2 text-sm text-white hover:text-[#38bdf8] transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={16} /> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tombol Lihat Semua */}
        <div className="text-center mt-12">
            <button className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white hover:text-[#0a0f1c] transition-all font-medium">
                View All Projects
            </button>
        </div>

      </div>
    </section>
  );
}