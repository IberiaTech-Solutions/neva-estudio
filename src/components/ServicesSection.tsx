'use client';

import { motion } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';
import { useState } from 'react';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const t = useTranslations('services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceKey, setSelectedServiceKey] = useState<string>('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services = [
    {
      num: '01',
      title: 'Residencial',
      description: 'Obra nueva, rehabilitaciones, ampliaciones y reformas interiores.',
      features: ['Vivienda unifamiliar', 'Vivienda colectiva', 'Cambios de uso', 'Reformas', 'Accesibilidad'],
      detailKeys: {
        'Vivienda unifamiliar': 'viviendas-unifamiliares',
        'Vivienda colectiva': 'vivienda-colectiva',
        'Cambios de uso': 'cambio-de-uso',
        'Reformas': 'reformas-integrales',
      } as Record<string, string>
    },
    {
      num: '02',
      title: 'Comercial',
      description: 'Adaptamos espacios a las necesidades de cada marca o negocio.',
      features: ['Adecuación de locales', 'Hostelería', 'Proyectos de actividad', 'Licencias de apertura'],
      detailKeys: {} as Record<string, string>
    },
    {
      num: '03',
      title: 'Urbanismo',
      description: 'Planes urbanísticos, parcelaciones y alegaciones a Planes Generales.',
      features: ['Proyectos de parcelación', 'Proyectos de urbanización'],
      detailKeys: {} as Record<string, string>
    },
    {
      num: '04',
      title: 'Rehabilitación energética',
      description: 'Mejoramos la envolvente térmica para aumentar el confort y reducir consumo.',
      features: ['Envolventes térmicas'],
      detailKeys: {} as Record<string, string>
    },
    {
      num: '05',
      title: 'Informes técnicos',
      description: 'Documentación técnica y certificaciones para cualquier trabajo.',
      features: ['Expedientes de legalización', 'Certificados de obra nueva', 'Informes de Evaluación', 'Certificados energéticos'],
      detailKeys: {
        'Certificados de obra nueva': 'certificado-obra-nueva-antigua',
        'Certificados energéticos': 'certificado-eficiencia-energetica',
      } as Record<string, string>
    },
    {
      num: '06',
      title: 'Diseño y consultoría',
      description: 'Consultoría, diseño de interiores, modelado 3D y demoliciones.',
      features: ['Asesoramiento', 'Interiorismo', 'Infografías 3D', 'Demoliciones'],
      detailKeys: {} as Record<string, string>
    },
    {
      num: '07',
      title: 'Llave en mano',
      description: 'Gestión integral de todas las fases, del inicio a la entrega final.',
      features: [],
      detailKeys: {} as Record<string, string>
    }
  ];

  const handleServiceClick = (serviceKey: string) => {
    setSelectedServiceKey(serviceKey);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6 leading-[1.1]">
                {t('title')}
              </h2>
              <div className="w-12 h-px bg-accent"></div>
            </div>
            <div className="space-y-4">
              <p className="text-base text-stone-600 leading-relaxed">
                {t('description')}
              </p>
              <p className="text-base text-stone-500 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services — Accordion-style list */}
        <div className="border-t border-stone-200">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-b border-stone-200"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full py-6 sm:py-8 flex items-start sm:items-center gap-4 sm:gap-8 text-left group"
                aria-expanded={expandedIndex === index}
              >
                {/* Number */}
                <span className="text-accent text-sm tracking-widest font-light pt-1 sm:pt-0 flex-shrink-0 w-8">
                  {service.num}
                </span>

                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-8">
                    <h3 className="font-serif text-xl sm:text-2xl text-stone-900 group-hover:text-accent-dark transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-stone-400 text-sm sm:text-right sm:max-w-[280px] leading-relaxed hidden sm:block">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Toggle indicator */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <div className={`w-4 h-px bg-stone-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-0' : ''}`} />
                  <div className={`w-px h-4 bg-stone-400 absolute transition-transform duration-300 ${expandedIndex === index ? 'rotate-90 opacity-0' : ''}`} />
                </div>
              </button>

              {/* Expanded content */}
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pb-8 pl-12 sm:pl-16"
                >
                  {/* Mobile description */}
                  <p className="text-stone-500 text-sm leading-relaxed mb-6 sm:hidden">
                    {service.description}
                  </p>

                  {service.features.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature) => {
                        const detailKey = service.detailKeys[feature];
                        return detailKey ? (
                          <button
                            key={feature}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleServiceClick(detailKey);
                            }}
                            className="text-sm text-stone-600 border border-stone-200 px-4 py-2 hover:border-accent hover:text-accent-dark transition-colors duration-300"
                          >
                            {feature}
                          </button>
                        ) : (
                          <span
                            key={feature}
                            className="text-sm text-stone-500 border border-stone-200/60 px-4 py-2"
                          >
                            {feature}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceKey={selectedServiceKey}
      />
    </section>
  );
}
