import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Laptop, Smartphone, Eye, Play, Check, 
  Send, Layers, ThumbsUp, MessageSquare, Share2, Award, 
  ExternalLink, Tv, Flame
} from 'lucide-react';
import { siteConfig } from '../config/site';
import { Language } from '../types';

interface CaseStudiesProps {
  lang: Language;
}

type TabType = 'facebook' | 'youtube' | 'thumbnails' | 'motion';

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const [activeTab, setActiveTab] = useState<TabType>('facebook');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const suite = siteConfig.brandIdentitySuite;
  const brandNameClean = suite.brandName[lang];
  const taglineClean = suite.tagline[lang];

  // Handler to scroll to contact section
  const handleStartProject = (e: MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-[#1A0B2E]/10 dark:border-white/5" id="cases">
      {/* Absolute glow highlights */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none blur-[140px] -translate-x-1/2 bg-gradient-to-r from-brand-secondary to-brand-purple" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-brand-purple dark:text-brand-secondary uppercase font-bold"
            id="brand-identity-label"
          >
            {lang === 'ar' ? "هندسة الهوية البصرية" : "BRAND VISUAL SYSTEM"}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#1A0B2E] dark:text-white" id="brand-identity-title">
            {lang === 'ar' ? "هوية بصرية فريدة من نوعها" : "Unique & Dazzling Visual Identity"}
          </h2>

          <p className="text-base sm:text-lg text-[#1A0B2E]/85 dark:text-gray-400 font-light leading-relaxed" id="brand-identity-desc">
            {lang === 'ar' 
              ? "نؤمن بأن الجمهور يبحث عن الإشباع البصري والوضوح المطلق أولاً. هنا نستعرض كيف نصمم للعلامات التجارية وقنوات السوشيال ميديا حضوراً طاغياً لا يمر مرور الكرام." 
              : "Audiences crave visual satisfaction and absolute consistency first. Discover how we build complete visual footprints that capture attention instantly."}
          </p>
        </div>

        {/* Visual Showcase Tab Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 p-1.5 bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.02] dark:border-white/5 rounded-2xl max-w-4xl mx-auto" id="brand-showcase-tabs">
          <button
            onClick={() => setActiveTab('facebook')}
            className={`flex-1 min-w-[130px] px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'facebook'
                ? 'bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white shadow-md'
                : 'text-[#1A0B2E]/70 dark:text-gray-400 hover:text-[#1A0B2E] dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.01]'
            }`}
            id="tab-btn-facebook"
          >
            <Smartphone size={16} />
            <span>{lang === 'ar' ? "صفحة فيسبوك" : "Facebook Page"}</span>
          </button>

          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex-1 min-w-[130px] px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'youtube'
                ? 'bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white shadow-md'
                : 'text-[#1A0B2E]/70 dark:text-gray-400 hover:text-[#1A0B2E] dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.01]'
            }`}
            id="tab-btn-youtube"
          >
            <Laptop size={16} />
            <span>{lang === 'ar' ? "قناة يوتيوب" : "YouTube Layout"}</span>
          </button>

          <button
            onClick={() => setActiveTab('thumbnails')}
            className={`flex-1 min-w-[130px] px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'thumbnails'
                ? 'bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white shadow-md'
                : 'text-[#1A0B2E]/70 dark:text-gray-400 hover:text-[#1A0B2E] dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.01]'
            }`}
            id="tab-btn-thumbnails"
          >
            <Eye size={16} />
            <span>{lang === 'ar' ? "الأغلفة (ثمبنيلز)" : "High-CTR Covers"}</span>
          </button>

          <button
            onClick={() => setActiveTab('motion')}
            className={`flex-1 min-w-[130px] px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === 'motion'
                ? 'bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white shadow-md'
                : 'text-[#1A0B2E]/70 dark:text-gray-400 hover:text-[#1A0B2E] dark:hover:text-white hover:bg-black/[0.02] dark:hover:bg-white/[0.01]'
            }`}
            id="tab-btn-motion"
          >
            <Sparkles size={16} />
            <span>{lang === 'ar' ? "موشن ومقدمات" : "Motion Specs"}</span>
          </button>
        </div>

        {/* Content Panel Area */}
        <div className="relative min-h-[500px]" id="brand-showcase-display">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: FACEBOOK PAGE MOCKUP */}
            {activeTab === 'facebook' && (
              <motion.div
                key="facebook-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
                id="facebook-mockup-container"
              >
                {/* Simulated Web browser header */}
                <div className="bg-black/10 dark:bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-[#1A0B2E]/10 dark:border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="mx-auto w-1/2 md:w-1/3 bg-black/10 dark:bg-white/5 rounded-full text-[10px] md:text-xs text-center text-[#1A0B2E]/60 dark:text-gray-500 py-1 font-mono truncate">
                    facebook.com/{brandNameClean.toLowerCase().replace(/[^a-z0-9]/g, '')}
                  </div>
                </div>

                {/* Cover Banner with hover preview */}
                <div className="relative aspect-[31/10] md:aspect-[3/1] bg-brand-dark overflow-hidden group">
                  <img
                    src={suite.coverUrl}
                    alt="Facebook Cover"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Widescreen visual tag */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1 text-[10px] font-mono text-brand-secondary flex items-center gap-1.5 font-bold shadow-md">
                    <Layers size={10} />
                    <span>{lang === 'ar' ? "غلاف بانورامي بدقة 4K" : "4K Panoramic Banner"}</span>
                  </div>
                </div>

                {/* Page Details section */}
                <div className="px-6 md:px-10 pb-8 pt-4 relative">
                  <div className="flex flex-col md:flex-row md:items-end justify-between -mt-16 md:-mt-24 mb-6 gap-4 border-b border-[#1A0B2E]/10 dark:border-white/5 pb-6">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6 text-center md:text-start">
                      
                      {/* Avatar Profile */}
                      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-brand-dark p-1 bg-gradient-to-tr from-[#FF2D7A] to-[#FF8A00] shadow-2xl relative z-20 overflow-hidden">
                        <img
                          src={suite.logoUrl}
                          alt="Brand Logo"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover rounded-full border-2 border-[#1A0B2E] dark:border-brand-dark"
                        />
                      </div>

                      {/* Name & verification */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                          <h3 className="text-xl md:text-2xl font-display font-black text-[#1A0B2E] dark:text-white">
                            {brandNameClean}
                          </h3>
                          {/* Verified Badge */}
                          <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md">
                            <Check size={12} className="stroke-[3.5]" />
                          </span>
                        </div>
                        <p className="text-xs md:text-sm text-brand-purple dark:text-brand-secondary font-semibold font-mono">
                          {lang === 'ar' ? "@الهوية_السينمائية" : "@PremiumVisualIdentity"}
                        </p>
                        <div className="flex items-center gap-2 justify-center md:justify-start text-xs text-gray-400 font-medium">
                          <span>145K {lang === 'ar' ? "متابع" : "Followers"}</span>
                          <span>•</span>
                          <span>210 {lang === 'ar' ? "متابع" : "Following"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Action Triggers */}
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="#contact"
                        onClick={handleStartProject}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white text-xs font-extrabold hover:opacity-95 shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        {lang === 'ar' ? "ابدأ مشروعك" : "Start Project"}
                      </a>
                      <button className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-[#1A0B2E]/10 dark:border-white/10 text-[#1A0B2E] dark:text-white hover:bg-white/10 transition-colors">
                        <MessageSquare size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Description Info and Mock Posts */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left box: page introduction */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="bg-black/5 dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 p-6 rounded-2xl space-y-4">
                        <h4 className="text-sm font-bold text-[#1A0B2E] dark:text-white border-b border-[#1A0B2E]/5 dark:border-white/5 pb-2">
                          {lang === 'ar' ? "نبذة وتفاصيل الهوية" : "About & Specs"}
                        </h4>
                        <p className="text-xs md:text-sm text-[#1A0B2E]/80 dark:text-gray-400 leading-relaxed font-light">
                          {taglineClean}
                        </p>
                        <div className="text-xs space-y-2 text-[#1A0B2E]/70 dark:text-gray-400 font-semibold font-mono">
                          <div className="flex justify-between">
                            <span>{lang === 'ar' ? "دقة الشعار:" : "Logo Resolution:"}</span>
                            <span className="text-[#1A0B2E] dark:text-white">SVG / Vector</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{lang === 'ar' ? "توزيع الألوان:" : "Primary Palette:"}</span>
                            <span className="text-brand-secondary">#FF2D7A • #FF8A00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>{lang === 'ar' ? "نوع التعديل:" : "Identity Style:"}</span>
                            <span className="text-brand-secondary">Fluid Futuristic Glass</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right box: Mock Facebook Post showing absolute visual consistency */}
                    <div className="lg:col-span-7">
                      <div className="bg-black/5 dark:bg-white/[0.01] border border-[#1A0B2E]/10 dark:border-white/5 p-6 rounded-2xl space-y-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={suite.logoUrl}
                            alt="Avatar mini"
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <span className="font-bold text-xs md:text-sm text-[#1A0B2E] dark:text-white block">{brandNameClean}</span>
                            <span className="text-[10px] text-gray-500 font-mono">Just Now • Public</span>
                          </div>
                        </div>
                        
                        <p className="text-xs md:text-sm text-[#1A0B2E]/90 dark:text-gray-300 font-light">
                          {lang === 'ar' 
                            ? "متحمسون لمشاركة تصميم الغلاف الجديد معكم! قمنا بدمج درجات النيون الفاخرة مع الأيقونات ثلاثية الأبعاد لخلق انطباع بصري استثنائي ⚡️" 
                            : "Excited to share our brand-new page design! Combining high-intensity neon gradients with 3D fluid glass textures to lock viewer engagement."}
                        </p>

                        <div className="rounded-xl overflow-hidden aspect-video relative group">
                          <img
                            src={suite.coverUrl}
                            alt="Post Media"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Social interactions */}
                        <div className="flex justify-between items-center text-xs text-gray-500 border-t border-[#1A0B2E]/5 dark:border-white/5 pt-3">
                          <button className="flex items-center gap-1.5 hover:text-brand-purple dark:hover:text-brand-secondary font-bold">
                            <ThumbsUp size={14} />
                            <span>1.2K</span>
                          </button>
                          <button className="flex items-center gap-1.5 hover:text-brand-purple dark:hover:text-brand-secondary font-bold">
                            <MessageSquare size={14} />
                            <span>48 Comments</span>
                          </button>
                          <button className="flex items-center gap-1.5 hover:text-brand-purple dark:hover:text-brand-secondary font-bold">
                            <Share2 size={14} />
                            <span>150 Shares</span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: YOUTUBE CHANNEL BLUEPRINT */}
            {activeTab === 'youtube' && (
              <motion.div
                key="youtube-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm"
                id="youtube-mockup-container"
              >
                {/* Simulated browser header */}
                <div className="bg-black/10 dark:bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-[#1A0B2E]/10 dark:border-white/5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="mx-auto w-1/2 md:w-1/3 bg-black/10 dark:bg-white/5 rounded-full text-[10px] md:text-xs text-center text-[#1A0B2E]/60 dark:text-gray-500 py-1 font-mono truncate">
                    youtube.com/c/{brandNameClean.toLowerCase().replace(/[^a-z0-9]/g, '')}
                  </div>
                </div>

                {/* YouTube Banner */}
                <div className="relative aspect-[31/10] md:aspect-[6/1] bg-brand-dark overflow-hidden">
                  <img
                    src={suite.coverUrl}
                    alt="YouTube Cover"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="px-6 md:px-10 pb-8 pt-6">
                  {/* Channel info block */}
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-start border-b border-[#1A0B2E]/10 dark:border-white/5 pb-8 mb-8">
                    <img
                      src={suite.logoUrl}
                      alt="YouTube Channel Avatar"
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white/10 shadow-xl"
                    />
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2 justify-center md:justify-start">
                        <h3 className="text-xl md:text-2xl font-display font-black text-[#1A0B2E] dark:text-white">{brandNameClean}</h3>
                        <span className="w-4.5 h-4.5 rounded-full bg-gray-500/30 flex items-center justify-center text-white">
                          <Check size={10} className="stroke-[3.5]" />
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs text-gray-400 font-mono font-medium">
                        <span>@VortexEpicChannel</span>
                        <span>•</span>
                        <span>480K {lang === 'ar' ? "مشترك" : "Subscribers"}</span>
                        <span>•</span>
                        <span>142 {lang === 'ar' ? "فيديو" : "Videos"}</span>
                      </div>
                      <p className="text-xs text-gray-500 max-w-xl font-light">
                        {taglineClean}
                      </p>
                    </div>
                    <div>
                      <button className="px-6 py-2.5 rounded-full bg-white text-black font-black text-xs hover:bg-white/90 shadow-md">
                        {lang === 'ar' ? "اشترك الآن" : "Subscribe"}
                      </button>
                    </div>
                  </div>

                  {/* YouTube Featured Player & Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Embedded Widescreen Player with backlight glow */}
                    <div className="lg:col-span-7 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-brand-purple dark:text-brand-secondary font-bold">
                        {lang === 'ar' ? "العرض السينمائي المميز" : "FEATURED CONTENT TRAILER"}
                      </h4>
                      
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${suite.longVideoId}?autoplay=0&mute=0`}
                          title="Featured Project Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>

                    {/* YouTube sidebar suggestions */}
                    <div className="lg:col-span-5 space-y-4">
                      <h4 className="text-xs font-mono tracking-widest text-gray-400 font-bold">
                        {lang === 'ar' ? "الأكثر تفاعلاً وثقة" : "POPULAR RE-UPLOADS"}
                      </h4>

                      <div className="space-y-4">
                        {suite.thumbnails.slice(0, 2).map((thumb, idx) => (
                          <div 
                            key={idx} 
                            className="flex gap-3 bg-black/5 dark:bg-white/[0.01] border border-[#1A0B2E]/5 dark:border-white/5 p-2 rounded-xl"
                          >
                            <div className="relative w-28 sm:w-36 aspect-video rounded-lg overflow-hidden bg-brand-dark flex-shrink-0">
                              <img
                                src={thumb.imageUrl}
                                alt={thumb.title[lang]}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                              <span className="absolute bottom-1 right-1 bg-black/85 text-[9px] font-mono font-bold px-1 py-0.5 rounded text-white">
                                12:45
                              </span>
                            </div>
                            <div className="space-y-1">
                              <span className="font-bold text-[11px] md:text-xs text-[#1A0B2E] dark:text-white line-clamp-2">
                                {thumb.title[lang]}
                              </span>
                              <span className="text-[10px] text-brand-secondary font-bold font-mono bg-brand-secondary/10 px-1.5 py-0.5 rounded border border-brand-secondary/15">
                                {thumb.ctr}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: HIGH-CTR THUMBNAILS GRID */}
            {activeTab === 'thumbnails' && (
              <motion.div
                key="thumbnails-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
                id="thumbnails-bento-grid"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {suite.thumbnails.map((thumb, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                    >
                      {/* Thumbnail Cover */}
                      <div className="relative aspect-video overflow-hidden bg-brand-dark">
                        <img
                          src={thumb.imageUrl}
                          alt={thumb.title[lang]}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {/* Dynamic CTR Tag */}
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white font-extrabold text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10 font-mono">
                          <Flame size={12} className="animate-pulse" />
                          <span>{thumb.ctr}</span>
                        </div>
                      </div>

                      {/* Info body */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono text-gray-500 font-bold uppercase block tracking-wider">
                            {lang === 'ar' ? `غلاف احترافي #${idx + 1}` : `High CTR Model #${idx + 1}`}
                          </span>
                          <h4 className="text-sm font-bold text-[#1A0B2E] dark:text-white line-clamp-2 leading-relaxed">
                            {thumb.title[lang]}
                          </h4>
                        </div>
                        <div className="border-t border-[#1A0B2E]/5 dark:border-white/5 pt-3 text-[11px] text-[#1A0B2E]/70 dark:text-gray-400 font-light">
                          {lang === 'ar' 
                            ? "تصميم مخصص الأبعاد، تباين لوني مدروس يضمن الصدارة في قائمة المقترحات."
                            : "Custom styling, carefully engineered color contrast and focus points to dominate feeds."}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Thumbnail call out */}
                <div className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-start">
                    <h4 className="text-lg font-bold text-[#1A0B2E] dark:text-white">{lang === 'ar' ? "تضمن ظهورك في قوائم الترشيحات" : "Never get buried in feeds again"}</h4>
                    <p className="text-xs md:text-sm text-gray-400 font-light">
                      {lang === 'ar' 
                        ? "أغلفة الفيديوهات هي العامل الأول للنقرات. نصنع أغلفة بتباين بصري حاد وتركيز هرمي على أهم كائنات الشاشة." 
                        : "Thumbnail design is the #1 driver of Click-Through Rate. We engineer highly magnetic 3D composited designs."}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    onClick={handleStartProject}
                    className="px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs shadow-md hover:bg-white/90 whitespace-nowrap cursor-pointer"
                  >
                    {lang === 'ar' ? "طلب باقة أغلفة حصرية" : "Order High-CTR Cover Package"}
                  </a>
                </div>
              </motion.div>
            )}

            {/* TAB 4: INTRO & ANIMATED ASSETS DECK */}
            {activeTab === 'motion' && (
              <motion.div
                key="motion-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                id="motion-blueprint-panel"
              >
                {/* Vertical Phone Reels View */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="text-center md:text-start">
                    <span className="text-[10px] font-mono text-brand-purple dark:text-brand-secondary font-bold uppercase tracking-widest block">
                      {lang === 'ar' ? "موشن جرافيك للهواتف" : "9:16 KINETIC ENGINE"}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#1A0B2E] dark:text-white mt-1">
                      {lang === 'ar' ? "ريلز قصيرة بهوية سينمائية" : "Cinematic Kinetic Reels"}
                    </h3>
                  </div>

                  {/* Device mockup holding video player */}
                  <div className="relative mx-auto max-w-[280px] aspect-[9/16] rounded-[40px] border-8 border-white/5 dark:border-white/10 bg-black overflow-hidden shadow-2xl">
                    {/* Speaker grill */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#1A0B2E] dark:bg-[#0c0415] rounded-full z-30 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                    {/* Content inside phone screen */}
                    <div className="w-full h-full relative z-10">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${suite.reelVideoId}?autoplay=0&mute=0`}
                        title="Reels Mobile Preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>

                {/* Right box: Design specs */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="bg-black/5 border border-[#1A0B2E]/10 dark:bg-white/[0.01] dark:border-white/5 p-6 rounded-2xl space-y-6">
                    <h4 className="text-sm font-bold text-[#1A0B2E] dark:text-white flex items-center gap-2 border-b border-[#1A0B2E]/5 dark:border-white/5 pb-3">
                      <Award size={16} className="text-brand-secondary" />
                      <span>{lang === 'ar' ? "مواصفات الفخامة البصرية" : "Identity & Animation Standards"}</span>
                    </h4>

                    {/* Specifications grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <span className="text-xs text-gray-500 font-mono block uppercase">{lang === 'ar' ? "الحركة والانتقالات:" : "Animation Mechanics:"}</span>
                        <p className="text-xs md:text-sm text-[#1A0B2E]/90 dark:text-gray-300 font-semibold leading-relaxed">
                          {lang === 'ar' 
                            ? "انتقالات ديناميكية بتوقيت مدروس (Easing Curves) يمنع الملل ويزيد الاحتفاظ." 
                            : "Dynamic motion curve easing keeping early audience retention peaking above 70%."}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs text-gray-500 font-mono block uppercase">{lang === 'ar' ? "تناسق النصوص:" : "Kinetic Typography:"}</span>
                        <p className="text-xs md:text-sm text-[#1A0B2E]/90 dark:text-gray-300 font-semibold leading-relaxed">
                          {lang === 'ar' 
                            ? "ترجمات ملونة تظهر كلمة بكلمة متناسقة صوتياً مع إيقاع سرد القصة." 
                            : "Word-by-word active subtitles synced flawlessly with dynamic auditory SFX triggers."}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs text-gray-500 font-mono block uppercase">{lang === 'ar' ? "هندسة الصوت:" : "Auditory Branding:"}</span>
                        <p className="text-xs md:text-sm text-[#1A0B2E]/90 dark:text-gray-300 font-semibold leading-relaxed">
                          {lang === 'ar' 
                            ? "تأثيرات صوتية غامرة (Swooshes, Whooshes, Risers) تعزز الخطاف البصري الأول." 
                            : "Cinematic soundscapes and specialized transition cues creating distinct subconscious trust."}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-xs text-gray-500 font-mono block uppercase">{lang === 'ar' ? "نسبة تصحيح الألوان:" : "Cinematic LUTs & Grade:"}</span>
                        <p className="text-xs md:text-sm text-[#1A0B2E]/90 dark:text-gray-300 font-semibold leading-relaxed">
                          {lang === 'ar' 
                            ? "تطبيق تدرجات الألوان الغامضة لضمان عمق دراماتيكي يجذب العين." 
                            : "Dramatic cinematic contrast LUT application ensuring immediate widescreen visual hook."}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing bundle recommendation */}
                  <div className="p-6 bg-[#FF2D7A]/5 border border-[#FF2D7A]/15 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-start">
                      <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase tracking-wider block">{lang === 'ar' ? "الباقة الشاملة الموصى بها" : "RECOMMENDED FOR SOCIAL CREATORS"}</span>
                      <h4 className="text-sm font-extrabold text-[#1A0B2E] dark:text-white">{lang === 'ar' ? "باقة المونتاج والهوية المتكاملة" : "Full Premium Edit & Branding Package"}</h4>
                    </div>
                    <a
                      href="#contact"
                      onClick={handleStartProject}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF2D7A] to-[#FF8A00] text-white text-xs font-black hover:opacity-95 shadow-md hover:scale-[1.01] cursor-pointer"
                    >
                      {lang === 'ar' ? "اطلب الآن" : "Secure Bundle"}
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
