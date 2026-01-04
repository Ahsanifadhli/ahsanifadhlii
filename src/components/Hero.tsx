"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

// Definisikan tipe datanya
type HeroProps = {
  dict: {
    greeting: string;
    role: string;
    description: string;
    btn_hire: string;
    btn_portfolio: string;
    typewriter: string[]; // Array string untuk animasi
  };
};

export default function Hero({ dict }: HeroProps) { // Terima props dict
  
  // Kita buat sequence animasi dari array json
  const typeSequence = [
    dict.typewriter[0], 2000,
    dict.typewriter[1], 2000,
    dict.typewriter[2], 2000,
    dict.typewriter[3], 2000,
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0f1c]">
      {/* ... kode background sama persis ... */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38bdf8] rounded-full blur-[120px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Bagian Kiri: Teks */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left rtl:text-right" // Tambah rtl:text-right
        >
          <h2 className="text-white font-medium tracking-widest mb-4 text-sm md:text-base">
            {dict.greeting}
          </h2>
          
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight min-h-[160px] md:min-h-[200px]">
             {/* Jika ingin statis: {dict.role} */}
             {/* Animasi Ketik Dinamis: */}
             
             <span className="text-[#38bdf8]">
              <TypeAnimation
                key={dict.greeting} // Key penting agar animasi reset saat ganti bahasa
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed mx-auto md:mx-0 rtl:mx-0">
            {dict.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start rtl:justify-start">
            <button className="px-8 py-3 bg-[#38bdf8] text-[#0a0f1c] font-bold rounded-full hover:bg-white transition-all">
              {dict.btn_hire}
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-medium rounded-full hover:border-[#38bdf8] hover:text-[#38bdf8] transition-all">
              {dict.btn_portfolio}
            </button>
          </div>
        </motion.div>

        {/* Bagian Kanan: Visual/Foto (Sama persis tidak berubah) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
             {/* ... Copy paste bagian Foto di sini ... */}
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 border border-[#38bdf8]/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full overflow-hidden bg-[#0f172a] border-2 border-[#1e3a8a] shadow-2xl flex items-center justify-center">
                    <div className="z-0 absolute inset-0 flex items-center justify-center text-gray-700">
                        <User size={100} strokeWidth={1} />
                    </div>
                    <Image src="/profile.png" alt="Profile" fill className="object-cover z-10" priority /> 
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}