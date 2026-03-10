import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Menu } from "lucide-react";
import { Link } from "wouter";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@assets/Fat-Finger-logo_1763898136388.png";

// Decibel Assets
import decibel1 from "@assets/image_1763916174369.webp";
import decibel2 from "@assets/image_1763916181000.webp";
import decibel3 from "@assets/image_1763916185515.webp";
import decibel4 from "@assets/image_1763916191128.webp";

// Club MPH Assets
import mph1 from "@assets/image_1763916396825.webp";
import mph2 from "@assets/image_1763916409415.webp";
import mph3 from "@assets/image_1763916415137.webp";
import mph4 from "@assets/image_1763916420516.webp";
import mph5 from "@assets/image_1763916427926.webp";

// Remaining projects (Others removed as requested)
const PROJECTS = [];

export default function Portfolio() {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-[#00f2fe]/30">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
        <div className="drop-shadow-md pointer-events-auto">
          <Link href="/">
            <img src={logo} alt="Fat Finger Logo" className="h-12 md:h-16 w-auto object-contain cursor-pointer" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm tracking-wider bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 pointer-events-auto">
          <Link href="/#about" className="hover:text-white/80 transition-colors" data-testid="link-about">OVER ONS</Link>
          <Link href="/#services" className="hover:text-white/80 transition-colors" data-testid="link-services">DIENSTEN</Link>
          <Link href="/portfolio" className="text-[#00f2fe] transition-colors" data-testid="link-portfolio-active">PORTFOLIO</Link>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-white/80 transition-colors" data-testid="button-contact">CONTACT</button>
        </nav>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden text-white pointer-events-auto p-2" data-testid="button-mobile-menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black/95 backdrop-blur-xl border-l border-white/10 text-white">
            <nav className="flex flex-col gap-6 mt-12">
              <SheetClose asChild>
                <Link 
                  href="/#about" 
                  className="text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-about"
                >
                  OVER ONS
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  href="/#services" 
                  className="text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-services"
                >
                  DIENSTEN
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link 
                  href="/portfolio" 
                  className="text-xl font-medium text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-portfolio"
                >
                  PORTFOLIO
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="text-left text-xl font-medium hover:text-[#00f2fe] transition-colors py-3 border-b border-white/10"
                  data-testid="mobile-link-contact"
                >
                  CONTACT
                </button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      {/* Hero / Header */}
      <section className="relative pt-48 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-900/20 to-black" />
        <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
            OUR WORK
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-80 max-w-2xl mx-auto">
            Een selectie van onze favoriete projecten, producties en feestjes.
          </p>
        </motion.div>
      </section>

      {/* --- FEATURED PROJECT: CLUB 7 ALLES GEVEN --- */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Vibrant Background matching Club 7 style */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff0099] via-[#00ffff] to-[#ffff00] opacity-10" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        
        {/* Geometric Shapes / Memphis style decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#00ffff] rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff0099] rounded-full blur-[120px] opacity-20 translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Video Embed */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#00ffff] shadow-[0_0_40px_rgba(0,255,255,0.3)] bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/MNKK386lyck?autoplay=0&controls=1&rel=0" 
                  title="Club 7 Alles Geven" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                ></iframe>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/5 space-y-8 text-center lg:text-left"
            >
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ff0099] via-[#ffff00] to-[#00ffff] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                    style={{ textShadow: "4px 4px 0px #000", WebkitTextStroke: "1.5px white" }}>
                  CLUB 7 <br/> ALLES GEVEN
                </h2>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white font-medium">
                <p>
                  Met Club 7 Alles Geven touren wij het hele land door. Club 7 is dé hysterische pop-up miniclub waar je 7 minuten lang alles kan geven op een knotsgekke onsamenhangende muziekmix.
                </p>
                <p>
                  Met alles geven, bedoelen we dan ook echt álles geven. Je beste dansmoves, al je energie, je meezingtalent, je springkunsten en als je leuk bent ook je telefoonnummer. Na 7 minuten is de volgende groep aan de beurt.
                </p>
              </div>

              <a 
                href="https://www.club7allesgeven.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff0099] text-white font-black italic uppercase tracking-wider rounded-full border-2 border-[#00ffff] hover:bg-[#00ffff] hover:text-black hover:border-[#ff0099] transition-all duration-300 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#fff] transform hover:-translate-y-1"
              >
                www.club7allesgeven.nl
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent via-black to-neutral-900 -mt-12 relative z-20" />

      {/* --- FEATURED PROJECT: DECIBEL OUTDOOR --- */}
      <section className="relative w-full py-24 overflow-hidden bg-neutral-900">
        {/* Background with bubbles/blue vibe */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#00f2fe] via-[#4facfe] to-[#000000] opacity-20" />
        
        {/* Animated Bubble decorations */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 space-y-8 text-center lg:text-left"
            >
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
                  DECIBEL <br/> <span className="text-[#00f2fe]">OUTDOOR</span>
                </h2>
                <p className="text-[#4facfe] font-bold tracking-wider mt-2">WAKE-UP SERVICE & POP-UP PARTY</p>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white/90 font-light">
                <p>
                  <strong className="text-white font-bold">Wakey wakey!</strong> In opdracht van B2S organiseerden wij een surprise pop-up party op de festivalcamping van Decibel Outdoor.
                </p>
                <p>
                  Vanaf ’s ochtends 9 uur werden de campingbezoekers op een extreme manier wakker geblazen door ons badhuis-rave-team. Hééél veel bubbels, badjassen, badmutsen, bubblegum en bad-eendjes zorgden ervoor dat het tanden poetsen en douchen een event werd wat je niet mocht missen!
                </p>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   src={decibel1} 
                   alt="Decibel Bubbles" 
                   loading="lazy"
                   className="rounded-xl shadow-lg border border-white/10"
                 />
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   src={decibel3} 
                   alt="Decibel Performers" 
                   loading="lazy"
                   className="rounded-xl shadow-lg border border-white/10"
                 />
              </div>
            </motion.div>

            {/* Right: Video Embed */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/5 space-y-6"
            >
               {/* Vimeo Embed */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#00f2fe] shadow-[0_0_40px_rgba(0,242,254,0.2)] bg-black">
                <iframe 
                  src="https://player.vimeo.com/video/902935846?h=0&title=0&byline=0&portrait=0" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title="Decibel Outdoor"
                ></iframe>
              </div>

              {/* Extra Photos Row */}
              <div className="grid grid-cols-2 gap-4">
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   src={decibel2} 
                   alt="Decibel Crowd" 
                   loading="lazy"
                   className="h-32 w-full object-cover object-[center_30%] rounded-xl shadow-lg border border-white/10 grayscale hover:grayscale-0 transition-all"
                 />
                 <motion.img 
                   whileHover={{ scale: 1.05 }}
                   src={decibel4} 
                   alt="Decibel Water Guns" 
                   loading="lazy"
                   className="h-32 w-full object-cover rounded-xl shadow-lg border border-white/10 grayscale hover:grayscale-0 transition-all"
                 />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-24 bg-gradient-to-b from-neutral-900 via-black to-transparent -mt-12 relative z-20" />

      {/* --- FEATURED PROJECT: CLUB MPH --- */}
      <section className="relative w-full py-24 overflow-hidden">
        {/* Background with MPH chaos/energy */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00cc]/20 via-[#333399]/20 to-[#ffcc00]/20" />
        
        {/* Animated 'Timer' or 'Chaos' elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#ffcc00] rounded-full blur-[150px] opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Video & Photos */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-3/5 space-y-6"
            >
               {/* Vimeo Embed */}
               <div className="relative aspect-video rounded-3xl overflow-hidden border-4 border-[#ffcc00] shadow-[0_0_40px_rgba(255,204,0,0.2)] bg-black">
                <iframe 
                  src="https://player.vimeo.com/video/860974855?h=0&title=0&byline=0&portrait=0" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title="Club MPH"
                ></iframe>
              </div>

               {/* Photo Grid */}
               <div className="grid grid-cols-3 gap-4">
                 <motion.img whileHover={{ scale: 1.05 }} src={mph1} alt="MPH Schedule" loading="lazy" className="h-24 w-full object-cover rounded-xl border border-white/10" />
                 <motion.img whileHover={{ scale: 1.05 }} src={mph2} alt="MPH Sign" loading="lazy" className="h-24 w-full object-cover rounded-xl border border-white/10" />
                 <motion.img whileHover={{ scale: 1.05 }} src={mph5} alt="MPH Dancefloor" loading="lazy" className="h-24 w-full object-cover rounded-xl border border-white/10" />
               </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-2/5 space-y-8 text-center lg:text-left"
            >
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-black italic uppercase tracking-tight text-white drop-shadow-lg">
                  CLUB <span className="text-[#ffcc00]">MPH</span> <br/>
                  <span className="text-3xl md:text-4xl font-normal text-white/80">OP DEFQON.1</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-lg md:text-xl leading-relaxed text-white/90 font-light">
                <p>
                  In opdracht van Q-Dance ontwikkelden wij een <strong className="text-[#ffcc00]">secret stage</strong> waar bezoekers díe dit geheime feestje vonden, over na zouden praten.
                </p>
                <p>
                  Welkom in Club Mini Power Hour, waar een paar keer per dag een nieuw themafeestje van een uur begint. Bezoekers stappen onverwachts in een kleurrijke bedoeling, de timer wordt op 60 minuten gezet en de chaos barst los!
                </p>
                <p className="text-sm md:text-base opacity-70 italic">
                  Met verschillende DJ’s, entertainers, een wandelend decor, veel confetti en gekke gadgets. Biggest surprise: af en toe draait er een bekende DJ! Na drie succesvolle edities, op naar nummer vier. Be there.
                </p>
              </div>

              {/* Extra Photos Floating */}
               <div className="grid grid-cols-2 gap-4 pt-4">
                 <motion.img 
                   whileHover={{ scale: 1.1, rotate: -2 }} 
                   src={mph3} 
                   alt="MPH Flags" 
                   loading="lazy"
                   className="w-full h-32 object-cover rounded-xl shadow-lg rotate-2 border-2 border-[#ffcc00]" 
                 />
                 <motion.img 
                   whileHover={{ scale: 1.1, rotate: 2 }} 
                   src={mph4} 
                   alt="MPH Crowd" 
                   loading="lazy"
                   className="w-full h-32 object-cover rounded-xl shadow-lg -rotate-2 border-2 border-[#ff00cc]" 
                 />
               </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-24 bg-gradient-to-b from-transparent to-black -mt-12 relative z-20" />

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center p-6 text-white">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
       <div className="max-w-4xl w-full text-center space-y-12">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
            READY TO <br/> <span className="text-[#00f2fe]">PARTY?</span>
          </h2>
          <p className="text-xl md:text-2xl font-light opacity-70 max-w-2xl mx-auto">
            Wij denken graag met je mee. Neem contact op voor een kop koffie of een goed gesprek.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto pt-12">
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

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-[#00f2fe] transition-colors"
          >
            NEEM CONTACT OP
          </motion.button>
       </div>
    </section>
    </div>
  );
}