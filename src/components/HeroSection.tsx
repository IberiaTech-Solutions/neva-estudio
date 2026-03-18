'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const t = useTranslations('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      src: '/hero/AC-07-scaled.webp',
      alt: 'Proyecto arquitectónico AC-07 - Diseño contemporáneo de vivienda'
    },
    {
      src: '/hero/BR-04.webp',
      alt: 'Proyecto arquitectónico BR-04 - Reforma y ampliación residencial'
    },
    {
      src: '/hero/construccion-nueva-vivenda-exterior-e1728405546902.webp',
      alt: 'Construcción nueva vivienda exterior - Proyecto residencial en Asturias'
    },
    {
      src: '/hero/NVP-06-1536x1153.jpg',
      alt: 'Casa NVP - Proyecto de vivienda unifamiliar en Oviedo'
    },
    {
      src: '/hero/OL-MINIATURA-Y-PORTADA-2-e1728404536802-2048x1536.jpg',
      alt: 'Proyecto OL - Reforma integral de vivienda'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="relative bg-stone-900">
      {/* Full-screen hero image with overlay */}
      <div className="relative h-[100svh] overflow-hidden">
        {/* Black background for initial load */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-stone-900 z-10"
        />

        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1.02 : 1.08
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        ))}

        {/* Gradient overlay — darker at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Hero text — bottom-left, architectural feel */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-20 sm:pb-20 lg:pb-24 px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 leading-[0.95]">
              {t('headline1')}
              <br />
              <span className="text-accent-light">{t('headline2')}</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg md:text-xl font-light max-w-lg mt-6 leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Carousel progress line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-2 mt-10"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="relative h-11 w-12 flex items-center bg-transparent"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div className="relative h-[2px] w-full bg-white/30 overflow-hidden">
                  {index === currentImageIndex && (
                    <motion.div
                      key={`progress-${currentImageIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="absolute inset-0 bg-white origin-left"
                    />
                  )}
                  {index < currentImageIndex && (
                    <div className="absolute inset-0 bg-white/60" />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator — subtle line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 sm:right-12 z-20 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.25em] uppercase rotate-90 origin-center translate-y-6">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-white/40 mt-10"
          />
        </motion.div>
      </div>

      {/* Text Content Below — warm background */}
      <div className="relative bg-warm-white py-20 sm:py-28 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 leading-[1.1] mb-8">
                  {t('greeting')} <span className="text-accent">{t('company')}</span>
                </h2>
                <div className="w-16 h-px bg-accent"></div>
              </div>

              <div className="space-y-6">
                <p className="text-base md:text-lg text-stone-600 leading-relaxed">
                  {t('description')}
                </p>
                <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                  {t('description2')}
                </p>
                <p className="text-base md:text-lg text-stone-500 leading-relaxed">
                  {t('description3')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => {
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group bg-stone-900 text-white px-6 sm:px-10 py-4 text-sm tracking-wide hover:bg-stone-800 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {t('viewProjects')}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border border-stone-300 text-stone-700 px-6 sm:px-10 py-4 text-sm tracking-wide hover:border-stone-900 hover:text-stone-900 transition-all duration-300 text-center"
                  >
                    {t('contact')}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
