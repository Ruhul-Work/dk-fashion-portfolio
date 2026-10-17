import React, { useState } from 'react';
import { Product } from '../types';
import { X, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';
import { CART_ENABLED } from '../config';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string) => void;
  currency: 'MYR' | 'USD' | 'BDT';
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  currency,
}) => {
  if (!product) return null;

  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Standard');
  const [added, setAdded] = useState(false);

  React.useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setSelectedSize(product.sizes[0] || 'M');
      setSelectedColor(product.colors[0]?.name || 'Standard');
    }
  }, [product]);

  const formatPrice = (priceMYR: number) => {
    if (currency === 'USD') return `$${(priceMYR * 0.22).toFixed(0)}`;
    if (currency === 'BDT') return `৳${(priceMYR * 27.5).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    return `RM ${priceMYR.toFixed(0)}`;
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello DK MY Atelier,\nI am inquiring about:\n*Product:* ${product.name} (SKU: ${product.sku})\n*Price:* RM ${product.priceMYR}\n*Size:* ${selectedSize}\n*Color:* ${selectedColor}\n\nPlease let me know availability for tailoring or delivery.`
    );
    window.open(`https://wa.me/${BRAND_DETAILS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl border border-stone-200">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 text-stone-400 hover:text-stone-900 bg-white/80 rounded-full hover:bg-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Left */}
            <div className="p-6 bg-stone-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
              <div className="aspect-4/5 rounded-lg overflow-hidden bg-stone-200 relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Thumbnails */}
              {product.gallery.length > 1 && (
                <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
                  {product.gallery.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className={`w-14 h-14 rounded overflow-hidden border-2 transition-all ${
                        selectedImage === img ? 'border-stone-900 shadow-xs' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details Right */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>{product.sku}</span>
                  <span className="font-sans uppercase tracking-wider text-[10px] text-amber-700 font-semibold">
                    {product.categoryLabel}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-medium text-stone-900 leading-snug">
                  {product.name}
                </h3>

                <div className="text-xl font-mono font-semibold text-stone-950 tabular-nums">
                  {formatPrice(product.priceMYR)}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Fabric Specifications */}
                <div className="bg-stone-50 p-3 rounded border border-stone-200 text-xs space-y-1">
                  <div className="text-stone-500 font-mono uppercase text-[10px]">Composition & Fit</div>
                  <div className="text-stone-800 font-medium">{product.fabricDetails}</div>
                  <div className="text-stone-600 text-[11px]">Cut: {product.fit}</div>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-600 mb-2">
                    Color: <span className="font-normal text-stone-900">{selectedColor}</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === c.name ? 'border-stone-900 scale-110 shadow-xs' : 'border-stone-200'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      >
                        {selectedColor === c.name && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-stone-600">
                      Size: <span className="font-normal text-stone-900">{selectedSize}</span>
                    </label>
                    <span className="text-[10px] text-stone-400">Standard Asian / European Fit</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors ${
                          selectedSize === s
                            ? 'border-stone-900 bg-stone-900 text-white'
                            : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                {CART_ENABLED && (
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-md text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    {added ? 'Added to Shopping Bag' : `Add to Bag (${formatPrice(product.priceMYR)})`}
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via Atelier WhatsApp</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Authentic Garment Warranty · Hand-Inspected in Malaysia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
