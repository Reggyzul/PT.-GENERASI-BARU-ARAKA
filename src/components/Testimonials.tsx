import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/cars';
import { Testimonial } from '../types';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface TestimonialsProps {
  lang: 'ID' | 'EN';
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const [reviews] = useState<Testimonial[]>(TESTIMONIALS);
  const t = TRANSLATIONS[lang];

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-[#f8fafc] text-[#0c2340] overflow-hidden relative border-b border-slate-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="testimonials-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/10 border border-blue-900/20 text-[#0c2340] font-display font-extrabold text-xs tracking-wider uppercase shadow-sm">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            <span>ULASAN & TESTIMONI PENUMPANG</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#0c2340] tracking-tight uppercase leading-tight">
            Pengalaman <span className="text-amber-500">Pelanggan Araka Trans</span>
          </h2>

          <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Kepercayaan dan kepuasan Anda adalah kebanggaan utama kami dalam setiap rute perjalanan.
          </p>
        </div>

        {/* 3-COLUMN TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((testi, index) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              key={testi.id}
              className="bg-white border border-blue-900/20 rounded-3xl p-7 shadow-lg hover:shadow-2xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 fill-current opacity-80 group-hover:text-amber-100 transition-colors pointer-events-none" />

              <div className="space-y-5 relative z-10 text-left">
                
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(testi.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#0c2340] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>Verified</span>
                  </span>
                </div>

                <p className="font-sans text-slate-700 italic text-sm leading-relaxed font-medium">
                  "{testi.text}"
                </p>

              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3.5 relative z-10 text-left">
                <img
                  src={testi.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500 shadow-md shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200';
                  }}
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#0c2340] uppercase tracking-tight">
                    {testi.name}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-500 font-medium">
                    {testi.role}
                  </p>
                  
                  {testi.carModel && (
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 text-[9px] font-bold px-2 py-0.5 rounded-full border border-amber-300 mt-1">
                      <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                      <span>{testi.carModel}</span>
                    </span>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
