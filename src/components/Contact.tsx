"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
      {/* Background Glow Hiasan */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#38bdf8] rounded-full blur-[120px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#38bdf8] font-medium tracking-widest mb-3 uppercase">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Let’s Work <span className="text-gray-500">Together.</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Punya ide proyek menarik? Atau sekadar ingin menyapa? 
            Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Informasi Kontak (Kiri) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Email</h4>
                <p className="text-gray-400">emailku@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
                <p className="text-gray-400">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#1e293b] rounded-lg text-[#38bdf8]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Location</h4>
                <p className="text-gray-400">Jakarta, Indonesia</p>
              </div>
            </div>
          </motion.div>

          {/* Form Input (Kanan) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nama</label>
                <input 
                  type="text" 
                  placeholder="Nama Lengkap" 
                  className="w-full bg-[#0a0f1c] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="contoh@email.com" 
                  className="w-full bg-[#0a0f1c] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                <textarea 
                  rows={4} 
                  placeholder="Ceritakan tentang proyekmu..." 
                  className="w-full bg-[#0a0f1c] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#38bdf8] focus:ring-1 focus:ring-[#38bdf8] transition-all placeholder:text-gray-600 resize-none"
                />
              </div>

              <button className="w-full py-4 bg-[#38bdf8] text-[#0a0f1c] font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                <Send size={20} /> Kirim Pesan
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}