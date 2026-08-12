import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Ticket, ArrowRight, MapPin, Users, Calendar, Phone, ChevronDown, Car, ShieldCheck } from 'lucide-react';
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
              
              <div className="space-y-1.5">
                <span className="font-sans font-extrabold text-[11px] sm:text-xs uppercase tracking-widest text-amber-400 block">
                  COMPANY PROFILE
                </span>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0c2340] border border-amber-400/50 text-amber-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>PT. GENERASI BARU ARAKA</span>
                </div>
              </div>

              {/* Bold Large Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight uppercase"
              >
                Solusi Transportasi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Nyaman, Aman & Terpercaya
                </span>
              </motion.h1>

              {/* Sub-headline Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-sans text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-xl font-medium"
              >
                <strong>Araka Trans</strong> hadir sebagai penyedia layanan rental mobil dan transportasi yang siap menemani perjalanan pribadi, keluarga, perusahaan, maupun rombongan. Dengan pilihan armada yang beragam dan pelayanan profesional, kami berkomitmen memberikan pengalaman perjalanan yang nyaman dan berkesan.
              </motion.p>

            </div>

            {/* RIGHT COLUMN: FLOATING WHITE BOOKING CARD */}
            <div className="lg:col-span-5">
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
