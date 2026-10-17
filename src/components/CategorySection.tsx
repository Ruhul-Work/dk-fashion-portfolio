import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowUpRight, Layers } from 'lucide-react';
import { Language } from '../types';
import { ThreeDCard } from './ThreeDCard';

interface CategorySectionProps {
  language: Language;
  onSelectCategory: (categoryId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  language,
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-stone-100/80 border-b border-stone-200 relative overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-mono tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5 text-stone-900" />
              <span>Signature Collections</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight [text-wrap:balance]">
              {language === 'bn'
                ? 'সিগনেচার ৩ডি প্রোডাক্ট কালেকশন'
                : language === 'ms'
                ? 'Koleksi Kategori Siluet 3D'
                : 'Architectural Silhouettes & Capsules'}
            </h2>
          </div>

          <p className="max-w-md text-sm text-stone-600 leading-relaxed font-light">
            {language === 'bn'
              ? 'ডিকে ফ্যাশনের প্রতিটি পোশাক নিখুঁত কাঁচামাল, উন্নত টেক্সটাইল এবং আধুনিক আভিজাত্যের সাথে অ্যাটেলিয়ারে তৈরি করা হয়েছে।'
              : 'Engineered with tactile textiles, purposeful drapery, and artisanal precision for everyday versatility and contemporary streetwear movement.'}
          </p>
        </div>

        {/* 4-Column Category Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <ThreeDCard
              key={cat.id}
              maxTilt={10}
              glare={true}
              scale={1.03}
              onClick={() => onSelectCategory(cat.id)}
              className="cursor-pointer flex flex-col bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:border-stone-400 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Category Image Container with 3D Depth */}
              <div className="relative aspect-4/5 overflow-hidden bg-stone-900">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Number Badge Top Left with 3D translateZ */}
                <div
                  style={{ transform: 'translateZ(30px)' }}
                  className="absolute top-4 left-4 px-2.5 py-1 rounded bg-stone-950/70 border border-stone-700/60 backdrop-blur-xs text-[11px] font-mono tracking-widest text-amber-300 font-bold"
                >
                  0{idx + 1}
                </div>

                {/* Arrow Action Icon Top Right with 3D translateZ */}
                <div
                  style={{ transform: 'translateZ(35px)' }}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-stone-950 group-hover:border-amber-400 transition-all duration-300 shadow-lg"
                >
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                {/* Category Caption on Image with 3D translateZ */}
                <div
                  style={{ transform: 'translateZ(25px)' }}
                  className="absolute bottom-4 left-4 right-4 text-white"
                >
                  <p className="text-[10px] tracking-widest uppercase text-amber-300 font-mono font-semibold">
                    {cat.tagline}
                  </p>
                  <h3 className="text-lg font-serif font-medium mt-1 leading-snug drop-shadow-sm">
                    {language === 'bn' ? cat.nameBn : cat.name}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content with 3D feel */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-light">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="font-mono text-[11px] text-stone-600">
                    <strong className="text-stone-900 font-semibold">{cat.itemCount}</strong> Styles
                  </span>
                  <span className="text-stone-900 group-hover:text-amber-600 transition-colors inline-flex items-center gap-1 font-semibold text-xs">
                    Explore Capsule &rarr;
                  </span>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </section>
  );
};
