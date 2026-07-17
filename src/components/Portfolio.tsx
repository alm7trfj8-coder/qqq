import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Flame, Sparkles, X, Play, ArrowRight, ArrowLeft, Smartphone, Eye } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Language } from '../types';
import { playAudio } from '../utils/audio';

interface PortfolioProps {
  lang: Language;
}

// Map project IDs to professional cinematic demo YouTube video IDs
const projectVideos: Record<string, string> = {
  proj1: "ScMzIvxBSi4", // Beautiful Cinematic travel documentary
  proj2: "vT1_g9Qo46M", // Vertical mobile video (9:16)
  proj4: "L_LUpndgGPM", // Kinetic Motion graphics
  proj5: "S_6L-G-gL_U", // Futuristic Fintech/App Promo
  proj6: "kM9fK5MuxwY", // Sensory Cinematic perfume ad style (vertical-friendly)
};

export default function Portfolio({ lang }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const title = siteConfig.copy.portfolio.title[lang];
  const subtitle = siteConfig.copy.portfolio.subtitle[lang];
  const categories = siteConfig.copy.portfolio.categories;
  const projects = siteConfig.copy.portfolio.projects;

  // Filter project cards
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const handleSelectProject = (project: any) => {
    setSelectedProject(project);
    setIsPlaying(false);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-transparent relative border-t border-[#1A0B2E]/10 dark:border-white/5" id="work">
      {/* Accent glow background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full glow-spot-gold translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-brand-purple dark:text-brand-secondary uppercase font-bold"
              id="portfolio-header-label"
            >
              {lang === 'ar' ? "معرض الروائع" : "CURATED SHOWCASE"}
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1A0B2E] dark:text-white"
              id="portfolio-header-title"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#1A0B2E]/80 dark:text-gray-400 font-light"
              id="portfolio-header-desc"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 md:justify-end" id="portfolio-filter-container">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  playAudio.playClick();
                  setActiveFilter(category.id);
                }}
                onMouseEnter={() => playAudio.playHover()}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white shadow-lg shadow-brand-secondary/15 scale-[1.03]'
                    : 'bg-black/5 border border-[#1A0B2E]/10 text-[#1A0B2E]/80 hover:text-black hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10'
                }`}
                id={`filter-btn-${category.id}`}
              >
                {category.name[lang]}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid / Interactive Brand Dossier */}
        <AnimatePresence mode="wait">
          {activeFilter === 'brand' ? (
            <motion.div
              key="brand-dossier"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-10"
              id="brand-identity-dossier"
            >
              {/* Dossier Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* 1. Brand Header / Cover Row (8 Columns on Large) */}
                <div className="lg:col-span-8 flex flex-col justify-between bg-white/[0.01] dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md group hover:border-[#FF2D7A]/20 transition-all duration-300">
                  <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full glow-spot-purple opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  
                  {/* Top content */}
                  <div className="relative z-10 space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-secondary/15 border border-brand-secondary/30 text-brand-secondary text-xs font-mono font-bold rounded-full">
                      <Sparkles size={12} className="text-brand-secondary" />
                      <span>{lang === 'ar' ? "هوية بصرية كاملة" : "Complete Brand Identity Showcase"}</span>
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-[#1A0B2E] dark:text-white">
                      {siteConfig.brandIdentitySuite.brandName[lang]}
                    </h3>
                    <p className="text-sm sm:text-base text-[#1A0B2E]/85 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                      {siteConfig.brandIdentitySuite.tagline[lang]}
                    </p>
                  </div>

                  {/* Logo & Cover preview side-by-side inside cell */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-8 relative z-10 items-center">
                    {/* App Logo with luxury metallic glowing round plate */}
                    <div className="sm:col-span-4 flex justify-center sm:justify-start">
                      <motion.div 
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        onMouseEnter={() => playAudio.playHover()}
                        className="relative w-28 h-28 rounded-3xl bg-gradient-to-tr from-[#7B1FA2] via-[#FF2D7A] to-[#FF8A00] p-0.5 shadow-2xl shadow-brand-purple/20"
                      >
                        <div className="w-full h-full rounded-[22px] overflow-hidden bg-[#0F051C]">
                          <img 
                            src={siteConfig.brandIdentitySuite.logoUrl} 
                            alt="Logo Visual" 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover brightness-95" 
                          />
                        </div>
                        {/* Metallic gloss layer */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-3xl" />
                      </motion.div>
                    </div>

                    {/* Cover Banner Mockup */}
                    <div className="sm:col-span-8">
                      <div className="relative aspect-[16/6] rounded-2xl overflow-hidden border border-[#1A0B2E]/10 dark:border-white/10 bg-black shadow-lg">
                        <img 
                          src={siteConfig.brandIdentitySuite.coverUrl} 
                          alt="Channel Cover Banner" 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center p-4">
                          <div className="text-left text-white space-y-0.5 font-sans" dir="ltr">
                            <p className="text-[9px] font-mono tracking-widest text-[#FF2D7A] font-extrabold">YOUTUBE HEADER BRAND</p>
                            <p className="text-sm font-display font-black leading-none">VORTEX APEX</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Vertical Reel Mobile Frame (4 Columns on Large) */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center bg-white/[0.01] dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 rounded-3xl p-6 relative overflow-hidden backdrop-blur-md group hover:border-[#FF2D7A]/20 transition-all duration-300">
                  <div className="space-y-4 w-full text-center mb-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-[10px] font-mono font-bold rounded-full">
                      <Smartphone size={10} />
                      <span>{lang === 'ar' ? "مقاطع ريلز قصيرة" : "9:16 vertical shorts"}</span>
                    </span>
                    <h4 className="text-base font-display font-bold text-[#1A0B2E] dark:text-white">
                      {lang === 'ar' ? "المظهر والمونتاج على الجوال" : "Mobile Fluidity"}
                    </h4>
                  </div>

                  {/* Simulated Mobile Device Frame */}
                  <div 
                    onMouseEnter={() => playAudio.playHover()}
                    className="relative w-full max-w-[200px] aspect-[9/18] rounded-[28px] border-4 border-black dark:border-white/10 bg-[#0F051C] shadow-2xl overflow-hidden group/phone"
                  >
                    {/* Camera Notch */}
                    <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20" />
                    
                    {/* Live Auto-playing Muted YouTube Video */}
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${siteConfig.brandIdentitySuite.reelVideoId}?autoplay=1&mute=1&loop=1&playlist=${siteConfig.brandIdentitySuite.reelVideoId}&controls=0&modestbranding=1&rel=0`}
                      className="w-full h-full object-cover pointer-events-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      referrerPolicy="no-referrer"
                    />

                    {/* Overlay dynamic text */}
                    <div className="absolute bottom-4 left-3 right-3 z-10 pointer-events-none font-sans text-left space-y-1" dir="ltr">
                      <div className="inline-block px-1.5 py-0.5 bg-[#FF2D7A] text-[7px] text-white font-extrabold rounded">LIVE PREVIEW</div>
                      <p className="text-[10px] font-black text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">Dynamic Caption Editing</p>
                    </div>
                  </div>
                </div>

                {/* 3. Widescreen Widescreen Video Player (8 Columns on Large) */}
                <div className="lg:col-span-8 bg-white/[0.01] dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md group hover:border-[#FF2D7A]/20 transition-all duration-300">
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-mono tracking-widest text-[#FF8A00] font-extrabold uppercase block">
                      {lang === 'ar' ? "فيديو عينة عالي الدقة (4K)" : "4K WIDESCREEN CINEMATIC CUT"}
                    </span>
                    <h4 className="text-lg sm:text-xl font-display font-extrabold text-[#1A0B2E] dark:text-white">
                      {lang === 'ar' ? "المونتاج الطويل وتجربة سرد القصة" : "Narrative & Long-Form Video Asset"}
                    </h4>
                  </div>

                  {/* Cinema Frame with real live embed */}
                  <div 
                    onMouseEnter={() => playAudio.playHover()}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-[#1A0B2E]/10 dark:border-white/10 bg-black shadow-lg"
                  >
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${siteConfig.brandIdentitySuite.longVideoId}?autoplay=0&mute=1&rel=0&modestbranding=1&controls=1`}
                      title="Widescreen Project Preview"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      className="w-full h-full absolute inset-0"
                    />
                  </div>
                </div>

                {/* 4. Thumbnails Grid List (4 Columns on Large) */}
                <div className="lg:col-span-4 bg-white/[0.01] dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-md group hover:border-[#FF2D7A]/20 transition-all duration-300">
                  <div className="space-y-3 mb-4">
                    <span className="text-xs font-mono tracking-widest text-brand-secondary font-extrabold uppercase block">
                      {lang === 'ar' ? "تصميم الصور المصغرة" : "HIGH-CTR CLICK GENERATORS"}
                    </span>
                    <h4 className="text-base font-display font-bold text-[#1A0B2E] dark:text-white">
                      {lang === 'ar' ? "أغلفة الفيديوهات ذوات النقرات العالية" : "CTR Masterpieces"}
                    </h4>
                  </div>

                  {/* Embedded Thumbnail items stack */}
                  <div className="space-y-3 flex-grow">
                    {siteConfig.brandIdentitySuite.thumbnails.map((item, idx) => (
                      <div 
                        key={idx}
                        onMouseEnter={() => playAudio.playHover()}
                        onClick={() => {
                          playAudio.playClick();
                          setSelectedProject({
                            id: `suite-thumb-${idx}`,
                            title: item.title,
                            category: 'thumbnail',
                            result: { ar: item.ctr, en: item.ctr },
                            desc: { ar: "غلاف فيديو مدمج باحترافية وتعديل إضاءة فاقع يضمن تصدر الاقتراحات ومضاعفة النقرات.", en: "Expert photo compositing with saturated neon highlights ensuring maximum homepage recommendations." },
                            mediaUrl: item.imageUrl,
                            tags: { ar: ["تصميم أغلفة", "ثمبنيلز"], en: ["Thumbnail", "Cover Asset"] }
                          });
                        }}
                        className="flex gap-3 p-2 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 hover:bg-[#FF2D7A]/5 hover:border-[#FF2D7A]/20 cursor-pointer transition-all duration-200"
                      >
                        <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/5 bg-brand-dark">
                          <img 
                            src={item.imageUrl} 
                            alt={item.title[lang]} 
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0 flex-grow">
                          <p className="text-xs font-display font-bold text-[#1A0B2E] dark:text-white truncate">
                            {item.title[lang]}
                          </p>
                          <span className="text-[9px] font-mono text-brand-secondary font-extrabold mt-0.5">
                            {item.ctr}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-gray-500 font-mono mt-4 text-center">
                    {lang === 'ar' ? "* انقر على أي صورة مصغرة لمعاينتها بالحجم الكامل." : "* Click any thumbnail to enlarge in Ultra HD."}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="general-grid"
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              id="portfolio-grid"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    whileHover={{ y: -6 }}
                    onMouseEnter={() => playAudio.playHover()}
                    onClick={() => {
                      playAudio.playClick();
                      handleSelectProject(project);
                    }}
                    className="group relative cursor-pointer bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.02] dark:border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-[#1A0B2E]/20 dark:hover:border-white/10 transition-all duration-300"
                    id={`project-card-${project.id}`}
                  >
                    {/* Image panel */}
                    <div className="relative aspect-video overflow-hidden bg-brand-dark" id={`project-img-box-${project.id}`}>
                      <img
                        src={project.mediaUrl}
                        alt={project.title[lang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-50 group-hover:scale-105 transition-all duration-500"
                        id={`project-image-${project.id}`}
                      />
                      
                      {/* Floating Metric Result Badge */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between" id={`project-badges-${project.id}`}>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-secondary/15 border border-brand-secondary/30 text-brand-secondary text-xs font-mono font-bold rounded-full">
                          <Flame size={12} className="fill-brand-secondary" />
                          <span>{project.result[lang]}</span>
                        </span>
                        <span className="p-1.5 bg-black/60 backdrop-blur-sm rounded-lg text-white/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Play size={14} className="fill-white" />
                        </span>
                      </div>
                      
                      {/* Category Indicator overlay */}
                      <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 font-mono text-xs text-[#1A0B2E] bg-black/5 border border-[#1A0B2E]/10 dark:text-gray-400 dark:bg-brand-dark/70 dark:border-white/5 px-2 py-1 rounded">
                        {categories.find(cat => cat.id === project.category)?.name[lang].toUpperCase()}
                      </div>
                    </div>

                    {/* Info details */}
                    <div className="p-6 space-y-4" id={`project-info-${project.id}`}>
                      <h3 className="text-lg font-display font-bold text-[#1A0B2E] dark:text-white group-hover:text-brand-secondary transition-colors duration-200 line-clamp-1">
                        {project.title[lang]}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-[#1A0B2E]/80 dark:text-gray-400 font-light line-clamp-2 leading-relaxed">
                        {project.desc[lang]}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2" id={`project-tags-${project.id}`}>
                        {project.tags[lang].map((tag: string, tagIdx: number) => (
                          <span
                            key={tagIdx}
                            className="px-2.5 py-1 bg-black/5 border border-[#1A0B2E]/10 text-[#1A0B2E]/70 dark:bg-white/5 dark:border-white/5 dark:text-gray-500 text-[10px] md:text-xs font-medium rounded font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox / Case Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            onClick={handleClose}
            id="portfolio-lightbox-backdrop"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-full transition-all duration-200 z-10"
              aria-label="Close modal"
              id="close-lightbox-btn"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-brand-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
              id="portfolio-lightbox-card"
            >
              {/* Media Container with custom, professional embed logic */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {projectVideos[selectedProject.id] && isPlaying ? (
                  /* Live High-Fidelity YouTube Embed with modest branding & nocookies */
                  <div className="w-full h-full relative">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${projectVideos[selectedProject.id]}?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0&controls=1&iv_load_policy=3`}
                      title={selectedProject.title[lang]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="no-referrer"
                      className="w-full h-full absolute inset-0 rounded-2xl shadow-2xl"
                    />
                  </div>
                ) : (
                  /* Elegant placeholder poster that triggers play state */
                  <>
                    <img
                      src={selectedProject.mediaUrl}
                      alt={selectedProject.title[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover brightness-[0.4] transition-all duration-500 hover:scale-[1.01]"
                    />
                    
                    {/* Decorative play overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 cursor-pointer" onClick={() => {
                      if (projectVideos[selectedProject.id]) {
                        setIsPlaying(true);
                      }
                    }}>
                      <div className="flex justify-between items-start">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white text-xs font-mono font-bold rounded-full shadow-lg">
                          <Flame size={12} className="fill-white" />
                          <span>{selectedProject.result[lang]}</span>
                        </span>
                        <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 rounded border border-white/5">
                          {selectedProject.category === 'thumbnail' ? (lang === 'ar' ? "أعمال التصميم الإعلاني" : "Cover Presentation") : (lang === 'ar' ? "فيديو عينة للمعاينة" : "Cinema Playback Available")}
                        </span>
                      </div>

                      {selectedProject.category !== 'thumbnail' && projectVideos[selectedProject.id] ? (
                        <div className="text-center space-y-4 group">
                          <div className="w-16 h-16 rounded-full bg-brand-secondary text-brand-dark mx-auto flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                            <Play size={24} className="fill-brand-dark translate-x-0.5" />
                          </div>
                          <p className="text-xs font-mono tracking-widest text-brand-secondary uppercase font-bold">
                            {lang === 'ar' ? "انقر للمشاهدة الفورية بملء الشاشة" : "CLICK TO PLAY FULL RES CINEMA"}
                          </p>
                        </div>
                      ) : (
                        <div className="text-center space-y-2">
                          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-accent">
                            {lang === 'ar' ? "ألبوم عالي الوضوح" : "ULTRA HIGH RESOLUTION GALLERY"}
                          </span>
                        </div>
                      )}

                      <div className="flex justify-between items-end text-xs text-gray-400">
                        <span>{lang === 'ar' ? "الجودة: 4K UHD" : "Resolution: 4K UHD"}</span>
                        <span>{selectedProject.category === 'thumbnail' ? "PNG Source" : "01:45"}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Text specifications */}
              <div className="p-6 md:p-8 space-y-6 bg-[#1A0B2E] text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-white/5">
                  <div>
                    <span className="text-xs font-mono text-brand-secondary font-bold uppercase tracking-wider">
                      {categories.find(cat => cat.id === selectedProject.category)?.name[lang]}
                    </span>
                    <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                      {selectedProject.title[lang]}
                    </h3>
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber === "{{WHATSAPP}}" ? "201012345678" : siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      lang === 'ar' 
                        ? `مرحباً، أود حجز مشروع مشابه لـ: ${selectedProject.title.ar}` 
                        : `Hi! I want to request a project similar to: ${selectedProject.title.en}`
                    )}`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white text-sm font-bold shadow-md hover:opacity-95 hover:scale-[1.02] transition-all duration-200"
                  >
                    <span>{lang === 'ar' ? "اطلب مشروعاً مشابهاً" : "Order Similar Project"}</span>
                    {lang === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-mono tracking-widest text-gray-400 uppercase font-bold">
                    {lang === 'ar' ? "وصف المشروع والهدف الرقمي" : "PROJECT BRIEF & OBJECTIVES"}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed">
                    {selectedProject.desc[lang]}
                  </p>
                </div>

                {/* Specifications grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-gray-500 block">{lang === 'ar' ? "النتيجة الرقمية" : "Measurable Result"}</span>
                    <span className="text-sm font-bold text-brand-secondary">{selectedProject.result[lang]}</span>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">{lang === 'ar' ? "المنصة المستهدفة" : "Target Platform"}</span>
                    <span className="text-sm font-bold text-white">
                      {selectedProject.category === 'reels' ? 'Instagram/TikTok' : (selectedProject.category === 'thumbnail' ? 'Graphic Design Assets' : 'YouTube Platform')}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-xs text-gray-500 block">{lang === 'ar' ? "الأدوات والمؤثرات" : "Tools & FX"}</span>
                    <span className="text-sm font-bold text-brand-accent">
                      {selectedProject.category === 'thumbnail' ? 'Photoshop, Blender 3D' : 'Premiere Pro, DaVinci, Sound kit'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
