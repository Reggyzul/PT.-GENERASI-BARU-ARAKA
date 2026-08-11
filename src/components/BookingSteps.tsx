import React from 'react';
import { Smartphone, MessageSquareText, ShieldAlert, Sparkles, Map, CarCheck, CalendarCheck, CheckCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';
import { motion } from 'motion/react';

interface BookingStepsProps {
  lang: 'ID' | 'EN';
}

export default function BookingSteps({ lang }: BookingStepsProps) {
  const t = TRANSLATIONS[lang];

  const stepsList = [
    {
      step: '01',
      title: '1. Pilih Armada 🚐',
      description: 'Tentukan kendaraan yang sesuai dengan jumlah penumpang dan kebutuhan perjalanan Anda.',
    },
    {
      step: '02',
      title: '2. Hubungi Kami 💬',
      description: 'Klik tombol WhatsApp dan sampaikan detail kebutuhan rental Anda ke 0812-8874-8745.',
    },
    {
      step: '03',
      title: '3. Konfirmasi Pemesanan 📋',
      description: 'Tim Araka Trans akan membantu memberikan informasi mengenai ketersediaan dan detail rental.',
    },
    {
      step: '04',
      title: '4. Siap Berangkat 🚗',
      description: 'Setelah pemesanan dikonfirmasi, kendaraan siap mendukung perjalanan Anda.',
    },
  ];

  return (
    <section id="steps" className="py-20 bg-slate-50 overflow-hidden border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>CARA BOOKING</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0f172a] tracking-tight uppercase">
            4 Langkah Mudah Pemesanan
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Proses cepat, fleksibel, dan langsung terhubung dengan tim resmi Araka Trans.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-400 via-amber-500 to-teal-500 -translate-y-12 z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stepsList.map((stepItem, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-200/90 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center relative group"
              >
                {/* Step Number Circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-teal-600 text-white flex items-center justify-center font-display font-black text-lg shadow-lg shadow-amber-500/20 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {stepItem.step}
                </div>
                
                <h3 className="font-display font-black text-lg text-[#0f172a] mb-2 group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                  {stepItem.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {stepItem.description}
                </p>

                {/* Corner light shine decorative */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
