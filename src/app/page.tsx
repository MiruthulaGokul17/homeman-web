import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Recipes from "@/components/Recipes";
import Insights from "@/components/Insights";
import Inventory from "@/components/Inventory";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Recipes />
      <Insights />
      <Inventory />
      <DownloadApp />
      <Footer />
    </main>
  );
}
