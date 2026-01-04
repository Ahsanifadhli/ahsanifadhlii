"use client";

import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-500 text-sm">
          © 2026 ahsanifadhlii. All rights reserved.
        </p>

        <div className="flex gap-6">
            <a href="https://github.com/Ahsanifadhli" className="text-gray-400 hover:text-[#38bdf8] transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/ahsani-fadhli-ilahi" className="text-gray-400 hover:text-[#38bdf8] transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/ahsanifadhli_official" className="text-gray-400 hover:text-[#38bdf8] transition-colors"><Instagram size={20} /></a>
        </div>

      </div>
    </footer>
  );
}