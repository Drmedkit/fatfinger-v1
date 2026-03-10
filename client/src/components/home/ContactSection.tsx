import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    naam: z.string().min(2, "Vul je naam in"),
    email: z.string().email("Ongeldig e-mailadres"),
    telefoon: z.string().optional(),
    bericht: z.string().min(10, "Bericht is te kort"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
    });

    async function onSubmit(data: ContactForm) {
        // TODO: koppelen aan Google Sheets via API
        console.log("Contact form data:", data);
        await new Promise(r => setTimeout(r, 600)); // simuleer delay
        setSubmitted(true);
    }

    return (
        <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center p-6 text-white">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            <div className="max-w-4xl w-full text-center space-y-12 relative z-10">
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
                    READY TO <br /> <span className="text-[#00f2fe]">PARTY?</span>
                </h2>
                <p className="text-xl md:text-2xl font-light opacity-70 max-w-2xl mx-auto">
                    Wij denken graag met je mee. Neem contact op voor een kop koffie of een goed gesprek.
                </p>

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto pt-4">
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4 text-[#f093fb]">CONTACT</h4>
                        <a href="mailto:fatfingernl@gmail.com" className="block opacity-80 hover:text-white transition-colors cursor-pointer">fatfingernl@gmail.com</a>
                        <a href="tel:+31646631269" className="block opacity-80 hover:text-white transition-colors cursor-pointer">06-46631269</a>
                        <a href="https://wa.me/31646631269" target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:text-white transition-colors cursor-pointer">WhatsApp</a>
                        <a href="https://instagram.com/fatfingernl" target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:text-white transition-colors cursor-pointer">@fatfingernl</a>
                        <a href="https://www.youtube.com/@FATFINGER-zf7gp" target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:text-white transition-colors cursor-pointer">YouTube @FATFINGER</a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4 text-[#43e97b]">ADRES</h4>
                        <p className="opacity-80">Johan Maurits van Nassaulaan 12</p>
                        <p className="opacity-80">2071 VC Santpoort Noord</p>
                        <p className="opacity-60 text-sm mt-4">KVK 75088509</p>
                        <p className="opacity-60 text-sm">BTW NL860137569B01</p>
                    </div>
                </div>

                {/* Contact formulier */}
                <div className="max-w-2xl mx-auto w-full text-left">
                    <AnimatePresence mode="wait">
                        {submitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="border border-[#00f2fe]/30 rounded-2xl p-10 text-center space-y-4"
                            >
                                <div className="text-5xl">🎉</div>
                                <h3 className="font-display text-3xl text-[#00f2fe]">Bericht ontvangen!</h3>
                                <p className="opacity-70">We nemen zo snel mogelijk contact met je op.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit(onSubmit)}
                                className="space-y-4"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            {...register("naam")}
                                            placeholder="Naam *"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
                                        />
                                        {errors.naam && <p className="text-red-400 text-sm mt-1 pl-1">{errors.naam.message}</p>}
                                    </div>
                                    <div>
                                        <input
                                            {...register("email")}
                                            placeholder="E-mail *"
                                            type="email"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1 pl-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <input
                                        {...register("telefoon")}
                                        placeholder="Telefoonnummer (optioneel)"
                                        type="tel"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f2fe]/60 transition-colors"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        {...register("bericht")}
                                        placeholder="Vertel ons over jouw event of idee... *"
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00f2fe]/60 transition-colors resize-none"
                                    />
                                    {errors.bericht && <p className="text-red-400 text-sm mt-1 pl-1">{errors.bericht.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-white text-black font-bold text-lg rounded-xl hover:bg-[#00f2fe] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSubmitting ? "Versturen..." : "VERSTUUR BERICHT"}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
