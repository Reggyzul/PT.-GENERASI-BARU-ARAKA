import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Banknote, 
  Car, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  HeartHandshake,
  UserCheck,
  Crown,
  Layers
} from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface AdvantagesProps {
  onBookClick?: () => void;
  lang?: 'ID' | 'EN';
}

export default function Advantages({ onBookClick, lang = 'ID' }: AdvantagesProps) {
  const t = TRANSLATIONS[lang];

  const advantagesList = [
    {
      id: 'armada-beragam',
      icon: <Car className="w-7 h-7 text-amber-500" />,
      badge: 'Lengkap & Bervariasi',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Armada Beragam',
      description: 'Berbagai pilihan kendaraan tersedia untuk kebutuhan individu, keluarga, hingga rombongan besar.',
      highlights: ['MPV, Hiace & Elf', 'Medium Bus & Alphard', 'Kapasitas Dapat Disesuaikan']
    },
    {
      id: 'nyaman-perjalanan',
      icon: <HeartHandshake className="w-7 h-7 text-teal-600" />,
      badge: 'Utamakan Kenyamanan',
      badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
      title: 'Nyaman untuk Perjalanan',
      description: 'Kami mengutamakan kenyamanan pelanggan selama menggunakan layanan transportasi.',
      highlights: ['Kabin Bersih & Steril', 'Full AC Sejuk & Double Blower', 'Kursi Reclining Ergonomis']
    },
    {
      id: 'pelayanan-profesional',
      icon: <UserCheck className="w-7 h-7 text-amber-600" />,
      badge: 'Ramah & Responsif',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Pelayanan Profesional',
      description: 'Pelayanan yang ramah, responsif, dan berorientasi pada kebutuhan pelanggan.',
      highlights: ['Driver Berpengalaman & Sopan', 'Tim CS Fast Response 24/7', 'Tepat Waktu & Aman']
    },
    {
      id: 'kendaraan-premium',
      icon: <Crown className="w-7 h-7 text-emerald-600" />,
      badge: 'Eksklusif & VIP',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: 'Pilihan Kendaraan Premium',
      description: 'Tersedia armada Luxury dan kendaraan premium untuk kebutuhan perjalanan eksklusif.',
      highlights: ['Toyota Alphard VIP', 'Hiace Premio Luxury', 'Fasilitas First-Class']
    },
    {
      id: 'berbagai-kebutuhan',
      icon: <Layers className="w-7 h-7 text-purple-600" />,
      badge: 'Solusi Lengkap',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      title: 'Cocok untuk Berbagai Kebutuhan',
      description: 'Mulai dari wisata, bisnis, keluarga, gathering, event, hingga perjalanan VIP.',
      highlights: ['Perjalanan Pribadi & Dinas', 'Acara Perusahaan & Gathering', 'Perjalanan Wisata & Event']
    }
  ];

  const handleWhatsAppConsultation = (title: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel, saya ingin konsultasi mengenai keunggulan layanan: ${title}. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="advantages" className="py-20 bg-white text-[#0f172a] relative overflow-hidden border-b border-slate-200">
      
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0b192c_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="advantages-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-display font-extrabold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>MENGAPA MEMILIH ARAKA TRANS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Kenapa Memilih <span className="text-amber-600">Araka Trans?</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Komitmen PT. Generasi Baru Araka dalam memberikan solusi transportasi yang aman, nyaman, dan terpercaya.
          </p>
        </div>

        {/* 5 Grid Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagesList.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Top Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-4 text-left">
                {/* Badge & Icon Row */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider border ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-display font-black text-xl text-[#0f172a] group-hover:text-amber-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Checklist Bullet Points */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Araka Trans Standard</span>
                <button
                  onClick={() => handleWhatsAppConsultation(item.title)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Tanya CS</span>
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlighted Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 bg-gradient-to-r from-[#0b192c] via-[#0f172a] to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden text-left"
          id="advantages-guarantee-banner"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>KOMITMEN PELAYANAN PT. GENERASI BARU ARAKA</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                Siap Menjadi Partner Perjalanan Anda
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                Pesan kendaraan yang tepat untuk liburan keluarga, perjalanan bisnis, event kantor, maupun kebutuhan VIP Anda via WhatsApp.
              </p>
            </div>

            <a
              href="https://wa.me/6281288748745?text=Halo%20Araka%20Trans%20Travel,%20saya%20ingin%20konsultasi%20pemesanan%20armada"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-extrabold text-xs uppercase px-7 py-3.5 rounded-2xl shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>Hubungi WA (0812-8874-8745)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
