import React, { useState } from 'react';
import { Maximize2, X, Instagram, ExternalLink, ArrowRight, Box, MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';
import { DK_IMAGES } from '../data/dkImages';
import { Language } from '../types';
import { ThreeDCard } from './ThreeDCard';
import { motion } from 'motion/react';

interface LookbookGalleryProps {
  language: Language;
}

interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: string;
  specs: string;
  gridSpan: string;
  aspectRatio: string;
}

export const LookbookGallery: React.FC<LookbookGalleryProps> = ({ language }) => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  // Carefully architected grid layout - ZERO overlapping guarantee
  const galleryItems: GalleryItem[] = [
    {
      id: 'lb-1',
      title: 'DK NEO // 2099 "EVOLVE" Campaign',
      caption: '260 GSM combed compact cotton oversized tee styled over open water deck.',
      image: DK_IMAGES.streetwear.evolveWhiteDeck,
      category: 'Streetwear 2099',
      specs: '260 GSM • Combed Cotton • Drop Shoulder',
      gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
      aspectRatio: 'aspect-4/3 sm:aspect-16/10',
    },
    {
      id: 'lb-2',
      title: 'Cyberpunk Tokyo Hypercar & Mecha Drop',
      caption: 'High-density multi-color silkscreen artwork on deep reactive-dyed phantom black jersey.',
      image: DK_IMAGES.streetwear.futureCyberCarBlack,
      category: 'Neo Cyber Drop',
      specs: 'Tokyo Mech Graphic • Silicone Soft Wash',
      gridSpan: 'col-span-1 md:col-span-2 lg:col-span-2',
      aspectRatio: 'aspect-4/3 sm:aspect-16/10',
    },
    {
      id: 'lb-3',
      title: 'High-Waist Wide Bootcut Blueprint',
      caption: 'Waist-snatching contour cut with soft-stretch flexibility for unrestricted movement.',
      image: DK_IMAGES.denim.wideBootcutIndigo,
      category: 'Atelier Denim',
      specs: 'High Waist • Soft Stretch • Wide Hem',
      gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspectRatio: 'aspect-3/4',
    },
    {
      id: 'lb-4',
      title: '98% Cotton Knit Palazzo Lounge',
      caption: 'Featherlight textured rib knit with elastic drawcord waist for all-day comfort.',
      image: DK_IMAGES.palazzo.creamWhite,
      category: 'Loungewear',
      specs: '98% Cotton • 2% Spandex • Rib Weave',
      gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspectRatio: 'aspect-3/4',
    },
    {
      id: 'lb-5',
      title: 'Tailored Tuxedo-Stripe Athleisure',
      caption: 'Dual-stripe tuxedo track styling with zip hem gussets and tailored leg crease.',
      image: DK_IMAGES.trousers.trackpantIvoryStripe,
      category: 'Tailored Sport',
      specs: 'Tuxedo Stripe • Ankle Zip • Double Knit',
      gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspectRatio: 'aspect-3/4',
    },
    {
      id: 'lb-6',
      title: 'Samurai Bushido Water-Dragon',
      caption: 'Authentic sumi-e ink wash warrior aesthetic with blooming sakura calligraphy.',
      image: DK_IMAGES.streetwear.samuraiBushidoWhite,
      category: 'Heritage Graphic',
      specs: 'Sumi-E Ink Wash • Breathable Waterbase',
      gridSpan: 'col-span-1 md:col-span-1 lg:col-span-1',
      aspectRatio: 'aspect-3/4',
    },
  ];

  return (
    <section id="lookbook" className="py-20 lg:py-28 bg-stone-100/70 border-b border-stone-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-mono tracking-widest uppercase">
              <Box className="w-3.5 h-3.5 text-stone-900" />
              <span>3D Editorial Lookbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight">
              {language === 'bn' ? 'অ্যাটেলিয়ার ক্রাফটসম্যানশিপ ও লুকবুক' : language === 'ms' ? 'Arkib Seni & Ketukangan DK' : 'Atelier Craft & 3D Editorial Lookbook'}
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            {language === 'bn'
              ? 'ডিকে ফ্যাশনের প্রতিটি পোশাকের এডিটোরিয়াল শুট ও ক্রাফটসম্যানশিপ। ছবিতে ক্লিক করে বড় করে দেখুন।'
              : 'Cinematic visual campaign capturing our 2026/27 capsules in tactile architectural focus. Click any image to inspect high-resolution details.'}
          </p>
        </motion.div>

        {/* Clean Balanced Grid with Staggered Scroll Animations (ZERO OVERLAPPING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.gridSpan}`}
            >
              <ThreeDCard
                maxTilt={7}
                glare={true}
                scale={1.02}
                onClick={() => setActiveImage(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-900 border border-stone-200 shadow-md hover:shadow-2xl transition-all duration-300 ${item.aspectRatio}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Gradient Scrim for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Category Tag Top Left */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="absolute top-4 left-4 text-[10px] tracking-widest uppercase font-mono font-medium text-amber-300 bg-stone-950/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-stone-700"
                >
                  {item.category}
                </div>

                {/* Zoom Trigger Icon Top Right */}
                <div
                  style={{ transform: 'translateZ(30px)' }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                >
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Bottom with 3D Depth */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="absolute bottom-4 left-4 right-4 text-white"
                >
                  <span className="text-[10px] font-mono text-stone-300 block mb-0.5">
                    {item.specs}
                  </span>
                  <h3 className="text-base font-serif font-medium leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-light">
                    {item.caption}
                  </p>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </div>

        {/* Separated Social Media Section with Colorful Icons (CLEAN & DISTINCT) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 bg-gradient-to-b from-stone-900 to-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Subtle colored glow inside banner */}
          <div className="absolute top-0 right-1/4 w-80 h-32 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left info with colorful avatar */}
          <div className="flex items-center gap-4 relative z-10 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg shadow-pink-500/25 shrink-0">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">Official Social Community</span>
              </div>
              <h4 className="text-base sm:text-lg font-serif font-semibold text-white mt-0.5">
                Connect with DK Fashion Malaysia
              </h4>
              <p className="text-xs text-stone-400 mt-0.5 font-light">
                Tag <strong className="text-white font-medium">#DKFashionMY</strong> & <strong className="text-white font-medium">#DKSmartGarments</strong> to be featured on our official feeds.
              </p>
            </div>
          </div>

          {/* Right Action Buttons with Vibrant Colorful Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 shrink-0">
            {/* Instagram - Vibrant Sunset Gradient */}
            <a
              href={BRAND_DETAILS.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 shadow-md shadow-pink-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>

            {/* TikTok - Cyber Black & Neon Cyan */}
            <a
              href={BRAND_DETAILS.socials.tiktok}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-stone-900 hover:bg-stone-850 border border-cyan-400/50 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 flex items-center justify-center text-[9px] font-bold text-stone-950">
                ♪
              </span>
              <span>TikTok</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>

            {/* Facebook - Royal Blue */}
            <a
              href={BRAND_DETAILS.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1877F2] hover:bg-[#166fe5] shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span className="font-bold text-xs">f</span>
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>

            {/* WhatsApp - Emerald Green */}
            <a
              href={BRAND_DETAILS.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
              <ExternalLink className="w-3 h-3 text-white/80" />
            </a>
          </div>
        </motion.div>

      </div>

      {/* Lightbox Modal with High-Res Zoom */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md p-4 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-2 text-stone-400 hover:text-white rounded-full bg-stone-900/90 border border-stone-800 transition-colors z-50"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[72vh] w-auto object-contain rounded-xl shadow-2xl border border-stone-800"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center text-white max-w-lg space-y-1">
              <span className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-semibold">
                {activeImage.category} • {activeImage.specs}
              </span>
              <h3 className="text-xl font-serif font-medium">{activeImage.title}</h3>
              <p className="text-xs text-stone-300 font-light">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
