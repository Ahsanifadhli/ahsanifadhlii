"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

// Definisikan tipe data Props
type NavbarProps = {
  lang: string;
  dict: {
    home: string;
    about: string;
    portfolio: string;
    contact: string;
  };
};

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Link Navigasi mengambil teks dari kamus
  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.about, href: `/${lang}#about` },
    { name: dict.portfolio, href: `/${lang}#portfolio` },
    { name: dict.contact, href: `/${lang}#contact` },
  ];

  // Variabel animasi
  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] as const },
    },
    exit: {
      scaleY: 0,
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0f1c]/80 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-2xl font-bold text-[#38bdf8]">
          MyPortfolio<span className="text-white">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-300 hover:text-[#38bdf8] transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}

          {/* LANGUAGE SWITCHER (Pemisah Pipa) */}
          <div className="h-4 w-[1px] bg-gray-600 mx-2" />
          <div className="flex gap-3 text-sm font-bold text-gray-400">
            <Link href="/id" className={`hover:text-white transition-colors ${lang === 'id' ? 'text-[#38bdf8]' : ''}`}>ID</Link>
            <Link href="/en" className={`hover:text-white transition-colors ${lang === 'en' ? 'text-[#38bdf8]' : ''}`}>EN</Link>
            <Link href="/ar" className={`hover:text-white transition-colors ${lang === 'ar' ? 'text-[#38bdf8]' : ''}`}>AR</Link>
          </div>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="origin-top bg-[#0a0f1c] absolute top-full left-0 w-full h-screen p-10 flex flex-col items-center gap-8 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-[#38bdf8]"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Language Switcher Mobile */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex gap-6 mt-4"
            >
                <Link href="/id" className={`text-xl font-bold ${lang === 'id' ? 'text-[#38bdf8]' : 'text-gray-500'}`}>ID</Link>
                <Link href="/en" className={`text-xl font-bold ${lang === 'en' ? 'text-[#38bdf8]' : 'text-gray-500'}`}>EN</Link>
                <Link href="/ar" className={`text-xl font-bold ${lang === 'ar' ? 'text-[#38bdf8]' : 'text-gray-500'}`}>AR</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}