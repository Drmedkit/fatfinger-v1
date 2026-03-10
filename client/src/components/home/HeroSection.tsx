import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Instagram } from "lucide-react";
import { Link } from "wouter";

// Import assets
const img1 = "/images/decibel outdoor_1763896943285.jpg";
const img2 = "/images/Powerhourcdl02741_lr-1024x683_1763896950963.webp";
const img3 = "/images/Powerhourcdl02961_lr-1024x683_1763896958054.webp";
const img4 = "/images/Club7_Westerliefde_Eastcamp-005-1024x683_1763896976860.jpg";

// Define the slides with their matching gradients
export const SLIDES = [
  {
    id: 1,
    src: img1,
    alt: "Decibel Outdoor Festival",
    // Blue/Cyan/Teal vibe
    colors: ["#4facfe", "#00f2fe", "#43e97b"],
  },
  {
    id: 2,
    src: img2,
    alt: "Power Hour Confetti",
    // Green/Yellow/Energetic
    colors: ["#56ab2f", "#a8e063", "#2f80ed"], 
  },
  {
    id: 3,
    src: img3,
    alt: "DJ Booth Blue Pink",
    // Pink/Purple/Blue Neon
    colors: ["#c471f5", "#fa71cd", "#a18cd1"],
  },
  {
    id: 4,
    src: img4,
    alt: "Singer Club 7",
    // Dark Club Vibe
    colors: ["#1a0b2e", "#4a148c", "#000000"],
  },
];

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Motion value to track scroll progress (0 to 1)
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      let progress = emblaApi.scrollProgress();
      progress = (progress % 1 + 1) % 1; 
      scrollProgress.set(progress);
    };

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onSelect);
    
    // Initial calls
    onScroll();
    onSelect();

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, scrollProgress]);

  // Interpolate colors based on scroll progress
  const inputRange = [0, 0.25, 0.5, 0.75, 1];
  
  const color1 = useTransform(scrollProgress, inputRange, [
    SLIDES[0].colors[0], SLIDES[1].colors[0], SLIDES[2].colors[0], SLIDES[3].colors[0], SLIDES[0].colors[0]
  ]);

  const color2 = useTransform(scrollProgress, inputRange, [
    SLIDES[0].colors[1], SLIDES[1].colors[1], SLIDES[2].colors[1], SLIDES[3].colors[1], SLIDES[0].colors[1]
  ]);

  const color3 = useTransform(scrollProgress, inputRange, [
    SLIDES[0].colors[2], SLIDES[1].colors[2], SLIDES[2].colors[2], SLIDES[3].colors[2], SLIDES[0].colors[2]
  ]);

  const background = useMotionTemplate`linear-gradient(135deg, ${color1}, ${color2}, ${color3})`;

  return (
    <section className="relative min-h-screen w-full overflow-hidden md:sticky md:top-0 z-0">
      {/* Dynamic Background Layer */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ background }}
      />
      
      {/* Overlay for texture/depth */}
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[85vh] md:min-h-screen p-6 md:p-12 lg:p-24 gap-8 md:gap-24">
        
        {/* Left Text Content */}
        <motion.div 
          className="flex-1 max-w-xl text-center md:text-left space-y-8 pt-20 md:pt-0 order-1 md:order-1 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] drop-shadow-lg transform -rotate-2">
            We put the <br/>
            <span className="relative inline-block px-2">
                <span className="absolute inset-0 bg-white/20 -skew-y-3 rounded-lg -z-10 backdrop-blur-sm"></span>
                art
            </span> in party
          </h1>
          
          <p className="text-lg md:text-xl font-light opacity-95 leading-relaxed drop-shadow-md max-w-md mx-auto md:mx-0">
            Club 7 Alles Geven, maar ook: teamuitjes, personeelsfeesten, bedrijfsfestivals, businessevents & hosting.
          </p>

          <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <motion.a 
              href="https://www.instagram.com/fatfingernl/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm relative"
              data-testid="button-instagram-desktop"
            >
              <Instagram className="w-4 h-4" />
              INSTA
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Carousel */}
        <motion.div 
          className="flex-1 w-full max-w-2xl order-2 md:order-2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
              <div className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 rounded-[2.5rem] md:rounded-[4rem] border-2 border-white/30 -z-10" />
              
              <div className="overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl shadow-black/20 aspect-[4/3] bg-black/10 backdrop-blur-sm border border-white/10">
                <div className="w-full h-full" ref={emblaRef}>
                  <div className="flex h-full">
                    {SLIDES.map((slide) => (
                      <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
                          <img 
                            src={slide.src} 
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                          />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </motion.div>

        {/* Buttons below carousel on mobile */}
        <motion.div 
          className="w-full flex flex-col sm:flex-row gap-4 justify-center md:hidden order-3 mt-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="https://www.instagram.com/fatfingernl/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white/40 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm relative"
            data-testid="button-instagram-mobile"
          >
            <Instagram className="w-4 h-4" />
            INSTA
          </motion.a>
        </motion.div>

      </main>
    </section>
  );
}
