import React, { useState } from 'react';
import { Car } from '../types';
import { HIACE_VARIANTS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, Tag, Info, AlertCircle, Clock, Check, FileText, Image as ImageIcon } from 'lucide-react';

interface HiaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariantToBook: (variant: Car) => void;
}

export default function HiaceModal({ isOpen, onClose, onSelectVariantToBook }: HiaceModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<Car>(HIACE_VARIANTS[1]); // Default Premio
  const [activePhotoTab, setActivePhotoTab] = useState<'exterior' | 'interior' | 'luxury_tv'>('exterior');

  if (!isOpen) return null;

  const handleWhatsAppBooking = (variantName: string, priceDisplay?: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat memesan/sewa unit *${variantName}* (${priceDisplay || 'Mulai Tarif Resmi'}). Mohon info ketersediaan jam, tanggal & rincian sewa. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const facilitiesList = [
    'Full AC',
    'Reclining Seats',
    'Hand Sanitizer',
    'Tissue',
    'Alat Kebersihan Disinfektan'
  ];

  // Map image based on variant and active tab
  const getDisplayedImage = () => {
    if (selectedVariant.id === 'hiace-commuter-luxury') {
      if (activePhotoTab === 'luxury_tv') return '/hiace_luxury_tv_interior.jpg';
      if (activePhotoTab === 'interior') return '/hiace_commuter_luxury_interior.jpg';
      return selectedVariant.image;
    }
    if (selectedVariant.id === 'hiace-premio-luxury') {
      if (activePhotoTab === 'luxury_tv') return '/hiace_luxury_tv_interior.jpg';
      if (activePhotoTab === 'interior') return '/hiace_premio_luxury_seats.jpg';
      return '/hiace_premio_luxury_exterior.jpg';
    }
    if (selectedVariant.id === 'hiace-premio') {
      if (activePhotoTab === 'luxury_tv') return '/hiace_premio_luxury_interior.jpg';
      if (activePhotoTab === 'interior') return '/hiace_premio_interior.jpg';
      return '/hiace_premio_exterior.jpg';
    }
    // Default Commuter
    if (activePhotoTab === 'interior') return '/hiace_commuter_interior.jpg';
    return selectedVariant.image;
  };

  const getDisplayedBadgeText = () => {
    if (activePhotoTab === 'luxury_tv') return 'TV Monitor, Ceiling LED Lighting & Console';
    if (activePhotoTab === 'interior') {
      if (selectedVariant.id.includes('luxury')) return 'Pilot Captain Seats Cream Soft Leather';
      return 'Kabin Executive Black Leather';
    }
    return selectedVariant.fuel;
  };

  const hasTvConsolePhoto = selectedVariant.id !== 'hiace-commuter';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          id="hiace-modal-backdrop"
        />

        {/* Simplified Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl relative overflow-hidden flex flex-col z-10 my-auto border border-slate-200 max-h-[94vh]"
          id="hiace-modal-panel"
        >
          {/* Top Header Bar */}
          <div className="bg-[#0b192c] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                HT
              </div>
              <div className="text-left">
                <h3 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight leading-tight">
                  PILIH VARIAN TOYOTA HIACE
                </h3>
                <p className="font-sans text-[10px] sm:text-[11px] text-amber-300 font-semibold">
                  PT. Generasi Baru Araka (Araka Trans Travel)
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              id="close-hiace-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* SOLID 2x2 GRID FOR VARIANT SELECTION (NO HORIZONTAL SCROLL) */}
          <div className="bg-slate-100 p-2 border-b border-slate-200 shrink-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {HIACE_VARIANTS.map((variant) => {
                const isSelected = selectedVariant.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    onClick={() => {
                      setSelectedVariant(variant);
                      setActivePhotoTab('exterior');
                    }}
                    className={`p-2 rounded-xl text-left transition-all cursor-pointer flex flex-col justify-between border ${
                      isSelected
                        ? 'bg-amber-500 text-white border-amber-600 shadow-md ring-2 ring-amber-400/50'
                        : 'bg-white text-slate-800 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-display font-black text-[11px] sm:text-xs uppercase tracking-tight line-clamp-1">
                        {variant.name}
                      </span>
                      <span className={`text-[8px] sm:text-[9px] font-extrabold px-1 py-0.2 rounded ${
                        isSelected ? 'bg-slate-900/30 text-amber-100' : 'bg-slate-100 text-amber-600'
                      }`}>
                        {variant.seats}S
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold mt-0.5 ${
                      isSelected ? 'text-amber-100' : 'text-slate-500'
                    }`}>
                      {variant.priceDisplay ? variant.priceDisplay.replace(' / hari', '') : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN SCROLLABLE CONTENT BODY */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-left">
            
            {/* Title & Price Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                  {selectedVariant.name}
                </h4>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  {selectedVariant.category} • Capacity {selectedVariant.seats} Kursi Penumpang
                </p>
              </div>

              <div className="bg-amber-500 text-white font-sans font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-sm w-fit shrink-0 flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>{selectedVariant.priceDisplay}</span>
              </div>
            </div>

            {/* Photo Showcase with Simple Switcher Buttons */}
            <div className="space-y-2">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center border border-slate-200">
                <img
                  src={getDisplayedImage()}
                  alt={`${selectedVariant.name} ${activePhotoTab}`}
                  className="w-full h-full object-cover sm:object-contain drop-shadow-md transition-all duration-300"
                />
                
                <div className="absolute top-2.5 left-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-700 max-w-[70%] truncate">
                  {getDisplayedBadgeText()}
                </div>

                {/* Photo Selector Pills overlay */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-slate-900/85 backdrop-blur-md p-1 rounded-full border border-slate-700/80 flex items-center gap-1">
                  <button
                    onClick={() => setActivePhotoTab('exterior')}
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                      activePhotoTab === 'exterior'
                        ? 'bg-amber-500 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Eksterior
                  </button>

                  <button
                    onClick={() => setActivePhotoTab('interior')}
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                      activePhotoTab === 'interior'
                        ? 'bg-amber-500 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Interior Kabin
                  </button>

                  {hasTvConsolePhoto && (
                    <button
                      onClick={() => setActivePhotoTab('luxury_tv')}
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer ${
                        activePhotoTab === 'luxury_tv'
                          ? 'bg-amber-500 text-white'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      TV Console
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {selectedVariant.description}
            </p>

            {/* Fasilitas Chips */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                Fasilitas Utama:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {facilitiesList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Ketentuan Sewa */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                Ketentuan Sewa:
              </span>
              <div className="bg-amber-50 border border-amber-200/90 rounded-xl p-3.5 space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-start gap-2 text-emerald-800 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1. Termasuk:</strong> Mobil, Supir, dan BBM.</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>2. Belum Termasuk:</strong> Tol, Parkir, Penyebrangan Ferry, Makan Driver, Penginapan Driver, Tip Driver.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>3. Jam Sewa:</strong> Pukul 05:00 s/d 23:00 WIB.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>4. Overtime:</strong> Penjemputan &lt; 05:00 / finish &gt; 23:00 (+Rp 150.000/jam).</span>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-amber-200/60">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>5. Informasi & Pemesanan:</strong> Hubungi WhatsApp resmi PT. Generasi Baru Araka.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center gap-2">
            <button
              onClick={() => handleWhatsAppBooking(selectedVariant.name, selectedVariant.priceDisplay)}
              className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>Pesan {selectedVariant.name} via WA</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onSelectVariantToBook(selectedVariant);
              }}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-slate-200 transition-all cursor-pointer whitespace-nowrap"
            >
              Form Reservasi
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
