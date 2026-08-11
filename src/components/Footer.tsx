import React from 'react';
import { Phone, MapPin, MessageCircle, Facebook, Instagram, Clock, ShieldCheck, Globe, Car } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
}

export default function Footer({ onNavClick, lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer id="contact" className="bg-[#071527] text-white pt-20 pb-8 border-t border-blue-900/60 relative overflow-hidden text-left">
      
      {/* Absolute top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper pre-footer callout section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 border-b border-blue-900/60 items-center">
          <div className="space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-amber-400">
              PT. GENERASI BARU ARAKA
            </h3>
            <p className="font-sans text-sm text-blue-100/90 font-medium">
              "Solusi Transportasi Nyaman, Aman, dan Terpercaya untuk Berbagai Kebutuhan Perjalanan Anda"
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="https://wa.me/6281288748745?text=Halo%20Araka%20Trans%20Travel,%20saya%20ingin%20konsultasi%20dan%20pemesanan%20sewa%20armada"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-600 hover:to-yellow-600 text-[#071527] font-sans font-black text-xs uppercase px-6 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2.5 cursor-pointer border border-amber-300 hover:scale-105"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current shrink-0" />
              <span>WhatsApp: 0812-8874-8745</span>
            </a>
          </div>
        </div>

        {/* Core Footer grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
          
          {/* Column 1: Brand & Office Address */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-white/20 inline-block group hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo-araka.png" 
                  alt="ARAKA TRANS CLASSY TOUR LOGO" 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </div>

            <p className="font-sans text-xs text-blue-100/80 leading-relaxed max-w-sm font-medium">
              Araka Trans hadir sebagai penyedia layanan rental mobil dan transportasi yang siap menemani perjalanan pribadi, keluarga, perusahaan, maupun rombongan dengan armada Hiace, Elf Giga, Bus Medium, hingga Alphard.
            </p>

            <div className="text-xs text-slate-300 font-sans space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white">Alamat Kantor:</strong><br />
                  Jl. Jambu RT 7/5, Kelurahan Cempaka Putih, Kecamatan Ciputat Timur.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                <span>WhatsApp / Telp: <strong className="text-amber-400">0812-8874-8745</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                <span>Instagram: <a href="https://instagram.com/Arakatrans_classytour" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">@Arakatrans_classytour</a></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Facebook className="w-4.5 h-4.5 text-amber-400 shrink-0" />
                <span>Facebook: <a href="https://facebook.com/Arakatrans" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">@Arakatrans</a></span>
              </div>

              <p className="pt-2 text-slate-400 text-[11px]">©2026 PT. Generasi Baru Araka (Araka Trans Travel). Semua Hak Dilindungi.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-amber-400 uppercase border-l-2 border-amber-500 pl-2.5">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300 font-medium">
              <li>
                <button onClick={() => onNavClick('home')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Beranda Utama
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Tentang PT. Generasi Baru Araka
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Layanan Rental & Transportasi
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('cars')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Pilihan Armada (Hiace, Elf, Bus, Alphard)
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('advantages')} className="hover:text-amber-400 transition-colors cursor-pointer text-left w-full">
                  • Kenapa Memilih Araka Trans
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-sm tracking-widest text-amber-400 uppercase border-l-2 border-amber-500 pl-2.5">
              Kontak & Pemesanan 24 Jam
            </h4>

            <div className="bg-[#0c2340] p-4 rounded-2xl border border-blue-900/80 space-y-2.5 shadow-md">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-300 font-bold uppercase block">WhatsApp Fast Response</span>
                  <a href="https://wa.me/6281288748745" target="_blank" rel="noreferrer" className="font-display font-black text-lg text-amber-400 hover:underline">
                    0812-8874-8745
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a 
                href="https://instagram.com/Arakatrans_classytour" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#0c2340] hover:bg-blue-900 p-3 rounded-2xl border border-blue-900/80 space-y-1 block transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase">
                  <Instagram className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium truncate">
                  @Arakatrans_classytour
                </p>
              </a>

              <a 
                href="https://facebook.com/Arakatrans" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#0c2340] hover:bg-blue-900 p-3 rounded-2xl border border-blue-900/80 space-y-1 block transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs uppercase">
                  <Facebook className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium truncate">
                  @Arakatrans
                </p>
              </a>
            </div>

            {/* Embedded Google Map Ciputat Timur */}
            <div className="pt-2">
              <div className="rounded-2xl overflow-hidden border border-blue-900/80 shadow-xl w-full h-36 bg-[#0c2340] relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Cempaka+Putih+Ciputat+Timur&hl=id&z=14&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PT. Generasi Baru Araka Ciputat Timur"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="border-t border-blue-900/60 pt-8 text-center text-[11px] text-slate-400 font-sans leading-relaxed">
          {t.footer_disclaimer}
        </div>

      </div>
    </footer>
  );
}
