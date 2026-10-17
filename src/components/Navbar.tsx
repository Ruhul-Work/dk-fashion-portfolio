import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Globe, Search, ShoppingBag } from 'lucide-react';
import { Language } from '../types';
import { CART_ENABLED } from '../config';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  language,
  onToggleLanguage,
  onSearchClick
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#categories', label: language === 'bn' ? 'ক্যাটাগরি' : language === 'ms' ? 'Kategori' : 'Collections' },
    { href: '#products', label: language === 'bn' ? 'প্রোডাক্ট শোরুম' : language === 'ms' ? 'Produk' : 'Showcase' },
    { href: '#3d-studio', label: language === 'bn' ? '৩ডি স্টুডিও' : language === 'ms' ? 'Studio 3D' : '3D Studio' },
    { href: '#lookbook', label: language === 'bn' ? 'লুকবুক' : language === 'ms' ? 'Lookbook' : 'Lookbook' },
    { href: '#contact', label: language === 'bn' ? 'যোগাযোগ' : language === 'ms' ? 'Hubungi' : 'Contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 relative ${
          isScrolled
            ? 'bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs'
            : 'bg-stone-50 border-b border-stone-200/60'
        }`}
      >
        {/* Dynamic 3D Glowing Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-stone-200/40 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-amber-400 via-stone-800 to-amber-500 transition-all duration-150 shadow-[0_0_8px_#f59e0b]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Zone 1: Brand Wordmark / Logo */}
            <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
              <Logo size="md" />
            </a>

            {/* Zone 2: 4–5 Clean Single-Line Text Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative py-2 hover:text-stone-950 transition-colors whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-stone-900 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Utilities */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Search Button */}
              <button
                type="button"
                onClick={onSearchClick}
                className="p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100"
                aria-label="Search collection"
                title="Search collection"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangDropdown(!langDropdown)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-md transition-colors"
                  aria-label="Change language"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span className="uppercase">{language}</span>
                </button>
                {langDropdown && (
                  <div className="absolute right-0 mt-1.5 w-32 bg-white border border-stone-200 rounded-md shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        onToggleLanguage('en');
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-stone-100 ${language === 'en' ? 'font-semibold text-stone-950 bg-stone-50' : 'text-stone-600'}`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onToggleLanguage('bn');
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-stone-100 ${language === 'bn' ? 'font-semibold text-stone-950 bg-stone-50' : 'text-stone-600'}`}
                    >
                      বাংলা (Bengali)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onToggleLanguage('ms');
                        setLangDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-stone-100 ${language === 'ms' ? 'font-semibold text-stone-950 bg-stone-50' : 'text-stone-600'}`}
                    >
                      Bahasa Melayu
                    </button>
                  </div>
                )}
              </div>

              {CART_ENABLED && (
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="relative p-2.5 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-full transition-colors"
                  aria-label="View shopping bag"
                  title="View shopping bag"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-stone-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center tabular-nums shadow-xs">
                      {cartCount}
                    </span>
                  )}
                </button>
              )}

              <a
                href="#coming-soon"
                className="gradient-border-button hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-stone-900 whitespace-nowrap shrink-0"
              >
                {language === 'bn' ? 'শীঘ্রই আসছে' : language === 'ms' ? 'Akan Datang' : 'Coming Soon'}
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-800 hover:text-stone-950 hover:bg-stone-100 rounded-md"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-stone-50 border-l border-stone-200 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <Logo size="sm" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-stone-600 hover:text-stone-900 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-serif font-medium text-stone-900 hover:text-amber-800 transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200">
                <p className="text-xs font-semibold tracking-wider uppercase text-stone-400 mb-3">
                  Language / ভাষা
                </p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => onToggleLanguage('en')}
                    className={`py-2 px-1 rounded-md border ${language === 'en' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleLanguage('bn')}
                    className={`py-2 px-1 rounded-md border ${language === 'bn' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                  >
                    বাংলা
                  </button>
                  <button
                    type="button"
                    onClick={() => onToggleLanguage('ms')}
                    className={`py-2 px-1 rounded-md border ${language === 'ms' ? 'border-stone-900 bg-stone-900 text-white' : 'border-stone-200 bg-white text-stone-700'}`}
                  >
                    Melayu
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Mobile Action */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href="#coming-soon"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-border-button flex w-full items-center justify-center py-3 text-sm font-semibold tracking-wider uppercase text-stone-900"
              >
                {language === 'bn' ? 'শীঘ্রই আসছে' : language === 'ms' ? 'Akan Datang' : 'Coming Soon'}
              </a>
              <p className="text-center text-xs text-stone-500">
                Kuala Lumpur, Malaysia · Worldwide
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
