'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTranslations, useLocale } from '@/hooks/useTranslations';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img
                src="/neva-logo-apaisado.svg"
                alt="NEVA Estudio"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-stone-400 mb-8 max-w-md text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nevaestudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://es.linkedin.com/in/andrés-suárez-209859108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-stone-700 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
                aria-label="LinkedIn - Andrés"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-6">{t('links')}</h3>
            <ul className="space-y-3">
              {[
                { label: tNav('home'), href: `/${locale}#hero` },
                { label: tNav('about'), href: `/${locale}#about` },
                { label: tNav('projects'), href: `/${locale}#projects` },
                { label: tNav('services'), href: `/${locale}#services` },
                { label: tNav('contact'), href: `/${locale}#contact` },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-stone-400 hover:text-white transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs text-stone-400 tracking-[0.15em] uppercase mb-6">{t('contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-stone-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">Calle Decano Prendes Pando 20, 1°E, Gijón, Asturias</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-stone-500" />
                <span className="text-stone-400 text-sm">estudio@nevaestudio.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="text-stone-500 text-xs">
              {t('copyright')}
            </p>

            {/* Funding Logos */}
            <div className="flex items-center gap-4 flex-wrap">
              <img
                src="/es_financiado_por_la_union_europea_rgb_black_outline-2048x53.png"
                alt="Financiado por la Unión Europea"
                className="h-5 sm:h-6 w-auto max-w-[140px] sm:max-w-none opacity-50 invert"
              />
              <img
                src="/logo-prtr-tres-lineas-negro.png"
                alt="PRTR"
                className="h-5 sm:h-6 w-auto max-w-[80px] sm:max-w-none opacity-50 invert"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Accesibilidad', href: '/politica-accesibilidad' },
                { label: 'Privacidad', href: '/politica-privacidad' },
                { label: 'Cookies', href: '/politica-cookies' },
                { label: 'Aviso Legal', href: '/aviso-legal' },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-stone-500 hover:text-stone-300 text-xs transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
