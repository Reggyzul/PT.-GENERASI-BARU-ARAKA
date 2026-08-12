import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
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

export default function Header({ 
  activeSection, 
  onNavClick, 
  lang, 
  setLang, 
  currentPage, 
  setCurrentPage,
  onBookingClick 
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const handleWhatsAppHeader = () => {
    const waNumber = '6281288748745';
    const text = encodeURIComponent(
      'Halo Admin Araka Trans (PT. Generasi Baru Araka), saya mau konsultasi & booking armada mobil. Mohon informasinya. Terima kasih!'
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank', 'noreferrer');
  };

  const navItems = [
    { label: t.nav_home, id: 'home', type: 'page', pageId: 'home' as const },
    { label: 'Armada Mobil', id: 'cars', type: 'section', sectionId: 'cars' },
    { label: 'Keunggulan', id: 'advantages', type: 'section', sectionId: 'advantages' },
    { label: 'Cara Pesan', id: 'steps', type: 'section', sectionId: 'steps' },
    { label: 'Profil & Visi Misi', id: 'about', type: 'page', pageId: 'about' as const },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.type === 'page' && item.pageId) {
      setCurrentPage(item.pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.type === 'section' && item.sectionId) {
      onNavClick(item.sectionId);
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all duration-300">
      
      {/* MAIN NAVBAR CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* BRAND LOGO */}
          <div 
            onClick={() => handleItemClick({ label: t.nav_home, id: 'home', type: 'page', pageId: 'home' })}
            className="flex items-center cursor-pointer group shrink-0 py-1"
            id="header-logo"
          >
            <img 
              src="/logo-araka.png" 
              alt="ARAKA TRANS CLASSY TOUR LOGO" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
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
                  className={`font-sans text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isItemActive
                      ? 'text-[#0c2340] font-black border-b-2 border-amber-500 pb-0.5'
                      : 'text-slate-700 hover:text-[#0c2340]'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* CTA BUTTON - ROYAL BLUE & GOLDEN YELLOW GRADIENT */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={handleWhatsAppHeader}
              className="bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 hover:from-[#071527] hover:to-amber-600 text-white font-sans font-bold text-xs sm:text-sm py-2.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap active:scale-95 border border-amber-400/40"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0 text-amber-300" />
              <span className="tracking-wide">Booking</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 text-[#0c2340] hover:text-amber-500 focus:outline-none cursor-pointer border border-slate-200"
              aria-label="Toggle menu"
              id="hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
                  className="block w-full text-left font-sans font-semibold text-base text-slate-800 hover:text-[#0c2340] py-3 border-b border-slate-100 cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3">
                <button
                  onClick={handleWhatsAppHeader}
                  className="w-full bg-gradient-to-r from-[#0c2340] via-[#1d4ed8] to-amber-500 text-white font-sans font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0 text-amber-300" />
                  <span>Booking</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
