"use client";

import { motion } from "framer-motion";

// Data Logo Tech Stack (SVG Paths)
const skills = [
  {
    name: "React",
    color: "#61DAFB",
    path: "M15.464 7.02l2.324-1.353C16.148 4.675 14.16 4 12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c2.16 0 4.148-.675 5.788-1.667l-2.324-1.353C14.398 17.68 13.257 18 12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6c1.257 0 2.398.32 3.464.98z M12 10a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    name: "Next.js",
    color: "#FFFFFF",
    path: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.72 15.28l-5.69-7.96L11 9.3l5.69 7.96h-1.97zM9.3 17.28l5.69-7.96L15 9.3l-5.69 7.96H9.3zm-1.02-7.96h1.97l-5.69 7.96-1.97-.02 5.69-7.94z",
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    path: "M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm3 6v2h3v7h2v-7h3V8H7zm9 0h-2v9h2v-2h2v-2h-2v-1h2V8h-2z",
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    path: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.177-1.194-2.538-2.576-5.512-2.576z",
  },
  {
    name: "Node.js",
    color: "#339933",
    path: "M12 2l-9.8 5.6v11.2L12 24.4l9.8-5.6V7.6L12 2zm1 16.8v-3.6l3.2-1.8v3.6l-3.2 1.8z",
  },
  {
    name: "Figma",
    color: "#F24E1E",
    path: "M12 2a4 4 0 00-4 4v2h4a4 4 0 004-4 4 4 0 00-4-4zm-4 8v-2H6a4 4 0 100 8h2v-2a4 4 0 100-4zm4 0h-4v4h2a4 4 0 100-4zm0 6a4 4 0 100 8 4 4 0 000-8z",
  },
];

export default function TechStack() {
  return (
    <section className="py-10 bg-[#0a0f1c] border-y border-white/5 overflow-hidden">
      <div className="flex w-full">
        {/* Kita buat 2 set wrapper agar animasinya looping sempurna (infinity) */}
        <motion.div
          className="flex flex-shrink-0 gap-16 pr-16"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20, // Kecepatan (makin besar makin pelan)
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {/* Render Skills 2 KALI (Duplikasi) agar loop tidak putus */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 group cursor-default"
            >
              {/* Ikon SVG */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 fill-current transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                style={{ color: skill.color }} // Warna asli logo
              >
                <path d={skill.path} />
              </svg>
              
              {/* Nama Skill */}
              <span className="text-gray-400 font-bold text-lg md:text-xl group-hover:text-white transition-colors uppercase tracking-wider">
                {skill.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}