"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Halo! 👋 Saya asisten virtual portofolio ini. Ada yang bisa saya bantu? (Coba tanya: 'Jasa apa?', 'Kontak', atau 'Skill')", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Auto scroll ke bawah saat ada pesan baru
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages, isTyping]);

  // LOGIK "OTAK" CHATBOT (Sederhana tapi efektif)
  const processResponse = (text: string) => {
    const lowerText = text.toLowerCase();
    let responseText = "";

    if (lowerText.includes("halo") || lowerText.includes("hi") || lowerText.includes("pagi") || lowerText.includes("sore")) {
      responseText = "Halo juga! Senang bertemu denganmu. Mau lihat-lihat project saya?";
    } else if (lowerText.includes("jasa") || lowerText.includes("bikin") || lowerText.includes("buat")) {
      responseText = "Saya melayani pembuatan Website Company Profile, Toko Online, Landing Page, dan Aplikasi Web Custom. Tertarik?";
    } else if (lowerText.includes("harga") || lowerText.includes("biaya") || lowerText.includes("rate")) {
      responseText = "Harga tergantung kompleksitas proyek, kak. Tapi tenang, bisa disesuaikan dengan budget kok. Mau diskusi dulu?";
    } else if (lowerText.includes("kontak") || lowerText.includes("hubungi") || lowerText.includes("wa") || lowerText.includes("email")) {
      responseText = "Bisa hubungi saya via form di bawah, atau email ke: emailku@example.com.";
    } else if (lowerText.includes("skill") || lowerText.includes("bisa apa")) {
      responseText = "Saya ahli di React, Next.js, Node.js, dan UI/UX Design. Cek bagian Tech Stack untuk lengkapnya ya!";
    } else {
      responseText = "Maaf, saya kurang paham. Coba tanya tentang 'Jasa', 'Skill', atau 'Kontak' ya! 😊";
    }

    // Simulasi ngetik (Delay 1.5 detik)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: responseText, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    // Tambah pesan user
    const userMsg: Message = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Proses jawaban bot
    processResponse(input);
  };

  return (
    <>
      {/* Tombol Floating Chat */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#38bdf8] text-[#0a0f1c] p-4 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)] hover:bg-white transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Jendela Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#0a0f1c] border border-[#38bdf8]/30 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header Chat */}
            <div className="bg-[#1e3a8a]/50 p-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-white font-bold flex items-center gap-2">
                <Bot size={18} /> AI Assistant
              </h3>
            </div>

            {/* Body Chat (Pesan) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#38bdf8] text-[#0a0f1c] rounded-tr-none"
                        : "bg-[#1e293b] text-gray-200 rounded-tl-none border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Indikator Typing ... */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#1e293b] p-3 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Chat (Input) */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#05080f] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanya sesuatu..."
                className="flex-1 bg-[#1e293b] text-white text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#38bdf8]"
              />
              <button
                type="submit"
                className="bg-[#38bdf8] p-2 rounded-full text-[#0a0f1c] hover:bg-white transition-colors disabled:opacity-50"
                disabled={!input.trim() || isTyping}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}