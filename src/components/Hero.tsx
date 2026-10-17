import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownRight, MessageCircle, Box } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';
import { DK_IMAGES } from '../data/dkImages';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onExploreClick: () => void;
  onComingSoonClick: () => void;
  onOpen3DStudio?: () => void;
}

interface HeroShowcaseItem {
  id: string;
  categoryName: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  descriptionEn: string;
  descriptionBn: string;
  image: string;
  specs: string[];
  priceMYR: number;
  highlightGradient: string;
  glowAura: string;
}

const HERO_ITEMS: HeroShowcaseItem[] = [
  {
    id: 'hero-1',
    categoryName: 'Cyber Streetwear',
    titleEn: 'DK NEO  2099',
    titleBn: 'ডিকে নিও ২০৯৯',
    subtitleEn: 'Evolve Cyborg Edition',
    subtitleBn: 'ইভলভ হেভিওয়েট টি',
    descriptionEn: 'Flagship streetwear oversized graphic tee crafted from 260 GSM ultra-compact combed cotton. Features the iconic cybernetic cyborg profile print with Tokyo anime insignia and an anti-sag bound collar.',
    descriptionBn: 'ডিকে ফ্যাশনের ফ্ল্যাগশিপ ২৬০ GSM আল্ট্রা-কমপ্যাক্ট কোম্বড কটন ওভারসাইজড টি-শার্ট। আইকনিক সাইবারপাঙ্ক সাইবর্গ প্রোফাইল প্রিন্ট এবং রিল্যাক্সড ড্রপ-শোল্ডার সিলুয়েট।',
    image: DK_IMAGES.streetwear.evolveWhiteDeck,
    specs: ['260 GSM Combed Cotton', 'Drop-Shoulder Boxy Silhouette', 'High-Density Discharge Silkscreen', 'Anti-Sag Bound Collar'],
    priceMYR: 149,
    highlightGradient: 'from-amber-700 via-orange-700 to-amber-800',
    glowAura: 'rgba(245, 158, 11, 0.22)',
  },
  {
    id: 'hero-2',
    categoryName: 'Premium Denim',
    titleEn: 'HIGH-WAIST CONTOUR',
    titleBn: 'উইমেন্স হাই-ওয়েস্ট',
    subtitleEn: 'Wide Bootcut Denim',
    subtitleBn: 'ওয়াইড বুটকাট ডেনিম',
    descriptionEn: 'Engineered with a waist-snatching contour cut that flatters natural curves. Crafted from soft-flex breathable stretch denim with a relaxed thigh room and an elongated wide bootcut hem.',
    descriptionBn: 'শরীরের শেপকে আকর্ষণীয় রূপ দিতে ওয়েস্ট-স্ন্যাচিং হাই-রাইজ কাটিং। নরম ও স্ট্রেচেবল ডেনিম ফ্যাব্রিক, আরামদায়ক থাই রুম এবং ট্রেন্ডি ওয়াইড বুটকাট ওপেনিং।',
    image: DK_IMAGES.denim.wideBootcutIndigo,
    specs: ['Waist-Snatching Contour Cut', 'Soft-Stretch Breathable Denim', 'All-Day Unrestricted Comfort', 'Elongated Bootcut Silhouette'],
    priceMYR: 189,
    highlightGradient: 'from-sky-700 via-indigo-700 to-sky-800',
    glowAura: 'rgba(56, 189, 248, 0.22)',
  },
  {
    id: 'hero-3',
    categoryName: 'Knit Loungewear',
    titleEn: '98% COMBED COTTON',
    titleBn: '৯৮% কোম্বড কটন',
    subtitleEn: 'Knit Palazzo Trousers',
    subtitleBn: 'নিট প্যালাজো ট্রাউজার্স',
    descriptionEn: 'Elevated fine-gauge ribbed knit palazzo trousers offering luxurious ease. Features 98% cotton with 2% spandex for flexible bounce, an elastic drawcord waistband, and graceful wide-leg movement.',
    descriptionBn: '৯৮% কটন ও ২% স্প্যানডেক্সের প্রিমিয়াম রিবড নিট ফ্যাব্রিক। সামঞ্জস্যপূর্ণ ড্রস্ট্রিং ইলাস্টিক কোমর, হালকা বাতাসযুক্ত স্পর্শ এবং সারাদিন পরার মতো দারুণ আরাম।',
    image: DK_IMAGES.palazzo.creamWhite,
    specs: ['98% Cotton & 2% Spandex', 'Vertical Fine Rib Knit Drape', 'Adjustable Drawcord Waistband', 'Ultra-Soft Breathable Comfort'],
    priceMYR: 129,
    highlightGradient: 'from-rose-700 via-amber-700 to-orange-800',
    glowAura: 'rgba(251, 191, 36, 0.22)',
  },
  {
    id: 'hero-4',
    categoryName: 'Neo Cyber Drop',
    titleEn: 'NEO FUTURE HYPERCAR',
    titleBn: 'নিও ফিউচার হাইপারকার',
    subtitleEn: 'Phantom Black Tee',
    subtitleBn: 'ফ্যান্টম ব্ল্যাক ড্রপ',
    descriptionEn: 'Bold cyberpunk mecha statement tee on deep reactive jet black organic jersey. Depicts a futuristic mecha pilot and aerodynamic hypercar framed by Tokyo cyber-architecture and barcode stamp.',
    descriptionBn: 'জেট ব্ল্যাক অর্গানিক কটন ও নিওন সাইবার গ্রাফিক্সের মেলবন্ধন। ভবিষ্যৎ মেকা পাইলট এবং হাইপারকার আর্টওয়ার্কের সাথে প্রি-শ্রাঙ্ক হেভিওয়েট বক্সি ফিট।',
    image: DK_IMAGES.streetwear.futureCyberCarBlack,
    specs: ['260 GSM Heavyweight Cotton', 'Tokyo Cyber Mecha Artwork', 'Deep Reactive Jet Black Dye', 'Reinforced Drop-Shoulder Seams'],
    priceMYR: 159,
    highlightGradient: 'from-cyan-700 via-teal-700 to-amber-800',
    glowAura: 'rgba(45, 212, 191, 0.22)',
  },
];

export const Hero: React.FC<HeroProps> = ({
  language,
  onExploreClick,
  onComingSoonClick,
  onOpen3DStudio,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll tracker: smoothly updates activeIdx as user scrolls through the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Determine slice: 0, 1, 2, or 3
      const newIdx = Math.min(
        Math.floor(progress * HERO_ITEMS.length),
        HERO_ITEMS.length - 1
      );
      setActiveIdx(newIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse 3D perspective tracker for the hero card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    setTilt({
      x: -normY * 14,
      y: normX * 16,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Idle gentle float when not hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setTilt({
        x: Math.sin(Date.now() / 1500) * 3,
        y: Math.cos(Date.now() / 1800) * 4,
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeItem = HERO_ITEMS[activeIdx];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[290vh] bg-stone-50 text-stone-900"
    >
      {/* Sticky Fullscreen Presentation Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden select-none">
        
        {/* Soft Luxury Lightness Gradient Overlays (Removes the harsh pitch blackness) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fffaf0] via-[#f8f7f4] to-[#edf3f6]" />

          {/* Top-Center Soft Daylight / Champagne Spotlight */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[110px] opacity-55 transition-all duration-1000"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(254, 243, 199, 0.8) 0%, rgba(245, 158, 11, 0.18) 50%, transparent 80%)',
            }}
          />

          {/* Dynamic Active Item Color Aura (Glow behind the 3D card) */}
          <div
            className="absolute top-1/4 right-10 sm:right-1/4 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 transition-all duration-700"
            style={{ backgroundColor: activeItem.glowAura }}
          />

          {/* Left subtle warm ambient rim light */}
          <div className="absolute bottom-10 -left-20 w-[450px] h-[450px] bg-sky-200/50 rounded-full blur-[100px]" />

          {/* Clean Modern Soft Radial Sheen (Zero check lines, 100% clean luxury finish) */}
          <div className="absolute inset-0 bg-radial from-transparent via-white/10 to-white/45 pointer-events-none" />

          <svg
            aria-hidden="true"
            viewBox="0 0 360 380"
            className="absolute -right-12 -bottom-20 w-72 sm:w-96 h-auto opacity-35 blur-[0.5px]"
          >
            <defs>
              <linearGradient id="hero-flower-petal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbcfe8" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
              <linearGradient id="hero-flower-stem" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a7c7b3" />
                <stop offset="100%" stopColor="#d6c4a1" />
              </linearGradient>
            </defs>
            <path d="M178 170 C181 242 168 298 156 365" fill="none" stroke="url(#hero-flower-stem)" strokeWidth="5" strokeLinecap="round" />
            <path d="M174 260 C132 226 111 239 108 267 C138 279 157 272 174 260Z" fill="#c6d8c2" />
            <path d="M168 303 C203 265 228 276 233 301 C210 320 188 317 168 303Z" fill="#d9d1b4" />
            <g transform="translate(178 145)" fill="url(#hero-flower-petal)" stroke="#fff" strokeOpacity=".65" strokeWidth="2">
              <ellipse cy="-54" rx="28" ry="59" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(45)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(90)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(135)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(180)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(225)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(270)" />
              <ellipse cy="-54" rx="28" ry="59" transform="rotate(315)" />
              <circle r="23" fill="#f5d58a" stroke="#fff8e7" />
              <circle r="8" fill="#fff8e7" stroke="none" />
            </g>
          </svg>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 100 250"
          className="pointer-events-none absolute left-[51%] top-0 z-[5] hidden h-[250px] w-24 overflow-visible opacity-35 lg:block"
        >
          <defs>
            <radialGradient id="hero-pendant-glow">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity=".5" />
              <stop offset="60%" stopColor="#fcd34d" stopOpacity=".17" />
              <stop offset="100%" stopColor="#fef3c7" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hero-pendant-shade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf5" />
              <stop offset="55%" stopColor="#e8dcc3" />
              <stop offset="100%" stopColor="#b89b6b" />
            </linearGradient>
          </defs>
          <path d="M50 0 V162" fill="none" stroke="#8c7958" strokeOpacity=".38" strokeWidth="2" />
          <ellipse cx="50" cy="202" rx="43" ry="48" fill="url(#hero-pendant-glow)" />
          <path d="M44 160 H56 L58 172 H42 Z" fill="#c3aa7e" />
          <path d="M34 173 Q50 166 66 173 L77 195 Q50 206 23 195 Z" fill="url(#hero-pendant-shade)" stroke="#c6ad82" strokeWidth="1.5" />
          <path d="M28 193 Q50 201 72 193" fill="none" stroke="#a88b5e" strokeWidth="2" />
          <path d="M39 200 L50 229 L61 200" fill="#fcd875" fillOpacity=".2" />
          <circle cx="50" cy="198" r="4" fill="#ffe8a3" />
        </svg>

        {/* Main Central Stage (7 cols info + 5 cols 3D card) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Dynamic Content Tied to Current Scroll Item (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Dynamic Tag & Category Kicker */}
              <div className="flex flex-col items-start gap-2">
                 <div className="gradient-border-badge inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-stone-700 backdrop-blur-md shadow-sm">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="font-semibold text-stone-900">DK FASHION</span>
                   <span className="text-amber-900">EST. {BRAND_DETAILS.established}</span>
                   <span className="text-stone-400">·</span>
                   <span className="text-stone-600">KUALA LUMPUR</span>
                 </div>
                
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/75 border border-stone-300 text-stone-700 shadow-sm">
                  {activeItem.categoryName}
                </span>
              </div>

              {/* Dynamic Display Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold tracking-tight text-stone-950 leading-[1.05] transition-all duration-500">
                  {language === 'bn' ? (
                    <>
                      <span>{activeItem.titleBn}</span> <br />
                      <span className={`italic font-semibold bg-gradient-to-r ${activeItem.highlightGradient} bg-clip-text text-transparent drop-shadow-sm`}>
                        {activeItem.subtitleBn}
                      </span>
                    </>
                  ) : (
                    <>
                      <span>{activeItem.titleEn}</span> <br />
                      <span className={`italic font-semibold bg-gradient-to-r ${activeItem.highlightGradient} bg-clip-text text-transparent drop-shadow-sm`}>
                        {activeItem.subtitleEn}
                      </span>
                    </>
                  )}
                </h1>

              </div>

              {/* Dynamic Description */}
              <p className="max-w-xl text-base sm:text-lg text-stone-800 font-medium leading-relaxed transition-all duration-500">
                {language === 'bn' ? activeItem.descriptionBn : activeItem.descriptionEn}
              </p>

              {/* Specs Pills List */}
              <div className="hidden lg:flex flex-wrap gap-2 pt-1">
                {activeItem.specs.map((sp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium tracking-wide bg-white/75 border border-stone-300 text-stone-800 shadow-sm backdrop-blur-xs flex items-center gap-1.5 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{sp}</span>
                  </span>
                ))}
              </div>

              {/* Mobile Garment Image replaces the desktop specs list */}
              <div className="lg:hidden relative w-full max-w-sm mx-auto aspect-[4/3] overflow-hidden rounded-2xl border border-white/90 bg-stone-200 shadow-xl shadow-stone-900/15">
                <img
                  key={`mobile-${activeItem.id}`}
                  src={activeItem.image}
                  alt={activeItem.titleEn}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 rounded-lg border border-amber-300 bg-white/95 px-3 py-1.5 text-xs font-mono font-bold text-amber-800 shadow-lg">
                  RM {activeItem.priceMYR}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 text-lg font-serif font-semibold leading-snug text-white drop-shadow-md">
                  {language === 'bn' ? activeItem.titleBn : activeItem.titleEn}
                </h3>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={onExploreClick}
                  className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-950 bg-gradient-to-r from-amber-200 via-white to-amber-300 hover:from-white hover:to-amber-200 rounded-lg border border-amber-300 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 flex items-center gap-2 active:scale-95"
                >
                  <span>{language === 'bn' ? 'কালেকশন দেখুন' : 'Explore Collections'}</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>

                {onOpen3DStudio && (
                  <button
                    type="button"
                    onClick={onOpen3DStudio}
                    className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-800 bg-white/75 hover:bg-white border border-stone-300 hover:border-amber-500 rounded-lg transition-all duration-300 backdrop-blur-md flex items-center gap-2 shadow-sm active:scale-95"
                  >
                    <Box className="w-4 h-4 text-amber-700" />
                    <span>{language === 'bn' ? '৩ডি স্টুডিও ভিউয়ার' : '3D Interactive Studio'}</span>
                  </button>
                )}

                <a
                  href={`https://wa.me/601137455473?text=Hello%20DK%20Fashion%2C%20I%20am%20inquiry%20about%20${encodeURIComponent(activeItem.titleEn)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3.5 text-xs font-medium text-stone-700 hover:text-stone-950 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Atelier Inquiry &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column: 3D Perspective Showcase Card Tied to Scroll (5 cols) */}
            <div className="hidden lg:col-span-5 lg:flex flex-col items-center justify-center">
              <div
                className="w-full max-w-md relative"
                style={{ perspective: 1400 }}
              >
                {/* 3D Tilt Card */}
                <div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
                    transformStyle: 'preserve-3d',
                    transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="relative z-10 rounded-2xl p-3 bg-gradient-to-br from-white via-stone-100 to-stone-200 border border-white/90 shadow-2xl shadow-stone-900/15 backdrop-blur-xl group cursor-grab will-change-transform"
                >
                  {/* Floating Price Badge */}
                  <div
                    style={{ transform: 'translateZ(45px)' }}
                    className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-white/95 border border-amber-300 backdrop-blur-md text-amber-800 text-xs font-mono font-bold shadow-xl"
                  >
                    RM {activeItem.priceMYR}
                  </div>

                  {/* Main Garment Image Container */}
                  <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-stone-200 border border-stone-300 shadow-inner">
                    <img
                      key={activeItem.id}
                      src={activeItem.image}
                      alt={activeItem.titleEn}
                      className="w-full h-full object-cover object-center transition-all duration-750 ease-out group-hover:scale-106 animate-in fade-in duration-500"
                    />

                    {/* Gradient Depth Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/15 to-transparent opacity-80" />

                    {/* 3D Specular Light Reflection */}
                    <div
                      style={{
                        transform: 'translateZ(20px)',
                        background: `radial-gradient(circle at ${50 + tilt.y * 2.5}% ${50 - tilt.x * 2.5}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                      }}
                      className="absolute inset-0 pointer-events-none mix-blend-overlay"
                    />

                    {/* Card Bottom Meta */}
                    <div
                      style={{ transform: 'translateZ(30px)' }}
                      className="absolute bottom-4 left-4 right-4 text-white"
                    >
                      <h3 className="text-xl font-serif font-semibold tracking-tight leading-snug drop-shadow-md">
                        {language === 'bn' ? activeItem.titleBn : activeItem.titleEn}
                      </h3>
                    </div>
                  </div>

                </div>

                {/* 3D Shadow Sheen */}
                <div
                  className="w-4/5 h-6 mx-auto rounded-full bg-amber-400/15 blur-xl -mt-2 transition-all duration-300"
                  style={{
                    transform: `translate(${tilt.y * 1.5}px, ${Math.abs(tilt.x)}px)`,
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Scroll Navigation Hint & Live Progress Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 w-full">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-300 pt-4">
            
            {/* Scroll Navigation Prompt */}
            <div className="flex items-center gap-3 text-stone-600 text-xs font-mono">
              <div className="w-5 h-8 rounded-full border border-stone-400 flex items-start justify-center p-1">
                <div className="w-1 h-1.5 rounded-full bg-amber-600 animate-bounce" />
              </div>
              <div>
                <p className="font-semibold text-stone-900 tracking-wide text-sm">
                  {language === 'bn' ? 'আরও কালেকশন দেখতে স্ক্রল করুন' : 'Scroll to explore'}
                </p>
              </div>
            </div>

            {/* Continuous Progress Bar across the 4 slides */}
            <div className="w-full sm:w-64 h-1.5 bg-stone-200 rounded-full overflow-hidden border border-stone-300">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 transition-all duration-150 shadow-[0_0_8px_#f59e0b]"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
