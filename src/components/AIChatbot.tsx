import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Bot, PhoneCall, RefreshCw, ChevronDown, CheckCheck } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isTemplate?: boolean;
}

const OFF_TOPIC_RESPONSE = `Maaf, saya adalah asisten AI resmi dari PT. Generasi Baru Araka (Araka Trans Travel). 

Saya khusus melayani pertanyaan seputar rental mobil dan transportasi:
• Toyota Hiace (Commuter, Premio, Luxury)
• Isuzu Elf Giga (19 Seats)
• Bus Medium (33-35 Seats)
• Toyota Alphard VIP Class
• Tarif sewa, rincian fasilitas & paket wisata

Silakan ajukan pertanyaan seputar sewa armada atau klik tombol WhatsApp untuk terhubung dengan CS kami!`;

const RELEVANT_KEYWORDS = [
  'hiace', 'elf', 'giga', 'bus', 'medium', 'alphard', 'mobil', 'sewa', 'rental',
  'harga', 'tarif', 'biaya', 'berapa', 'pesan', 'booking', 'reservasi', 'supir',
  'driver', 'bbm', 'tol', 'parkir', 'overtime', 'syarat', 'ketentuan', 'fasilitas',
  'wisata', 'rute', 'lokasi', 'alamat', 'wa', 'whatsapp', 'araka', 'unit', 'kapasitas',
  'kursi', 'captain', 'luxury', 'premio', 'commuter', 'promo', 'dinas', 'keluarga',
  'halo', 'hai', 'pagi', 'siang', 'sore', 'malam', 'permisi', 'tanya', 'admin', 'bisa'
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Halo! Saya Siti, Asisten AI resmi PT. Generasi Baru Araka. Ada yang bisa saya bantu terkait sewa Hiace, Elf, Bus Medium, atau Alphard hari ini?',
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
          max_tokens: 280,
          temperature: 0.5,
          messages: [
            {
              role: 'system',
              content: `Anda adalah Siti, AI Customer Support dari PT. Generasi Baru Araka (Araka Trans Travel).
Tugas Anda: Menjawab pertanyaan seputar sewa mobil (Hiace, Elf, Bus, Alphard) secara ramah, profesional, dan ringkas.

DATA RESMI ARAKA TRANS:
- Hiace Commuter: Rp 1.000.000 / hari (14 seats)
- Hiace Premio: Rp 1.200.000 / hari (12 seats)
- Hiace Commuter Luxury: Rp 1.800.000 / hari (9 captain seats)
- Hiace Premio Luxury: Rp 2.000.000 / hari (9 electric captain seats)
- Isuzu Elf Giga: Rp 1.200.000 / hari (19 seats)
- Bus Medium: Rp 2.000.000 / hari (33-35 seats)
- Toyota Alphard VIP: Rp 2.400.000 / hari (first class seats)
- Termasuk: Mobil, Supir, BBM.
- Belum Termasuk: Tol, Parkir, Penyebrangan Ferry, Makan/Penginapan Driver, Tip.
- Jam Sewa: 05:00 - 23:00 WIB (Overtime +Rp 150rb/jam).
- WA Official: 0812-8874-8745.

ATURAN STRICT:
1. JANGAN gunakan simbol aneh seperti ^#, markdown header, atau formatting rumit.
2. Jawab maksimal 3 kalimat ringkas dan jelas.
3. Sarankan hubungi WA 0812-8874-8745 jika ingin melakukan reservasi.`
            },
            ...messages.slice(-4).map(m => ({
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
      const replyRaw = data.choices?.[0]?.message?.content || 'Terima kasih atas pertanyaan Anda. Silakan hubungi WhatsApp resmi kami di 0812-8874-8745 untuk informasi lebih lanjut.';
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
        text: 'Terima kasih! Untuk respon paling cepat dan rincian pemesanan, silakan terhubung langsung dengan Tim CS Araka Trans via WhatsApp di 0812-8874-8745.',
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
    const text = encodeURIComponent('Halo Siti / Admin Araka Trans Travel, saya mau konsultasi pemesanan armada rental mobil.');
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (Positioned directly above WhatsApp button) */}
      <div className="fixed bottom-24 right-6 z-40">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-[#0c2340] hover:bg-[#123157] text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 transition-all border-2 border-amber-400 group"
          title="Tanya Siti - AI Customer Support Araka Trans"
          id="floater-ai-chat"
        >
          {/* Professional Female Avatar Image inside Button */}
          <div className="w-11 h-11 rounded-full overflow-hidden border border-amber-300 relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
              alt="Siti AI Support"
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
      </div>

      {/* CHAT WINDOW POPUP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-blue-900/30 flex flex-col overflow-hidden text-left font-sans"
            id="ai-chatbot-window"
          >
            {/* TOP HEADER */}
            <div className="bg-[#0c2340] text-white px-4 py-3.5 flex items-center justify-between border-b border-blue-900 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                    alt="Siti AI"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#0c2340]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-black text-sm text-white uppercase tracking-tight">Siti</h4>
                    <span className="bg-amber-500 text-[#0c2340] text-[9px] font-extrabold px-1.5 py-0.2 rounded uppercase">AI CS</span>
                  </div>
                  <p className="text-[10px] text-amber-300 font-semibold leading-none mt-0.5">
                    Customer Support Specialist • Araka Trans
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
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto overscroll-contain space-y-3 bg-slate-50/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#0c2340] text-white rounded-br-none border border-blue-900'
                        : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/90'
                    }`}
                  >
                    <p className="whitespace-pre-line font-medium">{msg.text}</p>

                    {msg.isTemplate && (
                      <button
                        onClick={handleOpenWhatsAppDirect}
                        className="mt-2.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Chat CS via WhatsApp</span>
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
                  <div className="bg-white border border-slate-200/90 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-500" />
                    <span>Siti sedang mengetik...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* QUICK SUGGESTIONS */}
            <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
              <button
                onClick={() => handleSendMessage('Berapa tarif sewa Hiace Commuter?')}
                className="text-[10px] font-bold text-[#0c2340] bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Sewa Hiace Commuter
              </button>
              <button
                onClick={() => handleSendMessage('Apa saja varian Hiace yang tersedia?')}
                className="text-[10px] font-bold text-[#0c2340] bg-amber-50 hover:bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Varian Hiace
              </button>
              <button
                onClick={() => handleSendMessage('Berapa sewa Bus Medium 33 seat?')}
                className="text-[10px] font-bold text-[#0c2340] bg-slate-100 hover:bg-slate-200 border border-slate-300 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Bus Medium
              </button>
              <button
                onClick={() => handleSendMessage('Tarif Alphard VIP')}
                className="text-[10px] font-bold text-[#0c2340] bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded-full whitespace-nowrap cursor-pointer transition-colors"
              >
                Alphard VIP
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
                placeholder="Tulis pertanyaan seputar sewa armada..."
                className="flex-1 bg-slate-100 text-slate-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-900 focus:bg-white transition-all"
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
