import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { HIACE_VARIANTS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, Tag, Info, AlertCircle, Clock, Check, FileText } from 'lucide-react';

interface HiaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariantToBook: (variant: Car) => void;
}

export default function HiaceModal({ isOpen, onClose, onSelectVariantToBook }: HiaceModalProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>('hiace-commuter');
  const [activePhotoTab, setActivePhotoTab] = useState<'exterior' | 'interior' | 'interior_secondary'>('exterior');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentVariant = HIACE_VARIANTS.find(v => v.id === selectedVariantId) || HIACE_VARIANTS[0];

  const getDisplayedImage = () => {
    if (activePhotoTab === 'interior_secondary' && currentVariant.interiorSecondaryImage) {
      return currentVariant.interiorSecondaryImage;
    }
    if (activePhotoTab === 'interior' && currentVariant.interiorImage) {
      return currentVariant.interiorImage;
    }
    return currentVariant.image;
  };

  const getDisplayedBadgeText = () => {
    if (activePhotoTab === 'exterior') {
      return `Eksterior ${currentVariant.name}`;
    }
    if (activePhotoTab === 'interior') {
      return currentVariant.id === 'hiace-commuter' ? `Interior & Bagasi ${currentVariant.name}` : `Interior Kabin ${currentVariant.name}`;
    }
    return `Kabin Penumpang ${currentVariant.name}`;
  };

  const handleWhatsAppVariantBooking = () => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat memesan/sewa unit *${currentVariant.name}* (${currentVariant.priceDisplay}). Mohon info ketersediaan jam, tanggal & rincian sewa. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const facilitiesList = [
    'Full AC',
    'Reclining Seats',
    'Hand Sanitizer',
    'Tissue',
    'Alat Kebersihan Disinfektan'
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto overscroll-contain">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#071527]/85 backdrop-blur-sm"
          id="hiace-modal-backdrop"
        />

        {/* Simplified Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl relative overflow-hidden flex flex-col z-10 my-auto border border-blue-900/30 max-h-[94vh]"
          id="hiace-modal-panel"
        >
          {/* Top Header Bar */}
          <div className="bg-[#0c2340] text-white px-5 py-4 flex items-center justify-between border-b border-blue-900 shrink-0">
            <h3 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight leading-tight">
              PILIHAN VARIAN TOYOTA HIACE
            </h3>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800"
              id="close-hiace-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MAIN SCROLLABLE CONTENT BODY */}
          <div className="p-4 sm:p-5 overflow-y-auto overscroll-contain space-y-4 text-left">
            
            {/* SOLID 2x2 GRID VARIANT SELECTOR */}
            <div className="space-y-1.5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] block">
                Pilih Varian Hiace:
              </span>

              <div className="grid grid-cols-2 gap-2">
                {HIACE_VARIANTS.map((variant) => {
                  const isSelected = variant.id === selectedVariantId;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => {
                        setSelectedVariantId(variant.id);
                        setActivePhotoTab('exterior');
                      }}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#0c2340] text-white border-amber-400 ring-2 ring-amber-400/40 shadow-md'
                          : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-900 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className={`font-display font-extrabold text-xs sm:text-sm uppercase tracking-tight ${isSelected ? 'text-amber-400' : 'text-[#0c2340]'}`}>
                          {variant.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                      </div>

                      <span className={`text-[10px] font-bold mt-1 ${isSelected ? 'text-slate-200' : 'text-slate-600'}`}>
                        {variant.priceDisplay}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Photo Showcase with Switcher Tabs */}
            <div className="space-y-2">
              <div className="relative rounded-2xl overflow-hidden bg-[#071527] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center border border-blue-900/60">
                <img
                  src={getDisplayedImage()}
                  alt={currentVariant.name}
                  className="w-full h-full object-cover sm:object-contain drop-shadow-md transition-all duration-300"
                />
                
                <div className="absolute top-2.5 left-2.5 bg-[#0c2340]/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-800 max-w-[75%] truncate">
                  {getDisplayedBadgeText()}
                </div>

                {/* Photo Selector Pills overlay */}
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 bg-[#071527]/90 backdrop-blur-md p-1 rounded-full border border-blue-800 flex items-center gap-1 max-w-[95%] overflow-x-auto">
                  <button
                    onClick={() => setActivePhotoTab('exterior')}
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activePhotoTab === 'exterior'
                        ? 'bg-amber-500 text-[#0c2340]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Eksterior
                  </button>

                  <button
                    onClick={() => setActivePhotoTab('interior')}
                    className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                      activePhotoTab === 'interior'
                        ? 'bg-amber-500 text-[#0c2340]'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {currentVariant.id === 'hiace-commuter' ? 'Interior & Bagasi' : 'Interior Kabin'}
                  </button>

                  {currentVariant.interiorSecondaryImage && (
                    <button
                      onClick={() => setActivePhotoTab('interior_secondary')}
                      className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                        activePhotoTab === 'interior_secondary'
                          ? 'bg-amber-500 text-[#0c2340]'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Kabin Penumpang
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              {currentVariant.description}
            </p>

            {/* Fasilitas Chips */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] block">
                Fasilitas Utama:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {facilitiesList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-[#0c2340] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simple Ketentuan Sewa */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0c2340] block">
                Ketentuan Sewa:
              </span>
              <div className="bg-amber-50/90 border border-amber-300/80 rounded-xl p-3.5 space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-start gap-2 text-blue-950 font-semibold">
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
                <div className="flex items-start gap-2 pt-1 border-t border-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>5. Informasi & Pemesanan:</strong> Hubungi WhatsApp resmi PT. Generasi Baru Araka.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-3.5 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center gap-2">
            <button
              onClick={handleWhatsAppVariantBooking}
              className="w-full sm:flex-1 bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border border-amber-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0 text-amber-300" />
              <span>Pesan {currentVariant.name} via WA</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onSelectVariantToBook(currentVariant);
              }}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#0c2340] font-bold text-xs sm:text-sm py-3 px-5 rounded-xl border border-slate-300 transition-all cursor-pointer whitespace-nowrap"
            >
              Form Reservasi
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
