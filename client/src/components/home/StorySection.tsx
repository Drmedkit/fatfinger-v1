import { motion } from "framer-motion";
import club7Image from "@assets/Club7_Westerliefde_Eastcamp-005-1024x683_1763896976860.jpg";

export function StorySection() {
    return (
        <section id="story" className="relative min-h-screen w-full z-10 bg-black flex items-center justify-center overflow-hidden py-24">
            {/* Subtle background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#f093fb]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Left: Text */}
                    <motion.div
                        className="text-white space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <p className="text-[#00f2fe] font-bold tracking-widest uppercase text-sm mb-4">Hoe het begon</p>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold uppercase drop-shadow-md">
                                Van wilde ideeën <br />
                                <span className="text-[#00f2fe]">tot next level events</span>
                            </h2>
                        </div>

                        <div className="space-y-5 text-lg font-light leading-relaxed opacity-90">
                            <p>
                                Club 7 Alles Geven —het eerste concept van Fat Finger— begon als een uit de hand gelopen grap. Het begon aan een keukentafel. Een week voor Koningsdag 2019. In plaats van weer doelloos rond te slenteren door de stad werd er een pop-up rave georganiseerd, midden op straat in Amsterdam. Met tape, een paar speakers en een tent die van 's ochtends vroeg tot 's avonds laat vol stond: Club 7 Alles Geven was geboren. Het dak ging eraf. Letterlijk en figuurlijk. De Zon Festival pikte het op.. en zo werd Club 7 Alles Geven officieel, en ontstond Fat Finger.
                            </p>
                            <p>
                                Zeven minuten alles geven op festivals. Het bleek een hit. En we kwamen erachter dat creatieve feesten bedenken en organiseren iets is waar we goed in zijn. De naam Fat Finger is dan ook geen toeval. Het is onze dikke vinger naar saaie, vlakke en voorspelbare projecten. Zelfs het saaiste congres kan je opleuken.
                            </p>
                            <p>
                                Fast forward naar nu. Talloze concepten, producties en ervaringen verder. En een enorme drive om evenementen tot leven te brengen. Van bedrijfsfestivals en personeelsfeesten tot congressen en teambuilding weekenden. Altijd met fun, creativiteit en een gezonde dosis eigenzinnigheid.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={club7Image}
                                alt="Club 7 Alles Geven - het begin van Fat Finger"
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f093fb]/60 rounded-full blur-2xl opacity-60 -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00f2fe]/60 rounded-full blur-2xl opacity-60 -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
