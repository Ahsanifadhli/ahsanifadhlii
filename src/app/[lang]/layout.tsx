import "@/app/globals.css";
import type { Metadata } from "next";
// 1. Import Font dari Google
import { Inter, Noto_Sans_Arabic } from "next/font/google"; 
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { i18n } from "@/app/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/app/i18n-config";

// 2. INI YANG TADI HILANG (Definisi Variabel Font)
const inter = Inter({ subsets: ["latin"] });
const arabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portofolio Profesional",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>; // Next.js 15 pakai Promise
}) {
  // 3. Await params dulu
  const { lang } = await params;
  
  // 4. Ambil kamus untuk Navbar
  const dict = await getDictionary(lang); 
  
  // 5. Cek apakah bahasa Arab (untuk font & layout)
  const isArabic = lang === 'ar';
  
  return (
    <html lang={lang} dir={isArabic ? 'rtl' : 'ltr'} className="scroll-smooth">
      {/* Gunakan variabel 'inter' atau 'arabic' di sini */}
      <body className={isArabic ? arabic.className : inter.className}>
        
        {/* Oper data kamus ke Navbar */}
        <Navbar dict={dict.nav} lang={lang} /> 
        
        {children}
        <Chatbot />
      </body>
    </html>
  );
}