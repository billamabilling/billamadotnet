import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ZeroIdleWaterfall from "@/components/ZeroIdleWaterfall";
import Calculator from "@/components/Calculator";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import InteractiveDocs from "@/components/InteractiveDocs";
import EcosystemShowcase from "@/components/EcosystemShowcase";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import BottomCta from "@/components/BottomCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <ZeroIdleWaterfall />
        <Calculator />
        <Features />
        <Architecture />
        <InteractiveDocs />
        <EcosystemShowcase />
        <Comparison />
        <Faq />

        <BottomCta />
      </main>

      <Footer />
    </div>
  );
}
