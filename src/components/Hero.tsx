import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Ticket, ArrowRight, MapPin, Users, Calendar, Phone, ChevronDown, Car, ShieldCheck, Sparkles, Building2, CreditCard } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { CARS } from '../data/cars';

interface HeroProps {
  onRentClick: () => void;
  onVisiMisiClick?: () => void;
  lang: 'ID' | 'EN';
}

export default function Hero({ onRentClick, onVisiMisiClick, lang }: HeroProps) {
  const [name, setName] = useState('');
  const [selectedFleet, setSelectedFleet] = useState('Hiace Premio');
  const [tripType, setTripType] = useState('Perjalanan Keluarga / Wisata');
  const [passengers, setPassengers] = useState('10-14 Orang');

  const t = TRANSLATIONS[lang];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = '6281288748745';
    const textTemplate = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya ingin pesan/tanya sewa armada:

📋 *INFO RESERVASI ARAKA TRANS:*
• Nama: *${name || 'Calon Pelanggan'}*
• Pilihan Armada: *${selectedFleet}*
• Kategori Perjalanan: *${tripType}*
• Estimasi Peserta/Kapasitas: *${passengers}*

Mohon informasi ketersediaan armada, jadwal, & rincian tarif. Terima kasih!`;

    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textTemplate)}`;
    window.open(waUrl, '_blank', 'noreferrer');
  };

  const handleWhatsAppPesanBtn = () => {
    const waNumber = '6281288748745';
    const text = encodeURIComponent('Halo Araka Trans Travel (PT. Generasi Baru Araka), saya ingin berkonsultasi mengenai sewa mobil & transportasi. Mohon info lengkap.');
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noreferrer');
  };

  const handleScrollToFleet = () => {
    const el = document.getElementById('cars');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-12 bg-slate-50 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card Container in Deep Royal Navy */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#071527] shadow-2xl p-6 sm:p-10 lg:p-12 border border-blue-900/60 text-white">
          
          {/* Background Fleet Showcase Image Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 pointer-events-none transition-transform duration-700"
            style={{ backgroundImage: `url('/team_red.avif')` }}
          />
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071527]/95 via-[#0c2340]/90 to-[#071527]/70 pointer-events-none" />

          {/* Core Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: HEADLINE & SUBTITLE */}
            <div className="lg:col-span-7 space-y-6 text-left" id="hero-text-container">
              
              {/* Luxury Classy Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c2340]/90 backdrop-blur-md border border-amber-400/50 shadow-lg text-left">
                <div className="flex items-center gap-1.5 text-amber-400 pr-2.5 border-r border-amber-400/30 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-sans font-black text-[10px] uppercase tracking-[0.25em] text-amber-400">
                    COMPANY PROFILE
                  </span>
                </div>
                <span className="font-sans font-extrabold text-xs text-white uppercase tracking-wider truncate">
                  PT. GENERASI BARU ARAKA
                </span>
              </div>

              {/* Bold High-Converting Selling Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display font-black text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.12] uppercase"
              >
                Sewa Hiace Jabodetabek <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-md">
                  Mulai 1 Jutaan / Hari
                </span>
              </motion.h1>

              {/* Highlight Selling Ribbons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="flex flex-wrap items-center gap-2"
              >
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-extrabold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Include Mobil + Supir + BBM</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0c2340] border border-blue-800 text-slate-200 text-xs font-extrabold shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Solusi Transportasi Nyaman & Terpercaya</span>
                </div>
              </motion.div>

              {/* Sub-headline Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="font-sans text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
              >
                <strong>Araka Trans</strong> melayani sewa armada Toyota Hiace (Commuter, Premio, Luxury), Elf Giga, Bus Medium, hingga Alphard VIP area Jabodetabek & antar kota seluruh Indonesia dengan armada super bersih, supir profesional, dan tarif paling hemat terpercaya.
              </motion.p>

            {/* RIGHT COLUMN: FLOATING WHITE BOOKING CARD + LEGALITAS BLOCK BELOW */}
            <div className="lg:col-span-5 space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white text-slate-900 rounded-[24px] p-6 sm:p-7 shadow-2xl border-2 border-amber-400/40 text-left relative overflow-hidden"
              >
                {/* Card Title Bar */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Ticket className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="font-display font-bold text-base text-[#0c2340] tracking-tight">
                      Konsultasi & Reservasi Fast Response
                    </h3>
                  </div>
                  <span className="text-[10px] font-extrabold bg-blue-900 text-amber-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    24 Jam
                  </span>
                </div>

                {/* Interactive Booking Form */}
                <form onSubmit={handleQuickSubmit} className="space-y-4 font-sans text-xs">
                  
                  {/* Nama Anda Input */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700 text-xs">
                      Nama Pemesan
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama anda"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-[#0c2340] focus:bg-white focus:outline-none text-slate-800 font-medium transition-all text-xs"
                    />
                  </div>

                  {/* Pilihan Armada Select */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700 text-xs">
                      Pilihan Armada Kendaraan
                    </label>
                    <select
                      value={selectedFleet}
                      onChange={(e) => setSelectedFleet(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-[#0c2340] focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                    >
                      {CARS.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name} ({c.category} - {c.seats} Kursi)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Kategori Perjalanan */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700 text-xs">
                      Kategori Kebutuhan
                    </label>
                    <select
                      value={tripType}
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-[#0c2340] focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                    >
                      <option value="Rental Mobil untuk Wisata">Rental Mobil untuk Wisata</option>
                      <option value="Transportasi Rombongan">Transportasi Rombongan</option>
                      <option value="Rental untuk Perusahaan">Rental untuk Perusahaan / Perjalanan Dinas</option>
                      <option value="Perjalanan VIP">Perjalanan VIP (Alphard & Luxury)</option>
                      <option value="Event & Gathering">Event, Gathering & Outbound</option>
                    </select>
                  </div>

                  {/* Estimasi Jumlah Penumpang */}
                  <div className="space-y-1.5">
                    <label className="block font-semibold text-slate-700 text-xs">
                      Estimasi Peserta / Penumpang
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-[#0c2340] focus:bg-white focus:outline-none text-slate-800 font-semibold cursor-pointer transition-all text-xs"
                    >
                      <option value="7-12 Orang (Hiace Premio/Commuter)">7-12 Orang (Hiace Premio/Commuter)</option>
                      <option value="13-19 Orang (Elf Giga / Hiace)">13-19 Orang (Elf Giga / Hiace)</option>
                      <option value="20-35 Orang (Bus Medium)">20-35 Orang (Bus Medium)</option>
                      <option value="Tamu VIP (Toyota Alphard / Luxury)">Tamu VIP (Toyota Alphard / Luxury)</option>
                    </select>
                  </div>

                  {/* Full-width Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-sm py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
                    >
                      Cek Ketersediaan via WhatsApp
                    </button>
                  </div>

                </form>
              </motion.div>

              {/* Professional Minimalist & Elegant Legalitas & Informasi Pembayaran Block (Moved Below Form) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="w-full text-left"
              >
                <div className="bg-[#0c2340]/90 backdrop-blur-md rounded-2xl p-4 border border-amber-400/30 text-left space-y-3 shadow-xl">
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-blue-900/60 text-left">
                    <div className="flex items-center gap-2 text-left">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="font-display font-bold text-xs uppercase tracking-wider text-amber-300">
                        Legalitas & Rekening Resmi
                      </span>
                    </div>
                    <span className="text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest shrink-0">
                      TERVERIFIKASI RESMI
                    </span>
                  </div>

                  {/* Details List - Clean Left Aligned Layout */}
                  <div className="space-y-2 text-xs text-left">
                    {/* Line 1: NIB & NPWP */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-300 font-sans text-[11px] text-left">
                      <div className="flex items-center gap-1.5 text-left">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">NIB:</span>
                        <span className="font-mono font-bold text-white tracking-wide select-all">2306220075432</span>
                      </div>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <div className="flex items-center gap-1.5 text-left">
                        <span className="text-[10px] font-extrabold text-slate-400 uppercase">NPWP:</span>
                        <span className="font-mono font-bold text-white tracking-wide select-all">74.195.738.5-453.000</span>
                      </div>
                    </div>

                    {/* Line 2: BCA Rekening Resmi */}
                    <div className="pt-2 border-t border-blue-900/40 flex items-center justify-between gap-3 text-left">
                      <div className="flex items-center gap-2 text-left">
                        <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                          <CreditCard className="w-4 h-4 text-amber-400" />
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider">REKENING RESMI:</span>
                            <span className="font-sans font-black text-amber-300 text-xs sm:text-sm">BCA 6760280095</span>
                          </div>
                          <p className="text-[10px] text-slate-300 font-medium">a.n. PT Generasi Baru Araka</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
            </div>

          </div>

        </div>

        {/* FLOATING DOWN ARROW BUTTON: Lihat Armada Mobil */}
        <div className="pt-8 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={handleScrollToFleet}
            className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none"
            id="hero-floating-fleet-btn"
          >
            <span className="font-sans font-bold text-xs sm:text-sm text-[#0c2340] group-hover:text-amber-600 transition-colors bg-white/95 px-5 py-1.5 rounded-full border border-blue-900/20 shadow-sm group-hover:shadow-md group-hover:border-amber-300">
              Lihat Armada Mobil
            </span>
            <div className="w-8 h-8 rounded-full bg-amber-500 text-[#0c2340] flex items-center justify-center shadow-md group-hover:bg-amber-400 group-hover:scale-110 transition-all animate-bounce font-black">
              <ChevronDown className="w-5 h-5 stroke-[2.5]" />
            </div>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
