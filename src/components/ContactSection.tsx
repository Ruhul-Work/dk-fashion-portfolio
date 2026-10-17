import React, { useState } from 'react';
import { BRAND_DETAILS } from '../data/products';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  language: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Bespoke Tailoring',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello DK MY Atelier,\nMy Name: ${formData.name || 'Valued Client'}\nInterest: ${formData.serviceInterest}\nMessage: ${formData.message || 'I would like to inquire about bespoke tailoring / your catalog.'}`
    );
    window.open(`https://wa.me/${BRAND_DETAILS.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight [text-wrap:balance]">
            {language === 'bn' ? 'প্রতিষ্ঠানের ঠিকানা ও সরাসরি যোগাযোগ' : language === 'ms' ? 'Alamat & Maklumat Hubungan' : 'Atelier Address & Direct Inquiries'}
          </h2>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            {language === 'bn'
              ? 'আমাদের কুয়ালালামপুর শোরুমে ব্যক্তিগত অ্যাপয়েন্টমেন্ট বা যেকোনো কাস্টম পোশাক তৈরির পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।'
              : 'Book a bespoke tailoring appointment at our Kuala Lumpur atelier or consult with our master stylists for custom bridal, corporate, and ready-to-wear inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Addresses & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Atelier Address (Malaysia) */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-2xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md bg-stone-100 flex items-center justify-center text-stone-900 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold">
                    Headquarters & Showroom
                  </span>
                  <h3 className="text-base font-serif font-medium text-stone-900 mt-0.5">
                    {BRAND_DETAILS.address.line1}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {BRAND_DETAILS.address.line2}<br />
                    {BRAND_DETAILS.address.postcode} {BRAND_DETAILS.address.city}<br />
                    {BRAND_DETAILS.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-white rounded-lg p-6 border border-stone-200 shadow-2xs space-y-4">
              {/* WhatsApp direct */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-500 block">Instant WhatsApp</span>
                    <span className="text-xs font-semibold text-stone-900 font-mono">
                      {BRAND_DETAILS.contact.phoneFormatted}
                    </span>
                  </div>
                </div>
                <a
                  href={BRAND_DETAILS.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  Chat Now
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Telephone Inquiries</span>
                  <a
                    href={`tel:${BRAND_DETAILS.contact.phone}`}
                    className="text-xs font-semibold text-stone-900 font-mono hover:underline"
                  >
                    {BRAND_DETAILS.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Official Mail</span>
                  <a
                    href={`mailto:${BRAND_DETAILS.contact.email}`}
                    className="text-xs font-semibold text-stone-900 hover:underline"
                  >
                    {BRAND_DETAILS.contact.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs text-stone-600 space-y-1">
                  <span className="font-semibold text-stone-900 block">Consultation Hours</span>
                  <p>{BRAND_DETAILS.hours.weekdays}</p>
                  <p>{BRAND_DETAILS.hours.saturday}</p>
                  <p className="text-stone-400">{BRAND_DETAILS.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-8 border border-stone-200 shadow-2xs">
            <h3 className="text-xl font-serif font-medium text-stone-900">
              {language === 'bn' ? 'আমাদের বার্তা পাঠান' : 'Send an Atelier Inquiry'}
            </h3>
            <p className="text-xs text-stone-500 mt-1 mb-6">
              Inquire about custom suiting, wholesale sample production, or private showroom visits.
            </p>

            {submitted ? (
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-serif font-medium text-stone-900">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name}. Our head concierge will respond to {formData.email} within 4 business hours.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send to WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', serviceInterest: 'Bespoke Tailoring', message: '' });
                    }}
                    className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-100 rounded text-xs font-medium"
                  >
                    New Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farhan Rahman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">
                      Contact / WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +60 11-xxxx xxxx or +880..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors cursor-pointer"
                    >
                      <option value="Bespoke Tailoring">Bespoke Suiting & Tailoring</option>
                      <option value="Womens Couture">Women's Couture & Modest</option>
                      <option value="Denim Batch">Selvedge Denim & Urban Line</option>
                      <option value="Festive Melayu">Festive Baju Melayu / Kurung</option>
                      <option value="Wholesale Sample">Commercial / Bulk Sample Order</option>
                      <option value="E-Commerce Partnership">E-Commerce Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the design, size specifications, fabric preferences, or dates you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-hidden focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-stone-900 hover:bg-stone-800 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Fast WhatsApp Connect</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
