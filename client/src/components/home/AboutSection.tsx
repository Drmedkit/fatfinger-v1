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
                                Het begon ooit aan een keukentafel, een week voor Koningsdag 2019. In plaats van weer rond te slenteren, besloten Karlijn en Lonneke — de OG’s van het eerste uur — iets geks te doen: een pop-up rave midden op straat in Amsterdam. Club 7 Alles Geven was geboren. Met wat tape, speakers en lef. En het werkte: het dak ging eraf. De Zon Festival pikte het op, en zo ontstond Fat Finger.
                            </p>
                            <p>
                                Fast forward naar nu: talloze concepten, producties en een flinke dosis ervaring verder. Diezelfde energie gebruiken we vandaag om (bedrijfs­)evenementen tot leven te brengen, met fun, creativiteit en een flinke scheut eigenzinnigheid. Want waarom zou je een standaard event organiseren, als het ook memorabel, verrassend en vol beleving kan zijn?
                            </p>
                        </div>

                        {/* Added a placeholder here for the user's additional text */}
                        <div className="mt-8 p-6 bg-[#00f2fe]/10 border border-[#00f2fe]/30 rounded-[1.5rem] backdrop-blur-sm cursor-text transition-colors hover:bg-[#00f2fe]/20">
                            <h4 className="text-[#00f2fe] font-bold mb-2">Jouw Visie Hier</h4>
                            <p className="opacity-80 italic text-sm">
                                [Dit vak is gereserveerd voor extra tekst of content. Klik hier of stuur de gewenste inhoud op om dit uit te breiden.]
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
