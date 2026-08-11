import React from 'react';
import { motion } from 'motion/react';
import { Plane, Anchor, MapPin, Building2, Route, Compass, Landmark, Car, CheckCircle2, Crown, Users2, PartyPopper } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface ServicesProps {
  lang: 'ID' | 'EN';
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (serviceTitle: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat berkonsultasi/memesan layanan: ${serviceTitle}. Mohon informasi selengkapnya. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  const servicesList = [
    {
      id: 'rental-wisata',
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      badge: 'WISATA & LIBURAN',
      title: 'Rental Mobil untuk Wisata',
      subtitle: 'Wisata Keluarga & Rombongan',
      description: 'Nikmati perjalanan wisata bersama keluarga atau rombongan dengan kendaraan yang nyaman dan sesuai kebutuhan.',
      tag: 'Kenyamanan Prima'
    },
    {
      id: 'transportasi-rombongan',
      icon: <Users2 className="w-6 h-6 text-amber-600" />,
      badge: 'KAPASITAS BESAR',
      title: 'Transportasi Rombongan',
      subtitle: 'Hiace, Elf Giga & Bus Medium',
      description: 'Solusi transportasi untuk rombongan dengan berbagai pilihan armada mulai dari Hiace, Elf hingga Bus Medium.',
      tag: 'Kapasitas Besar'
    },
    {
      id: 'rental-perusahaan',
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
      badge: 'DINAS & KORPORAT',
      title: 'Rental untuk Perusahaan',
      subtitle: 'Kunjungan Kerja & Meeting',
      description: 'Mendukung kebutuhan transportasi perusahaan untuk perjalanan dinas, meeting, gathering, kunjungan kerja, dan berbagai kegiatan lainnya.',
      tag: 'Profesional & Tepat Waktu'
    },
    {
      id: 'perjalanan-vip',
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      badge: 'EKSKLUSIF & LUXURY',
      title: 'Perjalanan VIP',
      subtitle: 'Toyota Alphard & Armada Luxury',
      description: 'Untuk kebutuhan perjalanan yang lebih eksklusif, tersedia pilihan kendaraan premium seperti Toyota Alphard dan armada Luxury.',
      tag: 'Layanan Eksklusif'
    },
    {
      id: 'event-gathering',
      icon: <PartyPopper className="w-6 h-6 text-amber-600" />,
      badge: 'ACARA & GATHERING',
      title: 'Event & Gathering',
      subtitle: 'Acara Kelompok & Outbound',
      description: 'Menyediakan kebutuhan transportasi untuk berbagai acara, gathering, kunjungan, maupun kegiatan kelompok.',
      tag: 'Armada Terkoordinasi'
    }
  ];

  const segmentations = [
    {
      question: "Perjalanan keluarga?",
      desc: "Pilih kendaraan yang nyaman dan sesuai kebutuhan keluarga.",
      badge: "Keluarga"
    },
    {
      question: "Perjalanan rombongan?",
      desc: "Hiace, Elf Giga, hingga Bus Medium siap menjadi pilihan.",
      badge: "Rombongan"
    },
    {
      question: "Perjalanan VIP?",
      desc: "Nikmati kenyamanan kendaraan premium seperti Alphard dan armada Luxury.",
      badge: "VIP & Executive"
    },
    {
      question: "Kebutuhan perusahaan?",
      desc: "Kami siap mendukung berbagai kebutuhan transportasi perusahaan dan event.",
      badge: "Korporat"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-900 overflow-hidden relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2" id="services-heading">
          <span className="font-display font-bold text-xs uppercase tracking-widest text-amber-600 block">
            LAYANAN RENTAL MOBIL
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Layanan Transportasi <span className="text-amber-600">Araka Trans</span>
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            PT. Generasi Baru Araka menyediakan solusi transportasi profesional untuk berbagai skala dan jenis perjalanan Anda.
          </p>
        </div>

        {/* 5 SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Icon + Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider border border-amber-200/60">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-600 font-bold mt-1">
                    {item.subtitle}
                  </p>
                </div>

                {/* Description Text */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>

              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item.tag}</span>
                </div>

                <button
                  onClick={() => handleWhatsAppBooking(item.title)}
                  className="bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-bold text-xs py-2 px-4 rounded-full shadow-md transition-all duration-200 cursor-pointer active:scale-95 border border-amber-400/20"
                >
                  Pesan Layanan
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* SEGMENTATION SECTION: ARMADA UNTUK SETIAP PERJALANAN */}
        <div className="mt-16 pt-12 border-t border-slate-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase">
              Armada untuk <span className="text-amber-600">Setiap Perjalanan</span>
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 font-medium">
              Sesuaikan tipe kendaraan dengan kebutuhan perjalanan Anda bersama Araka Trans
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {segmentations.map((seg, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 relative">
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 uppercase">
                  {seg.badge}
                </span>
                <h4 className="font-display font-black text-base text-slate-900">
                  {seg.question}
                </h4>
                <p className="font-sans text-xs text-slate-600 leading-relaxed font-medium">
                  {seg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
