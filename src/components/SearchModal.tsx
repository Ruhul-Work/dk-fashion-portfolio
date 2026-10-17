import React, { useState, useMemo } from 'react';
import { SAMPLE_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  currency: 'MYR' | 'USD' | 'BDT';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  currency,
}) => {
  const [query, setQuery] = useState('');

  const formatPrice = (priceMYR: number) => {
    if (currency === 'USD') return `$${(priceMYR * 0.22).toFixed(0)}`;
    if (currency === 'BDT') return `৳${(priceMYR * 27.5).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    return `RM ${priceMYR.toFixed(0)}`;
  };

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return SAMPLE_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:pt-24 text-center">
        <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl border border-stone-200 p-6">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-stone-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search suits, gowns, denim, kurung, or fabric details..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-sm font-medium text-stone-900 placeholder-stone-400 focus:outline-hidden"
              />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 max-h-96 overflow-y-auto space-y-3">
            {!query.trim() ? (
              <div className="py-8 text-center text-xs text-stone-400">
                <p>Type to search across DK MY garments, collections, or specifications.</p>
                <div className="flex justify-center gap-2 mt-3">
                  <span
                    onClick={() => setQuery('wool')}
                    className="cursor-pointer px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px]"
                  >
                    Wool
                  </span>
                  <span
                    onClick={() => setQuery('silk')}
                    className="cursor-pointer px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px]"
                  >
                    Silk
                  </span>
                  <span
                    onClick={() => setQuery('denim')}
                    className="cursor-pointer px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px]"
                  >
                    Denim
                  </span>
                  <span
                    onClick={() => setQuery('kurung')}
                    className="cursor-pointer px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-[11px]"
                  >
                    Kurung
                  </span>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-8 text-center text-xs text-stone-500">
                No matching garments found for "{query}".
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-stone-50 border border-stone-100 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-14 object-cover rounded bg-stone-100"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-amber-700">
                        {product.categoryLabel}
                      </span>
                      <h4 className="text-xs font-serif font-medium text-stone-900">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {product.fabricDetails}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-semibold text-stone-900 tabular-nums">
                      {formatPrice(product.priceMYR)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-stone-400" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
