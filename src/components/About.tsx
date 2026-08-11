import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Sparkles, CheckCircle2, Award, HeartHandshake, Eye, Zap, Shield, Target, MapPin, Building } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AboutProps {
  lang: 'ID' | 'EN';
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  const missions = [
    "Memberikan layanan rental mobil dengan kualitas pelayanan terbaik.",
    "Menyediakan armada yang nyaman dan sesuai dengan kebutuhan pelanggan.",
    "Mengutamakan keamanan dan kenyamanan selama perjalanan.",
    "Memberikan pelayanan yang profesional, ramah, dan responsif.",
    "Membangun hubungan jangka panjang dengan pelanggan melalui pelayanan yang terpercaya."
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-[#0c2340] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2" id="about-heading">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-['Great_Vibes'] text-4xl sm:text-5xl text-amber-500 font-normal block leading-tight">
              About Araka Trans
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl text-[#0c2340] tracking-tight uppercase leading-tight"
          >
            Tentang Kami & <span className="text-amber-500">Visi Misi Perusahaan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto pt-1"
          >
            Mengenal profil, komitmen, serta visi misi utama PT. Generasi Baru Araka sebagai penyedia layanan rental mobil & transportasi profesional.
          </motion.p>
        </div>

        {/* 1. PROFIL PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-blue-900/20 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-500 font-normal block leading-tight">
              Profil Perusahaan
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0c2340] uppercase tracking-tight">
              PT. GENERASI BARU ARAKA <span className="text-amber-500">(Araka Trans)</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Rental Mobil & Transportasi Profesional
            </p>
          </div>

          <div className="space-y-4 text-slate-700 font-sans text-sm sm:text-base leading-relaxed font-medium">
            <p>
              <strong className="text-[#0c2340] font-bold">PT. Generasi Baru Araka</strong> merupakan perusahaan yang bergerak di bidang jasa rental mobil dan transportasi. Kami menyediakan berbagai pilihan kendaraan yang dapat disesuaikan dengan kebutuhan perjalanan, mulai dari perjalanan pribadi hingga kebutuhan transportasi rombongan.
            </p>
            <p>
              Didukung oleh pilihan armada seperti <strong className="text-amber-600 font-bold">Hiace, Elf Giga, Bus Medium, hingga Alphard</strong>, kami siap menjadi partner perjalanan Anda untuk berbagai keperluan, seperti wisata, perjalanan keluarga, perjalanan bisnis, acara perusahaan, gathering, kunjungan, hingga kebutuhan transportasi lainnya.
            </p>
            <p>
              Kami mengutamakan kenyamanan, keamanan, ketepatan waktu, dan pelayanan profesional dalam setiap perjalanan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0c2340] block">Pelayanan Profesional</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Ramah, responsif & terpercaya</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <Zap className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0c2340] block">Ketepatan Waktu</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Jadwal penjemputan terjamin</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-display font-bold text-xs uppercase text-[#0c2340] block">Armada Lengkap</span>
                <span className="text-[11px] text-slate-600 font-medium block mt-0.5">Hiace, Elf Giga, Bus & Alphard</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. VISI & MISI PERUSAHAAN */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-blue-900/20 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden space-y-8 text-left"
        >
          <div className="border-b border-slate-100 pb-5">
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-500 font-normal block leading-tight">
              Vision & Mission
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0c2340] uppercase tracking-tight">
              Visi & Misi <span className="text-amber-500">Araka Trans</span>
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Komitmen Kualitas & Pelayanan Terbaik Pelanggan
            </p>
          </div>

          {/* VISI BOX */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0c2340] uppercase tracking-tight flex items-center gap-2">
              <Target className="w-5 h-5 text-amber-500" />
              <span>VISI</span>
            </h4>
            <div className="bg-gradient-to-br from-blue-50/80 via-slate-50 to-white border-l-4 border-amber-500 p-5 sm:p-6 rounded-r-2xl border-y border-r border-slate-200/80 shadow-xs">
              <p className="font-sans text-base sm:text-lg text-[#0c2340] leading-relaxed font-bold">
                "Menjadi perusahaan rental dan transportasi yang terkemuka, terpercaya, serta memberikan pelayanan terbaik kepada setiap pelanggan."
              </p>
            </div>
          </div>

          {/* MISI LIST */}
          <div className="space-y-4 pt-2">
            <h4 className="font-display font-extrabold text-base sm:text-lg text-[#0c2340] uppercase tracking-tight flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              <span>MISI</span>
            </h4>

            <div className="space-y-3">
              {missions.map((misi, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
                  <span className="w-7 h-7 rounded-full bg-amber-500 text-[#0c2340] font-black text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

        {/* 3. ALAMAT & KONTAK KANTOR */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-gradient-to-br from-[#071527] via-[#0c2340] to-[#071527] text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left space-y-6 border border-amber-400/30"
        >
          <div>
            <span className="font-['Great_Vibes'] text-3xl sm:text-4xl text-amber-400 font-normal block leading-tight">
              Contact & Location
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Kantor Resmi <span className="text-amber-400">PT. Generasi Baru Araka</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-4 font-sans text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                <div>
                  <strong className="text-white block font-bold">Alamat Kantor:</strong>
                  <span>Jl. Jambu RT 7/5, Kelurahan Cempaka Putih, Kecamatan Ciputat Timur</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <strong className="text-white block font-bold">WhatsApp Resmi:</strong>
                  <a href="https://wa.me/6281288748745" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">
                    0812-8874-8745
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-3 font-sans text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-[#0c2340] font-black text-xs flex items-center justify-center shrink-0">IG</span>
                <div>
                  <strong className="text-white block font-bold">Instagram:</strong>
                  <a href="https://instagram.com/Arakatrans_classytour" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">
                    @Arakatrans_classytour
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">FB</span>
                <div>
                  <strong className="text-white block font-bold">Facebook:</strong>
                  <a href="https://facebook.com/Arakatrans" target="_blank" rel="noreferrer" className="text-amber-400 font-bold hover:underline">
                    @Arakatrans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
