import React, { useState } from 'react';
import { CalendarDays, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';
import { Language } from '../types';
import { CART_ENABLED } from '../config';

interface EcommerceComingSoonProps {
  language: Language;
  onOpenCartPreview: () => void;
}

export const EcommerceComingSoon: React.FC<EcommerceComingSoonProps> = ({
  language,
  onOpenCartPreview,
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setSubscribed(true);
  };

  return (
    <section id="coming-soon" className="py-20 lg:py-28 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Subtle luxury ambient texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-8 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Countdown / Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-400">
                <CalendarDays className="w-4 h-4" />
                <span>Coming Soon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight [text-wrap:balance]">
                {language === 'bn' ? (
                  <>
                    ই-কমার্স ডিরেক্ট চেকআউট <br />
                    <span className="italic text-stone-300">শীঘ্রই চালু হচ্ছে (Coming Soon)</span>
                  </>
                ) : language === 'ms' ? (
                  <>
                    Pembelian Dalam Talian <br />
                    <span className="italic text-stone-300">Akan Datang (Coming Soon)</span>
                  </>
                ) : (
                  <>
                    Direct Online Storefront <br />
                    <span className="italic text-stone-300">E-Commerce Launching Soon</span>
                  </>
                )}
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                {language === 'bn'
                  ? 'আমরা dkfashionmy.com ওয়েবসাইটে পূর্ণাঙ্গ নিরাপদ ই-কমার্স চেকআউট সিস্টেম সংযুক্ত করছি। খুব শীঘ্রই ওয়েবসাইট থেকেই সরাসরি পেমেন্ট ও অর্ডার সম্পন্ন করা যাবে। আপাতত আমাদের সকল ডিজাইন প্রদর্শিত রয়েছে এবং যেকোনো অর্ডারের জন্য WhatsApp এর মাধ্যমে সরাসরি যোগাযোগ করতে পারেন।'
                  : language === 'ms'
                  ? 'Kami sedang menyediakan gerbang pembayaran selamat dan sistem e-dagang penuh untuk laman web dkfashionmy.com. Sementara sistem sedang disiapkan, anda boleh melihat katalog dan membuat pesanan pantas melalui WhatsApp rasmi kami.'
                  : 'We are engineering a seamless, bank-grade digital shopping experience for dkfashionmy.com. Soon you can customize measurements, securely pay via Malaysian FPX, cards or mobile wallets, and receive express global doorstep delivery.'}
              </p>

              {/* Countdown / Launch Teaser Grid */}
              <div className="pt-2">
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-3 font-medium">
                  Public Gateway Launch Countdown
                </p>
                <div className="grid grid-cols-4 gap-3 max-w-sm text-center">
                  <div className="bg-stone-900 border border-stone-800 p-2.5 rounded">
                    <span className="block text-2xl font-serif text-white font-medium tabular-nums">24</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">Days</span>
                  </div>
                  <div className="bg-stone-900 border border-stone-800 p-2.5 rounded">
                    <span className="block text-2xl font-serif text-white font-medium tabular-nums">14</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">Hours</span>
                  </div>
                  <div className="bg-stone-900 border border-stone-800 p-2.5 rounded">
                    <span className="block text-2xl font-serif text-white font-medium tabular-nums">38</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">Mins</span>
                  </div>
                  <div className="bg-stone-900 border border-stone-800 p-2.5 rounded">
                    <span className="block text-2xl font-serif text-white font-medium tabular-nums">52</span>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider">Secs</span>
                  </div>
                </div>
              </div>

              {/* Current interim bridge notice */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <a
                  href={BRAND_DETAILS.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-medium flex items-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Now via WhatsApp (+60 11-2384 9012)</span>
                </a>

                {CART_ENABLED && (
                  <button
                    type="button"
                    onClick={onOpenCartPreview}
                    className="px-4 py-3 rounded-md border border-stone-700 hover:border-stone-500 text-stone-200 hover:text-white transition-colors"
                  >
                    Preview Interactive Bag Demo &rarr;
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: VIP Early-Access Form & Features */}
            <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 p-6 sm:p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-lg font-serif text-white font-medium">
                  {language === 'bn' ? 'ভিআইপি লঞ্চ নোটিফিকেশন' : 'VIP Early Access Invitation'}
                </h3>
                <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                  Join the private list to receive a complimentary RM50 opening voucher and priority dispatch on launch day.
                </p>
              </div>

              {subscribed ? (
                <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-md p-4 text-emerald-200 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Invitation Confirmed!</span>
                  </div>
                  <p>
                    Thank you! We have reserved your launch voucher. Use code <strong className="font-mono text-white bg-emerald-900/80 px-1.5 py-0.5 rounded">DKVIP50</strong> during opening week.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubscribed(false)}
                    className="text-[11px] underline text-emerald-300 hover:text-white mt-1 block"
                  >
                    Enter another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-300 uppercase tracking-wider mb-1.5">
                      Email Address or WhatsApp Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. client@domain.com or +60..."
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-700 rounded-md text-white placeholder-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Reserve VIP Launch Benefit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
