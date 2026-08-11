import React from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Users, CheckCircle2, MessageCircle, Sparkles, ShieldCheck, Banknote } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  lang: 'ID' | 'EN';
}

export default function CarList({ onSelectCar, lang }: CarListProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel, saya berminat memesan/sewa unit ${carName}. Mohon info ketersediaan jam & tanggal. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 text-[#0f172a] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="cars-heading">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>PILIHAN ARMADA KAMI</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0f172a] tracking-tight uppercase leading-tight">
            Armada Mobil <span className="text-amber-600">Araka Trans</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Kami menyediakan berbagai pilihan kendaraan yang dapat disesuaikan dengan kebutuhan perjalanan Anda.
          </p>
        </div>

        {/* GRID LAYOUT: 8 MOBIL ARMADA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARS.map((car, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              key={car.id}
              className="bg-white border border-slate-200/90 rounded-3xl p-5 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              id={`car-card-${car.id}`}
            >
              <div className="space-y-4 text-left">
                
                {/* Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-3">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-auto object-contain max-h-[150px] drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-amber-500 text-white font-display font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                    {car.category}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                    <Users className="w-3 h-3 text-amber-600" />
                    <span>{car.seats} Kursi</span>
                  </div>
                </div>

                {/* Car Name & Description */}
                <div>
                  <h3 className="font-display font-black text-xl text-[#0f172a] group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                    {car.name}
                  </h3>
                  <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1 font-medium line-clamp-3">
                    {car.description}
                  </p>
                </div>

                {/* FACILITIES CHECKLIST */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-600 block">Fitur Utama:</span>
                  <div className="space-y-1">
                    {car.includeList.slice(0, 3).map((facility, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="line-clamp-1">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => handleWhatsAppBooking(car.name)}
                  className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Pesan WA</span>
                </button>

                <button
                  onClick={() => onSelectCar(car)}
                  className="bg-slate-100 hover:bg-slate-200 text-[#0f172a] border border-slate-200 font-sans font-bold text-xs uppercase py-3 px-3 rounded-xl transition-all cursor-pointer"
                  title="Form Reservasi Lengkap"
                >
                  Detail
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
