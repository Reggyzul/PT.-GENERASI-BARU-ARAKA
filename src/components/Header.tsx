import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone, MapPin, Clock, MessageCircle, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  activeSection: string;
  onNavClick: (sectionId: string) => void;
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
  currentPage: 'home' | 'about' | 'tours' | 'rentals';
  setCurrentPage: (page: 'home' | 'about' | 'tours' | 'rentals') => void;
  onBookingClick: () => void;
}

export default function Header({ activeSection, onNavClick, lang, setLang, currentPage, setCurrentPage, onBookingClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' },
    { label: t.nav_about, id: 'about', type: 'page', pageId: 'about' },
    { label: t.nav_services, id: 'services', type: 'section', sectionId: 'services' },
    { label: t.nav_cars, id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Keunggulan', id: 'advantages', type: 'section', sectionId: 'advantages' },
    { label: t.nav_contact, id: 'contact', type: 'section', sectionId: 'contact' },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page') {
      setCurrentPage(item.pageId as any);
      onNavClick(item.pageId);
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        onNavClick(item.sectionId as any);
      }, 100);
    }
    setIsOpen(false);
  };

  const handleWhatsAppHeader = () => {
    const message = encodeURIComponent("Halo Araka Trans Travel (PT. Generasi Baru Araka), saya berminat konsultasi/pesan armada rental mobil & transportasi. Mohon informasi selengkapnya. Terima kasih!");
    window.open(`https://wa.me/6281288748745?text=${message}`, '_blank', 'noreferrer');
  };

  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300"
    >
      {/* Top Notification Bar */}
      <div className="bg-[#0b192c] text-white py-1.5 px-4 text-xs font-sans border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold">
            <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider border border-amber-400/30">
              PT. GENERASI BARU ARAKA
            </span>
            <span className="hidden md:inline text-slate-300 font-normal">| {t.topbar_service}</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <a href="https://wa.me/6281288748745" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>0812-8874-8745</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-400">Ciputat Timur</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 shadow-md border-b border-slate-100 text-slate-800'
            : 'bg-white py-3 sm:py-4 border-b border-slate-100 text-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* BRAND LOGO & NAME */}
            <div 
              onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
              className="flex items-center gap-3 cursor-pointer group shrink-0 py-1"
              id="header-logo"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-teal-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
                <Car className="w-7 h-7" />
              </div>
              <div className="text-left">
                <span className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight block leading-tight group-hover:text-amber-600 transition-colors">
                  ARAKA <span className="text-amber-600">TRANS</span>
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block -mt-0.5">
                  PT. GENERASI BARU ARAKA
                </span>
              </div>
            </div>

            {/* DESKTOP NAV ITEMS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto" id="desktop-nav">
              {navItems.map((item) => {
                const isItemActive = 
                  (item.type === 'page' && currentPage === item.pageId) ||
                  (item.type === 'section' && activeSection === item.sectionId && currentPage === 'home');
                  
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    className={`font-sans text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isItemActive
                        ? 'text-amber-600 font-bold border-b-2 border-amber-600 pb-0.5'
                        : 'text-slate-700 hover:text-amber-600'
                    }`}
                    id={`nav-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA BUTTON */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={handleWhatsAppHeader}
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-sans font-bold text-sm py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Pesan WA (0812-8874-8745)</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-amber-600 focus:outline-none cursor-pointer border border-slate-200"
                aria-label="Toggle menu"
                id="hamburger-btn"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden text-slate-800"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="block w-full text-left font-display font-semibold text-base text-slate-800 hover:text-amber-600 py-3 border-b border-slate-100 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3">
                <button
                  onClick={handleWhatsAppHeader}
                  className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-teal-600 text-white font-sans font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan via WhatsApp (0812-8874-8745)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
