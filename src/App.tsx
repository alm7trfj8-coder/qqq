import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import ThumbnailsWall from './components/ThumbnailsWall';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { ArrowUp } from 'lucide-react';
import { playAudio } from './utils/audio';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for magnetic fluid mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for a luxury lag-effect tracking
  const springConfig = { damping: 30, stiffness: 80, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Keep track of normalized cursor coordinates (-0.5 to 0.5) for 3D Parallax shapes
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Touch touchpoints tracking for mobile
  const [touchActive, setTouchActive] = useState(false);
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync document language, direction, and class attributes
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, [lang]);

  // Monitor screen size and track cursor/touch coordinates
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Normalize coordinates
      const normX = (e.clientX / window.innerWidth) - 0.5;
      const normY = (e.clientY / window.innerHeight) - 0.5;
      setParallax({ x: normX, y: normY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        setTouchPos({ x: touch.clientX, y: touch.clientY });
        
        // Update parallax with touch position
        const normX = (touch.clientX / window.innerWidth) - 0.5;
        const normY = (touch.clientY / window.innerHeight) - 0.5;
        setParallax({ x: normX, y: normY });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchActive(true);
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        setTouchPos({ x: touch.clientX, y: touch.clientY });
      }
    };

    const handleTouchEnd = () => {
      setTouchActive(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden bg-brand-dark text-white" id="app-root-container">
      {/* Cinematic Film Grain Overlay */}
      <div className="film-grain" id="cinematic-film-grain" />

      {/* Interactive Cursor Glow Follower (Only on desktop mouse move) */}
      {!isMobile && (
        <motion.div
          className="cursor-glow"
          style={{
            left: smoothX,
            top: smoothY,
          }}
          id="cursor-ambient-glow"
        />
      )}

      {/* Interactive Touch Glow Follower (Only on mobile touch) */}
      {isMobile && touchActive && (
        <div
          className="cursor-glow-touch"
          style={{
            left: touchPos.x,
            top: touchPos.y + window.scrollY, // match viewport scroll
          }}
          id="mobile-touch-glow"
        />
      )}

      {/* 3D Kinetic Floating Background Particles & Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" id="parallax-shapes-container">
        {/* Dynamic Shape 1: Cinematic Play Triangle (Graduated) */}
        <motion.div
          className="absolute w-24 h-24 text-brand-secondary/15 dark:text-brand-secondary/10"
          style={{
            top: '15%',
            left: '10%',
            x: parallax.x * -40,
            y: parallax.y * -40,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          id="kinetic-shape-1"
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,45,122,0.3)]">
            <polygon points="25,20 85,50 25,80" />
          </svg>
        </motion.div>

        {/* Dynamic Shape 2: Neon Glassmorphic Square */}
        <motion.div
          className="absolute w-16 h-16 border-2 border-brand-accent/20 dark:border-brand-accent/15 rounded-xl bg-brand-accent/5 backdrop-blur-[1px]"
          style={{
            top: '45%',
            right: '8%',
            x: parallax.x * 60,
            y: parallax.y * 60,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          id="kinetic-shape-2"
        />

        {/* Dynamic Shape 3: Concentric Purple Circle Ring */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border border-dashed border-brand-purple/30 dark:border-brand-purple/20 flex items-center justify-center"
          style={{
            top: '70%',
            left: '5%',
            x: parallax.x * -20,
            y: parallax.y * -20,
          }}
          id="kinetic-shape-3"
        >
          <div className="w-16 h-16 rounded-full border border-brand-secondary/20 dark:border-brand-secondary/15 animate-pulse" />
        </motion.div>

        {/* Dynamic Shape 4: Cross Pixel Grid Accent */}
        <motion.div
          className="absolute text-brand-secondary/15 dark:text-brand-purple/20 flex flex-col gap-2"
          style={{
            top: '30%',
            right: '20%',
            x: parallax.x * -30,
            y: parallax.y * -30,
          }}
          id="kinetic-shape-4"
        >
          <div className="flex gap-2"><span>+</span><span>+</span><span>+</span></div>
          <div className="flex gap-2"><span>+</span><span className="text-brand-accent">+</span><span>+</span></div>
          <div className="flex gap-2"><span>+</span><span>+</span><span>+</span></div>
        </motion.div>

        {/* Dynamic Shape 5: Floating Diamond Polygon */}
        <motion.div
          className="absolute w-12 h-12 text-brand-accent/20 dark:text-brand-accent/10"
          style={{
            top: '85%',
            right: '15%',
            x: parallax.x * 50,
            y: parallax.y * 50,
          }}
          animate={{ scale: [1, 1.1, 1], rotate: [45, 135, 45] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          id="kinetic-shape-5"
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <polygon points="50,5 95,50 50,95 5,50" />
          </svg>
        </motion.div>
      </div>

      {/* Navigation Bar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Main content body */}
      <main id="main-content-flow" className="relative z-10">
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* Brand Scrolling Marquee */}
        <Marquee lang={lang} />

        {/* Flagship Case Studies (الهوية البصرية) */}
        <CaseStudies lang={lang} />

        {/* Curated Portfolio (أعمالنا) */}
        <Portfolio lang={lang} />

        {/* Thumbnails bento grid (أغلفة اليوتيوب) */}
        <ThumbnailsWall lang={lang} />

        {/* Services Grid (خدماتنا) */}
        <Services lang={lang} />

        {/* Process workflow timeline (رحلة العمل أو خطوات العمل) */}
        <Timeline lang={lang} />

        {/* Testimonials Carousel (آراء شركاء النجاح) */}
        <Testimonials lang={lang} />

        {/* FAQ Accordion list (الأسئلة الشائعة) */}
        <FAQ lang={lang} />

        {/* Interactive Brief questionnaire (تواصل معنا) */}
        <Contact lang={lang} />
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#140624]/90 border border-[#FF2D7A]/30 text-white shadow-[0_0_20px_rgba(255,45,122,0.3)] backdrop-blur-md cursor-pointer hover:border-[#FF2D7A] hover:text-[#FF2D7A] transition-all duration-200"
            id="back-to-top-btn"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="animate-bounce" style={{ animationDuration: '2s' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

