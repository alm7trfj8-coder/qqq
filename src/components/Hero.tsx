import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Play, X, Award, Shield, Clock, Film, 
  Sliders, Activity, Sparkles, Cpu, Smartphone, Volume2, Send
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { Language } from '../types';
import { playAudio } from '../utils/audio';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const [showModal, setShowModal] = useState(false);
  const timecode = "01:24:42:09";

  // Slogan splitting and custom directional animations
  const sloganSegments = lang === 'ar' 
    ? ["رؤية سينمائية", "تصنع الصدارة", "لمحتواك"] 
    : ["Cinematic Vision.", "Absolute", "Command."];

  useEffect(() => {
    // Play electronic swipe sounds synchronized perfectly with each line's entering transition
    const timer1 = setTimeout(() => {
      playAudio.playSloganSwipe();
    }, 300);

    const timer2 = setTimeout(() => {
      playAudio.playSloganSwipe();
    }, 950);

    const timer3 = setTimeout(() => {
      playAudio.playSloganSwipe();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [lang]);

  const getDirectionVariant = (index: number) => {
    switch(index) {
      case 0:
        return {
          hidden: { opacity: 0, x: -100, y: -10, rotate: -2, filter: 'blur(15px)', scale: 0.95, textShadow: '0 0 20px rgba(255,255,255,0.8)' },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotate: 0, 
            filter: 'blur(0px)', 
            scale: 1,
            textShadow: '0 0 0px rgba(255,255,255,0)',
            transition: { type: 'spring', damping: 20, stiffness: 85, delay: 0.3 }
          }
        };
      case 1:
        return {
          hidden: { opacity: 0, x: 100, y: 10, rotate: 2, filter: 'blur(15px)', scale: 0.95, textShadow: '0 0 20px rgba(255,255,255,0.8)' },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotate: 0, 
            filter: 'blur(0px)', 
            scale: 1,
            textShadow: '0 0 0px rgba(255,255,255,0)',
            transition: { type: 'spring', damping: 20, stiffness: 85, delay: 0.95 }
          }
        };
      case 2:
      default:
        return {
          hidden: { opacity: 0, x: 0, y: 80, rotate: 0, filter: 'blur(20px)', scale: 0.9, textShadow: '0 0 30px rgba(255,255,255,0.9)' },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0, 
            rotate: 0, 
            filter: 'blur(0px)', 
            scale: 1,
            textShadow: '0 0 0px rgba(255,255,255,0)',
            transition: { type: 'spring', damping: 20, stiffness: 85, delay: 1.6 }
          }
        };
    }
  };

  // Fallback copy in case the placeholders aren't replaced
  const tagline = siteConfig.copy.hero.tagline[lang] === "{{TAGLINE}}"
    ? (lang === 'ar' 
        ? "رؤية سينمائية تصنع الصدارة لمحتواك" 
        : "Cinematic Vision. Absolute Command.")
    : siteConfig.copy.hero.tagline[lang];

  const shortDesc = siteConfig.copy.hero.shortDesc[lang] === "{{SHORT_DESC}}"
    ? (lang === 'ar'
        ? "ستوديو متخصص في المونتاج السينمائي، تصميم الحركة، وصناعة الهوية البصرية المتكاملة لمنشئي المحتوى والعلامات التجارية الطموحة."
        : "A specialized studio crafting cinematic video editing, custom motion design, and complete visual identities for ambitious creators and brands.")
    : siteConfig.copy.hero.shortDesc[lang];

  // Prefilled WhatsApp link
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber === "{{WHATSAPP}}" ? "201012345678" : siteConfig.whatsappNumber}?text=${encodeURIComponent(
    lang === 'ar' ? "مرحباً، أود بدء مشروعي الإبداعي الجديد معكم!" : "Hi, I'd like to initiate my new creative project with you!"
  )}`;

  // Showreel embed URL or fallback placeholder YouTube video
  const showreelEmbed = siteConfig.showreelUrl === "{{SHOWREEL_URL}}"
    ? "https://www.youtube.com/embed/gH86W6Y5M1Y?autoplay=1&mute=0"
    : siteConfig.showreelUrl;

  const statsList = [
    { value: `+${siteConfig.stats.projectsCount}`, label: { ar: "مشروع مُكتمل", en: "Completed Projects" } },
    { value: `+${siteConfig.stats.clientsCount}`, label: { ar: "شريك نجاح", en: "Happy Clients" } },
    { value: `${siteConfig.stats.platformsCount}`, label: { ar: "منصات توزيع", en: "Target Platforms" } },
    { value: `${siteConfig.stats.avgDeliveryDays} ${lang === 'ar' ? 'أيام' : 'Days'}`, label: { ar: "متوسط التسليم", en: "Avg. Delivery" } },
  ];

  const handleOpenShowreel = () => {
    playAudio.playClick();
    setShowModal(true);
  };

  /**
   * REUSABLE SPECTACULAR 3D HOLOGRAPHIC PRODUCTION DECK
   */
  const HolographicDeck = () => (
    <div className="relative w-full py-6 md:py-12" id="holo-deck-wrapper">
      {/* Dynamic glow base behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-tr from-brand-purple/20 to-brand-secondary/20 blur-3xl animate-pulse pointer-events-none" />

      {/* 3D tilted card console */}
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="relative mx-auto w-full max-w-[440px] aspect-[4/3] sm:aspect-video md:aspect-[4/3] rounded-[32px] bg-[#140624]/60 border border-white/10 p-4 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-visible group"
        id="holo-deck-card"
      >
        {/* Top bar indicators */}
        <div className="flex justify-between items-center z-10" id="holo-top-bar">
          <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-mono text-emerald-400 font-extrabold">LIVE CORE</span>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-black/40 px-3 py-1 rounded border border-white/5">
            {timecode}
          </span>
        </div>

        {/* Central visual screen (The video edit preview monitor) */}
        <div className="relative w-full h-[65%] rounded-2xl overflow-hidden bg-black/80 border border-white/5 shadow-inner flex items-center justify-center cursor-pointer group/screen" onClick={handleOpenShowreel}>
          {/* Editor background picture */}
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600" 
            alt="Timeline Monitor" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.35] group-hover/screen:scale-105 transition-transform duration-500" 
          />

          {/* Grid lines overlay to look like drafting software */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Glowing central play orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#FF2D7A]/20 animate-ping" />
              <div className="absolute inset-0 rounded-full bg-brand-secondary/30 animate-pulse" />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenShowreel();
                }}
                onMouseEnter={() => playAudio.playHover()}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white flex items-center justify-center shadow-lg group-hover/screen:scale-110 transition-transform duration-200"
              >
                <Play size={20} className="fill-white translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Running Audio Waveforms (bouncing neon lines) inside monitor screen */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between pointer-events-none bg-black/20 p-2 rounded-lg backdrop-blur-[2px]">
            <span className="text-[8px] font-mono text-brand-secondary font-bold">AUDIO CH 1/2</span>
            <div className="flex items-end gap-0.5 h-5">
              {[...Array(14)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [3, 16 - Math.abs(7 - i) * 1.5 + Math.random() * 4, 3] }}
                  transition={{
                    duration: 0.6 + (i % 3) * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-[2px] bg-[#FF2D7A] rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating 3D Adjustments Glass Card (Tilted offset, floats out of container) */}
        <motion.div
          style={{ transform: 'translateZ(30px)' }}
          onMouseEnter={() => playAudio.playHover()}
          className="absolute -top-10 -right-6 md:-top-12 md:-right-8 w-36 p-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl shadow-xl space-y-2 pointer-events-auto hidden sm:block"
        >
          <div className="flex items-center gap-1 text-[9px] font-mono text-[#FF2D7A] font-extrabold">
            <Sliders size={10} />
            <span>ADJUSTMENTS</span>
          </div>
          <div className="space-y-1.5">
            <div>
              <div className="flex justify-between text-[7px] font-mono text-gray-400">
                <span>Color Grade</span>
                <span className="text-[#FF8A00]">LUT v4</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-0.5">
                <div className="w-[85%] h-full bg-[#FF8A00] rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[7px] font-mono text-gray-400">
                <span>VFX Render</span>
                <span className="text-brand-secondary">100%</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-0.5">
                <div className="w-full h-full bg-brand-secondary rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating 3D Metric Badge (Floats out of left container) */}
        <motion.div
          style={{ transform: 'translateZ(40px)' }}
          onMouseEnter={() => playAudio.playHover()}
          className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-6 p-2.5 bg-[#FF2D7A]/10 backdrop-blur-md border border-[#FF2D7A]/20 rounded-xl shadow-lg flex items-center gap-2 pointer-events-auto"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF2D7A] animate-pulse" />
          <div className="font-sans text-left">
            <p className="text-[7px] font-mono tracking-widest text-[#FF2D7A] font-extrabold leading-none">RETENTION ENGAGEMENT</p>
            <p className="text-xs font-display font-black text-white mt-0.5 leading-none">+180% CTR</p>
          </div>
        </motion.div>

        {/* Floating 3D Cyber-hardware Icon (Back top left) */}
        <motion.div
          style={{ transform: 'translateZ(-20px)' }}
          className="absolute top-12 -left-8 w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-secondary pointer-events-none hidden sm:flex"
        >
          <Cpu size={16} className="animate-spin" style={{ animationDuration: '8s' }} />
        </motion.div>

        {/* Interactive Audio prompt */}
        <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 z-10" id="holo-bottom-bar">
          <span className="flex items-center gap-1">
            <Volume2 size={12} className="text-brand-secondary" />
            <span>{lang === 'ar' ? "تفاعل صوتي نشط" : "Dynamic Sound Interaction"}</span>
          </span>
          <span>4K COMPOSITE</span>
        </div>
      </motion.div>
    </div>
  );

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-transparent min-h-screen flex flex-col justify-center" id="hero-section">
      {/* Dynamic ambient mesh highlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full glow-spot-secondary -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full glow-spot-gold translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Layout Area */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-start flex flex-col justify-center">
            
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-secondary text-sm font-semibold mx-auto lg:mx-0 w-fit"
              id="hero-intro-pill"
            >
              <Film size={14} />
              <span>{lang === 'ar' ? "ستوديو مونتاج وهوية سينمائية" : "Cinematic Video & Identity Studio"}</span>
            </motion.div>

            {/* Main Headline Tagline */}
            <h1
              className={`${
                lang === 'ar'
                  ? 'text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-slogan-ar'
                  : 'text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-slogan-en'
              } font-black tracking-tight text-white leading-[1.25] lg:leading-[1.15] flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 lg:gap-y-3 overflow-visible`}
              id="hero-main-title"
            >
              {sloganSegments.map((segment, idx) => {
                const variant = getDirectionVariant(idx);
                return (
                  <motion.span
                    key={idx}
                    variants={variant}
                    initial="hidden"
                    animate="visible"
                    className="inline-block origin-center whitespace-normal sm:whitespace-nowrap text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    {segment}
                  </motion.span>
                );
              })}
            </h1>

            {/* MOBILE ONLY: Stunning 3D Holographic Production Deck placed right here! */}
            <div className="block lg:hidden" id="hero-mobile-3d-deck">
              <HolographicDeck />
            </div>

            {/* Studio Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
              id="hero-description"
            >
              {shortDesc}
            </motion.p>

            {/* CTAs with playAudio interaction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              id="hero-cta-group"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  playAudio.playClick();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                onMouseEnter={() => playAudio.playHover()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white font-extrabold text-base shadow-xl hover:opacity-95 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                id="hero-cta-whatsapp"
              >
                <Send size={18} />
                <span>{siteConfig.copy.hero.ctaPrimary[lang]}</span>
              </a>

              <a
                href="#work"
                onClick={() => playAudio.playClick()}
                onMouseEnter={() => playAudio.playHover()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
                id="hero-cta-portfolio"
              >
                <span>{siteConfig.copy.hero.ctaSecondary[lang]}</span>
              </a>
            </motion.div>

            {/* Micro assurances trust row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10"
              id="hero-trust-indicators"
            >
              <motion.div 
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF2D7A]/40 hover:bg-[#FF2D7A]/5 transition-all duration-300 shadow-md"
              >
                <div className="p-2 rounded-xl bg-[#FF2D7A]/15 text-[#FF2D7A] shrink-0">
                  <Shield size={18} />
                </div>
                <div className="text-right sm:text-start">
                  <p className="text-xs font-bold text-white leading-tight">
                    {lang === 'ar' ? "حقوق تجارية كاملة للمقاطع" : "100% Commercial Rights"}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {lang === 'ar' ? "أمان قانوني مطلق للمحتوى" : "Complete copyright security"}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF8A00]/40 hover:bg-[#FF8A00]/5 transition-all duration-300 shadow-md"
              >
                <div className="p-2 rounded-xl bg-[#FF8A00]/15 text-[#FF8A00] shrink-0">
                  <Clock size={18} />
                </div>
                <div className="text-right sm:text-start">
                  <p className="text-xs font-bold text-white leading-tight">
                    {lang === 'ar' ? "تعديلات واضحة وسريعة" : "Fast Precise Revisions"}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {lang === 'ar' ? "تعديلات فورية ودقيقة" : "Direct & responsive adjustments"}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300 shadow-md"
              >
                <div className="p-2 rounded-xl bg-brand-purple/20 text-[#D8B4FE] shrink-0">
                  <Award size={18} />
                </div>
                <div className="text-right sm:text-start">
                  <p className="text-xs font-bold text-white leading-tight">
                    {lang === 'ar' ? "جودة تليق بقنوات المليون" : "Million-Scale Quality"}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-0.5">
                    {lang === 'ar' ? "معايير إنتاج عالمية فائقة" : "Industry-leading production"}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* DESKTOP ONLY: 3D Holographic Deck (5 columns) */}
          <div className="hidden lg:block lg:col-span-5 relative" id="hero-desktop-3d-deck">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
            >
              <HolographicDeck />
            </motion.div>
          </div>

        </div>

        {/* Mini Stats Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          id="hero-stats-row"
        >
          {statsList.map((stat, idx) => (
            <div key={idx} className="text-center md:text-start" id={`stat-item-${idx}`}>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-1 font-semibold">
                {stat.label[lang]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Showreel Lightbox Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setShowModal(false)}
            id="showreel-modal-backdrop"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full transition-all duration-200"
              aria-label="Close modal"
              id="close-showreel-modal"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              id="showreel-modal-content"
            >
              <iframe
                src={showreelEmbed}
                title="Cinematic Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                id="showreel-iframe"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
