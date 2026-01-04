"use client";

import { motion } from "framer-motion";
import { Code, Palette, Zap, Globe } from "lucide-react";

export default function About() {
  // Data kartu informasi
  const cards = [
    {
      icon: <Code size={32} />,
      title: "Frontend Dev",
      desc: "Membangun tampilan website yang responsif, cepat, dan interaktif menggunakan React & Next.js.",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      desc: "Merancang antarmuka yang bersih dan user-friendly dengan fokus pada pengalaman pengguna.",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      desc: "Optimasi kode agar website loading super cepat dan ringan di semua perangkat.",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    {
      icon: <Globe size={32} />,
      title: "SEO Friendly",
      desc: "Struktur website yang disukai Google agar mudah ditemukan di pencarian.",
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#38bdf8] font-medium tracking-widest mb-3 uppercase">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">
            Passion Drives <span className="text-gray-500">Perfection.</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Bagian Kiri: Deskripsi Teks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Halo! Saya adalah seorang pengembang web yang berdedikasi untuk menciptakan pengalaman digital yang luar biasa. 
              Berawal dari rasa penasaran tentang bagaimana sebuah website bekerja, kini saya telah mendalami dunia 
              <span className="text-white font-semibold"> Fullstack Development</span>.
            </p>
            <p>
              Saya percaya bahwa website yang bagus bukan hanya soal "terlihat keren", tapi juga harus 
              <span className="text-[#38bdf8]"> fungsional, cepat, dan mudah digunakan</span> oleh siapa saja.
            </p>
            <p>
              Saat ini saya fokus mengembangkan proyek freelance dan terbuka untuk kolaborasi seru. 
              Mari buat sesuatu yang hebat bersama!
            </p>

            <div className="pt-4 flex gap-8">
              <div>
                <h4 className="text-4xl font-bold text-white">2+</h4>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">10+</h4>
                <p className="text-sm text-gray-500 mt-1">Projects Done</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white">100%</h4>
                <p className="text-sm text-gray-500 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Bagian Kanan: Grid Kartu Keahlian */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Muncul bergantian
                viewport={{ once: true }}
                whileHover={{ y: -5 }} // Efek naik pas di-hover
                className={`p-6 rounded-2xl border ${card.color} backdrop-blur-sm transition-all cursor-pointer hover:shadow-lg`}
              >
                <div className="mb-4">{card.icon}</div>
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