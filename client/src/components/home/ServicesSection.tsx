import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SERVICES = [
    {
        id: "01",
        title: "Concepting",
        description: "Nieuw, gek of innovatief concept nodig? Laat de brainstorm aan ons over! Geef ons jouw input, en onze idee-machines presenteren meerdere concepten. We staan ook klaar om deze van A tot Z te produceren. \"We put the art in party\"",
        tags: ["Out of the box", "Crowd engagement", "Maatwerk"],
        theme: "from-amber-400 to-orange-500"
    },
    {
        id: "02",
        title: "Business event",
        description: "Serious business. Al zorgen wij voor genoeg fun en jolijt, wij begrijpen dat zaken soms zaken zijn. Maar wat denk je van een niet-zo-standaard business event? Wil je eens een andere vorm proberen? Wég met de standaard plenaire sessies en saaie netwerkborrels. Laat ons met je meedenken en wij zorgen ervoor dat de informatie écht doordringt en mensen dieper en sneller met elkaar in contact komen.",
        tags: ["Design & Productie", "Eventcommunicatie", "Live event management"],
        theme: "from-slate-700 to-slate-900"
    },
    {
        id: "03",
        title: "Personeelsfeest",
        description: "Met een personeelsfeest of teambuilding wil je collega’s zo veel mogelijk met elkaar laten bonden en activeren. Bereik je dit met een bowlingavond of barbecue op het hoofdkantoor? Nee bedankt. Wij weten wat écht indruk maakt en wat wél leuk is. Want wij willen actie. Wij willen waardering en party! Met een uniek thema, concept of ervaring, van uitnodiging tot uitvoering; wij verzorgen dit tot in de puntjes.",
        tags: ["Teambuilding", "Unieke settings", "Fatte bonding"],
        theme: "from-emerald-400 to-teal-600"
    },
    {
        id: "04",
        title: "Stage hosting",
        description: "Fat Finger takes over the stage! Van idee tot uitvoering. Wij organiseren en regisseren een vlekkeloze productie. Tijdens de show sturen we de line-up aan, creëren met ons topteam een fantastische sfeer en brengen concepten tot leven.",
        tags: ["Design & Productie", "Artist handling", "Live event management"],
        theme: "from-violet-600 to-indigo-600"
    },
    {
        id: "05",
        title: "(Merk) activatie",
        description: "Wil jij dat jouw merk goed opgemerkt wordt? Wij bedenken een creatieve en strategische activatie van jouw merk of product die echt impact maakt. Merk versterkende ervaringen, variërend van evenementen en promoties, tot campagnes of festival-activaties. Ons doel? Een onvergetelijke indruk.",
        tags: ["Bijzondere ervaringen", "Campagnes & live events", "Guerilla style"],
        theme: "from-cyan-400 to-blue-600"
    },
    {
        id: "06",
        title: "Pop-up party",
        description: "Een feestelijke take-over op jouw bruiloft. Een pop-up badhuisrave op de camping van een festival. Van saaie lijnbus naar pop-up partybus. Een hidden stage op een festival die een paar keer per dag helemaal los gaat. Wij zorgen voor graag voor het what-the-f*ck?! moment op jouw evenement. Wij poppen op waar, en wanneer je maar wilt.",
        tags: ["Conceptontwikkeling", "Surprise effects", "Design & productie"],
        theme: "from-pink-500 to-rose-500"
    }
];

// Optimized visual backdrops (Reduced opacity, removed heavy box-shadow/backdrop-blur)
function RippleEffect() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            {[...Array(2)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full border-[3px] border-white/20"
                    initial={{ width: 0, height: 0, opacity: 0.8, x: "-50%", y: "-50%" }}
                    animate={{
                        width: ["0vh", "180vh"],
                        height: ["0vh", "180vh"],
                        opacity: [0.8, 0],
                        borderWidth: ["3px", "10px", "0px"]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: i * 4,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
}

function RisingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-[-20px] bg-white/20"
                    style={{
                        width: Math.random() * 15 + 5,
                        height: Math.random() * 15 + 5,
                        borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: "-120vh",
                        rotate: 360,
                    }}
                    transition={{
                        duration: Math.random() * 5 + 8,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}

function MagneticCluster() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
            {[...Array(15)].map((_, i) => {
                const startX = (Math.random() - 0.5) * 150;
                const startY = (Math.random() - 0.5) * 150;
                const endX = startX * 1.5;
                const endY = startY * 1.5;
                const isCross = Math.random() > 0.5;
                const size = Math.random() * 15 + 10;

                return (
                    <motion.div
                        key={i}
                        className="absolute bg-white/30 flex items-center justify-center"
                        style={{
                            width: size,
                            height: isCross ? size / 4 : size,
                            borderRadius: isCross ? 2 : 4,
                            left: "50%",
                            top: "50%",
                        }}
                        animate={{
                            x: [`${startX}vw`, `${startX * 0.8}vw`, "0vw", "0vw", `${endX}vw`],
                            y: [`${startY}vh`, `${startY * 0.8}vh`, "0vh", "0vh", `${endY}vh`],
                            rotate: [0, 45, 180, 180, 360],
                            scale: [1, 1, 0.5, 0.5, 2],
                            opacity: [0, 0.6, 1, 1, 0]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            times: [0, 0.3, 0.5, 0.6, 1],
                            ease: "easeInOut",
                            delay: Math.random() * 0.5
                        }}
                    >
                        {isCross && (
                            <div className="absolute bg-white/30 rounded-sm" style={{ width: size / 4, height: size }} />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
}

function SpotlightBeams() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay opacity-10">
            <motion.div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,white_20deg,transparent_40deg)]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,white_20deg,transparent_40deg)]"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}

function LivingGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
}

function IntertwiningWaves() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
            {[...Array(2)].map((_, i) => {
                const direction = i % 2 === 0 ? 1 : -1;
                return (
                    <motion.div
                        key={i}
                        className="absolute w-[200%] h-64 flex items-center"
                        initial={{ x: "0%" }}
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 12 + i * 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ top: `calc(50% - ${32 + (i - 1) * 20}px)` }}
                    >
                        <svg className="w-full h-full" viewBox="0 0 2000 200" preserveAspectRatio="none">
                            <path
                                d={`M 0 100 Q 250 ${100 - 60 * direction} 500 100 T 1000 100 T 1500 100 T 2000 100`}
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeOpacity="0.4"
                            />
                        </svg>
                    </motion.div>
                );
            })}
        </div>
    );
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
    return (
        <div className={`w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br ${service.theme} relative overflow-hidden snap-center`}>
            {/* Animation Layer based on Service ID - Simplified for performance */}
            <div className="hidden md:block">
                {service.id === "01" && <RippleEffect />}
                {service.id === "02" && <RisingParticles />}
                {service.id === "03" && <MagneticCluster />}
                {service.id === "04" && <SpotlightBeams />}
                {service.id === "05" && <LivingGrid />}
                {service.id === "06" && <IntertwiningWaves />}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center h-full">
                {/* Text Info */}
                <div className="text-white space-y-6 md:space-y-8 z-10 max-w-3xl text-center md:text-left">
                    <h3 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold drop-shadow-sm leading-tight">
                        {service.title}
                    </h3>

                    <p className="text-lg md:text-2xl font-light leading-relaxed opacity-90 drop-shadow-sm">
                        {service.description}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2 md:pt-4">
                        {service.tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 md:px-6 md:py-3 bg-white/10 rounded-full text-sm md:text-lg font-medium border border-white/20">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ServicesSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

    return (
        <section id="services" ref={targetRef} className="relative h-[600vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden w-full">

                {/* Section Title Overlay */}
                <div className="absolute top-8 left-0 w-full z-50 px-8 md:px-12 pointer-events-none">
                    <h2 className="font-display text-2xl md:text-3xl text-white/50 tracking-widest font-bold uppercase drop-shadow-sm">
                        ONZE DIENSTEN
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex w-full">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
