import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0a0f1c", // Background utama (Hitam kebiruan)
        deepBlue: "#1e3a8a", // Biru tua untuk gradasi
        neonBlue: "#38bdf8", // Biru cerah untuk teks/tombol
      },
    },
  },
  plugins: [],
};
export default config;