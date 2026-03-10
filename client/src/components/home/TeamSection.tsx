import { motion } from "framer-motion";
import teamImage from "@assets/image_1763912682595.webp";

export function TeamSection() {
    return (
        <section id="about" className="relative min-h-screen w-full z-10 bg-black flex items-center justify-center overflow-hidden py-24">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#f093fb]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#00f2fe]/8 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                    {/* Left: Image */}
                    <motion.div
                        className="relative order-1 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={teamImage}
                                alt="Karlijn en Lonneke - Fat Finger"
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#00f2fe]/60 rounded-full blur-2xl opacity-60 -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f093fb]/60 rounded-full blur-2xl opacity-60 -z-10" />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        className="order-2 md:order-2 text-white space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <p className="text-[#f093fb] font-bold tracking-widest uppercase text-sm mb-4">Het team</p>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold uppercase">
                                Over <span className="text-[#f093fb]">ons</span>
                            </h2>
                        </div>

                        <div className="space-y-5 text-lg font-light leading-relaxed opacity-90">
                            <p>
                                Wij zijn Karlijn en Lonneke. Twee vriendinnen die elkaar 25 jaar geleden leerden kennen op de middelbare school.
                            </p>
                            <p>
                                Fat Finger is het resultaat van twee werelden die perfect samenkomen. Karlijn brengt haar achtergrond als communicatieadviseur en haar creatieve blik vanuit de modeacademie mee. Taaie inhoud wordt door haar vertaald naar luchtige, visuele en aansprekende concepten. Als voormalig verloskundige is Lonneke gewend aan hard werken, schakelen onder druk en altijd aanstaan. Binnen Fat Finger kan ze haar creativiteit en energie volledig kwijt.
                            </p>
                            <p>
                                Samen bedenken we alle concepten. Samen bouwen we ze uit. En vaak vind je Lonneke midden in de actie, op het evenement zelf. Wij kennen elkaar al zo lang en zo goed dat samenwerken vanzelf gaat. We vullen elkaar aan, lezen elkaar zonder woorden en doen dit sinds 2019 alsof we nooit anders hebben gedaan. Uiteraard doen we dit niet alleen — wij hebben een hele groep enorme toppers om ons heen verzameld die zich ieder event voor 1000% inzetten.
                            </p>
                            <p className="text-[#00f2fe] font-medium italic">
                                Dus zoek je een event dat anders durft te zijn? Out of the box. Met inhoud én fun. Dan weet je ons te vinden.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
