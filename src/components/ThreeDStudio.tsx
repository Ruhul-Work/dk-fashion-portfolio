import React, { useState, useRef } from 'react';
import { Box, RotateCw, Layers, BadgeCheck, ZoomIn, Check, Info, ArrowUpRight } from 'lucide-react';
import { DK_IMAGES } from '../data/dkImages';
import { BRAND_DETAILS } from '../data/products';
import { Language } from '../types';

interface ThreeDStudioProps {
  language: Language;
  onExploreProducts: () => void;
}

interface Garment3DModel {
  id: string;
  name: string;
  nameBn: string;
  category: string;
  tagline: string;
  imageFront: string;
  imageAlt: string;
  specs: {
    title: string;
    description: string;
    badge: string;
  }[];
  hotspots: {
    top: string;
    left: string;
    title: string;
    detail: string;
  }[];
  priceMYR: number;
}

const STUDIO_ITEMS: Garment3DModel[] = [
  {
    id: 'studio-1',
    name: 'DK NEO // 2099 "EVOLVE" Heavyweight Tee',
    nameBn: 'ডিকে নিও ২০৯৯ ইভলভ হেভিওয়েট টি',
    category: 'Cyber Streetwear',
    tagline: '260 GSM Ultra-Compact Combed Cotton with Future Tech Graphic',
    imageFront: DK_IMAGES.streetwear.evolveWhiteDeck,
    imageAlt: DK_IMAGES.streetwear.evolveWhiteSlate,
    specs: [
      { title: 'Textile Weight', description: '260 GSM compact combed cotton with high tensile strength', badge: 'HEAVYWEIGHT' },
      { title: 'Print Technique', description: 'Multi-layer discharge silkscreen with sharp graphic edges', badge: 'HIGH DENSITY' },
      { title: 'Neck Construction', description: 'Double-needle bound rib knit collar engineered to never sag', badge: 'ZERO SAG' },
      { title: 'Cut Architecture', description: 'Modern drop-shoulder boxy silhouette with relaxed torso ease', badge: 'BOXY FIT' },
    ],
    hotspots: [
      { top: '22%', left: '48%', title: 'Reinforced Rib Neck', detail: 'Double-needle anti-sag ribbed collar retains shape after 100+ washes.' },
      { top: '48%', left: '50%', title: 'Cyborg Profile Print', detail: 'Multi-layer discharge print feels weightless and fully breathable.' },
      { top: '78%', left: '60%', title: 'Insignia Barcode', detail: 'Authentic 2099 capsule barcode identifying DK Malaysia production.' },
    ],
    priceMYR: 149,
  },
  {
    id: 'studio-2',
    name: "DK Women's Wide Bootcut Contour Denim",
    nameBn: 'উইমেন্স ওয়াইড বুটকাট কনট্যুর ডেনিম',
    category: 'Atelier Denim',
    tagline: 'High-Waist Snatch with All-Day Flexible Stretch Opening',
    imageFront: DK_IMAGES.denim.wideBootcutIndigo,
    imageAlt: DK_IMAGES.denim.wideBootcutCharcoalGrey,
    specs: [
      { title: 'Contour Waistband', description: 'Sculpted high-waist geometry that snatches the waistline', badge: 'WAIST SNATCH' },
      { title: 'Flex Textile', description: 'Soft-stretch premium denim offering unrestricted daily movement', badge: 'SOFT STRETCH' },
      { title: 'Bootcut Opening', description: 'Balanced flare opening designed to drape elegantly over heels or sneakers', badge: 'WIDE LEG' },
      { title: 'Hardware', description: 'Solid brass riveted pockets with DK custom embossed shank button', badge: 'DURABLE' },
    ],
    hotspots: [
      { top: '15%', left: '50%', title: 'High-Waist Design', detail: 'Anatomically cut contour waist snatches and flatters your natural curves.' },
      { top: '45%', left: '35%', title: 'Soft Stretch Thigh', detail: 'Roomy relaxed fit through hip and thigh for all-day comfort.' },
      { top: '85%', left: '30%', title: 'Wide Bootcut Leg', detail: 'Contemporary wide opening creates an elongated, leg-lengthening silhouette.' },
    ],
    priceMYR: 189,
  },
  {
    id: 'studio-3',
    name: 'DK Everyday Essential Knit Palazzo',
    nameBn: 'ডিকে এভরিডে এসেনশিয়াল নিট প্যালাজো',
    category: 'Knit Loungewear',
    tagline: '98% Cotton 2% Spandex Ribbed Knit for Luxurious Ease',
    imageFront: DK_IMAGES.palazzo.creamWhite,
    imageAlt: DK_IMAGES.palazzo.heatherGrey,
    specs: [
      { title: 'Textile Composition', description: '98% Cotton & 2% Spandex breathable ribbed texture', badge: '98% COTTON' },
      { title: 'Waist Architecture', description: 'Enclosed elastic comfort waistband with adjustable self-tie cord', badge: 'DRAWSTRING' },
      { title: 'Comfort Drape', description: 'Feather-light tactile touch with graceful wide leg flow', badge: 'ALL-DAY' },
      { title: 'Versatility', description: 'Ideal for refined homewear, airport styling, and casual outings', badge: 'TIMELESS' },
    ],
    hotspots: [
      { top: '12%', left: '48%', title: 'Ribbed Elastic Waist', detail: 'Soft stretch waistband with matching drawstring allows custom fit.' },
      { top: '45%', left: '52%', title: 'Vertical Rib Knit', detail: 'Fine gauge 98% cotton texture breathes effortlessly in tropical climate.' },
      { top: '88%', left: '38%', title: 'Wide Palazzo Drape', detail: 'Generous fluid hem sweeps gracefully without clinging.' },
    ],
    priceMYR: 129,
  },
  {
    id: 'studio-4',
    name: 'DK NEO // 2099 "FUTURE" Hypercar Tee',
    nameBn: 'ডিকে নিও ২০৯৯ ফিউচার হাইপারকার টি',
    category: 'Cyber Streetwear',
    tagline: 'Phantom Black Heavyweight with Tokyo Neon Silkscreen',
    imageFront: DK_IMAGES.streetwear.futureCyberCarBlack,
    imageAlt: DK_IMAGES.streetwear.futureCyberCityBlue,
    specs: [
      { title: 'Fabric Blend', description: '100% Organic ring-spun combed cotton at 260 GSM', badge: 'ORGANIC' },
      { title: 'Graphic Art', description: 'Detailed mecha pilot and cyberpunk aerodynamic hypercar', badge: 'TOKYO CYBER' },
      { title: 'Dye Quality', description: 'Deep reactive jet black dye resists fading under washing', badge: 'COLORFAST' },
      { title: 'Drop Shoulder', description: 'Extended shoulder seam for authentic Asian streetwear drape', badge: 'DROP SHOULDER' },
    ],
    hotspots: [
      { top: '24%', left: '50%', title: 'Bold Kanji & English Logo', detail: '"FUTURE" typography framed by Tokyo cyber-architectural cues.' },
      { top: '55%', left: '50%', title: 'Hypercar & Mech Illustration', detail: 'Precision screen printed with vibrant gradient ink.' },
      { top: '80%', left: '35%', title: 'Atelier Serial Number', detail: 'Official collection 01 stamp registered to DK Fashion MY.' },
    ],
    priceMYR: 159,
  },
];

export const ThreeDStudio: React.FC<ThreeDStudioProps> = ({
  language,
  onExploreProducts,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isExploded, setIsExploded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<'front' | 'alt'>('front');
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentAngle = useRef(0);

  const activeModel = STUDIO_ITEMS[selectedIdx];

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    currentAngle.current = rotationAngle;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    // Map delta to angle (-60 to +60 deg)
    const newAngle = Math.max(-50, Math.min(50, currentAngle.current + delta * 0.4));
    setRotationAngle(newAngle);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="3d-studio"
      className="py-20 lg:py-28 bg-[#131418] text-stone-100 relative overflow-hidden border-b border-stone-800"
    >
      {/* Dynamic 4-Corner Luminous Ambient Gradient Lights */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top-Left Corner: Warm Amber & Gold Gradient Light */}
        <div className="absolute -top-36 -left-36 w-[550px] h-[550px] rounded-full blur-[130px] opacity-45 bg-[radial-gradient(circle,rgba(245,158,11,0.45)_0%,rgba(217,119,6,0.2)_45%,transparent_70%)]" />

        {/* Top-Right Corner: Electric Cyan & Sky-Blue Gradient Light */}
        <div className="absolute -top-36 -right-36 w-[550px] h-[550px] rounded-full blur-[130px] opacity-40 bg-[radial-gradient(circle,rgba(6,182,212,0.45)_0%,rgba(14,165,233,0.2)_45%,transparent_70%)]" />

        {/* Bottom-Left Corner: Vibrant Purple & Indigo Gradient Light */}
        <div className="absolute -bottom-36 -left-36 w-[550px] h-[550px] rounded-full blur-[130px] opacity-40 bg-[radial-gradient(circle,rgba(139,92,246,0.45)_0%,rgba(99,102,241,0.2)_45%,transparent_70%)]" />

        {/* Bottom-Right Corner: Radiant Rose & Magenta Gradient Light */}
        <div className="absolute -bottom-36 -right-36 w-[550px] h-[550px] rounded-full blur-[130px] opacity-40 bg-[radial-gradient(circle,rgba(244,63,94,0.45)_0%,rgba(236,72,153,0.2)_45%,transparent_70%)]" />

        {/* Smooth central radial vignette for focus */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#131418]/40 to-[#131418]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase">
              <Box className="w-3.5 h-3.5" />
              <span>Interactive 3D Atelier Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              {language === 'bn' ? (
                <>
                  পোশাকের ৩ডি ইন্টারেক্টিভ <br />
                  <span className="italic font-light text-amber-200">এক্সপ্লোরেশন ও স্পেক ইনস্পেকশন</span>
                </>
              ) : language === 'ms' ? (
                <>
                  Eksplorasi 3D Pakaian & <br />
                  <span className="italic font-light text-amber-200">Spesifikasi Ketukangan Atelier</span>
                </>
              ) : (
                <>
                  3D Garment Architecture & <br />
                  <span className="italic font-light text-amber-200">Tactile Spec Studio</span>
                </>
              )}
            </h2>
          </div>

          <p className="max-w-md text-sm text-stone-400 font-light leading-relaxed">
            {language === 'bn'
              ? 'মাউস দিয়ে পোশাকটিকে ৩ডি অ্যাঙ্গেলে ঘুরিয়ে দেখুন, হটস্পট ক্লিক করে কাপড়ের কোয়ালিটি এবং স্পেসিফিকেশন জানুন।'
              : 'Interact in real-time 3D space. Drag to rotate silhouette perspective, toggle multi-plane exploded blueprint layers, and inspect authentic fabric weave details.'}
          </p>
        </div>

        {/* Garment Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {STUDIO_ITEMS.map((item, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setActiveHotspot(null);
                  setRotationAngle(0);
                }}
                type="button"
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-400 text-stone-950 border-amber-300 shadow-lg shadow-amber-400/20 scale-102'
                    : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-stone-700 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{item.name.split('//')[1] || item.name.split(' ')[1] || item.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Interactive Stage Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 3D Stage Viewer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* 3D Viewport Controls Top Strip */}
            <div className="w-full max-w-lg mb-3 flex items-center justify-between text-xs text-stone-400 px-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveView(activeView === 'front' ? 'alt' : 'front')}
                  className="px-3 py-1 rounded bg-stone-900 border border-stone-700 hover:border-amber-400 text-stone-200 text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                >
                  <RotateCw className="w-3 h-3 text-amber-400" />
                  <span>Toggle Angle ({activeView === 'front' ? 'Primary' : 'Alternate'})</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExploded(!isExploded)}
                  className={`px-3 py-1 rounded border text-[11px] font-mono flex items-center gap-1.5 transition-colors ${
                    isExploded
                      ? 'bg-amber-400 text-stone-950 border-amber-400 font-bold'
                      : 'bg-stone-900 border-stone-700 text-stone-200 hover:border-amber-400'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>{isExploded ? 'Exploded: ON' : '3D Explode Layer'}</span>
                </button>
              </div>

              <span className="font-mono text-[11px] text-amber-300 hidden sm:inline-block">
                Drag to Rotate: {Math.round(rotationAngle)}°
              </span>
            </div>

            {/* Main 3D Card Stage with Perspective */}
            <div
              className="w-full max-w-lg relative select-none"
              style={{ perspective: 1600 }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* 3D Rotating Assembly Container */}
              <div
                style={{
                  transform: `rotateY(${rotationAngle}deg) rotateX(${isExploded ? 12 : 0}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: isDragging.current ? 'none' : 'transform 0.4s ease-out',
                }}
                className="relative rounded-2xl bg-gradient-to-b from-stone-800/90 via-stone-900 to-stone-950 p-4 border border-stone-700 shadow-2xl cursor-grab active:cursor-grabbing will-change-transform"
              >
                {/* Layer 0 (Exploded Backdrop Layer): Fabric Mesh Grid */}
                {isExploded && (
                  <div
                    style={{ transform: 'translateZ(-60px)' }}
                    className="absolute inset-2 rounded-xl border border-amber-400/30 bg-amber-500/5 p-4 flex flex-col justify-between pointer-events-none transition-all duration-500"
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
                      <span>PLANE 01: TEXTILE MATRIX</span>
                      <span>260 GSM COMBED</span>
                    </div>
                    <div className="text-center font-mono text-xs text-amber-300/60 uppercase">
                      [ CAD Silhouette Architecture Wireframe ]
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-stone-500">
                      <span>DK SMART GARMENTS MY</span>
                      <span>LOT 3-22 1</span>
                    </div>
                  </div>
                )}

                {/* Layer 1: Garment Image Card */}
                <div
                  style={{
                    transform: isExploded ? 'translateZ(40px)' : 'translateZ(0)',
                    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="relative aspect-3/4 rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shadow-inner group"
                >
                  <img
                    src={activeView === 'front' ? activeModel.imageFront : activeModel.imageAlt}
                    alt={activeModel.name}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                  />

                  {/* 3D Light reflections based on angle */}
                  <div
                    style={{
                      background: `linear-gradient(${90 + rotationAngle * 1.5}deg, rgba(255,255,255,0.18) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)`,
                    }}
                    className="absolute inset-0 pointer-events-none mix-blend-overlay"
                  />

                  {/* Hotspot Markers on the Garment */}
                  {activeModel.hotspots.map((hs, idx) => {
                    const isActive = activeHotspot === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(isActive ? null : idx);
                        }}
                        style={{
                          top: hs.top,
                          left: hs.left,
                          transform: 'translate(-50%, -50%) translateZ(25px)',
                        }}
                        className={`absolute z-30 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-lg ${
                          isActive
                            ? 'bg-amber-400 text-stone-950 ring-4 ring-amber-400/50 scale-125'
                            : 'bg-stone-950/90 text-amber-400 border border-amber-400/80 hover:scale-110 animate-pulse'
                        }`}
                        title={hs.title}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}

                  {/* Hotspot Active Detail Popover inside image */}
                  {activeHotspot !== null && (
                    <div
                      style={{ transform: 'translateZ(60px)' }}
                      className="absolute bottom-4 left-4 right-4 z-40 bg-stone-950/95 border border-amber-400/50 rounded-xl p-3.5 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-1.5">
                          <BadgeCheck className="w-3 h-3" />
                          Feature Spot 0{activeHotspot + 1}: {activeModel.hotspots[activeHotspot].title}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveHotspot(null)}
                          className="text-stone-400 hover:text-white text-xs px-1"
                        >
                          ✕
                        </button>
                      </div>
                      <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                        {activeModel.hotspots[activeHotspot].detail}
                      </p>
                    </div>
                  )}
                </div>

                {/* Layer 2 (Exploded Floating Badge Layer): Product Info */}
                {isExploded && (
                  <div
                    style={{ transform: 'translateZ(90px)' }}
                    className="absolute -top-4 -right-4 z-40 bg-amber-400 text-stone-950 px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono tracking-widest shadow-2xl"
                  >
                    PLANE 02: CAD PROTOTYPE
                  </div>
                )}
              </div>

              {/* Angle Slider Control */}
              <div className="mt-4 flex items-center gap-3 px-2">
                <span className="text-[11px] font-mono text-stone-400">-50°</span>
                <input
                  type="range"
                  min="-50"
                  max="50"
                  value={rotationAngle}
                  onChange={(e) => setRotationAngle(Number(e.target.value))}
                  className="flex-1 accent-amber-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                />
                <span className="text-[11px] font-mono text-stone-400">+50°</span>
                <button
                  type="button"
                  onClick={() => setRotationAngle(0)}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-stone-900 border border-stone-700 text-stone-300 hover:text-white"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Garment Atelier Blueprint & Specifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold">
                <span>{activeModel.category}</span>
                <span>•</span>
                <span>RM {activeModel.priceMYR}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                {language === 'bn' ? activeModel.nameBn : activeModel.name}
              </h3>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {activeModel.tagline}
              </p>
            </div>

            {/* Specification Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeModel.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-amber-400/40 transition-colors space-y-1 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-stone-200">{spec.title}</h4>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {spec.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-snug">
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Consultation / Action Row */}
            <div className="pt-4 border-t border-stone-800 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/601137455473?text=Hello%20DK%20Fashion%2C%20I%20am%20interested%20in%20inspecting%20${encodeURIComponent(activeModel.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 px-5 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 text-center flex items-center justify-center gap-2"
                >
                  <span>Inquire via Atelier WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onExploreProducts}
                  className="px-4 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-stone-300 bg-stone-900 hover:bg-stone-800 border border-stone-700 transition-colors"
                >
                  Browse Full Line
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Immediate dispatch from Berjaya Times Square Atelier, Kuala Lumpur</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
