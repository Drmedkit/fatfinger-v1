import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/Fat-Finger-logo_1763898136388.png";

// Import modular sections
import { HeroSection } from "@/components/home/HeroSection";
import { VibeSection } from "@/components/home/VibeSection";
import { AboutSection } from "@/components/home/AboutSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="w-full text-white selection:bg-white/30">
      {/* Navigation/Header (Fixed) */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <div className="drop-shadow-md pointer-events-auto">
          <Link href="/">
            <img src={logo} alt="Fat Finger Logo" className="h-12 md:h-16 w-auto object-contain cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm tracking-wider bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 pointer-events-auto shadow-lg">
          <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer" data-testid="button-about">OVER ONS</button>
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer" data-testid="button-services">DIENSTEN</button>
          <Link href="/portfolio" className="hover:text-white/80 transition-colors cursor-pointer" data-testid="link-portfolio">PORTFOLIO</Link>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors cursor-pointer" data-testid="button-contact">CONTACT</button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white pointer-events-auto p-2" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-white/10 text-white">
            <nav className="flex flex-col gap-6 mt-12">
              <SheetClose asChild>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-about"
                >
                  OVER ONS
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-services"
                >
                  DIENSTEN
                </button>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/portfolio"
                  className="text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10 block"
                  data-testid="mobile-link-portfolio"
                >
                  PORTFOLIO
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-left text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-contact"
                >
                  CONTACT
                </button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Page Sections */}
      <HeroSection />
      <VibeSection />
      <AboutSection />
      <PartnersSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
