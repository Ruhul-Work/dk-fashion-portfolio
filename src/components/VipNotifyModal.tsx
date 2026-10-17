import React, { useState } from 'react';
import { X, Bell, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface VipNotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const VipNotifyModal: React.FC<VipNotifyModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [preferredLine, setPreferredLine] = useState("Men's Bespoke");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div className="relative transform overflow-hidden rounded-xl bg-stone-900 border border-stone-800 text-left shadow-2xl transition-all w-full max-w-md p-6 sm:p-8 text-stone-100">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {confirmed ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white font-medium">
                VIP Access Registered
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed max-w-xs mx-auto">
                You are confirmed for early shopping access on dkfashionmy.com. Your exclusive voucher code is:
              </p>
              <div className="bg-stone-950 border border-stone-800 p-3 rounded font-mono text-sm text-amber-400 font-semibold tracking-wider">
                DKVIP50
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase bg-white text-stone-950 hover:bg-stone-200 rounded-md transition-colors mt-2"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-amber-400">
                <Bell className="w-4 h-4" />
                <span>DK MY Priority List</span>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-medium text-white">
                  {language === 'bn' ? 'ভিআইপি প্রারম্ভিক সুবিধা' : 'Join VIP Early Access'}
                </h3>
                <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">
                  Be the first to experience online orders on dkfashionmy.com with private showroom discounts and complimentary worldwide delivery.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                    Email Address or WhatsApp Number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. client@domain.com or +60 11-..."
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-700 rounded-md text-white placeholder-stone-500 focus:outline-hidden focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-300 mb-1.5">
                    Preferred Collection Interest
                  </label>
                  <select
                    value={preferredLine}
                    onChange={(e) => setPreferredLine(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-950 border border-stone-700 rounded-md text-white focus:outline-hidden focus:border-amber-400 transition-colors cursor-pointer"
                  >
                    <option value="Men's Bespoke">Men's Bespoke & Tailoring</option>
                    <option value="Women's Couture">Women's Couture & Modest</option>
                    <option value="Selvedge Denim">Japanese Selvedge Denim & Urban</option>
                    <option value="Festive Melayu">Festive Baju Melayu / Kurung</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-stone-950 bg-stone-100 hover:bg-white rounded-md transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request VIP Invitation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
