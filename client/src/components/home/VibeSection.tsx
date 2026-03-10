import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import vibeBubbles from "@assets/20240817_121846_DECIBELOUTDOOR_RICHARD-1024x683_1763898418211.jpg";
import vibeConfetti from "@assets/285302971_5138774592870185_1151288849466025340_n-1024x666_1763898438812.jpg";
import vibeConference from "@assets/image_1763898462772.png";

const VIBE_SLIDES = [
    {
        id: 1,
        src: vibeBubbles,
        alt: "Bubbles Vibe",
        type: "bubbles",
        title: "Of het nu gaat om:",
        description: "Een pop-up party, een bedrijfsfeest of een uniek special project.",
        color: "#4facfe"
    },
    {
        id: 2,
        src: vibeConfetti,
        alt: "Confetti Party",
        type: "confetti",
        title: "Wij zijn de creators van:",
        description: "Het 'what the ...?!' moment. Wij houden ervan om grenzen te verleggen.",
        color: "#f093fb"
    },
    {
        id: 3,
        src: vibeConference,
        alt: "Conference Calm",
        type: "calm",
        title: "ZAKELIJK & STIJLVOL",
        description: "Ook voor serieuze zaken zorgen wij voor de juiste, ontspannen sfeer en perfecte hosting.",
        color: "#1e293b"
    }
];

function BubblesEffect() {
    const bubbles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        size: Math.random() * 60 + 20,
        left: Math.random() * 100,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {bubbles.map((b) => (
                <motion.div
                    key={b.id}
                    // Removed backdrop-blur to greatly improve performance
                    className="absolute bottom-[-100px] rounded-full bg-white/10 border border-white/20"
                    style={{
                        width: b.size,
                        height: b.size,
                        left: `${b.left}%`,
                    }}
                    animate={{
                        y: -1200,
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.8, 0]
                    }}
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        delay: b.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}

function ConfettiEffect() {
    const confetti = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: ["#ff0", "#f0f", "#0ff", "#0f0"][Math.floor(Math.random() * 4)],
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {confetti.map((c) => (
                <motion.div
                    key={c.id}
                    className="absolute top-[-20px] w-3 h-6"
                    style={{
                        left: `${c.left}%`,
                        backgroundColor: c.color,
                    }}
                    animate={{
                        y: 1200,
                        rotate: 360,
                        x: [0, Math.random() * 100 - 50, 0]
                    }}
                    transition={{
                        duration: c.duration,
                        repeat: Infinity,
                        delay: c.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}

export function VibeSection() {
    const [vibeRef, vibeApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);
    const [activeVibeIndex, setActiveVibeIndex] = useState(0);

    useEffect(() => {
        if (!vibeApi) return;
        const onSelect = () => setActiveVibeIndex(vibeApi.selectedScrollSnap());
        vibeApi.on("select", onSelect);
        onSelect();
        return () => {
            vibeApi.off("select", onSelect);
        };
    }, [vibeApi]);

    const currentVibe = VIBE_SLIDES[activeVibeIndex] || VIBE_SLIDES[0];

    return (
        <section id="vibes" className="relative min-h-screen w-full z-10 bg-background flex items-center justify-center overflow-hidden">
            {/* Vibe Backgrounds */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentVibe.id}
                    className="absolute inset-0 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, backgroundColor: currentVibe.color }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
                    {currentVibe.type === "bubbles" && <BubblesEffect />}
                    {currentVibe.type === "confetti" && <ConfettiEffect />}
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative">

                    {/* Left: Carousel */}
                    <motion.div
                        className="relative order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }} // Set once=true for performance
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/20">
                            <div className="w-full h-full cursor-grab active:cursor-grabbing" ref={vibeRef}>
                                <div className="flex h-full">
                                    {VIBE_SLIDES.map((slide) => (
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
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        className="order-1 md:order-2 text-white relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }} // Set once=true
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="font-display text-4xl md:text-6xl mb-8 text-[#00f2fe] drop-shadow-md" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
                            BELEEF DE VIBE <br /> VAN FAT FINGER
                        </h2>

                        <div className="space-y-6 text-lg font-light leading-relaxed">
                            <p>
                                Hello! Wij zijn Fat Finger en wij maken van zo'n beetje álles een onvergetelijk feest.
                            </p>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentVibe.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="font-bold text-xl mb-2">{currentVibe.title}</h3>
                                    <p className="opacity-90">{currentVibe.description}</p>
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
