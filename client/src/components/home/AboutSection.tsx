import { motion } from "framer-motion";
import aboutImage from "@assets/image_1763912682595.webp";

export function AboutSection() {
    return (
        <section id="about" className="relative min-h-[80vh] w-full z-10 bg-black flex items-center justify-center overflow-hidden py-24">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        className="order-2 md:order-1 text-white space-y-8 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#00f2fe] leading-tight font-bold uppercase drop-shadow-md">
                            Van wilde ideeën <br /> tot next level events
                        </h2>

                        <div className="space-y-6 text-lg font-light leading-relaxed opacity-90">
                            <p>
                                Club 7 Alles Geven —het eerste concept van Fat Finger— begon als een uit de hand gelopen grap. Het begon aan een keukentafel. Een week voor Koningsdag 2019. In plaats van weer doelloos rond te slenteren door de stad werd er een pop-up rave georganiseerd, midden op straat in Amsterdam. Met tape, een paar speakers en een tent die van ‘s ochtends vroeg tot ‘s avonds laat vol stond: Club 7 Alles Geven was geboren. Het dak ging eraf. Letterlijk en figuurlijk. De Zon Festival pikte het op.. en zo werd Club 7 Alles Geven officieel, en ontstond Fat Finger.
                            </p>
                            <p>
                                Zeven minuten alles geven op festivals. Het bleek een hit. En we kwamen erachter dat creatieve feesten bedenken en organiseren iets is waar we goed in zijn. De naam Fat Finger is dan ook geen toeval. Het is onze dikke vinger naar saaie, vlakke en voorspelbare projecten. Zelfs het saaiste congres kan je opleuken.
                            </p>
                            <p>
                                Fast forward naar nu. Talloze concepten, producties en ervaringen verder. En een enorme drive om evenementen tot leven te brengen. Van bedrijfsfestivals en personeelsfeesten tot congressen en teambuilding weekenden. Altijd met fun, creativiteit en een gezonde dosis eigenzinnigheid.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                            <h3 className="font-display text-2xl md:text-3xl text-[#f093fb] font-bold uppercase">Over ons</h3>
                            <p className="text-lg font-light leading-relaxed opacity-90">
                                Wij zijn Karlijn en Lonneke. Twee vriendinnen die elkaar 25 jaar geleden leerden kennen op de middelbare school.
                            </p>
                            <p className="text-lg font-light leading-relaxed opacity-90">
                                Fat Finger is het resultaat van twee werelden die perfect samenkomen. Karlijn brengt haar achtergrond als communicatieadviseur en haar creatieve blik vanuit de modeacademie mee. Taaie inhoud wordt door haar vertaald naar luchtige, visuele en aansprekende concepten. Als voormalig verloskundige is Lonneke gewend aan hard werken, schakelen onder druk en altijd aanstaan. Binnen Fat Finger kan ze haar creativiteit en energie volledig kwijt.
                            </p>
                            <p className="text-lg font-light leading-relaxed opacity-90">
                                Samen bedenken we alle concepten. Samen bouwen we ze uit. We kennen elkaar al zo lang en zo goed dat samenwerken vanzelf gaat. We vullen elkaar aan, lezen elkaar zonder woorden en doen dit sinds 2019 alsof we nooit anders hebben gedaan. Uiteraard doen we dit niet alleen — wij hebben een hele groep enorme toppers om ons heen verzameld die zich ieder event voor 1000% inzetten.
                            </p>
                            <p className="text-lg font-light leading-relaxed opacity-90 italic">
                                Dus zoek je een event dat anders durft te zijn? Out of the box. Met inhoud én fun. Dan weet je ons te vinden.
                            </p>
                        </div>

                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        className="order-1 md:order-2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={aboutImage}
                                alt="Fat Finger Team at Festival"
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Minimalized decorative elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f093fb]/80 rounded-full blur-2xl opacity-50 -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00f2fe]/80 rounded-full blur-2xl opacity-50 -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
