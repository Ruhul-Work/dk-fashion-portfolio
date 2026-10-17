import React, { useState, useMemo } from 'react';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Product, Language } from '../types';
import { Eye, ShoppingBag, SlidersHorizontal, Check, Shirt } from 'lucide-react';
import { CART_ENABLED } from '../config';
import { ThreeDCard } from './ThreeDCard';

interface ProductShowcaseProps {
  language: Language;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  currency: 'MYR' | 'USD' | 'BDT';
  onCurrencyChange: (c: 'MYR' | 'USD' | 'BDT') => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  language,
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  currency,
  onCurrencyChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'low-high' | 'high-low'>('featured');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Currency multiplier approximations: 1 MYR ≈ 0.22 USD ≈ 27.5 BDT
  const formatPrice = (priceMYR: number) => {
    if (currency === 'USD') {
      return `$${(priceMYR * 0.22).toFixed(0)}`;
    }
    if (currency === 'BDT') {
      return `৳${(priceMYR * 27.5).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    }
    return `RM ${priceMYR.toFixed(0)}`;
  };

  const filterTabs = [
    { id: 'all', label: language === 'bn' ? 'সকল কালেকশন' : language === 'ms' ? 'Semua' : 'All Works' },
    { id: 'streetwear', label: language === 'bn' ? 'নিও ২০৯৯ স্ট্রিটওয়্যার' : language === 'ms' ? 'DK Neo 2099' : 'DK NEO 2099' },
    { id: 'denim', label: language === 'bn' ? 'উইমেন্স বুটকাট ডেনিম' : language === 'ms' ? 'Denim & Bootcut' : 'Bootcut & Denim' },
    { id: 'palazzo', label: language === 'bn' ? 'নিট প্যালাজো লাউঞ্জ' : language === 'ms' ? 'Palazzo Rajutan' : 'Knit Palazzo' },
    { id: 'trousers', label: language === 'bn' ? 'লাক্সারি ট্রাউজার্স' : language === 'ms' ? 'Seluar Trek' : 'Tailored Trousers' },
  ];

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'low-high') return a.priceMYR - b.priceMYR;
      if (sortBy === 'high-low') return b.priceMYR - a.priceMYR;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultSize = product.sizes[0] || 'M';
    const defaultColor = product.colors[0]?.name || 'Standard';
    onAddToCart(product, defaultSize, defaultColor);

    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-stone-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200 border border-stone-300 text-stone-700 text-xs font-mono tracking-widest uppercase mb-2">
              <Shirt className="w-3.5 h-3.5 text-amber-600" />
              <span>Direct Atelier Pieces</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight">
              {language === 'bn' ? 'নমুনা প্রোডাক্ট প্রদর্শনী' : language === 'ms' ? 'Pameran Produk Contoh' : 'Curated Atelier Showcase'}
            </h2>
          </div>

          {/* Right Toolbar: Currency Selector & Total Count */}
          <div className="flex items-center gap-4 text-xs">
            <span className="text-stone-500 font-mono">
              Showing <strong className="text-stone-900 font-semibold tabular-nums">{filteredProducts.length}</strong> items
            </span>
            <div className="flex items-center border border-stone-200 rounded-lg p-1 bg-white shadow-2xs">
              <span className="text-stone-400 px-2 uppercase text-[10px] font-semibold">Currency:</span>
              {(['MYR', 'USD', 'BDT'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                    currency === curr ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === tab.id
                    ? 'bg-stone-900 text-white shadow-md'
                    : 'bg-white border border-stone-200/80 text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder={language === 'bn' ? 'পোশাক খুঁজুন...' : 'Search DK garments...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 text-xs bg-white border border-stone-200 rounded-lg focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs bg-white border border-stone-200 rounded-lg px-3 py-1.5 shrink-0 shadow-2xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent border-none text-xs text-stone-700 focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with 3D Tilt */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-stone-200 p-8">
            <p className="text-sm text-stone-600 mb-3">No sample products match the selected criteria.</p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="text-xs uppercase font-semibold tracking-wider text-stone-900 underline hover:text-amber-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => {
              const isHovered = hoveredCardId === product.id;
              const hasAltImage = product.gallery && product.gallery.length > 1;
              const displayImage = isHovered && hasAltImage ? product.gallery[1] : product.image;

              return (
                <ThreeDCard
                  key={product.id}
                  maxTilt={10}
                  glare={true}
                  scale={1.02}
                  onClick={() => onQuickView(product)}
                  className="cursor-pointer flex flex-col bg-white rounded-xl border border-stone-200 hover:border-stone-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    onMouseEnter={() => setHoveredCardId(product.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    className="flex flex-col h-full"
                  >
                    {/* Image Container with 4:5 aspect */}
                    <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
                      <img
                        src={displayImage}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />

                      {/* 3D Elevated Category Tag Top Left */}
                      <div
                        style={{ transform: 'translateZ(25px)' }}
                        className="absolute top-3 left-3 text-[10px] tracking-wider uppercase font-mono font-medium bg-stone-950/80 text-amber-300 px-2.5 py-1 rounded backdrop-blur-xs border border-stone-800"
                      >
                        {product.categoryLabel}
                      </div>

                      {/* Alternate angle indicator badge */}
                      {hasAltImage && (
                        <div
                          style={{ transform: 'translateZ(20px)' }}
                          className="absolute top-3 right-3 text-[9px] font-mono tracking-widest text-stone-300 bg-stone-900/70 px-2 py-0.5 rounded backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {isHovered ? 'Angle 2' : 'Flip on Hover'}
                        </div>
                      )}

                      {/* Hover Action Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                          }}
                          className="px-3 py-1.5 text-[11px] font-medium text-white bg-stone-900/90 hover:bg-stone-900 rounded-md flex items-center gap-1.5 transition-colors border border-stone-700 backdrop-blur-xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-amber-300" />
                          <span>Quick View</span>
                        </button>

                        {CART_ENABLED && (
                          <button
                            type="button"
                            onClick={(e) => handleQuickAdd(product, e)}
                            className="px-3 py-1.5 text-[11px] font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-md flex items-center gap-1.5 transition-colors shadow-xs"
                          >
                            {addedProductId === product.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-800" />
                                <span>Added!</span>
                              </>
                            ) : (
                              <>
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>Add to Bag</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                      <div>
                        {/* SKU & Category text */}
                        <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono mb-1">
                          <span>{product.sku}</span>
                          <span className="text-stone-500 font-sans">{product.fit}</span>
                        </div>

                        <h3 className="text-base font-serif font-medium text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>

                        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed font-light">
                          {product.fabricDetails}
                        </p>
                      </div>

                      {/* Price & Swatches Row */}
                      <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                        <div>
                          <span className="text-sm font-semibold font-mono text-stone-900 tabular-nums">
                            {formatPrice(product.priceMYR)}
                          </span>
                        </div>

                        {/* Color Swatches */}
                        <div className="flex items-center gap-1" title="Available colors">
                          {product.colors.map((c) => (
                            <span
                              key={c.name}
                              className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
