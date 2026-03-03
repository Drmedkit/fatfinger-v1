import { motion } from "framer-motion";

export function ContactSection() {
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

                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto pt-12">
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4 text-[#f093fb]">CONTACT</h4>
                        <a href="mailto:hello@fatfinger.nl" className="block opacity-80 hover:text-white transition-colors cursor-pointer">hello@fatfinger.nl</a>
                        <a href="tel:+31646631269" className="block opacity-80 hover:text-white transition-colors cursor-pointer">+31 (0)6 4663 1269</a>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-bold text-xl mb-4 text-[#43e97b]">ADRES</h4>
                        <p className="opacity-80">Party Straat 123</p>
                        <p className="opacity-80">1000 AA Amsterdam</p>
                    </div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-[#00f2fe] transition-colors cursor-pointer"
                >
                    NEEM CONTACT OP
                </motion.button>
            </div>
        </section>
    );
}
