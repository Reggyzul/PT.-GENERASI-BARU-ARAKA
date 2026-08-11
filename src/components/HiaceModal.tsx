import React, { useState } from 'react';
import { Car } from '../types';
import { HIACE_VARIANTS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, ArrowRight, ChevronRight, Tag, Info, AlertCircle, Clock, Check, FileText, Image as ImageIcon } from 'lucide-react';

interface HiaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariantToBook: (variant: Car) => void;
}

export default function HiaceModal({ isOpen, onClose, onSelectVariantToBook }: HiaceModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<Car>(HIACE_VARIANTS[1]); // Default Premio or Commuter
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

  // Image resolver
  const getDisplayedImage = () => {
    if (activePhotoTab === 'luxury_tv') {
      return '/hiace_premio_luxury_interior.jpg';
    }
    if (activePhotoTab === 'interior') {
      return selectedVariant.interiorImage || '/hiace_commuter_interior.jpg';
    }
    return selectedVariant.image;
  };

  const getDisplayedBadgeText = () => {
    if (activePhotoTab === 'luxury_tv') return 'TV Monitor, Wooden Console & Ambient Lighting';
    if (activePhotoTab === 'interior') return 'Kabin Interior Soft Leather Clean & Steril';
    return selectedVariant.fuel;
  };

  const isPremioOrLuxury = selectedVariant.id === 'hiace-premio' || selectedVariant.id === 'hiace-premio-luxury';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          id="hiace-modal-backdrop"
        />

        {/* Modal Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-200 max-h-[90vh]"
          id="hiace-modal-panel"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer z-30 shadow-sm"
            id="close-hiace-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT COLUMN: VARIANT SELECTION TABS */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-5 sm:p-7 flex flex-col justify-between text-left relative overflow-y-auto border-b lg:border-b-0 lg:border-r border-slate-800 max-h-[30vh] lg:max-h-full">
            <div className="space-y-5 relative z-10">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>ARMADA TOYOTA HIACE</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-tight">
                  Pilih Varian Hiace
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium mt-1">
                  Pilih kelas armada Toyota Hiace sesuai jumlah penumpang & kebutuhan perjalanan Anda.
                </p>
              </div>

              {/* 4 Variant Selector Cards */}
              <div className="space-y-2.5 pt-1">
                {HIACE_VARIANTS.map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariant(variant);
                        setActivePhotoTab('exterior');
                      }}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.01]'
                          : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-black text-sm uppercase tracking-tight text-white">
                            {variant.name}
                          </span>
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                            isSelected ? 'bg-slate-900/40 text-amber-100' : 'bg-slate-700 text-amber-400'
                          }`}>
                            {variant.seats} Kursi
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 pt-0.5">
                          <Tag className={`w-3 h-3 ${isSelected ? 'text-amber-100' : 'text-amber-400'}`} />
                          <span className={`text-xs font-bold ${isSelected ? 'text-white' : 'text-amber-400'}`}>
                            {variant.priceDisplay}
                          </span>
                        </div>
                      </div>

                      <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-white' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 mt-4 text-[11px] text-slate-400 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>PT. Generasi Baru Araka (Araka Trans Travel)</span>
            </div>
          </div>

          {/* RIGHT COLUMN: SELECTED VARIANT DETAILS & PHOTOS */}
          <div className="lg:col-span-7 p-5 sm:p-7 bg-white text-left flex flex-col justify-between overflow-y-auto max-h-[60vh] lg:max-h-[85vh]">
            <div className="space-y-6">
              
              {/* Variant Title & Price Banner */}
              <div className="border-b border-slate-100 pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div>
                    <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase tracking-tight">
                      {selectedVariant.name}
                    </h4>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mt-0.5">
                      {selectedVariant.category} • {selectedVariant.seats} Kursi Penumpang
                    </span>
                  </div>

                  <div className="bg-amber-500 text-white font-sans font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-sm shrink-0 flex items-center gap-1.5 w-fit">
                    <Tag className="w-4 h-4" />
                    <span>{selectedVariant.priceDisplay}</span>
                  </div>
                </div>
              </div>

              {/* PHOTO SHOWCASE WITH MULTI-TAB TOGGLE (EXTERIOR, KABIN, TV CONSOLE) */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4 text-amber-600" />
                    <span>Galeri Foto {selectedVariant.name}:</span>
                  </span>

                  {/* Photo Switcher Buttons */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 flex-wrap">
                    <button
                      onClick={() => setActivePhotoTab('exterior')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activePhotoTab === 'exterior'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Eksterior
                    </button>

                    <button
                      onClick={() => setActivePhotoTab('interior')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activePhotoTab === 'interior'
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Kabin Kursi 🛋️
                    </button>

                    {isPremioOrLuxury && (
                      <button
                        onClick={() => setActivePhotoTab('luxury_tv')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          activePhotoTab === 'luxury_tv'
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        TV & Console 📺
                      </button>
                    )}
                  </div>
                </div>

                {/* Displayed Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 aspect-[16/10] sm:aspect-[16/9] p-2 flex items-center justify-center group">
                  <img
                    src={getDisplayedImage()}
                    alt={`${selectedVariant.name} ${activePhotoTab}`}
                    className="w-full h-full object-cover sm:object-contain rounded-xl drop-shadow-md transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border border-slate-700 max-w-[85%] truncate">
                    {getDisplayedBadgeText()}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-800 font-sans text-xs font-extrabold px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-amber-600" />
                    <span>{selectedVariant.seats} Kursi</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {selectedVariant.description}
              </p>

              {/* FASILITAS SECTION */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                  Fasilitas Utama:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {facilitiesList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KETENTUAN SEWA SECTION */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                    Ketentuan Sewa:
                  </span>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 space-y-2 text-xs text-slate-800 font-medium">
                  <div className="flex items-start gap-2 text-emerald-800 font-semibold">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>1. Sudah Termasuk:</strong> Mobil, Supir, dan BBM.</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>2. Belum Termasuk:</strong> Tol, Parkir, Penyebrangan Ferry, Makan Driver, Penginapan Driver, dan Tip Driver.</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>3. Jam Operasional:</strong> Jangka waktu sewa dari Pukul 05:00 s/d 23:00 WIB.</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>4. Overtime:</strong> Penjemputan sebelum 05:00 atau finish di atas 23:00 dikenakan overtime <strong>Rp 150.000 / jam</strong>.</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-700 pt-1 border-t border-amber-200/60">
                    <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>5. Informasi & Pemesanan:</strong> Hubungi WhatsApp resmi PT. Generasi Baru Araka.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleWhatsAppBooking(selectedVariant.name, selectedVariant.priceDisplay)}
                className="flex-1 w-full bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-bold text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4.5 h-4.5 fill-current shrink-0" />
                <span>Pesan {selectedVariant.name} via WA</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectVariantToBook(selectedVariant);
                }}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-900 font-sans font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl border border-slate-200 transition-all cursor-pointer whitespace-nowrap"
              >
                Form Reservasi Lengkap
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
