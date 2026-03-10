import { motion } from "framer-motion";

// Club MPH assets
import mph1 from "@assets/image_1763916396825.webp";
import mph2 from "@assets/image_1763916409415.webp";
import mph3 from "@assets/image_1763916415137.webp";
import mph4 from "@assets/image_1763916420516.webp";
import mph5 from "@assets/image_1763916427926.webp";

// Club 7 assets
import club7 from "@assets/Club7_Westerliefde_Eastcamp-005-1024x683_1763896976860.jpg";
import club7b from "@assets/285302971_5138774592870185_1151288849466025340_n-1024x666_1763898438812.jpg";

// Decibel assets
import decibel1 from "@assets/image_1763916174369.webp";
import decibel2 from "@assets/image_1763916181000.webp";
import decibel3 from "@assets/image_1763916185515.webp";
import decibel4 from "@assets/image_1763916191128.webp";
import decibelMain from "@assets/20240817_121846_DECIBELOUTDOOR_RICHARD-1024x683_1763898418211.jpg";

// Poolparty assets
import poolMain from "@assets/Powerhourcdl02741_lr-1024x683_1763896950963.webp";
import poolB from "@assets/Powerhourcdl02961_lr-1024x683_1763896958054.webp";

// ─── CLUB MPH ───────────────────────────────────────────────────────────────
function ClubMPHSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-black">
            {/* Chaotic MPH background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00cc]/15 via-[#333399]/15 to-[#ffcc00]/15" />
            <motion.div
                className="absolute -top-20 -right-20 w-96 h-96 bg-[#ffcc00] rounded-full blur-[150px] opacity-15"
                animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff00cc] rounded-full blur-[120px] opacity-15"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left: Video + photo strip */}
                    <motion.div
                        className="w-full lg:w-3/5 space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#ffcc00] shadow-[0_0_40px_rgba(255,204,0,0.25)] bg-black">
                            <iframe
                                src="https://player.vimeo.com/video/860974855?h=0&title=0&byline=0&portrait=0"
                                width="100%" height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                title="Club MPH"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[mph1, mph2, mph5].map((src, i) => (
                                <motion.img key={i} whileHover={{ scale: 1.05 }} src={src}
                                    alt={`Club MPH ${i + 1}`} loading="lazy"
                                    className="h-24 w-full object-cover rounded-xl border border-white/10"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        className="w-full lg:w-2/5 space-y-6 text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="text-[#ffcc00] font-bold tracking-widest uppercase text-sm mb-3">In opdracht van Q-dance</p>
                            <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase tracking-tight text-white">
                                CLUB <span className="text-[#ffcc00]">MPH</span>
                                <br /><span className="text-2xl md:text-3xl font-normal text-white/70 not-italic">op Defqon.1</span>
                            </h2>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed text-white/90 font-light">
                            <p>
                                In opdracht van Q-dance ontwikkelden wij in 2020 een <strong className="text-[#ffcc00]">secret stage</strong>. Een verborgen feestje waar nog lang over werd nagepraat.
                            </p>
                            <p>
                                Welkom in Club MPH. Een secret stage waar meerdere keren per dag een nieuw themafeest losbarst. Bezoekers stappen onverwachts een kleurrijke wereld binnen: chaos, DJ's, entertainers, een wandelend decor, confetti in overvloed en een arsenaal aan bizarre gadgets.
                            </p>
                            <p className="text-sm opacity-70 italic">
                                Na vijf succesvolle edities is Club MPH niet meer weg te denken van Defqon.1.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <motion.img whileHover={{ scale: 1.05, rotate: -1 }} src={mph3}
                                alt="MPH" loading="lazy"
                                className="w-full h-28 object-cover rounded-xl border-2 border-[#ffcc00] rotate-1"
                            />
                            <motion.img whileHover={{ scale: 1.05, rotate: 1 }} src={mph4}
                                alt="MPH" loading="lazy"
                                className="w-full h-28 object-cover rounded-xl border-2 border-[#ff00cc] -rotate-1"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── POOLPARTY MYSTERYLAND ───────────────────────────────────────────────────
function PoolpartySection() {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Pool/summer background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0099cc] via-[#00ccff] to-[#006688]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

            {/* Animated bubbles */}
            {[...Array(12)].map((_, i) => (
                <motion.div key={i}
                    className="absolute rounded-full bg-white/15 border border-white/25"
                    style={{
                        width: Math.random() * 80 + 20,
                        height: Math.random() * 80 + 20,
                        left: `${Math.random() * 100}%`,
                        bottom: -50,
                    }}
                    animate={{ y: -1000, opacity: [0, 0.7, 0] }}
                    transition={{
                        duration: Math.random() * 6 + 6,
                        repeat: Infinity,
                        delay: Math.random() * 8,
                        ease: "linear"
                    }}
                />
            ))}

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">

                    {/* Left: Text */}
                    <motion.div
                        className="w-full lg:w-2/5 space-y-6 text-center lg:text-left text-white"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <p className="text-white/70 font-bold tracking-widest uppercase text-sm mb-3">Festivalcamping · 2025</p>
                            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white drop-shadow-lg">
                                POOLPARTY<br />
                                <span className="text-yellow-300">MYSTERYLAND</span>
                            </h2>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed font-light opacity-95">
                            <p>
                                Tijdens Mysteryland hostten wij een poolparty op de festivalcamping. Verschillende DJ's zorgden voor een non-stop stroom aan bangers, terwijl bezoekers konden relaxen of juist volledig los gingen in het grootste opblaaszwembad van Nederland.
                            </p>
                            <p>
                                We trapten de dagen af met ochtendgymnastiek in de vorm van een aerobics/hakkuh-workshop aan de rand van het zwembad. Stretchend, stampend en lachend wakker worden!
                            </p>
                            <p>
                                En natuurlijk werd de boel regelmatig compleet opgeschud met onze Club 7 <em>'alles geven'</em>-shows. Denk aan een 7 minuten durende wet T-shirt contest die het zwembad in één klap deed ontploffen. Awesome!
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Images */}
                    <motion.div
                        className="w-full lg:w-3/5 space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl">
                            <img src={poolMain} alt="Poolparty Mysteryland" loading="lazy"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#006688]/40 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.img whileHover={{ scale: 1.03 }} src={poolB}
                                alt="Poolparty" loading="lazy"
                                className="h-40 w-full object-cover rounded-2xl border-2 border-white/20"
                            />
                            <div className="h-40 rounded-2xl border-2 border-white/20 bg-white/10 flex items-center justify-center">
                                <p className="text-white font-display text-2xl font-bold text-center px-4 opacity-80">🏊 ALLES GEVEN</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── CLUB 7 ALLES GEVEN ─────────────────────────────────────────────────────
function Club7Section() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-black">
            {/* Loud rave background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff0099]/15 via-[#00ffff]/10 to-[#ffff00]/15" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ffff] rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff0099] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left: YouTube video */}
                    <motion.div
                        className="w-full lg:w-3/5"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#00ffff] shadow-[0_0_40px_rgba(0,255,255,0.3)] bg-black">
                            <iframe
                                width="100%" height="100%"
                                src="https://www.youtube.com/embed/MNKK386lyck?autoplay=0&controls=1&rel=0"
                                title="Club 7 Alles Geven"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <motion.img whileHover={{ scale: 1.05 }} src={club7}
                                alt="Club 7" loading="lazy"
                                className="h-36 w-full object-cover rounded-xl border border-white/10"
                            />
                            <motion.img whileHover={{ scale: 1.05 }} src={club7b}
                                alt="Club 7" loading="lazy"
                                className="h-36 w-full object-cover rounded-xl border border-white/10"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        className="w-full lg:w-2/5 space-y-6 text-center lg:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="text-[#00ffff] font-bold tracking-widest uppercase text-sm mb-3">Het origineel</p>
                            <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#ffff00] to-[#00ffff] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                                style={{ textShadow: "3px 3px 0px #000", WebkitTextStroke: "1px white" }}>
                                CLUB 7<br />ALLES<br />GEVEN
                            </h2>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed text-white/90 font-light">
                            <p>
                                Met Club 7 Alles Geven touren wij het hele land door. Club 7 is dé hysterische pop-up miniclub waar je 7 minuten lang alles kan geven op een knotsgekke onsamenhangende muziekmix.
                            </p>
                            <p>
                                Met alles geven, bedoelen we dan ook echt álles geven. Je beste dansmoves, al je energie, je meezingtalent, je springkunsten en als je leuk bent ook je telefoonnummer.
                            </p>
                            <p className="text-sm opacity-70 italic">
                                Na 7 minuten is de volgende groep aan de beurt.
                            </p>
                        </div>
                        <a
                            href="https://www.club7allesgeven.nl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff0099] text-white font-black italic uppercase tracking-wider rounded-full border-2 border-[#00ffff] hover:bg-[#00ffff] hover:text-black hover:border-[#ff0099] transition-all duration-300 shadow-[4px_4px_0px_#000]"
                        >
                            www.club7allesgeven.nl
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── DECIBEL WAKE-UP ────────────────────────────────────────────────────────
function DecibelSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#00f2fe]/20 via-[#4facfe]/10 to-black opacity-80" />

            {/* Animated bubbles */}
            {[...Array(8)].map((_, i) => (
                <motion.div key={i}
                    className="absolute rounded-full bg-white/10 border border-white/20"
                    style={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{ y: [0, -80, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">

                    {/* Left: Text + photo grid */}
                    <motion.div
                        className="w-full lg:w-2/5 space-y-6 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <p className="text-[#4facfe] font-bold tracking-widest uppercase text-sm mb-3">In opdracht van B2S</p>
                            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase text-white">
                                DECIBEL<br />
                                <span className="text-[#00f2fe]">WAKE-UP</span><br />
                                <span className="text-2xl md:text-3xl font-normal text-white/70">SERVICE</span>
                            </h2>
                        </div>
                        <div className="space-y-4 text-lg leading-relaxed text-white/90 font-light">
                            <p>
                                <strong className="text-white">Wakey wakey!</strong> In opdracht van B2S organiseerden wij een surprise pop-up party op de festivalcamping van Decibel Outdoor.
                            </p>
                            <p>
                                Vanaf 's ochtends 9 uur werden campingbezoekers op extreme wijze wakker geblazen door ons badhuis-rave-team. Hééél veel bubbels, badjassen, badmutsen, bubblegum en bad-eendjes zorgden ervoor dat het tanden poetsen en douchen een event werd wat je niet mocht missen!
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <motion.img whileHover={{ scale: 1.05 }} src={decibel1}
                                alt="Decibel" loading="lazy"
                                className="rounded-xl shadow-lg border border-white/10 h-32 w-full object-cover"
                            />
                            <motion.img whileHover={{ scale: 1.05 }} src={decibel3}
                                alt="Decibel" loading="lazy"
                                className="rounded-xl shadow-lg border border-white/10 h-32 w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Video + photo strip */}
                    <motion.div
                        className="w-full lg:w-3/5 space-y-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#00f2fe] shadow-[0_0_40px_rgba(0,242,254,0.2)] bg-black">
                            <iframe
                                src="https://player.vimeo.com/video/902935846?h=0&title=0&byline=0&portrait=0"
                                width="100%" height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                                title="Decibel Wake-up"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <motion.img whileHover={{ scale: 1.05 }} src={decibel2}
                                alt="Decibel" loading="lazy"
                                className="h-32 w-full object-cover object-[center_30%] rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all"
                            />
                            <motion.img whileHover={{ scale: 1.05 }} src={decibel4}
                                alt="Decibel" loading="lazy"
                                className="h-32 w-full object-cover rounded-xl border border-white/10 grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ─── SECTION HEADER ─────────────────────────────────────────────────────────
function ProjectsHeader() {
    return (
        <div className="relative w-full bg-black py-20 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="text-[#00f2fe] font-bold tracking-widest uppercase text-sm mb-4">Wat we maken</p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase">
                    ONS WERK
                </h2>
                <p className="mt-6 text-xl text-white/60 max-w-2xl mx-auto px-6">
                    Een selectie van onze favoriete projecten, producties en feestjes.
                </p>
            </motion.div>
        </div>
    );
}

// ─── EXPORT ─────────────────────────────────────────────────────────────────
export function ProjectsSection() {
    return (
        <div id="portfolio">
            <ProjectsHeader />
            <ClubMPHSection />
            <div className="w-full h-16 relative z-20" style={{ background: "linear-gradient(to bottom, #000000, #0099cc)" }} />
            <PoolpartySection />
            <div className="w-full h-16 relative z-20" style={{ background: "linear-gradient(to bottom, #006688, #000000)" }} />
            <Club7Section />
            <div className="w-full h-16 relative z-20" style={{ background: "linear-gradient(to bottom, #000000, #171717)" }} />
            <DecibelSection />
            <div className="w-full h-16 relative z-20" style={{ background: "linear-gradient(to bottom, #171717, #000000)" }} />
        </div>
    );
}
