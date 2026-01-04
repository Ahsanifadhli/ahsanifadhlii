"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react"; // Kita pakai ikon User sementara
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0f1c]">
      {/* Background Glow (Disesuaikan agar tidak terlalu terang) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38bdf8] rounded-full blur-[120px] opacity-10" />

      {/* Container disamakan dengan Navbar (max-w-7xl) agar lurus */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Bagian Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left" // Tengah di HP, Kiri di Laptop
        >
          <h2 className="text-[#38bdf8] font-medium tracking-widest mb-4 text-sm md:text-base">
            HELLO, I'M
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Web <span className="text-gray-500">Developer</span> <br />
            & UI/UX <span className="text-[#38bdf8]">Designer.</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
            Membangun pengalaman digital yang estetik, fungsional, dan berorientasi pada hasil untuk bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-[#38bdf8] text-[#0a0f1c] font-bold rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              Hire Me
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all">
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* Bagian Kanan: Visual/Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Lingkaran Animasi Luar */}
            <div className="absolute inset-0 border border-[#38bdf8]/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Container Foto */}
            <div className="absolute inset-8 rounded-full overflow-hidden bg-[#0f172a] border-2 border-[#1e3a8a] shadow-2xl flex items-center justify-center">
                
                {/* Placeholder (Ikon User) - Tetap ada di belakang sebagai backup */}
                <div className="z-0 absolute inset-0 flex items-center justify-center text-gray-700">
                    <User size={100} strokeWidth={1} />
                </div>

                {/* Foto Profil Utama */}
                <Image 
                    src="/profile.png" 
                    alt="Profile Picture" 
                    fill 
                    className="object-cover z-10" 
                    priority // Tambahan: Agar foto dimuat duluan (anti-loading lama)
                /> 
            </div>

            {/* Floating Badge (Hiasan tambahan biar keren) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-[#0a0f1c] border border-[#38bdf8]/30 p-4 rounded-xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-300 text-sm font-medium">Open to Work</span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}