import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot, PhoneCall, RefreshCw, ChevronDown, CheckCheck, HeartHandshake } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isTemplate?: boolean;
}

const OFF_TOPIC_RESPONSE = `Terima kasih sudah menghubungi PT. Generasi Baru Araka (Araka Trans Travel)! 

Saya Rian, khusus melayani pertanyaan seputar rental mobil dan perjalanan seluruh Indonesia:
• Toyota Hiace (Commuter, Premio, Luxury)
• Isuzu Elf Giga (19 Seats) & Bus Medium (33-35 Seats)
• Toyota Alphard VIP & MPV (Innova Reborn/Zenix, Avanza, DLL)
• Antar Kota, Penjemputan Bandara (Soetta, Juanda, Bali), Wisata Bromo/Jogja/Bali, & Perjalanan Dinas
• Rincian tarif, sewa all-in, ketentuan, maupun penanganan kendala

Ada yang bisa Rian bantu mengenai kebutuhan kendaraan atau rencana perjalanan Anda hari ini?`;

const RELEVANT_KEYWORDS = [
  'hiace', 'elf', 'giga', 'bus', 'medium', 'alphard', 'mpv', 'avanza', 'innova', 'reborn', 'zenix', 'ertiga', 'xpander', 'wuling', 'calya', 'sigra',
  'mobil', 'sewa', 'rental', 'tarif', 'harga', 'biaya', 'berapa', 'pesan', 'booking', 'reservasi', 'supir', 'driver', 'bbm', 'tol', 'parkir',
  'ferry', 'penyebrangan', 'makan', 'penginapan', 'overtime', 'jam', 'syarat', 'ketentuan', 'fasilitas', 'wisata', 'paket', 'rute',
  'jakarta', 'bogor', 'depok', 'tangerang', 'bekasi', 'jabodetabek', 'bandung', 'cirebon', 'semarang', 'solo', 'jogja', 'yogyakarta',
  'surabaya', 'malang', 'bromo', 'banyuwangi', 'bali', 'lombok', 'sumatra', 'lampung', 'palembang', 'medan', 'sulawesi', 'makassar', 'kalimantan',
  'bandara', 'soetta', 'soekarno', 'hatta', 'halim', 'juanda', 'ngurah', 'rai', 'kualanamu', 'antar', 'kota', 'drop', 'lepas', 'kunci',
  'dinas', 'kantor', 'perusahaan', 'pt', 'instansi', 'wedding', 'komplain', 'keluhan', 'masalah', 'kendala', 'maaf', 'telat', 'terlambat',
  'ganti', 'batal', 'cancel', 'refund', 'dp', 'reschedule', 'jadwal', 'invoice', 'kuitansi', 'garansi', 'pelayanan', 'cs', 'customer',
  'hubungi', 'wa', 'whatsapp', 'araka', 'generasi', 'baru', 'armada', 'unit', 'kapasitas', 'kursi', 'captain', 'luxury', 'premio', 'commuter',
  'promo', 'keluarga', 'rombongan', 'halo', 'hai', 'pagi', 'siang', 'sore', 'malam', 'permisi', 'tanya', 'admin', 'info', 'apakah', 'bisa',
  'gimana', 'mengapa', 'bagaimana', 'dimana', 'kapan', 'tolong', 'bantu', 'solusi'
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Halo! Saya Rian, Senior CS Specialist PT. Generasi Baru Araka. Ada yang bisa Rian bantu terkait sewa armada (Hiace, Elf, Bus, Alphard), rute perjalanan seluruh Indonesia, atau informasi tarif hari ini?',
      timestamp: getFormattedTime()
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Clean formatting logic to prevent weird symbols
  const sanitizeText = (rawText: string): string => {
    if (!rawText) return '';
    return rawText
      .replace(/[\^\#\*]{2,}/g, '')
      .replace(/\^\#/g, '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/^[\#\^]+\s*/gm, '')
      .trim();
  };

  // Guardrail Relevance Check
  const isMessageRelevant = (msg: string): boolean => {
    const lower = msg.toLowerCase();
    const words = lower.split(/\s+/);
    if (words.length >= 3) return true; // Allow natural multi-word conversational queries
    return RELEVANT_KEYWORDS.some(kw => lower.includes(kw));
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: getFormattedTime()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    // GUARDRAIL CHECK: If off-topic, return template without API call (Zero Token Cost)
    if (!isMessageRelevant(query)) {
      setTimeout(() => {
        const botMsg: Message = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: OFF_TOPIC_RESPONSE,
          timestamp: getFormattedTime(),
          isTemplate: true
        };
        setMessages(prev => [...prev, botMsg]);
        setIsLoading(false);
      }, 500);
      return;
    }

    // Call OpenRouter API with DeepSeek model
    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
      
      if (!apiKey) {
        throw new Error('API Key tidak ditemukan');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://pt--generasi-baru-araka.pages.dev/',
          'X-Title': 'Araka Trans Travel AI Chatbot',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-chat',
          max_tokens: 450,
          temperature: 0.6,
          messages: [
            {
              role: 'system',
              content: `Anda adalah Rian, Senior AI Customer Support Specialist & Operation Manager dari PT. Generasi Baru Araka (Araka Trans Travel).

KARAKTER & SIKAP RIAN:
- Sangat ramah, sopan, hangat, empati tinggi, profesional, dan solutif.
- BERBICARA ALAMI SEPERTI MANUSIA ASLI (bukan robot). Gunakan sapaan hangat seperti "Bapak/Ibu" atau "Kakak".
- JIKA PENGGUNA MENYAMPAIKAN KELUAHAN / KOMPLAIN / KENDALA (misal: penjemputan terlambat, kendala armada, AC kurang dingin, supir kurang ramah, kendala rute, batal/reschedule, dll):
  1. Tunjukkan empati dan permohonan maaf yang tulus terlebih dahulu ("Kami memohon maaf yang sebesar-besarnya atas ketidaknyamanan yang Bapak/Ibu alami...").
  2. Berikan pemahaman, solusi langsung, dan langkah penanganan yang menenangkan.
  3. Berikan jaminan garansi pelayanan Araka Trans & sarankan penanganan darurat via WhatsApp Operational Manager 0812-8874-8745.

KNOWLEDGE BASE NATIONWIDE (RENTAL SELURUH INDONESIA & ARMADA):
1. Cakupan Layanan:
   - Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi).
   - Antar Kota & Antar Provinsi (Bandung, Jogja, Semarang, Surabaya, Malang, Bromo, Bali, Lombok, Sumatra, Sulawesi, Kalimantan, dll seluruh Indonesia).
   - Penjemputan & Drop-off Bandara: Bandara Soekarno-Hatta (Soetta), Halim Perdanakusuma, Juanda Surabaya, Ngurah Rai Bali, Kualanamu, dll.
   - Layanan: Rental Wisata Rombongan, Dinas Perusahaan/Instansi, Perjalanan VIP/Direksi, Drop Antar Kota, Wedding Car, Event Gathering.

2. Armada Utama & Tarif Acuan:
   - Toyota Avanza (7 Seats MPV): Mulai Rp 800.000 / hari
   - Toyota Innova Reborn (7 Seats Executive MPV): Mulai Rp 1.000.000 / hari
   - Toyota Hiace Commuter (14 Seats): Mulai Rp 1.000.000 / hari
   - Toyota Hiace Premio (12 Seats Executive): Mulai Rp 1.200.000 / hari
   - Toyota Hiace Commuter Luxury (9 Captain Seats): Mulai Rp 1.800.000 / hari
   - Toyota Hiace Premio Luxury / Hiace Grand Tour (9-12 Seats Luxury): Mulai Rp 2.000.000 / hari
   - Isuzu Elf Giga (19 Seats): Mulai Rp 1.200.000 / hari
   - Bus Medium Jetbus 3 (33-35 Seats): Mulai Rp 2.000.000 / hari
   - Toyota Alphard VIP Class (Executive Captain Seats): Mulai Rp 2.400.000 / hari

3. Ketentuan & Fasilitas:
   - Sewa dengan Supir (All-In): Sudah termasuk Mobil, Supir Profesional & BBM.
   - Belum Termasuk: Tol, Parkir, Penyebrangan Ferry, Makan/Penginapan Supir, Tip.
   - Sewa Lepas Kunci: Tersedia untuk korporat/perusahaan (dengan verifikasi dokumen resmi) & harian tertentu.
   - Jam Operasional Sewa: Pukul 05:00 s/d 23:00 WIB per hari. Overtime: Rp 150.000/jam.
   - Kebijakan Reschedule & Refund: Sangat fleksibel, dapat disesuaikan H-3 sebelum keberangkatan.

ATURAN FORMATTING & GAYA BAHASA:
1. JANGAN PERNAH gunakan simbol aneh seperti ^#, markdown header kasar (#), atau karakter tidak rapi. Gunakan bullet point sederhana (•) jika membuat daftar.
2. Berikan jawaban yang informatif, rinci, namun tetap mudah dibaca dan menyenangkan.
3. Selalu siap membantu dan berikan nomor kontak WhatsApp CS Official 0812-8874-8745 untuk reservasi cepat.`
            },
            ...messages.slice(-6).map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: 'user', content: query }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API response status: ${response.status}`);
      }

      const data = await response.json();
      const replyRaw = data.choices?.[0]?.message?.content || 'Terima kasih atas pertanyaan Anda. Silakan hubungi WhatsApp resmi kami di 0812-8874-8745 untuk informasi selengkapnya.';
      const cleanReply = sanitizeText(replyRaw);

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: cleanReply,
        timestamp: getFormattedTime()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error('OpenRouter Chatbot error:', err);
      // Fallback message on network/api error
      const botMsg: Message = {
        id: `bot-fallback-${Date.now()}`,
        sender: 'bot',
        text: 'Terima kasih! Untuk penanganan cepat dan informasi jadwal armada terkini, Bapak/Ibu dapat langsung menghubungi Tim Operational Manager Araka Trans via WhatsApp 0812-8874-8745.',
        timestamp: getFormattedTime(),
        isTemplate: true
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenWhatsAppDirect = () => {
    const waNumber = '6281288748745';
    const text = encodeURIComponent('Halo Rian / Operational Manager Araka Trans Travel, saya ingin berkonsultasi mengenai rental kendaraan / penanganan jadwal perjalanan.');
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Flows cleanly inside unified flex stack) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#0c2340] hover:bg-[#123157] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all border-2 border-amber-400 group shrink-0"
        title="Tanya Rian - Senior AI CS Specialist Araka Trans"
        id="floater-ai-chat"
      >
        {/* Professional Male Avatar Image inside Button */}
        <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-300 relative">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
            alt="Rian AI Support"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Active Status Badge */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#0c2340] animate-pulse" />

        {/* Sparkles Icon Overlay */}
        <div className="absolute -bottom-1 -left-1 bg-amber-500 text-[#0c2340] p-1 rounded-full border border-white shadow-sm">
          <Sparkles className="w-3 h-3 fill-current" />
        </div>
      </motion.button>

      {/* CHAT WINDOW POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-[92px] right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-blue-900/30 flex flex-col overflow-hidden text-left font-sans"
            id="ai-chatbot-window"
          >
            {/* TOP HEADER */}
            <div className="bg-[#0c2340] text-white px-4 py-3.5 flex items-center justify-between border-b border-blue-900 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80"
                    alt="Rian AI Support"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#0c2340]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-black text-sm text-white uppercase tracking-tight">Rian</h4>
                    <span className="bg-amber-500 text-[#0c2340] text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase">Senior CS Specialist</span>
                  </div>
                  <p className="text-[10px] text-amber-300 font-semibold leading-none mt-0.5">
                    Rental Indonesia & Transpor Specialist • Araka Trans
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-blue-950 hover:bg-blue-900 text-slate-300 hover:text-white transition-colors cursor-pointer border border-blue-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* MESSAGES BODY */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto overscroll-contain space-y-3.5 bg-slate-50/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#0c2340] text-white rounded-br-none border border-blue-900'
                        : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/90'
                    }`}
                  >
                    <p className="whitespace-pre-line font-medium">{msg.text}</p>

                    {msg.isTemplate && (
                      <button
                        onClick={handleOpenWhatsAppDirect}
                        className="mt-3 w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs py-2.5 px-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md active:scale-95 border border-emerald-400/40"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Hubungi Operational Manager via WA</span>
                      </button>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-400 font-semibold mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2 text-xs text-slate-600 font-semibold">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-500" />
                    <span>Rian sedang memproses jawaban solutif...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK SUGGESTIONS */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
              <button
                onClick={() => handleSendMessage('Berapa tarif sewa Hiace Commuter & Premio ke Bandung/Jogja/Bali?')}
                className="text-[10px] font-bold text-[#0c2340] bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Sewa Rute Luar Kota & Bali
              </button>
              <button
                onClick={() => handleSendMessage('Apakah tersedia penjemputan Bandara Soekarno-Hatta / Halim / Juanda?')}
                className="text-[10px] font-bold text-[#0c2340] bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Penjemputan Bandara
              </button>
              <button
                onClick={() => handleSendMessage('Bagaimana jika ada kendala perjalanan atau jadwal keberangkatan berubah?')}
                className="text-[10px] font-bold text-[#0c2340] bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Penanganan Kendala & Reschedule
              </button>
              <button
                onClick={() => handleSendMessage('Apakah ada layanan sewa Alphard VIP & Bus Medium?')}
                className="text-[10px] font-bold text-[#0c2340] bg-slate-100 hover:bg-slate-200 border border-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Alphard VIP & Bus Medium
              </button>
            </div>

            {/* INPUT FOOTER */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2.5 bg-white border-t border-slate-200 shrink-0 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Tulis pertanyaan rental atau kendala perjalanan..."
                className="flex-1 bg-slate-100 text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-900 focus:bg-white transition-all font-medium"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="bg-[#0c2340] hover:bg-amber-500 text-amber-400 hover:text-[#0c2340] p-2.5 rounded-xl transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                title="Kirim Pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
