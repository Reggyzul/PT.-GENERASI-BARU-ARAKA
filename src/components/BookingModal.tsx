import React, { useState, useEffect } from 'react';
import { Car } from '../types';
import { CARS } from '../data/cars';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calendar, Clock, MapPin, User, Phone, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  lang: 'ID' | 'EN';
  onCarChange?: (car: Car) => void;
}

export default function BookingModal({ car, onClose, lang, onCarChange }: BookingModalProps) {
  const [tripCategory, setTripCategory] = useState<string>('wisata');
  const [selectedCarId, setSelectedCarId] = useState<string>(car?.id || 'hiace-premio');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passengers, setPassengers] = useState('10 Orang');
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('08:00 (Pagi)');
  const [pickupAddress, setPickupAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (car) {
      setSelectedCarId(car.id);
    }
  }, [car]);

  if (!car) return null;

  const currentSelectedCar = CARS.find(c => c.id === selectedCarId) || car;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !departureDate || !pickupAddress) {
      alert('Mohon isi semua kolom yang wajib diisi (*)!');
      return;
    }

    const waNumber = '6281288748745';

    let categoryText = 'Rental Mobil untuk Wisata';
    if (tripCategory === 'rombongan') categoryText = 'Transportasi Rombongan';
    if (tripCategory === 'perusahaan') categoryText = 'Rental untuk Perusahaan / Dinas';
    if (tripCategory === 'vip') categoryText = 'Perjalanan VIP (Alphard & Luxury)';
    if (tripCategory === 'event') categoryText = 'Event & Gathering';

    const textTemplate = `Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat reservasi/sewa armada:

📋 *DETAIL RESERVASI ARAKA TRANS:*
• Kategori Perjalanan: *${categoryText}*
• Unit Armada: *${currentSelectedCar.name}*
• Tanggal Perjalanan: *${departureDate}*
• Jam Penjemputan: *${departureTime}*
• Estimasi Penumpang: *${passengers}*

👤 *DATA PEMESAN:*
• Nama Lengkap: *${name}*
• No. WhatsApp: *${phone}*
• Alamat Penjemputan: *${pickupAddress}*
• Alamat Tujuan: *${destinationAddress || '-'}*
• Catatan Tambahan: *${notes || '-'}*

Mohon konfirmasi ketersediaan armada, jadwal, dan rincian tarif. Terima kasih!`;

    const encodedText = encodeURIComponent(textTemplate);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;
    
    window.open(waUrl, '_blank', 'noreferrer');
    setIsBooked(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          id="booking-backdrop"
        />

        {/* Modal Panel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-slate-200"
          id="booking-modal-panel"
        >
          
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#0b192c] via-[#0f172a] to-slate-900 text-white p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden text-left">
            <div className="space-y-5 relative z-10">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>FORM RESERVASI RESMI</span>
              </div>

              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight">
                  {currentSelectedCar.name}
                </h3>
                <p className="font-sans text-xs text-amber-400 font-bold mt-0.5">
                  {currentSelectedCar.priceDisplay || 'Solusi Transportasi Nyaman & Terpercaya'}
                </p>
              </div>

              {/* Car Photo */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-800/80 aspect-[16/10] p-2 flex items-center justify-center">
                <img
                  src={currentSelectedCar.image}
                  alt={currentSelectedCar.name}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Specs List */}
              <div className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-4 font-medium">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Kapasitas:</span>
                  <span className="font-semibold text-white">{currentSelectedCar.seats} Kursi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Kategori:</span>
                  <span className="font-semibold text-teal-400">{currentSelectedCar.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Layanan:</span>
                  <span className="font-semibold text-amber-400">Driver Profesional</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-left space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-extrabold text-[11px] uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>PT. Generasi Baru Araka</span>
                </div>
                <p className="font-sans text-[11px] text-slate-300 leading-relaxed font-medium">
                  Informasi reservasi langsung terhubung ke WhatsApp official 0812-8874-8745.
                </p>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 mt-6 text-[10px] text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Respon Cepat via WhatsApp (0812-8874-8745)</span>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-white max-h-[80vh] overflow-y-auto relative text-left">
            
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer z-20"
              id="close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-[#0f172a] uppercase tracking-tight">
                    Form Reservasi Araka Trans
                  </h4>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed font-medium mt-1">
                    Isi rincian perjalanan Anda untuk terhubung langsung via WhatsApp (0812-8874-8745).
                  </p>
                </div>

                {/* 1. SELEKSI KATEGORI & ARMADA */}
                <div className="space-y-4 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 block">
                    1. PILIH KATEGORI & ARMADA KENDARAAN
                  </span>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Kategori Layanan Perjalanan <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={tripCategory}
                      onChange={(e) => setTripCategory(e.target.value)}
                      className="block w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs font-sans font-semibold text-slate-900 cursor-pointer bg-white"
                    >
                      <option value="wisata">Rental Mobil untuk Wisata</option>
                      <option value="rombongan">Transportasi Rombongan (Hiace / Elf / Bus)</option>
                      <option value="perusahaan">Rental untuk Perusahaan (Dinas / Meeting)</option>
                      <option value="vip">Perjalanan VIP (Toyota Alphard / Luxury)</option>
                      <option value="event">Event & Gathering</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Pilihan Unit Armada Mobil <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedCarId}
                      onChange={(e) => {
                        setSelectedCarId(e.target.value);
                        const newCar = CARS.find(c => c.id === e.target.value);
                        if (newCar && onCarChange) onCarChange(newCar);
                      }}
                      className="block w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-xs font-sans font-semibold text-slate-900 cursor-pointer bg-white"
                    >
                      {CARS.map(c => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.category} - {c.seats} Kursi)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. DATA PENUMPANG */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 block">
                    2. DATA PENUMPANG & KONTAK
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Nama Lengkap Pemesan <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Masukkan nama lengkap Anda"
                          className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Nomor WhatsApp / HP <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Contoh: 081288748745"
                          className="block w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. JADWAL & ALAMAT */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 block">
                    3. JADWAL & ALAMAT PENJEMPUTAN
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Tanggal Perjalanan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Jam Penjemputan
                      </label>
                      <select
                        value={departureTime}
                        onChange={(e) => setDepartureTime(e.target.value)}
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans font-semibold text-slate-900 cursor-pointer bg-white"
                      >
                        <option value="08:00 (Pagi)">08:00 (Pagi)</option>
                        <option value="12:00 (Siang)">12:00 (Siang)</option>
                        <option value="16:00 (Sore)">16:00 (Sore)</option>
                        <option value="20:00 (Malam)">20:00 (Malam)</option>
                        <option value="Sesuai Jam Penerbangan / Event">Sesuai Event / Penerbangan</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Jumlah Penumpang
                      </label>
                      <input
                        type="text"
                        value={passengers}
                        onChange={(e) => setPassengers(e.target.value)}
                        placeholder="Contoh: 10 Orang"
                        className="block w-full px-3 py-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Alamat Penjemputan <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={pickupAddress}
                        onChange={(e) => setPickupAddress(e.target.value)}
                        placeholder="Masukkan alamat lengkap penjemputan..."
                        className="block w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                        Alamat Tujuan Perjalanan
                      </label>
                      <textarea
                        rows={2}
                        value={destinationAddress}
                        onChange={(e) => setDestinationAddress(e.target.value)}
                        placeholder="Masukkan tujuan lokasi perjalanan..."
                        className="block w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 text-xs font-sans text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Button */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left text-xs text-slate-500 font-medium">
                    <span className="block font-bold text-slate-900">Kirim Reservasi Ke WA</span>
                    <span>Langsung terhubung dengan tim Araka Trans (0812-8874-8745)</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-display font-black text-sm px-8 py-3.5 rounded-full shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    id="submit-booking-to-whatsapp"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim via WhatsApp (0812-8874-8745) ➔</span>
                  </button>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                id="booking-success-message"
              >
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-2 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-black text-2xl text-slate-900 uppercase">
                  Draf Reservasi Dikirim!
                </h4>
                <p className="font-sans text-slate-600 text-sm max-w-md leading-relaxed font-medium">
                  Draf pesan WhatsApp untuk armada <strong>{currentSelectedCar.name}</strong> telah dibuat. Silakan tekan tombol <strong>Kirim</strong> pada aplikasi WhatsApp Anda.
                </p>
                <button
                  onClick={onClose}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-display font-bold text-sm px-7 py-3 rounded-full shadow-md transition-colors cursor-pointer mt-2"
                >
                  Tutup Form
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
