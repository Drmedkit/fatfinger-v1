import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    naam: z.string().min(2, "Vul je naam in"),
    email: z.string().email("Ongeldig e-mailadres"),
    telefoon: z.string().optional(),
    bericht: z.string().min(10, "Bericht is te kort"),
});

type ContactForm = z.infer<typeof contactSchema>;

const TYPO_DOMAINS: Record<string, string> = {
    "gmmail.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gmail.nl": "gmail.com",
    "hotmial.com": "hotmail.com",
    "hotmal.com": "hotmail.com",
    "homail.com": "hotmail.com",
    "yahooo.com": "yahoo.com",
    "yaho.com": "yahoo.com",
    "outlok.com": "outlook.com",
    "outllook.com": "outlook.com",
    "iclod.com": "icloud.com",
    "icould.com": "icloud.com",
};

const BERICHT_HINTS = [
    { min: 0,   max: 19,  text: null, color: "" },
    { min: 20,  max: 59,  text: "Dat begint al op een feestje te lijken...", color: "#f093fb" },
    { min: 60,  max: 119, text: "Nu praten we. Dit wordt wat.", color: "#4facfe" },
    { min: 120, max: 199, text: "Je bent echt alles aan het geven.", color: "#43e97b" },
    { min: 200, max: Infinity, text: "Dit wordt onvergetelijk. We zijn er helemaal bij.", color: "#00f2fe" },
];

// Border glow colors per milestone
const BERICHT_GLOW = [
    { min: 0,   max: 19,  color: "rgba(255,255,255,0.1)", shadow: "none" },
    { min: 20,  max: 59,  color: "rgba(240,147,251,0.5)", shadow: "0 0 16px rgba(240,147,251,0.2)" },
    { min: 60,  max: 119, color: "rgba(79,172,254,0.5)",  shadow: "0 0 20px rgba(79,172,254,0.25)" },
    { min: 120, max: 199, color: "rgba(67,233,123,0.5)",  shadow: "0 0 24px rgba(67,233,123,0.3)" },
    { min: 200, max: Infinity, color: "rgba(0,242,254,0.6)", shadow: "0 0 28px rgba(0,242,254,0.35)" },
];

const TYPEWRITER_PHRASES = [
    "Een festival voor 2000 man...",
    "Een intiem bedrijfsfeest...",
    "Iets wat nog niemand heeft gedaan...",
    "Vertel ons alles. Wij luisteren.",
];

function useDebounced<T>(value: T, delay: number): T {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(t);
    }, [value, delay]);
    return debounced;
}

function useTypewriter(phrases: string[], active: boolean) {
    const [displayed, setDisplayed] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (!active) { setDisplayed(""); return; }
        const current = phrases[phraseIndex];
        if (!deleting && charIndex <= current.length) {
            timeoutRef.current = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex));
                setCharIndex(c => c + 1);
            }, 55);
        } else if (!deleting && charIndex > current.length) {
            timeoutRef.current = setTimeout(() => setDeleting(true), 1600);
        } else if (deleting && charIndex > 0) {
            timeoutRef.current = setTimeout(() => {
                setDisplayed(current.slice(0, charIndex - 1));
                setCharIndex(c => c - 1);
            }, 28);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setPhraseIndex(i => (i + 1) % phrases.length);
        }
        return () => clearTimeout(timeoutRef.current);
    }, [active, charIndex, deleting, phraseIndex, phrases]);

    return displayed;
}

function FieldHint({ text, color }: { text: string; color: string }) {
    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={text}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25 }}
                className="text-xs font-medium mb-1.5 pl-1"
                style={{ color }}
            >
                {text}
            </motion.p>
        </AnimatePresence>
    );
}

export function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [berichtFocused, setBerichtFocused] = useState(false);

    const { register, handleSubmit, control, setValue, formState: { errors, isSubmitting, isValid } } = useForm<ContactForm>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const naamValue = useWatch({ control, name: "naam", defaultValue: "" });
    const emailValue = useWatch({ control, name: "email", defaultValue: "" });
    const berichtValue = useWatch({ control, name: "bericht", defaultValue: "" });

    // Debounced values for naam and email hints (2s delay)
    const naamDebounced = useDebounced(naamValue, 2000);
    const emailDebounced = useDebounced(emailValue, 2000);

    // Naam hint (debounced)
    const firstName = naamDebounced?.trim().split(" ")[0] ?? "";
    const naamHint = firstName.length >= 2
        ? { text: `${firstName}. Klinkt als iemand met smaak.`, color: "#43e97b" }
        : null;

    // Email hint (debounced)
    const emailTypo = (() => {
        if (!emailDebounced?.includes("@")) return null;
        const domain = emailDebounced.split("@")[1]?.toLowerCase();
        const suggestion = domain ? TYPO_DOMAINS[domain] : null;
        if (suggestion) return { text: `Kleine typfout — bedoel je @${suggestion}?`, color: "#f093fb", fix: suggestion };
        if (emailDebounced && !errors.email && emailDebounced.includes("."))
            return { text: "We sturen je meteen een bevestiging — check ook je spam!", color: "#43e97b", fix: null };
        return null;
    })();

    // Bericht
    const berichtLen = berichtValue?.length ?? 0;
    const berichtHint = BERICHT_HINTS.find(h => berichtLen >= h.min && berichtLen <= h.max);
    const berichtGlow = BERICHT_GLOW.find(h => berichtLen >= h.min && berichtLen <= h.max);

    const typewriterActive = berichtLen === 0 && !berichtFocused;
    const typewriterText = useTypewriter(TYPEWRITER_PHRASES, typewriterActive);

    async function onSubmit(data: ContactForm) {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Versturen mislukt");
        setSubmitted(true);
    }

    const inputClass = (hasError: boolean, isOk: boolean) =>
        `w-full bg-white/5 border rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none transition-all duration-500 ${
            hasError ? "border-red-400/60" : isOk ? "border-[#43e97b]/60" : "border-white/10 focus:border-[#00f2fe]/60"
        }`;

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
                                className="space-y-5"
                            >
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Naam */}
                                    <div>
                                        <div className="h-5 mb-1">
                                            {naamHint
                                                ? <FieldHint text={naamHint.text} color={naamHint.color} />
                                                : errors.naam
                                                    ? <FieldHint text={errors.naam.message!} color="#f87171" />
                                                    : null
                                            }
                                        </div>
                                        <input
                                            {...register("naam")}
                                            placeholder="Naam *"
                                            className={inputClass(!!errors.naam, !!naamHint)}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <div className="h-5 mb-1 flex items-center gap-2">
                                            {emailTypo
                                                ? <FieldHint text={emailTypo.text} color={emailTypo.color} />
                                                : errors.email
                                                    ? <FieldHint text={errors.email.message!} color="#f87171" />
                                                    : null
                                            }
                                            {emailTypo?.fix && (
                                                <button
                                                    type="button"
                                                    onClick={() => setValue("email", emailValue.split("@")[0] + "@" + emailTypo.fix, { shouldValidate: true })}
                                                    className="text-xs underline opacity-70 hover:opacity-100 transition-opacity -mt-1.5"
                                                    style={{ color: emailTypo.color }}
                                                >
                                                    fix
                                                </button>
                                            )}
                                        </div>
                                        <input
                                            {...register("email")}
                                            placeholder="E-mail *"
                                            type="email"
                                            className={inputClass(!!errors.email, !!emailTypo && !emailTypo.fix)}
                                        />
                                    </div>
                                </div>

                                {/* Telefoon */}
                                <div>
                                    <div className="h-5 mb-1" />
                                    <input
                                        {...register("telefoon")}
                                        placeholder="Telefoonnummer (optioneel)"
                                        type="tel"
                                        className={inputClass(false, false)}
                                    />
                                </div>

                                {/* Bericht */}
                                <div>
                                    <div className="h-5 mb-1">
                                        {berichtHint?.text
                                            ? <FieldHint text={berichtHint.text} color={berichtHint.color} />
                                            : errors.bericht
                                                ? <FieldHint text={errors.bericht.message!} color="#f87171" />
                                                : <p className="text-xs text-white/30 pl-1">Vertel ons over jouw event, idee of droom. Hoe meer, hoe beter.</p>
                                        }
                                    </div>
                                    <motion.textarea
                                        {...register("bericht")}
                                        placeholder={typewriterText + (typewriterActive ? "|" : "")}
                                        rows={5}
                                        onFocus={() => setBerichtFocused(true)}
                                        onBlur={() => setBerichtFocused(false)}
                                        className="w-full bg-white/5 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none resize-none transition-all duration-500"
                                        animate={{
                                            borderColor: berichtGlow?.color ?? "rgba(255,255,255,0.1)",
                                            boxShadow: berichtGlow?.shadow ?? "none",
                                        }}
                                        style={{ border: "1px solid" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || !isValid}
                                    whileHover={isValid ? { scale: 1.02 } : {}}
                                    whileTap={isValid ? { scale: 0.98 } : {}}
                                    className="w-full py-5 font-bold text-lg rounded-xl transition-all duration-300"
                                    style={{
                                        background: isValid ? "#ffffff" : "rgba(255,255,255,0.08)",
                                        color: isValid ? "#000000" : "rgba(255,255,255,0.25)",
                                        cursor: isValid ? "pointer" : "not-allowed",
                                    }}
                                >
                                    {isSubmitting ? "Versturen..." : isValid ? "VERSTUUR BERICHT" : "Bijna — vul alle velden in"}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
