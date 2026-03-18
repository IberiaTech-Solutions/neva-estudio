'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslations, useLocale } from '@/hooks/useTranslations';

export default function AboutSection() {
  const t = useTranslations('about');
  const tWhyUs = useTranslations('services');
  const locale = useLocale();

  return (
    <>
      <section id="about" className="py-20 sm:py-28 lg:py-36 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <img
                  src="/neva-logo-apaisado.svg"
                  alt="NEVA Estudio"
                  className="h-16 w-auto mb-8"
                  aria-hidden="true"
                />
                <div className="w-12 h-px bg-accent"></div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-8 leading-[1.1]">
                {t('title')}
              </h2>

              <div className="space-y-5 mb-10">
                <p className="text-base text-stone-600 leading-relaxed">
                  {t('description1')}
                </p>
                <p className="text-base text-stone-500 leading-relaxed">
                  {t('description2')}
                </p>
              </div>

              <Link
                href={`/${locale}/estudio`}
                className="group inline-flex items-center gap-3 text-stone-900 text-sm tracking-wide hover:text-accent-dark transition-colors duration-300"
              >
                <span className="border-b border-stone-300 group-hover:border-accent pb-1">
                  {t('seeMore')}
                </span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/estudio/LAIN-ANDRES.jpg"
                  alt={t('title') + ' - Andrés y Laín'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center hover:scale-[1.02] transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)`,
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 sm:mb-20"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-[1.1]">
              {tWhyUs('whyChooseUs.title')}
            </h2>
            <div className="w-12 h-px bg-accent"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              { num: '01', key: 'experience' },
              { num: '02', key: 'personalized' },
              { num: '03', key: 'commitment' },
              { num: '04', key: 'versatility' }
            ].map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-900 p-8 sm:p-10 lg:p-14"
              >
                <span className="text-accent text-sm font-light tracking-widest">{item.num}</span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mt-4 mb-5 leading-tight">
                  {tWhyUs(`whyChooseUs.reasons.${item.key}.title`)}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  {tWhyUs(`whyChooseUs.reasons.${item.key}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
