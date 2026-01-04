import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/app/i18n-config";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"; // Navbar dipindah ke sini agar dapat props
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="bg-[#0a0f1c]">
      {/* Navbar kita panggil disini juga sebenarnya bisa, 
          tapi Navbar biasanya ada di Layout.
          Untuk simplisitas, kita biarkan Navbar di Layout, 
          tapi kita harus update Layout untuk oper dict.
          
          ATAU: Kita abaikan Navbar di layout, kita pasang manual per page 
          (tapi ini kurang efisien).
          
          SOLUSI TERBAIK: Kita update komponen satu per satu di bawah ini.
      */}

      <Hero dict={dict.hero} />
      <TechStack /> {/* TechStack isinya logo, gak perlu translate */}
      <About dict={dict.about} />
      <Portfolio dict={dict.portfolio} />
      <Contact dict={dict.contact} />
      <Footer /> {/* Footer copyright bisa hardcode atau translate, bebas */}
    </main>
  );
}