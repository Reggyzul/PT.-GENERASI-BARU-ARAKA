import React from 'react';
import { CARS } from '../data/cars';
import { Car } from '../types';
import { motion } from 'motion/react';
import { Users, CheckCircle2, MessageCircle, Sparkles, ShieldCheck, Banknote, Layers, ExternalLink } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface CarListProps {
  onSelectCar: (car: Car) => void;
  onOpenHiaceModal: () => void;
  onOpenElfGigaModal: () => void;
  onOpenBusMediumModal: () => void;
  onOpenAlphardModal: () => void;
  onOpenInnovaModal: () => void;
  lang: 'ID' | 'EN';
}

export default function CarList({
  onSelectCar,
  onOpenHiaceModal,
  onOpenElfGigaModal,
  onOpenBusMediumModal,
  onOpenAlphardModal,
  onOpenInnovaModal,
  lang
}: CarListProps) {
  const t = TRANSLATIONS[lang];

  const handleWhatsAppBooking = (carName: string) => {
    const waNumber = '6281288748745';
    const message = `Halo Araka Trans Travel, saya berminat memesan/sewa unit ${carName}. Mohon info ketersediaan jam & tanggal. Terima kasih!`;
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 text-[#0c2340] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="cars-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-900/10 border border-blue-900/20 text-[#0c2340] font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>PILIHAN ARMADA KAMI</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0c2340] tracking-tight uppercase leading-tight">
            Armada Mobil <span className="text-amber-500">Araka Trans</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Kami menyediakan berbagai pilihan kendaraan yang dapat disesuaikan dengan kebutuhan perjalanan Anda.
          </p>
        </div>

        {/* GRID LAYOUT: KARTU ARMADA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARS.map((car, index) => {
            const isHiace = car.id === 'hiace-series';
            const isElfGiga = car.id === 'elf-giga';
            const isBusMedium = car.id === 'bus-medium';
            const isAlphard = car.id === 'toyota-alphard';
            const isInnova = car.id === 'innova-reborn';

            const handleCardClick = () => {
              if (isHiace) {
                onOpenHiaceModal();
              } else if (isElfGiga) {
                onOpenElfGigaModal();
              } else if (isBusMedium) {
                onOpenBusMediumModal();
              } else if (isAlphard) {
                onOpenAlphardModal();
              } else if (isInnova) {
                onOpenInnovaModal();
              } else {
                onSelectCar(car);
              }
            };

            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                key={car.id}
                onClick={handleCardClick}
                className="bg-white border border-blue-900/30 ring-2 ring-amber-500/20 cursor-pointer bg-gradient-to-b from-blue-50/20 via-white to-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                id={`car-card-${car.id}`}
              >
                <div className="space-y-4 text-left">
                  
                  {/* Image Showcase */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100/90 to-slate-50 border border-slate-200/80 aspect-[16/10] flex items-center justify-center p-2 group-hover:bg-amber-50/40 transition-colors">
                    <img
                      src={car.image}
                      alt={car.name}
                      className={`w-full h-full object-contain drop-shadow-xl transition-transform duration-500 ${
                        isElfGiga 
                          ? 'scale-[1.12] sm:scale-[1.18] origin-center group-hover:scale-[1.22]' 
                          : isAlphard 
                          ? 'scale-105 sm:scale-110 group-hover:scale-110' 
                          : 'group-hover:scale-105'
                      }`}
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0c2340] text-amber-400 font-display font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-sm border border-amber-400/30">
                      {car.category}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-white/95 text-slate-700 font-sans text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-slate-200 flex items-center gap-1 shadow-sm">
                      <Users className="w-3 h-3 text-[#0c2340]" />
                      <span>{isHiace ? '9 - 14 Kursi' : isBusMedium ? '33 - 35 Kursi' : `${car.seats} Kursi`}</span>
                    </div>
                  </div>

                  {/* Car Name & Description */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-black text-2xl text-[#0c2340] group-hover:text-amber-500 transition-colors uppercase tracking-tight">
                        {car.name}
                      </h3>
                      {isHiace && (
                        <span className="text-[10px] font-extrabold bg-amber-500 text-[#0c2340] px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse">
                          4 Varian
                        </span>
                      )}
                      {isElfGiga && (
                        <span className="text-[10px] font-extrabold bg-[#0c2340] text-amber-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          19 Kursi
                        </span>
                      )}
                      {isBusMedium && (
                        <span className="text-[10px] font-extrabold bg-amber-500 text-[#0c2340] px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Jetbus 3
                        </span>
                      )}
                      {isAlphard && (
                        <span className="text-[10px] font-extrabold bg-[#071527] text-amber-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          VIP Class
                        </span>
                      )}
                    </div>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed mt-1.5 font-medium">
                      {car.description}
                    </p>
                  </div>

                  {/* FACILITIES CHECKLIST */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-blue-900 block">
                      {isHiace ? 'Varian Hiace Yang Tersedia:' : 'Fitur Utama:'}
                    </span>
                    <div className="space-y-1">
                      {car.includeList.slice(0, 4).map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="line-clamp-1">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2">
                  {isHiace ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenHiaceModal();
                      }}
                      className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Layers className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Pilih Varian Hiace (4 Varian)</span>
                    </button>
                  ) : isElfGiga ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenElfGigaModal();
                      }}
                      className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Layers className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Detail Informasi Elf Giga</span>
                    </button>
                  ) : isBusMedium ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBusMediumModal();
                      }}
                      className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Layers className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Detail Informasi Bus Medium</span>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenAlphardModal();
                      }}
                      className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-xs uppercase py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Layers className="w-4 h-4 shrink-0 text-amber-300" />
                      <span>Detail Informasi Toyota Alphard</span>
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
