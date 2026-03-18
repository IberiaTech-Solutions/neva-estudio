'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useTranslations, useLocale } from '@/hooks/useTranslations';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navigation = [
    { id: 'home', name: t('home'), href: isHomePage ? '#hero' : `/${locale}#hero` },
    { id: 'about', name: t('about'), href: isHomePage ? '#about' : `/${locale}#about` },
    { id: 'projects', name: t('projects'), href: isHomePage ? '#projects' : `/${locale}#projects` },
    { id: 'services', name: t('services'), href: isHomePage ? '#services' : `/${locale}#services` },
    { id: 'contact', name: t('contact'), href: isHomePage ? '#contact' : `/${locale}#contact` },
  ];

  const otherLocale = locale === 'es' ? 'en' : 'es';
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link
              href={isHomePage ? '#' : `/${locale}`}
              className="flex-shrink-0"
              onClick={(e) => {
                if (isHomePage) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                setIsMenuOpen(false);
              }}
            >
              <img
                src="/neva-logo.svg"
                alt="NEVA Estudio"
                className={`h-8 sm:h-9 w-auto transition-all duration-500 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-[13px] tracking-[0.1em] uppercase transition-colors duration-300 hover:text-accent ${
                    isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/80 hover:text-white'
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Language switcher */}
              <Link
                href={localePath}
                className={`text-[11px] tracking-[0.15em] uppercase border px-3 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center transition-all duration-300 ${
                  isScrolled
                    ? 'border-stone-300 text-stone-500 hover:border-stone-900 hover:text-stone-900'
                    : 'border-white/30 text-white/60 hover:border-white hover:text-white'
                }`}
              >
                {otherLocale.toUpperCase()}
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className={`md:hidden p-3 -m-3 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation transition-colors ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-stone-900 flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-6 text-white p-2 -m-2 touch-manipulation"
            >
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    href={item.href}
                    className="font-serif text-3xl sm:text-4xl text-white/90 hover:text-accent-light transition-colors duration-300"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Language switcher */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigation.length * 0.08 }}
              className="mt-8"
            >
              <Link
                href={localePath}
                onClick={() => setIsMenuOpen(false)}
                className="border border-white/30 text-white/60 hover:border-white hover:text-white px-4 py-2 text-sm tracking-[0.15em] uppercase transition-all duration-300"
              >
                {otherLocale === 'en' ? 'English' : 'Español'}
              </Link>
            </motion.div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-white/40 text-xs tracking-widest uppercase"
            >
              estudio@nevaestudio.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
