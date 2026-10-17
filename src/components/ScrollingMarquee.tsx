import React from 'react';

interface ScrollingMarqueeProps {
  speed?: number; // seconds for full loop
  reverse?: boolean;
}

export const ScrollingMarquee: React.FC<ScrollingMarqueeProps> = ({
  speed = 28,
  reverse = false,
}) => {
  const items = [
    { text: 'DK NEO // 2099 STREETWEAR', badge: 'NEW DROP' },
    { text: '260 GSM ULTRA-COMPACT COTTON', badge: 'HEAVYWEIGHT' },
    { text: 'HIGH-WAIST WIDE BOOTCUT DENIM', badge: 'SNATCH FIT' },
    { text: '98% COTTON KNIT PALAZZO', badge: 'ALL-DAY COMFORT' },
    { text: 'BERJAYA TIMES SQUARE • KUALA LUMPUR', badge: 'ATELIER LOT 3-22 1' },
    { text: 'DK SMART GARMENTS SDN.BHD', badge: 'MALAYSIA' },
    { text: 'JAPANESE SUMI-E & CYBERPUNK MECH ART', badge: 'EXCLUSIVE' },
    { text: 'DIRECT FACTORY TO CLIENT PRODUCTION', badge: 'CRAFT' },
  ];

  return (
    <div className="relative overflow-hidden bg-stone-900 border-y border-stone-800 py-3.5 select-none shadow-inner">
      {/* 3D Depth lighting edge */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-stone-700/60 to-transparent" />

      {/* Fade masks on left & right edges for seamless illusion */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-900 to-transparent z-10" />

      <div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {/* Quadruple repeated sequence to guarantee infinite seamless loop */}
        {[...items, ...items, ...items, ...items].map((it, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-stone-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="hover:text-amber-300 transition-colors cursor-default font-medium">
              {it.text}
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400/15 border border-amber-400/30 text-amber-300">
              {it.badge}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

