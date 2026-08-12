import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, MessageCircle, Sparkles, Users, ShieldCheck, Tag, Info, AlertCircle, Clock, Check, FileText } from 'lucide-react';

interface AvanzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToBook: (car: Car) => void;
}

export default function AvanzaModal({ isOpen, onClose, onSelectToBook }: AvanzaModalProps) {
  const [activePhotoTab, setActivePhotoTab] = useState<'exterior' | 'cockpit' | 'middle' | 'trunk'>('exterior');

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

  const avanzaCar = CARS.find(c => c.id === 'toyota-avanza') || CARS[1];

  const handleWhatsAppBooking = () => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat memesan/sewa unit *Toyota Avanza* (Mulai Rp 800.000 / hari). Mohon info ketersediaan jam, tanggal & rincian sewa. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const facilitiesList = [
    'Full AC Double Blower',
    'Audio & USB Charger',
    'Hand Sanitizer',
    'Tissue',
    'Alat Kebersihan Disinfektan'
  ];

  const getDisplayedImage = () => {
    if (activePhotoTab === 'trunk') {
      return '/avanza_real_interior_trunk.jpg';
    }
    if (activePhotoTab === 'middle') {
      return '/avanza_real_interior_middle.jpg';
    }
    if (activePhotoTab === 'cockpit') {
      return '/avanza_real_interior_cockpit.jpg';
    }
    return '/avanza_real_exterior.jpg';
  };

  const getDisplayedBadgeText = () => {
    if (activePhotoTab === 'trunk') return 'Kapasitas Bagasi & Lipatan Kursi';
    if (activePhotoTab === 'middle') return 'Kabin Tengah 7 Kursi Penumpang';
    if (activePhotoTab === 'cockpit') return 'Dashboard & Kokpit Kemudi modern';
    return 'All New Avanza Black Metallic';
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
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-blue-900/30 z-10 my-auto text-left font-sans"
        >
          {/* Header Bar */}
          <div className="bg-[#0c2340] text-white px-5 py-4 flex items-center justify-between border-b border-blue-900 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold shrink-0">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight uppercase">
                    Toyota Avanza
                  </h3>
                  <span className="bg-amber-500 text-[#0c2340] font-extrabold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                    MPV Family
                  </span>
                </div>
                <p className="text-xs text-amber-300 font-medium">
                  Tarif Mulai Rp 800.000 / Hari • Include Mobil, Supir & BBM
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Body */}
          <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto overscroll-contain">
            
            {/* Top Showcase: Main Image + Selector Tabs */}
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
                  ★ 4.9 • Family MPV
                </span>
              </div>

              {/* 100% UNCLUTTERED CLEAN PHOTO BOX */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center border border-slate-200 shadow-md group">
                <img
                  src={getDisplayedImage()}
                  alt="Toyota Avanza Real Photo"
                  className="w-full h-full object-cover sm:object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-102"
                />
              </div>

              {/* Photo Showcase Selector Tabs (4 Tabs) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => setActivePhotoTab('exterior')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activePhotoTab === 'exterior'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Tampilan Eksterior</span>
                </button>
                <button
                  onClick={() => setActivePhotoTab('cockpit')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activePhotoTab === 'cockpit'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Kokpit & Kemudi</span>
                </button>
                <button
                  onClick={() => setActivePhotoTab('middle')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activePhotoTab === 'middle'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Kabin Tengah</span>
                </button>
                <button
                  onClick={() => setActivePhotoTab('trunk')}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activePhotoTab === 'trunk'
                      ? 'bg-[#0c2340] text-amber-400 border border-amber-400/50 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <span>Bagasi & Lipatan</span>
                </button>
              </div>
            </div>

            {/* Description & Rate Info */}
            <div className="bg-blue-50/60 p-4 rounded-2xl border border-blue-100 space-y-2">
              <h4 className="font-display font-bold text-sm text-[#0c2340]">Deskripsi Armada Toyota Avanza:</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Toyota Avanza adalah pilihan MPV keluarga paling praktis, hemat, dan ekonomis untuk perjalanan dalam kota (city tour), perjalanan keluarga, maupun kebutuhan harian instansi/perusahaan. Dilengkapi pendingin udara Double Blower dan interior bersih terawat.
              </p>
            </div>

            {/* Grid 2 Column: Fasilitas Termasuk vs Ketentuan Sewa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Box 1: Fasilitas Yang Disediakan */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <h4 className="font-display font-bold text-sm text-[#0c2340]">Fasilitas Yang Disediakan</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-700 font-medium">
                  {facilitiesList.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Box 2: Syarat & Ketentuan Sewa */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                  <Info className="w-4 h-4 text-amber-600 shrink-0" />
                  <h4 className="font-display font-bold text-sm text-[#0c2340]">Syarat & Ketentuan Sewa</h4>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Seluruh biaya sewa sudah termasuk **Mobil, Supir, & BBM**.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Belum termasuk Tol, Parkir, Penyebrangan Ferry, Makan/Penginapan Driver & Tip.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>Jam operasional sewa pukul 05:00 s/d 23:00 WIB. Overtime: Rp 150.000/jam.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Spesifikasi Teknis Fleet Details */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#0c2340] shrink-0" />
                <h4 className="font-display font-bold text-sm text-[#0c2340]">Spesifikasi Teknis Armada Avanza:</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Tarif Sewa</span>
                  <p className="font-bold text-[#0c2340]">Mulai Rp 800.000 / hari</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Kapasitas Penumpang</span>
                  <p className="font-bold text-[#0c2340]">6-7 Kursi Penumpang</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Fasilitas Utama</span>
                  <p className="font-bold text-[#0c2340]">Full AC Double Blower, Charger USB, Sanitizer</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Kondisi Armada</span>
                  <p className="font-bold text-[#0c2340]">All New Black Metallic Unit</p>
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer CTA */}
          <div className="bg-slate-50 px-5 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-center sm:text-left">
              <span className="text-[11px] text-slate-500 font-semibold block">Total Estimasi Tarif:</span>
              <span className="font-display font-black text-lg text-[#0c2340]">
                Mulai Rp 800.000 <span className="text-xs font-normal text-slate-500">/ hari</span>
              </span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onSelectToBook(avanzaCar);
                }}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#0c2340] text-[#0c2340] hover:bg-blue-50 font-bold text-xs transition-colors cursor-pointer"
              >
                Form Pilihan
              </button>

              <button
                onClick={handleWhatsAppBooking}
                className="flex-1 sm:flex-none bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95 border border-amber-400/30"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                <span>Pesan Avanza via WA</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
