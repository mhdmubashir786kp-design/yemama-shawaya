import React, { useState } from 'react';
import { Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ContactFormData } from '../types/restaurant';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    diningType: 'Dine-in',
    guests: '2 to 4 Persons',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name should be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[0-9+]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or enquiry details.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Website Enquiry - Yamama Shawaya*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Type:* ${formData.diningType}\n*Guests:* ${formData.guests}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#5E0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3B0505] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
            <Phone className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Direct Reservations & Orders</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Contact Us
          </h2>

          <p className="text-base sm:text-lg text-red-100 font-normal">
            Have a question, want to enquire about our menu, or planning a family meal? Get in touch with us.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Phone & WhatsApp CTAs */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-[#480707] p-7 rounded-3xl border border-red-700/80 shadow-md">
              <h3 className="text-xl font-black text-white mb-2">
                Instant Call & Takeaway Booking
              </h3>
              <p className="text-sm text-red-100 mb-6">
                Our kitchen is ready to prepare hot Mandi and Shawaya. Tap either phone line below to talk with our team directly:
              </p>

              {/* Large Call Buttons */}
              <div className="space-y-3">
                <a
                  href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-base transition-all shadow-md hover:shadow-lg group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#F4C400] flex items-center justify-center">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] uppercase tracking-wider font-bold text-neutral-800">
                        Primary Order Line
                      </div>
                      <div className="text-base sm:text-lg tracking-tight font-black">
                        Call {RESTAURANT_INFO.phone1Display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-[#171717] text-white px-3 py-1.5 rounded-lg group-hover:scale-105 transition-transform font-bold">
                    Dial Now
                  </span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-[#360404] hover:bg-[#2B0303] text-white font-bold text-base transition-all shadow-md border border-red-800 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#220202] text-[#F4C400] flex items-center justify-center border border-red-900">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-red-300">
                        Secondary Line
                      </div>
                      <div className="text-base sm:text-lg tracking-tight font-black text-white">
                        Call {RESTAURANT_INFO.phone2Display}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs bg-[#F4C400] text-[#171717] px-3 py-1.5 rounded-lg group-hover:scale-105 transition-transform font-bold">
                    Dial Now
                  </span>
                </a>
              </div>

              {/* Large WhatsApp CTA Button */}
              <div className="mt-4 pt-4 border-t border-red-800/80">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    RESTAURANT_INFO.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base transition-all shadow-md hover:shadow-lg"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp Us</span>
                </a>
                <p className="text-[11px] text-center text-red-200 mt-2 font-medium">
                  Fast response for menu queries, bulk parcels & family table reservations
                </p>
              </div>
            </div>

            {/* Quick Hours Summary */}
            <div className="bg-[#460606] p-6 rounded-3xl border border-red-800 text-red-100 text-xs sm:text-sm space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Open Everyday: {RESTAURANT_INFO.openingHours}</span>
              </div>
              <p className="text-red-200 text-xs">
                Lunch Mandi fresh from 12:00 PM • Evening Shawaya & Grills ready from 4:30 PM onwards.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7 bg-[#4E0808] p-7 sm:p-9 rounded-3xl border border-red-800/80 shadow-xl">
            <h3 className="text-xl font-black text-white mb-2">
              Send an Enquiry
            </h3>
            <p className="text-sm text-red-200 mb-6">
              Fill in your details below and we will confirm your table or food order promptly.
            </p>

            {submittedSuccess ? (
              <div className="p-8 rounded-2xl bg-[#3A0505] border border-[#F4C400] text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F4C400] flex items-center justify-center mx-auto text-[#171717]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-black text-white">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-red-100 max-w-md mx-auto">
                  Thank you, <span className="font-bold text-white">{formData.name}</span>. Our team at Yamama Shawaya Angadipuram will call you at <span className="font-bold text-white">{formData.phone}</span> shortly.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Send this on WhatsApp for instant reply</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedSuccess(false);
                      setFormData({
                        name: '',
                        phone: '',
                        diningType: 'Dine-in',
                        guests: '2 to 4 Persons',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center justify-center text-xs font-bold text-red-200 hover:text-white px-4 py-3 cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-[#F4C400]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Mohammed Farooq"
                    className={`w-full px-4 py-3 text-sm bg-[#380404] text-white placeholder-red-300 rounded-xl border focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400'
                        : 'border-red-700/80 focus:border-[#F4C400] focus:ring-2 focus:ring-[#F4C400]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-amber-300 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-[#F4C400]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 097473 62102 or 9876543210"
                    className={`w-full px-4 py-3 text-sm bg-[#380404] text-white placeholder-red-300 rounded-xl border focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400'
                        : 'border-red-700/80 focus:border-[#F4C400] focus:ring-2 focus:ring-[#F4C400]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-amber-300 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Dining Type & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="diningType" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                      Enquiry Type
                    </label>
                    <select
                      id="diningType"
                      value={formData.diningType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          diningType: e.target.value as ContactFormData['diningType'],
                        })
                      }
                      className="w-full px-4 py-3 text-sm bg-[#380404] text-white rounded-xl border border-red-700/80 focus:outline-none focus:border-[#F4C400] focus:ring-2 focus:ring-[#F4C400]"
                    >
                      <option value="Dine-in" className="bg-[#380404] text-white">Family Dine-in</option>
                      <option value="Takeaway" className="bg-[#380404] text-white">Parcel / Takeaway</option>
                      <option value="Party Order" className="bg-[#380404] text-white">Party & Bulk Mandi Order</option>
                      <option value="General Enquiry" className="bg-[#380404] text-white">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                      Approx Guests / Quantity
                    </label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm bg-[#380404] text-white rounded-xl border border-red-700/80 focus:outline-none focus:border-[#F4C400] focus:ring-2 focus:ring-[#F4C400]"
                    >
                      <option value="1 to 2 Persons" className="bg-[#380404] text-white">1 to 2 Persons</option>
                      <option value="2 to 4 Persons" className="bg-[#380404] text-white">2 to 4 Persons (1 Mandi Platter)</option>
                      <option value="5 to 8 Persons" className="bg-[#380404] text-white">5 to 8 Persons (Family Majlis)</option>
                      <option value="10+ Persons" className="bg-[#380404] text-white">10+ Persons (Bulk Feast)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-1.5">
                    Your Message / Specific Dishes <span className="text-[#F4C400]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="e.g. Planning dinner around 8 PM. Would like 1 Full Chicken Mandi, 1 Shawaya, and Mojitos."
                    className={`w-full px-4 py-3 text-sm bg-[#380404] text-white placeholder-red-300 rounded-xl border focus:outline-none transition-all ${
                      errors.message
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400'
                        : 'border-red-700/80 focus:border-[#F4C400] focus:ring-2 focus:ring-[#F4C400]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-amber-300 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] disabled:bg-neutral-600 text-[#171717] font-black text-base py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F4C400]"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
