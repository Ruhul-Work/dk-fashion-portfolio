/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ScrollingMarquee } from './components/ScrollingMarquee';
import { TrustProofSection } from './components/TrustProofSection';
import { ThreeDStudio } from './components/ThreeDStudio';
import { CategorySection } from './components/CategorySection';
import { ProductShowcase } from './components/ProductShowcase';
import { EcommerceComingSoon } from './components/EcommerceComingSoon';
import { LookbookGallery } from './components/LookbookGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { Product, CartItem, Language } from './types';
import { MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from './data/products';
import { CART_ENABLED } from './config';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<'MYR' | 'USD' | 'BDT'>('MYR');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('dk_cart_items');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch {
      // Ignore invalid or unavailable stored cart data.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('dk_cart_items', JSON.stringify(cartItems));
    } catch {
      // Ignore unavailable local storage.
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, size: string, color: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedSize === size && it.selectedColor === color
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (
    productId: string,
    size: string,
    color: string,
    delta: number
  ) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size && item.selectedColor === color) {
            const quantity = item.quantity + delta;
            return quantity > 0 ? { ...item, quantity } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, size: string, color: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size && item.selectedColor === color)
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const elem = document.getElementById('products');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-stone-900 selection:text-white">
      {/* Top Banner Notice: E-Commerce in Progress */}
      <div className="bg-stone-950 text-stone-200 text-xs py-2 px-4 text-center border-b border-stone-800">
        <span className="font-light tracking-wide">
          {language === 'bn'
            ? 'ডিকে ফ্যাশন মালয়েশিয়া পোর্টফোলিও — ই-কমার্স শীঘ্রই আসছে'
            : 'DK Fashion MY Atelier Portfolio & Catalog — Online E-Commerce Checkout Launching Soon'}
        </span>
      </div>

      {/* Main Top Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        language={language}
        onToggleLanguage={setLanguage}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section (Clean, Modern, 3D Interactive) */}
        <Hero
          language={language}
          onExploreClick={() => handleScrollTo('categories')}
          onComingSoonClick={() => handleScrollTo('coming-soon')}
          onOpen3DStudio={() => handleScrollTo('3d-studio')}
        />

        {/* 2. Scrolling Marquee Kinetic Ticker 1 */}
        <div className="mt-4">
          <ScrollingMarquee speed={30} />
        </div>

        {/* 3. Category Section with 3D Tilt Cards */}
        <CategorySection
          language={language}
          onSelectCategory={handleCategorySelect}
        />

        {/* 4. Flagship Interactive 3D Studio & Garment Architecture */}
        <ThreeDStudio
          language={language}
          onExploreProducts={() => handleScrollTo('products')}
        />

        {/* 5. Sample Products Dynamic Showcase with 3D Depth */}
        <ProductShowcase
          language={language}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(p) => setQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          currency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* 6. Scrolling Marquee Kinetic Ticker 2 (Reverse Flow) */}
        <ScrollingMarquee speed={36} reverse={true} />

        {/* 7. E-Commerce Coming Soon Section */}
        <EcommerceComingSoon
          language={language}
          onOpenCartPreview={() => setIsCartOpen(true)}
        />

        {/* 7. Static Image Lookbook & Craftsmanship Gallery */}
        <LookbookGallery language={language} />

        {/* 8. Compact Colorful Trust & Provenance Bar (100% Authentic, 24/7 Support, MY & BD, 04 Capsules) */}
        <TrustProofSection language={language} />

        {/* 9. Address & Contact Section */}
        <ContactSection language={language} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button for rapid customer engagement */}
      <a
        href={BRAND_DETAILS.contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105"
        aria-label="Direct WhatsApp Atelier Chat"
        title="Chat with DK MY Atelier on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Modals */}
      {CART_ENABLED && (
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          currency={currency}
        />
      )}

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setQuickViewProduct(p)}
        currency={currency}
      />
    </div>
  );
}
