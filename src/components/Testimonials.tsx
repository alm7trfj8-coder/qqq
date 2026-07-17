import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowRight, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Language } from '../types';

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const title = siteConfig.copy.testimonials.title[lang];
  const subtitle = siteConfig.copy.testimonials.subtitle[lang];
  const items = siteConfig.copy.testimonials.items;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-[#1A0B2E]/10 dark:border-white/5" id="testimonials">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full glow-spot-secondary -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-brand-purple dark:text-brand-secondary uppercase font-bold"
            id="testimonials-header-label"
          >
            {lang === 'ar' ? "آراء الشركاء" : "PARTNER VOICES"}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1A0B2E] dark:text-white" id="testimonials-header-title">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#1A0B2E]/80 dark:text-gray-400 font-light" id="testimonials-header-desc">
            {subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12" id="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 rounded-3xl p-8 sm:p-12 relative flex flex-col items-center text-center space-y-6 md:space-y-8 backdrop-blur-sm"
              id={`testimonial-slide-${activeIndex}`}
            >
              {/* Star ratings */}
              <div className="flex gap-1" id={`stars-rating-${activeIndex}`}>
                {Array.from({ length: items[activeIndex]?.rating || 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg sm:text-xl text-[#1A0B2E] dark:text-gray-200 leading-relaxed font-light italic max-w-2xl">
                " {items[activeIndex]?.content[lang]} "
              </blockquote>

              {/* Avatar and Credentials */}
              <div className="flex flex-col items-center space-y-2">
                <img
                  src={items[activeIndex]?.avatar}
                  alt={items[activeIndex]?.name[lang]}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-purple dark:border-brand-secondary shadow-md"
                />
                <div>
                  <h4 className="font-display font-extrabold text-[#1A0B2E] dark:text-white">
                    {items[activeIndex]?.name[lang]}
                  </h4>
                  <p className="text-xs text-[#1A0B2E]/70 dark:text-gray-500 font-semibold">
                    {items[activeIndex]?.role[lang]}
                  </p>
                  {items[activeIndex]?.channelName && (
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 bg-black/5 border border-[#1A0B2E]/10 text-brand-purple dark:bg-white/5 dark:border-white/5 dark:text-brand-secondary rounded mt-1.5 font-bold">
                      {items[activeIndex]?.channelName}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-4 mt-8" id="testimonials-controls">
            <button
              onClick={handlePrev}
              className="p-3 bg-black/5 border border-[#1A0B2E]/10 hover:bg-black/10 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 text-[#1A0B2E] dark:text-white rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
              id="testimonials-btn-prev"
            >
              {lang === 'ar' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            </button>

            {/* Slider dot indicators */}
            <div className="flex gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'bg-brand-purple dark:bg-brand-secondary w-6' : 'bg-black/15 dark:bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                  id={`testimonial-indicator-${idx}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-black/5 border border-[#1A0B2E]/10 hover:bg-black/10 dark:bg-white/5 dark:border-white/5 dark:hover:bg-white/10 text-[#1A0B2E] dark:text-white rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
              id="testimonials-btn-next"
            >
              {lang === 'ar' ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
