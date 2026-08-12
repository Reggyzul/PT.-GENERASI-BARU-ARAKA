import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, Tag, Info, AlertCircle, Clock, Check, FileText } from 'lucide-react';

interface ElfGigaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToBook: (car: Car) => void;
}

export default function ElfGigaModal({ isOpen, onClose, onSelectToBook }: ElfGigaModalProps) {
  const [activePhotoTab, setActivePhotoTab] = useState<'exterior' | 'interior_front' | 'interior_rear' | 'video'>('exterior');

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

  const elfGigaCar = CARS.find(c => c.id === 'elf-giga') || CARS[1];

  const handleWhatsAppBooking = () => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat memesan/sewa unit *Elf Giga* (Mulai Rp 1.200.000 / hari). Mohon info ketersediaan jam, tanggal & rincian sewa. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const facilitiesList = [
    'Full AC',
    'Reclining Seats',
    'Hand Sanitizer',
    'Tissue',
    'Alat Kebersihan Disinfektan'
  ];

  const getDisplayedImage = () => {
    if (activePhotoTab === 'interior_rear') {
      return '/elf_giga_real_interior_rear.jpg';
    }
    if (activePhotoTab === 'interior_front') {
      return '/elf_giga_real_interior_front.jpg';
    }
    return '/elf_giga_side_raw.png';
  };

  const getDisplayedBadgeText = () => {
    if (activePhotoTab === 'video') return 'Video Walkthrough Tour Isuzu Elf Giga';
    if (activePhotoTab === 'interior_rear') return 'Kabin Belakang 19 Kursi Leather';
    if (activePhotoTab === 'interior_front') return 'Kabin Depan Leather Seats & TV';
    return 'Unit Pariwisata AR 08 Araka Classy Tour';
  };

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
          id="elf-modal-backdrop"
        />

        {/* Simplified Modal Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-white rounded-3xl w-full max-w-3xl shadow-2xl relative overflow-hidden flex flex-col z-10 my-auto border border-blue-900/30 max-h-[94vh]"
          id="elf-modal-panel"
        >
          {/* Top Header Bar */}
          <div className="bg-[#0c2340] text-white px-5 py-4 flex items-center justify-between border-b border-blue-900 shrink-0">
            <h3 className="font-display font-black text-sm sm:text-base text-white uppercase tracking-tight leading-tight">
              INFORMASI DETAIL ISUZU ELF GIGA
            </h3>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800"
              id="close-elf-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* MAIN SCROLLABLE CONTENT BODY */}
          <div className="p-4 sm:p-5 overflow-y-auto overscroll-contain space-y-4 text-left">
            
            {/* Title & Price Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-display font-black text-xl sm:text-2xl text-[#0c2340] uppercase tracking-tight">
                  Isuzu Elf Giga
                </h4>
                <p className="text-xs font-bold text-slate-500 mt-0.5">
                  Transpor Rombongan Besar • Capacity 19 Kursi Penumpang
                </p>
              </div>

              <div className="bg-amber-500 text-[#0c2340] font-sans font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-sm w-fit shrink-0 flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                <span>Mulai Dari Rp 1.200.000 / hari</span>
              </div>
            </div>

            {/* Photo & Video Showcase with Clean Header & Switcher Tabs Below */}
            <div className="space-y-3">
              {/* Photo Title & Badge Bar ABOVE Image */}
              <div className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-1.5 text-[#0c2340]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-slate-800">
                    {getDisplayedBadgeText()}
                  </span>
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 border border-amber-400/30 uppercase tracking-wider shrink-0">
                  Isuzu Elf Giga 19 Seats
                </span>
              </div>

              {/* 100% UNCLUTTERED CLEAN MEDIA BOX (PHOTO OR VIDEO) */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center border border-slate-200 shadow-md group">
                {activePhotoTab === 'video' && elfGigaCar.videoUrl ? (
                  <video
                    src={elfGigaCar.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <img
                    src={getDisplayedImage()}
                    alt="Isuzu Elf Giga"
                    className="w-full h-full object-cover sm:object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-102"
                  />
                )}
              </div>

              {/* Photo Selector Grid Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setActivePhotoTab('exterior')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center text-center ${
                    activePhotoTab === 'exterior'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-[#f1f5f9] text-[#2c3e50] hover:bg-slate-200'
                  }`}
                >
                  <span>Tampilan Eksterior</span>
                </button>

                <button
                  onClick={() => setActivePhotoTab('interior_front')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center text-center ${
                    activePhotoTab === 'interior_front'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-[#f1f5f9] text-[#2c3e50] hover:bg-slate-200'
                  }`}
                >
                  <span>Kabin Depan & TV</span>
                </button>

                <button
                  onClick={() => setActivePhotoTab('interior_rear')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center text-center ${
                    activePhotoTab === 'interior_rear'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-[#f1f5f9] text-[#2c3e50] hover:bg-slate-200'
                  }`}
                >
                  <span>Kabin Belakang</span>
                </button>

                <button
                  onClick={() => setActivePhotoTab('video')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center text-center ${
                    activePhotoTab === 'video'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-[#f1f5f9] text-[#2c3e50] hover:bg-slate-200'
                  }`}
                >
                  <span>🎥 Vidio Tour Unit</span>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Solusi transportasi tangguh untuk perjalanan rombongan dengan kapasitas 19 kursi penumpang leather orange-brown, AC louver merata, serta fasilitas kebersihan lengkap.
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
              onClick={handleWhatsAppBooking}
              className="w-full sm:flex-1 bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border border-amber-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0 text-amber-300" />
              <span>Pesan Elf Giga via WA</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onSelectToBook(elfGigaCar);
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
