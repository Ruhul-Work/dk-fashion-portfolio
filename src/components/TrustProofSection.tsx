import React from 'react';
import { ShieldCheck, MessageCircle, MapPin, Layers, ArrowUpRight } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';
import { Language } from '../types';

interface TrustProofSectionProps {
  language: Language;
}

export const TrustProofSection: React.FC<TrustProofSectionProps> = ({ language }) => {
  const proofItems = [
    {
      id: 'proof-1',
      number: '100%',
      gradientText: 'from-emerald-600 via-teal-500 to-emerald-700',
      borderColor: 'hover:border-emerald-400 hover:shadow-emerald-500/10',
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      icon: <ShieldCheck className="w-5 h-5" />,
      titleEn: '100% Authentic Direct',
      titleBn: '১০০% আসল ও নিজস্ব উৎপাদন',
      subtitleEn: 'DK Smart Garments SDN.BHD',
      subtitleBn: 'ডিকে স্মার্ট গার্মেন্টস মালয়েশিয়া',
      tag: 'ORIGINAL',
    },
    {
      id: 'proof-2',
      number: '24 / 7',
      gradientText: 'from-amber-600 via-yellow-500 to-amber-700',
      borderColor: 'hover:border-amber-400 hover:shadow-amber-500/10',
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
      icon: <MessageCircle className="w-5 h-5" />,
      titleEn: '24 / 7 Client Support',
      titleBn: '২৪ / ৭ সার্বক্ষণিক ক্লায়েন্ট সেবা',
      subtitleEn: 'Atelier WhatsApp Styling',
      subtitleBn: 'হোয়াটসঅ্যাপে সাইজিং ও পরামর্শ',
      tag: 'ACTIVE',
      link: BRAND_DETAILS.contact.whatsappUrl,
    },
    {
      id: 'proof-3',
      number: 'MY & BD',
      gradientText: 'from-sky-600 via-cyan-500 to-blue-700',
      borderColor: 'hover:border-sky-400 hover:shadow-sky-500/10',
      iconBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
      icon: <MapPin className="w-5 h-5" />,
      titleEn: 'Regional Network',
      titleBn: 'আঞ্চলিক নেটওয়ার্ক ও স্টোর',
      subtitleEn: 'Times Square, Bukit Bintang KL',
      subtitleBn: 'বারজায়া টাইমস স্কয়ার, কেএল',
      tag: 'FLAGSHIP',
    },
    {
      id: 'proof-4',
      number: '04',
      gradientText: 'from-rose-600 via-pink-500 to-purple-700',
      borderColor: 'hover:border-rose-400 hover:shadow-rose-500/10',
      iconBg: 'bg-rose-50 text-rose-700 border-rose-200/80',
      icon: <Layers className="w-5 h-5" />,
      titleEn: 'Signature Capsules',
      titleBn: '০৪টি সিগনেচার কালেকশন',
      subtitleEn: '2026/27 Drop Releases',
      subtitleBn: 'স্ট্রিটওয়্যার, ডেনিম ও প্যালাজো',
      tag: 'CAPSULES',
    },
  ];

  return (
    <section className="py-10 lg:py-12 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Low-Height Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {proofItems.map((item) => {
            const isClickable = Boolean(item.link);
            const CardWrapper = isClickable ? 'a' : 'div';
            return (
              <CardWrapper
                key={item.id}
                href={item.link}
                target={item.link ? '_blank' : undefined}
                rel={item.link ? 'noreferrer' : undefined}
                className={`group relative p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-3 ${item.borderColor}`}
              >
                {/* Compact Icon Tile */}
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform ${item.iconBg}`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`font-mono font-bold text-base sm:text-lg leading-tight bg-gradient-to-r ${item.gradientText} bg-clip-text text-transparent`}>
                      {item.number}
                    </span>
                    <span className="text-[9px] font-mono tracking-wider font-semibold text-stone-600 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-xs font-semibold text-stone-900 truncate mt-0.5 group-hover:text-amber-900 transition-colors">
                    {language === 'bn' ? item.titleBn : item.titleEn}
                  </h4>

                  <p className="text-[11px] text-stone-500 truncate font-light">
                    {language === 'bn' ? item.subtitleBn : item.subtitleEn}
                  </p>
                </div>

                {isClickable && (
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                )}
              </CardWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
};
