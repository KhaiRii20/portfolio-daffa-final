import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects"; // Komponen baru
import SocialSidebar from "@/components/SocialSidebar"; // Komponen baru
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-deep-dark font-sans">
      
      {/* Layer 1: Background Animasi */}
      <AnimatedBackground />
      
      {/* Layer 2: Navigasi & Sidebar Fixed */}
      <Navbar />
      <SocialSidebar />
      
      {/* Layer 3: Konten Scrollable */}
      <div className="relative z-10 flex flex-col gap-16 pb-24"> 
        {/* pb-24 memberi jarak di paling bawah agar tidak mepet */}
        
        <Hero />
        
        <About />
        
        <Projects />
        
      </div>
    </main>
  );
}