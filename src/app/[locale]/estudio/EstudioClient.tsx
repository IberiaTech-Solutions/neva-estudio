'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';
import { useTranslations, useLocale } from '@/hooks/useTranslations';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function EstudioClient() {
  const t = useTranslations('estudio');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const timelineItems = (t.raw('timeline.items') || []) as TimelineItem[];

  return (
    <div className="overflow-hidden">
      {/* Hero — Full-width image with overlay text */}
      <section className="relative h-[60vh] sm:h-[70vh] bg-stone-900">
        <Image
          src="/estudio/LAIN-ANDRES.jpg"
          alt={`${t('equipo.andres.name')} & ${t('equipo.lain.name')}`}
          fill
          sizes="100vw"
          priority
          className="object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-stone-900/40" />

        <div className="absolute bottom-0 left-0 right-0 pb-12 sm:pb-16 lg:pb-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-[1.1]">
                {t('title')}
              </h1>
              <div className="w-12 h-px bg-accent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historia — Two column with emphasis */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left column — narrow label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-[1.1]">
                {t('historia.title')}
              </h2>
              <div className="w-12 h-px bg-accent"></div>
            </motion.div>

            {/* Right column — story text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-3 space-y-5 text-base text-stone-600 leading-relaxed"
            >
              <p>{t('historia.paragraph1')}</p>
              <p>{t('historia.paragraph2')}</p>
              <p>{t('historia.paragraph3')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Por qué Neva — Full-width quote-like section */}
      <section className="py-16 sm:py-24 bg-stone-50 border-y border-stone-200/60">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 leading-[1.3] mb-6">
              <em>{t('porque.definition')}</em>
            </p>
            <div className="w-8 h-px bg-accent mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-2xl mx-auto">
              {t('porque.explanation')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section — Dark, architectural */}
      <section className="py-20 sm:py-28 lg:py-36 bg-stone-900 text-white relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-24"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
              {t('timeline.title')}
            </h2>
            <div className="w-12 h-px bg-accent"></div>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-white/10" aria-hidden="true" />

            <div className="space-y-0">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-3 lg:gap-0 py-8 lg:py-10 border-b border-white/5 last:border-b-0">
                    {/* Year */}
                    <div className="lg:w-[120px] flex-shrink-0 flex items-center gap-4 lg:block">
                      <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-accent leading-none">
                        {item.year}
                      </span>
                      <div className="hidden lg:block absolute left-[116px] top-12 w-[9px] h-[9px] border-2 border-accent bg-stone-900 rounded-full group-hover:bg-accent transition-colors duration-300" />
                      <div className="lg:hidden w-8 h-px bg-accent/40" />
                    </div>

                    {/* Content */}
                    <div className="lg:pl-16 lg:max-w-2xl">
                      <h3 className="font-serif text-lg sm:text-xl text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="hidden lg:block absolute left-[116px] -bottom-2 w-[9px] h-[9px] bg-accent rounded-full" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Equipo Section — Larger photos, more presence */}
      <section className="py-20 sm:py-28 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-[1.1]">
              {t('equipo.title')}
            </h2>
            <div className="w-12 h-px bg-accent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Andrés */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] relative overflow-hidden mb-6">
                <Image
                  src="/estudio/ANDRES.jpg"
                  alt={t('equipo.andres.name')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-1">
                {t('equipo.andres.name')}
              </h3>
              <p className="text-xs text-accent-dark tracking-[0.1em] uppercase mb-2">
                {t('equipo.andres.title')}
              </p>
              <p className="text-sm text-stone-500 mb-3">
                {t('equipo.andres.role')}
              </p>
              <a
                href="https://es.linkedin.com/in/andrés-suárez-209859108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-accent-dark transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>

            {/* Laín */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] relative overflow-hidden mb-6">
                <Image
                  src="/estudio/LAIN.jpg"
                  alt={t('equipo.lain.name')}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 mb-1">
                {t('equipo.lain.name')}
              </h3>
              <p className="text-xs text-accent-dark tracking-[0.1em] uppercase mb-2">
                {t('equipo.lain.title')}
              </p>
              <p className="text-sm text-stone-500 mb-3">
                {t('equipo.lain.role')}
              </p>
              <a
                href="https://es.linkedin.com/in/laín-fernández-fernández-68a15772"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-400 hover:text-accent-dark transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — Bridge to projects/contact */}
      <section className="py-16 sm:py-20 bg-stone-50 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 leading-[1.2] max-w-lg">
              {locale === 'es'
                ? '¿Tienes un proyecto en mente?'
                : 'Have a project in mind?'}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}#projects`}
                className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 text-sm tracking-wide hover:bg-stone-800 transition-colors"
              >
                {tNav('projects')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center gap-3 border border-stone-300 text-stone-700 px-8 py-4 text-sm tracking-wide hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                {tNav('contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
