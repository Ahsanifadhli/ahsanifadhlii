import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact"; // <-- Import
import Footer from "@/components/Footer";   // <-- Import

export default function Home() {
  return (
    <main className="bg-[#0a0f1c]">
      <Hero />
      <TechStack />
      <About />
      <Portfolio />
      <Contact /> {/* <-- Pasang */}
      <Footer />  {/* <-- Pasang */}
    </main>
  );
}