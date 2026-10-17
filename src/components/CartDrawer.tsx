import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string, color: string) => void;
  onClearCart: () => void;
  currency: 'MYR' | 'USD' | 'BDT';
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Kuala Lumpur',
    paymentMethod: 'FPX'
  });

  if (!isOpen) return null;

  const formatPrice = (priceMYR: number) => {
    if (currency === 'USD') return `$${(priceMYR * 0.22).toFixed(0)}`;
    if (currency === 'BDT') return `৳${(priceMYR * 27.5).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
    return `RM ${priceMYR.toFixed(0)}`;
  };

  const subtotalMYR = items.reduce((acc, item) => acc + item.product.priceMYR * item.quantity, 0);
  const shippingMYR = subtotalMYR > 300 || items.length === 0 ? 0 : 25;
  const totalMYR = subtotalMYR + shippingMYR;

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('confirmed');
  };

  const handleSendOrderToWhatsApp = () => {
    const orderLines = items
      .map(
        (it) =>
          `• ${it.product.name} (SKU: ${it.product.sku}) - Qty: ${it.quantity}, Size: ${it.selectedSize}, Color: ${it.selectedColor} @ RM ${it.product.priceMYR * it.quantity}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello DK MY Atelier!\nI would like to place an order from dkfashionmy.com:\n\n*Order Items:*\n${orderLines}\n\n*Total:* RM ${totalMYR} (${formatPrice(totalMYR)})\n*Customer:* ${customer.name || 'Client'}\n*Phone:* ${customer.phone || 'N/A'}\n*Address:* ${customer.address || 'N/A'}, ${customer.city}\n\nPlease confirm availability and payment details. Thank you!`
    );

    window.open(`https://wa.me/${BRAND_DETAILS.contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-50 border-l border-stone-200 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900" />
              <h2 className="text-base font-serif font-medium text-stone-900">
                {checkoutStep === 'cart'
                  ? 'Your Shopping Bag'
                  : checkoutStep === 'checkout'
                  ? 'Checkout Experience Preview'
                  : 'Order Reserved'}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-md"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutStep === 'confirmed' ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-stone-900 font-medium">
                    Order Reserved Successfully!
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Reference #DKMY-{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-stone-200 text-left text-xs space-y-2">
                  <div className="flex justify-between text-stone-500">
                    <span>Customer:</span>
                    <strong className="text-stone-900">{customer.name || 'Valued Client'}</strong>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Payment Method:</span>
                    <strong className="text-stone-900">{customer.paymentMethod}</strong>
                  </div>
                  <div className="flex justify-between text-stone-500 border-t border-stone-100 pt-2">
                    <span>Total Amount:</span>
                    <strong className="text-stone-900 font-mono text-sm">{formatPrice(totalMYR)}</strong>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200/80 p-3 rounded text-xs text-amber-900 text-left leading-relaxed">
                  <strong>E-Commerce Coming Soon Notice:</strong> Since full automated card processing is launching shortly, click below to send this reserved order directly to our WhatsApp atelier to finalize delivery instantly!
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendOrderToWhatsApp}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to WhatsApp Atelier</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onClearCart();
                      setCheckoutStep('cart');
                      onClose();
                    }}
                    className="w-full py-2.5 text-xs text-stone-600 hover:text-stone-950 font-medium"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            ) : checkoutStep === 'checkout' ? (
              <form onSubmit={handleSimulateCheckout} className="space-y-4">
                <div className="border-b border-stone-200 pb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    Step 2: Shipping & Payment Preview
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Test the upcoming integrated checkout experience.
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1">
                    Full Recipient Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Farhan Rahman"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-md focus:outline-hidden focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1">
                    Contact WhatsApp / Mobile
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+60 11-... or +880..."
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-md focus:outline-hidden focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Unit / Street, Postal code"
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-md focus:outline-hidden focus:border-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1">
                    Select Payment Gateway
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'FPX', label: 'FPX / Online Banking' },
                      { id: 'Card', label: 'Visa / Mastercard' },
                      { id: 'DuitNow', label: 'DuitNow QR' },
                      { id: 'COD', label: 'WhatsApp / Cash On Delivery' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setCustomer({ ...customer, paymentMethod: p.id })}
                        className={`p-2.5 rounded border text-left font-medium transition-colors ${
                          customer.paymentMethod === p.id
                            ? 'border-stone-900 bg-stone-900 text-white'
                            : 'border-stone-200 bg-white text-stone-700 hover:bg-stone-50'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-md text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Confirm & Reserve Order ({formatPrice(totalMYR)})
                  </button>

                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full py-2 text-xs text-stone-500 hover:text-stone-800"
                  >
                    &larr; Back to Bag Items
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-12 h-12 bg-stone-200/60 rounded-full flex items-center justify-center mx-auto text-stone-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-serif text-stone-700">Your shopping bag is currently empty.</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our sample products in the showcase and add items to experience the checkout preview.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-stone-900 text-white rounded-md hover:bg-stone-800"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                    className="flex gap-4 p-3 bg-white rounded-lg border border-stone-200/80 shadow-2xs"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-20 object-cover rounded bg-stone-100 shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-serif font-medium text-stone-900 line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() =>
                              onRemoveItem(item.product.id, item.selectedSize, item.selectedColor)
                            }
                            className="text-stone-400 hover:text-red-600 p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-2">
                          <span>Size: {item.selectedSize}</span>
                          <span>·</span>
                          <span>Color: {item.selectedColor}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-stone-200 rounded">
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                -1
                              )
                            }
                            className="p-1 text-stone-600 hover:text-stone-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-mono font-medium tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onUpdateQuantity(
                                item.product.id,
                                item.selectedSize,
                                item.selectedColor,
                                1
                              )
                            }
                            className="p-1 text-stone-600 hover:text-stone-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-semibold font-mono text-stone-900 tabular-nums">
                          {formatPrice(item.product.priceMYR * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {checkoutStep === 'cart' && items.length > 0 && (
            <div className="p-6 bg-white border-t border-stone-200 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-500">
                  <span>Bag Subtotal</span>
                  <span className="font-mono text-stone-800 tabular-nums">{formatPrice(subtotalMYR)}</span>
                </div>
                <div className="flex justify-between text-stone-500">
                  <span>Estimated Domestic Shipping</span>
                  <span className="font-mono text-stone-800 tabular-nums">
                    {shippingMYR === 0 ? 'COMPLIMENTARY' : formatPrice(shippingMYR)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-900 font-semibold border-t border-stone-100 pt-2 text-sm">
                  <span>Estimated Total</span>
                  <span className="font-mono text-stone-950 tabular-nums">{formatPrice(totalMYR)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-md text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Proceed to Checkout Preview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleSendOrderToWhatsApp}
                  className="w-full py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-md text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order Directly via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-400" />
                <span>256-bit SSL Encrypted & Protected Transaction Standard</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
