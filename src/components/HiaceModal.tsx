import React, { useState } from 'react';
import { Car } from '../types';
import { HIACE_VARIANTS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, ArrowRight, ChevronRight, Car as CarIcon } from 'lucide-react';

interface HiaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectVariantToBook: (variant: Car) => void;
}

export default function HiaceModal({ isOpen, onClose, onSelectVariantToBook }: HiaceModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<Car>(HIACE_VARIANTS[0]);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (variantName: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat memesan/sewa armada unit *${variantName}*. Mohon info ketersediaan jam, tanggal & tarif. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
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
          className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-200"
          id="hiace-modal-panel"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer z-30"
            id="close-hiace-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT COLUMN: VARIANT SELECTION TABS */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="space-y-6 relative z-10">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>ARMADA TOYOTA HIACE</span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Pilih Varian Hiace
                </h3>
                <p className="font-sans text-xs text-slate-300 font-medium mt-1">
                  Tersedia 4 kelas armada Toyota Hiace untuk menyesuaikan jumlah penumpang & kenyamanan Anda.
                </p>
              </div>

              {/* 4 Variant Selector Cards */}
              <div className="space-y-3 pt-2">
                {HIACE_VARIANTS.map((variant) => {
                  const isSelected = selectedVariant.id === variant.id;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`w-full p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                        isSelected
                          ? 'bg-amber-500 text-white border-amber-400 shadow-lg shadow-amber-500/20 scale-[1.02]'
                          : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                      }`}
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className={`font-display font-black text-sm uppercase tracking-tight ${isSelected ? 'text-white' : 'text-white'}`}>
                            {variant.name}
                          </span>
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                            isSelected ? 'bg-slate-900/40 text-amber-100' : 'bg-slate-700 text-amber-400'
                          }`}>
                            {variant.seats} Kursi
                          </span>
                        </div>
                        <p className={`text-[11px] font-medium line-clamp-1 ${isSelected ? 'text-amber-100' : 'text-slate-400'}`}>
                          {variant.category}
                        </p>
                      </div>

                      <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${isSelected ? 'translate-x-1 text-white' : 'text-slate-500'}`} />
                    </button>
                  );
                })}
              </div>

            </div>

            <div className="pt-6 border-t border-slate-800 mt-6 text-[11px] text-slate-400 font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>PT. Generasi Baru Araka (Araka Trans Travel)</span>
            </div>
          </div>

          {/* RIGHT COLUMN: SELECTED VARIANT DETAILS */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-white text-left flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Variant Title & Category */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                      {selectedVariant.name}
                    </h4>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mt-0.5">
                      {selectedVariant.category} • {selectedVariant.seats} Kursi Penumpang
                    </span>
                  </div>

                  <div className="bg-amber-50 text-amber-800 font-sans font-bold text-xs px-3.5 py-1.5 rounded-full border border-amber-200 shrink-0">
                    {selectedVariant.seats} Seats
                  </div>
                </div>
              </div>

              {/* Variant Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 aspect-[16/9] p-4 flex items-center justify-center">
                <img
                  src={selectedVariant.image}
                  alt={selectedVariant.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-sans text-[10px] font-bold px-3 py-1 rounded-full border border-slate-700">
                  {selectedVariant.fuel}
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {selectedVariant.description}
              </p>

              {/* Included Features */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                  Fasilitas & Keunggulan Varian Ini:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedVariant.includeList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleWhatsAppBooking(selectedVariant.name)}
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
