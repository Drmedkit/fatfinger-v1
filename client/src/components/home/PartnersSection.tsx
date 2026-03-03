import { motion } from "framer-motion";

// Partner Logos
import p1 from "@assets/pleinvrees_1763898922943.png";
import p2 from "@assets/logo_1763898922943.webp";
import p3 from "@assets/Mysteryland_logo_1763898922943.png";
import p4 from "@assets/nl-mysticgardenfestival-removebg-preview_1763898922943.png";
import p5 from "@assets/b46.AfterworkLogo_1763898922943.png";
import p6 from "@assets/logo-oo_1763898922944.png";
import p7 from "@assets/20243_1763898922944.png";
import p8 from "@assets/cropped-favicon-270x270_1763898922944.png";

function LogoMarquee() {
    const logos = [
        { id: 1, src: p1, alt: "Pleinvrees" },
        { id: 2, src: p2, alt: "B2S" },
        { id: 3, src: p3, alt: "Mysteryland" },
        { id: 4, src: p4, alt: "Mystic Garden" },
        { id: 5, src: p5, alt: "Afterwork by Heineken" },
        { id: 6, src: p6, alt: "Partner Logo" },
        { id: 7, src: p7, alt: "De Zon Festival" },
        { id: 8, src: p8, alt: "PSV" },
    ];

    return (
        <div className="relative flex overflow-hidden py-12 border-y border-black/5 w-full">
            <motion.div
                className="flex gap-12 md:gap-24 pr-12 md:pr-24 whitespace-nowrap"
                animate={{
                    x: [0, -1035],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25, // Slowed down slightly for smoother playback
                        ease: "linear",
                    },
                }}
            >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={`${logo.id}-${index}`} className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
                        <img src={logo.src} alt={logo.alt} className="h-12 md:h-16 w-auto object-contain mix-blend-multiply" loading="lazy" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export function PartnersSection() {
    return (
        <section className="relative min-h-[60vh] w-full z-10 bg-[#a0fcf4] flex flex-col items-center justify-center overflow-hidden py-24">
            <motion.div
                className="container mx-auto px-6 text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-display text-4xl md:text-6xl mb-16 text-[#A855F7] drop-shadow-sm tracking-wider font-bold uppercase relative z-10">
                    ONZE SAMENWERKINGEN
                </h2>

                <LogoMarquee />

                <p className="mt-16 text-black/60 max-w-2xl mx-auto font-medium text-lg relative z-10">
                    Samen creëren we onvergetelijke momenten met de beste partijen uit de industrie.
                </p>
            </motion.div>
        </section>
    );
}
