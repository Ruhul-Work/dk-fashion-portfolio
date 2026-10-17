import React from 'react';
import { Logo } from './Logo';
import { BRAND_DETAILS } from '../data/products';
import { ArrowUp, Instagram, Facebook, MessageCircle, Music2, MapPin, Phone, Mail } from 'lucide-react';
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 text-stone-700 pt-14 pb-8 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 pb-10 border-b border-stone-300">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-3">
            <Logo size="md" />
            <h3 className="text-sm font-semibold text-stone-900 max-w-sm leading-relaxed pt-1">
              {BRAND_DETAILS.name}
            </h3>
            <p className="text-sm text-stone-600 max-w-sm leading-6">
              {BRAND_DETAILS.tagline}
            </p>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-950 hover:border-stone-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-950 hover:border-stone-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-600 hover:text-emerald-700 hover:border-emerald-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BRAND_DETAILS.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-600 hover:text-stone-950 hover:border-stone-500 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Inspiration Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
              Inspiration
            </h4>
            <ul className="space-y-3 text-sm text-stone-600">
              {['Our Story', 'Journal', 'Spaces'].map((label) => (
                <li key={label}>
                  <a href="https://dkfashionmy.com/shop" target="_blank" rel="noreferrer" className="inline-block hover:text-stone-950 hover:translate-x-0.5 transition-all">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-stone-600">
              {['Shipping', 'Returns', 'Contact'].map((label) => (
                <li key={label}>
                  <a href="https://dkfashionmy.com/shop" target="_blank" rel="noreferrer" className="inline-block hover:text-stone-950 hover:translate-x-0.5 transition-all">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
              Visit & Contact
            </h4>
            <div className="space-y-4 text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-stone-500" />
                <address className="not-italic leading-6">
                  <span className="block text-stone-900 font-medium">{BRAND_DETAILS.address.line1}</span>
                  {BRAND_DETAILS.address.line2}<br />
                  {BRAND_DETAILS.address.postcode} {BRAND_DETAILS.address.city}, {BRAND_DETAILS.address.country}
                </address>
              </div>
              <a href={`tel:${BRAND_DETAILS.contact.phone}`} className="flex items-center gap-3 hover:text-stone-950 transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-stone-500" />
                <span>{BRAND_DETAILS.contact.phoneFormatted}</span>
              </a>
              <a href={`mailto:${BRAND_DETAILS.contact.email}`} className="flex items-center gap-3 hover:text-stone-950 transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-stone-500" />
                <span className="break-all">{BRAND_DETAILS.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-600 sm:pr-16">
          <p>
            &copy; 2026 DK Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-stone-950 transition-colors flex items-center gap-1.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
