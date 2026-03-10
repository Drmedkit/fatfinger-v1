import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Club MPH
import clubMphVideo from "@assets/ClubMPH.mp4";

// Poolparty
import poolpartyBg from "@assets/decibel_edmkevin.jpg";

// Club 7
import club7Video from "@assets/Club7vsPaulo.mp4";
import club7_1 from "@assets/club7_1.jpg";
import club7_2 from "@assets/club7_2.jpg";
import club7_3 from "@assets/club7_3.jpg";

// Decibel
import decibelVideo from "@assets/DecibelWakeup.mp4";
import decibelSpark1 from "@assets/decibel_spark1.jpg";
import decibelSpark2 from "@assets/decibel_spark2.jpg";
import decibelRichard from "@assets/decibel_richard.jpg";

// ─── SECTION HEADER ─────────────────────────────────────────────────────────
function ProjectsHeader() {
    return (
        <div id="portfolio" className="relative w-full bg-black py-24 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black" />
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[#00f2fe] font-bold tracking-[0.3em] uppercase text-sm mb-4">Wat we maken</p>
                <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white uppercase">
                    ONS WERK
                </h2>
                <p className="mt-6 text-xl text-white/50 max-w-xl mx-auto px-6 font-light">
                    Een selectie van onze favoriete projecten, producties en feestjes.
                </p>
            </motion.div>
        </div>
    );
}

// ─── CLUB MPH — looping video achtergrond, tekst overlay ────────────────────
function ClubMPHSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section ref={ref} className="relative w-full min-h-screen overflow-hidden flex items-center">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
            {/* Looping video background */}
            <motion.div className="absolute inset-0 z-0" style={{ y }}>
                <video
                    src={clubMphVideo}
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-24 flex items-center min-h-screen">
                <motion.div
                    className="w-full lg:w-1/2 text-white space-y-6"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                >
                    <p className="text-[#ffcc00] font-bold tracking-[0.3em] uppercase text-xs">Q-dance · Defqon.1 · 2020–heden</p>
                    <h2 className="font-display text-6xl md:text-8xl font-black italic uppercase leading-none">
                        CLUB<br />
                        <span className="text-[#ffcc00]" style={{ WebkitTextStroke: "1px #ffcc00" }}>MPH</span>
                    </h2>
                    <p className="text-base md:text-lg font-light leading-relaxed opacity-80 max-w-md">
                        In opdracht van Q-dance ontwikkelden wij een <strong className="text-white font-semibold">secret stage</strong> waar bezoekers díe dit geheime feestje vonden, over na zouden praten. Welkom in Club MPH — waar meerdere keren per dag een nieuw themafeest losbarst.
                    </p>
                    <p className="text-sm opacity-50 italic">
                        Chaos · DJ's · entertainers · wandelend decor · confetti · bizarre gadgets.<br />
                        Na vijf succesvolle edities niet meer weg te denken van Defqon.1.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// ─── POOLPARTY — hero foto met kleurwash, tekst zweeft ──────────────────────
function PoolpartySection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section ref={ref} className="relative w-full min-h-screen overflow-hidden flex items-end">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 right-0 h-48 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-48 z-20 pointer-events-none" style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
            {/* Hero foto met parallax */}
            <motion.div className="absolute inset-0 z-0" style={{ y }}>
                <img src={poolpartyBg} alt="Poolparty Mysteryland" loading="lazy"
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #005577 0%, rgba(0,120,180,0.5) 40%, rgba(0,80,120,0.3) 70%, transparent 100%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 30%)" }} />
            </motion.div>

            {/* Content — bottom anchored */}
            <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24 pb-20 pt-48">
                <div className="flex flex-col lg:flex-row gap-12 items-end">

                    {/* Left: Title */}
                    <motion.div
                        className="w-full lg:w-3/5 text-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="text-yellow-300 font-bold tracking-[0.3em] uppercase text-xs mb-4">Mysteryland · Festivalcamping · 2025</p>
                        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-none">
                            POOL<br />
                            <span className="text-yellow-300">PARTY</span>
                        </h2>
                    </motion.div>

                    {/* Right: Text + 2e foto */}
                    <motion.div
                        className="w-full lg:w-2/5 space-y-6 text-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        <p className="text-base md:text-lg font-light leading-relaxed opacity-85">
                            Verschillende DJ's zorgden voor een non-stop stroom aan bangers, terwijl bezoekers konden relaxen of juist volledig losgingen in het grootste opblaaszwembad van Nederland.
                        </p>
                        <p className="text-sm opacity-60 leading-relaxed">
                            's Ochtends aerobics & hakkuh-workshops aan de rand van het zwembad. Club 7 'alles geven'-shows. Wet T-shirt contests. Non-stop chaos in de zon.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── CLUB 7 — diagonale banden (Club 7 stijl) + portret video ───────────────
function Club7Section() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
            {/* Diagonale gekleurde banden */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute w-[200%] h-32 md:h-44 -rotate-45 opacity-70"
                    style={{ background: "#F373AC", top: "10%", left: "-50%" }} />
                <div className="absolute w-[200%] h-28 md:h-40 rotate-45 opacity-60"
                    style={{ background: "#FEF200", bottom: "15%", right: "-50%" }} />
                <div className="absolute w-[200%] h-20 md:h-32 rotate-45 opacity-40"
                    style={{ background: "#73CABA", top: "5%", right: "-50%" }} />
            </div>

            {/* Radiale glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
                    style={{ background: "#F373AC", top: "10%", left: "10%" }} />
                <div className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
                    style={{ background: "#FEF200", bottom: "20%", right: "15%" }} />
                <div className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl"
                    style={{ background: "#73CABA", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left: Tekst */}
                    <motion.div
                        className="text-white space-y-6"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="font-bold tracking-[0.3em] uppercase text-xs" style={{ color: "#F373AC" }}>
                            Het originele concept · landelijk tour
                        </p>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                            Club 7<br />
                            <span style={{ color: "#FEF200" }}>Alles Geven</span>
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed">
                            7-minuten feestjes. Op straat. Tijdens Koningsdag 2019. Gewoon omdat het ons grappig leek. Die grap was zo'n succes dat Club 7 dezelfde zomer op het eerste festival stond.
                        </p>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Inmiddels zetten we events, festivals, bruiloften en bedrijfsfeesten volledig op z'n kop en trekken we binnen no-time iedereen de dansvloer op. Want in welke vorm je Club 7 ook meemaakt; het is altijd uniek en bijzonder. Bijzonder leuk vooral.
                        </p>
                        <a
                            href="https://www.club7allesgeven.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 font-black uppercase tracking-wider text-black rounded-full transition-all duration-300 hover:scale-105"
                            style={{ background: "#FEF200", boxShadow: "4px 4px 0px #F373AC" }}
                        >
                            www.club7allesgeven.nl
                        </a>
                    </motion.div>

                    {/* Right: Portret video (9:16) */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <div className="w-full max-w-xs sm:max-w-sm">
                            <div
                                className="aspect-[9/16] rounded-2xl overflow-hidden border border-white/10"
                                style={{ boxShadow: "0 0 40px rgba(243,115,172,0.3), 0 0 80px rgba(254,242,0,0.15)" }}
                            >
                                <video
                                    src={club7Video}
                                    autoPlay muted loop playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

// ─── DECIBEL — donker, bubbles, gestapelde foto's + video ───────────────────
function DecibelSection() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center"
            style={{ background: "linear-gradient(135deg, #040d14 0%, #081828 50%, #040d14 100%)" }}
        >
            {/* Fade edges */}
            <div className="absolute top-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to bottom, #000 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none" style={{ background: "linear-gradient(to top, #000 0%, transparent 100%)" }} />
            {/* Bubbles */}
            {[...Array(10)].map((_, i) => (
                <motion.div key={i}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                        width: Math.random() * 120 + 30,
                        height: Math.random() * 120 + 30,
                        left: `${Math.random() * 100}%`,
                        bottom: -100,
                        background: "radial-gradient(circle at 30% 30%, rgba(0,242,254,0.15), rgba(79,172,254,0.05))",
                        border: "1px solid rgba(0,242,254,0.15)",
                    }}
                    animate={{ y: -1200, opacity: [0, 0.6, 0] }}
                    transition={{
                        duration: Math.random() * 8 + 8,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear"
                    }}
                />
            ))}

            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-24">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

                    {/* Right (visually left): Title + tekst */}
                    <motion.div
                        className="w-full lg:w-2/5 text-white space-y-6"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <p className="text-[#4facfe] font-bold tracking-[0.3em] uppercase text-xs">B2S · Decibel Outdoor · 2024</p>
                        <h2 className="font-display text-6xl md:text-7xl font-bold uppercase leading-none">
                            DECIBEL<br />
                            <span className="text-[#00f2fe]">WAKE</span><span className="text-white">-UP</span><br />
                            <span className="text-3xl md:text-4xl font-normal text-white/50 tracking-widest">SERVICE</span>
                        </h2>
                        <p className="text-base md:text-lg font-light leading-relaxed opacity-80">
                            <strong className="text-white">Wakey wakey!</strong> In opdracht van B2S organiseerden wij een surprise pop-up party op de festivalcamping van Decibel Outdoor. Vanaf 9 uur 's ochtends werden campingbezoekers op extreme wijze wakker geblazen.
                        </p>
                        <p className="text-sm opacity-50 leading-relaxed">
                            Badjassen · badmutsen · bubbels · bubblegum · bad-eendjes. Tanden poetsen werd een event dat je niet mocht missen.
                        </p>

                        {/* Gestapelde foto's */}
                        <div className="relative h-48 mt-4">
                            {[decibelSpark1, decibelSpark2, decibelRichard].map((src, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-xl overflow-hidden border border-white/10 shadow-xl"
                                    style={{
                                        width: 160,
                                        height: 110,
                                        left: i * 40,
                                        top: i * 8,
                                        rotate: [-4, 2, -2][i],
                                        zIndex: i,
                                    }}
                                    whileHover={{ zIndex: 10, scale: 1.1, rotate: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <img src={src} alt={`Decibel ${i + 1}`} loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Left (visually right): Video */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden"
                            style={{ boxShadow: "0 0 80px rgba(0,242,254,0.15), 0 0 160px rgba(0,242,254,0.05)", border: "1px solid rgba(0,242,254,0.2)" }}
                        >
                            <video
                                src={decibelVideo}
                                autoPlay muted loop playsInline
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── EXPORT ─────────────────────────────────────────────────────────────────
export function ProjectsSection() {
    return (
        <div>
            <ProjectsHeader />
            <ClubMPHSection />
            <PoolpartySection />
            <Club7Section />
            <DecibelSection />
        </div>
    );
}
