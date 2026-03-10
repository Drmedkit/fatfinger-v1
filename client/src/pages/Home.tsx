import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
const logo = "/images/Fat-Finger-logo_1763898136388.png";

import { HeroSection } from "@/components/home/HeroSection";
import { VibeSection } from "@/components/home/VibeSection";
import { StorySection } from "@/components/home/StorySection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TeamSection } from "@/components/home/TeamSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <div className="w-full text-white selection:bg-white/30">
      {/* Navigation (Fixed) */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <div
          className="drop-shadow-md pointer-events-auto relative"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img src={logo} alt="Fat Finger Logo" className="h-12 md:h-16 w-auto object-contain cursor-pointer" />
          <span
            className="absolute top-1/2 whitespace-nowrap text-white text-sm italic pointer-events-none select-none drop-shadow-md"
            style={{
              left: "calc(100% + 12px)",
              transform: `translateY(-50%) translateX(${logoHovered ? "0px" : "-6px"})`,
              opacity: logoHovered ? 1 : 0,
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            een dikke vinger naar saaie, vlakke projecten
          </span>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm tracking-wider bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 pointer-events-auto shadow-lg">
          <button onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer">ONS VERHAAL</button>
          <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer">PORTFOLIO</button>
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer">OVER ONS</button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer">DIENSTEN</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer">CONTACT</button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white pointer-events-auto p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-white/10 text-white">
            <nav className="flex flex-col gap-6 mt-12">
              {[
                { label: "ONS VERHAAL", id: "story" },
                { label: "PORTFOLIO", id: "portfolio" },
                { label: "OVER ONS", id: "about" },
                { label: "DIENSTEN", id: "services" },
                { label: "CONTACT", id: "contact" },
              ].map(({ label, id }) => (
                <SheetClose asChild key={id}>
                  <button
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-left text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  >
                    {label}
                  </button>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Page Sections */}
      <HeroSection />
      <VibeSection />
      <StorySection />
      <ProjectsSection />
      <PartnersSection />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
