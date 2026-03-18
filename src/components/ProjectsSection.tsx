'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from '@/hooks/useTranslations';
import { useState, useEffect } from 'react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  category: string;
  filterKey: string;
  description: string;
  detailedDescription: string;
  images: string[];
  location: string;
  year: string;
  area: string;
  photographer?: string;
}

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filters = [
    { key: 'all', label: t('filters.all') },
    { key: 'vivienda', label: t('filters.vivienda') },
    { key: 'rehabilitacion', label: t('filters.rehabilitacion') },
    { key: 'fachadas', label: t('filters.fachadas') },
    { key: 'locales', label: t('filters.locales') }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: t('items.casa-rdv.title'),
      category: t('items.casa-rdv.category'),
      filterKey: 'vivienda',
      description: t('items.casa-rdv.description'),
      detailedDescription: t('items.casa-rdv.detailedDescription'),
      images: [
        '/Casa RDV/RDV-01.webp',
        '/Casa RDV/RDV-02-scaled.webp',
        '/Casa RDV/RDV-03.webp',
        '/Casa RDV/RDV-04.webp',
        '/Casa RDV/RDV-05.webp',
        '/Casa RDV/RDV-06-PB.webp',
        '/Casa RDV/RDV-07-P1.webp',
        '/Casa RDV/RDV-08-SECC.webp'
      ],
      location: 'Requejo de la Vega (León)',
      year: '2017',
      area: 'Construida',
      photographer: 'Paulo Fernández'
    },
    {
      id: 2,
      title: t('items.casa-nvp.title'),
      category: t('items.casa-nvp.category'),
      filterKey: 'vivienda',
      description: t('items.casa-nvp.description'),
      detailedDescription: t('items.casa-nvp.detailedDescription'),
      images: [
        '/Casa NVP/NVP-01.jpg',
        '/Casa NVP/NVP-02.jpg',
        '/Casa NVP/NVP-03.jpg',
        '/Casa NVP/NVP-04.jpg',
        '/Casa NVP/NVP-05.jpg',
        '/Casa NVP/NVP-06.jpg',
        '/Casa NVP/NVP-07-scaled.jpg',
        '/Casa NVP/NVP-08-scaled.jpg',
        '/Casa NVP/NVP-09-scaled.jpg',
        '/Casa NVP/NVP-10-VIV-2-HAB-scaled.jpg',
        '/Casa NVP/NVP-11-VIV-3-HAB-scaled.jpg',
        '/Casa NVP/NVP-12-VIV-4-HAB-scaled.jpg'
      ],
      location: 'Oviedo, Asturias',
      year: '2022',
      area: '220 m²',
      photographer: 'Paulo Fernández'
    },
    {
      id: 3,
      title: t('items.loft-rural.title'),
      category: t('items.loft-rural.category'),
      filterKey: 'rehabilitacion',
      description: t('items.loft-rural.description'),
      detailedDescription: t('items.loft-rural.detailedDescription'),
      images: [
        '/Loft Rural/LR-01-scaled.jpg',
        '/Loft Rural/LR-02-scaled.jpg',
        '/Loft Rural/LR-03-scaled.jpg',
        '/Loft Rural/LR-04-scaled.jpg',
        '/Loft Rural/LR-05-scaled.jpg',
        '/Loft Rural/LR-06-scaled.jpg',
        '/Loft Rural/LR-07-scaled.jpg',
        '/Loft Rural/LR-08-scaled.jpg',
        '/Loft Rural/LR-09-PLANTAS-scaled.jpg',
        '/Loft Rural/LR-10-GENERAL-scaled.jpg'
      ],
      location: 'Cangas de Onís, Asturias',
      year: '2021',
      area: '120 m²'
    },
    {
      id: 4,
      title: t('items.ampliacion-br.title'),
      category: t('items.ampliacion-br.category'),
      filterKey: 'rehabilitacion',
      description: t('items.ampliacion-br.description'),
      detailedDescription: t('items.ampliacion-br.detailedDescription'),
      images: [
        '/Ampliacion BR/BR-01.webp',
        '/Ampliacion BR/BR-02.webp',
        '/Ampliacion BR/BR-03.webp',
        '/Ampliacion BR/BR-04.webp',
        '/Ampliacion BR/BR-05.webp',
        '/Ampliacion BR/BR-06.webp',
        '/Ampliacion BR/BR-07.webp',
        '/Ampliacion BR/BR-08.webp'
      ],
      location: 'El Barrigón, Asturias',
      year: '2018',
      area: 'Construida'
    },
    {
      id: 5,
      title: t('items.ampliacion-vll.title'),
      category: t('items.ampliacion-vll.category'),
      filterKey: 'rehabilitacion',
      description: t('items.ampliacion-vll.description'),
      detailedDescription: t('items.ampliacion-vll.detailedDescription'),
      images: [
        '/Ampliacion VLL/VLL-01.webp',
        '/Ampliacion VLL/VLL-02.webp',
        '/Ampliacion VLL/VLL-03.webp',
        '/Ampliacion VLL/VLL-04.webp',
        '/Ampliacion VLL/VLL-05.webp',
        '/Ampliacion VLL/VLL-06.webp',
        '/Ampliacion VLL/VLL-07.webp',
        '/Ampliacion VLL/VLL-08.webp'
      ],
      location: 'Villaverde de la Marina, Asturias',
      year: '2024',
      area: 'Construida'
    },
    {
      id: 6,
      title: t('items.reforma-ol.title'),
      category: t('items.reforma-ol.category'),
      filterKey: 'rehabilitacion',
      description: t('items.reforma-ol.description'),
      detailedDescription: t('items.reforma-ol.detailedDescription'),
      images: [
        '/Reforma OL/OL-01.jpg',
        '/Reforma OL/OL-02.jpg',
        '/Reforma OL/OL-03.jpg',
        '/Reforma OL/OL-04.jpg',
        '/Reforma OL/OL-05.jpg',
        '/Reforma OL/OL-06.jpg',
        '/Reforma OL/OL-07.jpg',
        '/Reforma OL/OL-08.jpg',
        '/Reforma OL/OL-09.jpg',
        '/Reforma OL/OL-10.jpg',
        '/Reforma OL/OL-11.jpg',
        '/Reforma OL/OL-12.jpg',
        '/Reforma OL/OL-13.jpg'
      ],
      location: 'Gijón, Asturias',
      year: '2022',
      area: 'Construida',
      photographer: 'Paulo Fernández'
    },
    {
      id: 7,
      title: t('items.poniente-playa.title'),
      category: t('items.poniente-playa.category'),
      filterKey: 'vivienda',
      description: t('items.poniente-playa.description'),
      detailedDescription: t('items.poniente-playa.detailedDescription'),
      images: [
        '/Poniente Playa/PP-01.jpg',
        '/Poniente Playa/PP-02.jpg',
        '/Poniente Playa/PP-03.jpg',
        '/Poniente Playa/PP-04.jpg',
        '/Poniente Playa/PP-05.jpg',
        '/Poniente Playa/PP-06.jpg',
        '/Poniente Playa/PP-07.jpg',
        '/Poniente Playa/PP-08.jpg',
        '/Poniente Playa/PP-09.jpg',
        '/Poniente Playa/PP-10.jpg'
      ],
      location: 'Gijón, Asturias',
      year: '2023',
      area: 'Construida',
      photographer: 'Paulo Fernández'
    },
    {
      id: 8,
      title: t('items.pie-playa.title'),
      category: t('items.pie-playa.category'),
      filterKey: 'vivienda',
      description: t('items.pie-playa.description'),
      detailedDescription: t('items.pie-playa.detailedDescription'),
      images: [
        '/Pie Playa/PDP-01.jpg',
        '/Pie Playa/PDP-02.jpg',
        '/Pie Playa/PDP-03.jpg',
        '/Pie Playa/PDP-04.jpg',
        '/Pie Playa/PDP-05.jpg',
        '/Pie Playa/PDP-06.jpg'
      ],
      location: 'Gijón, Asturias',
      year: '2024',
      area: 'Construida'
    },
    {
      id: 9,
      title: t('items.reforma-ra.title'),
      category: t('items.reforma-ra.category'),
      filterKey: 'locales',
      description: t('items.reforma-ra.description'),
      detailedDescription: t('items.reforma-ra.detailedDescription'),
      images: [
        '/Reforma RA/RA-01.jpeg',
        '/Reforma RA/RA-02.jpg',
        '/Reforma RA/RA-03.jpeg',
        '/Reforma RA/RA-04.jpg',
        '/Reforma RA/RA-06.jpg',
        '/Reforma RA/RA-07.jpg'
      ],
      location: 'Gijón, Asturias',
      year: '2020',
      area: 'Construida'
    },
    {
      id: 10,
      title: t('items.wefreak.title'),
      category: t('items.wefreak.category'),
      filterKey: 'locales',
      description: t('items.wefreak.description'),
      detailedDescription: t('items.wefreak.detailedDescription'),
      images: [
        '/Wefreak/WF-01.jpg',
        '/Wefreak/WF-02.jpg',
        '/Wefreak/WF-03.jpg',
        '/Wefreak/WF-05.jpg'
      ],
      location: 'Madrid',
      year: '2023',
      area: 'Construida'
    },
    {
      id: 11,
      title: t('items.rio-trubia.title'),
      category: t('items.rio-trubia.category'),
      filterKey: 'locales',
      description: t('items.rio-trubia.description'),
      detailedDescription: t('items.rio-trubia.detailedDescription'),
      images: [
        '/Rio Trubia/TRUBIA-01.jpg',
        '/Rio Trubia/TRUBIA-02.jpg',
        '/Rio Trubia/TRUBIA-03.jpg',
        '/Rio Trubia/TRUBIA-04.jpg',
        '/Rio Trubia/TRUBIA-05.jpg'
      ],
      location: 'Trubia, Asturias',
      year: '2023',
      area: 'Construida',
      photographer: 'Paulo Fernández'
    },
    {
      id: 12,
      title: t('items.candanal.title'),
      category: t('items.candanal.category'),
      filterKey: 'rehabilitacion',
      description: t('items.candanal.description'),
      detailedDescription: t('items.candanal.detailedDescription'),
      images: [
        '/Candanal/CANDANAL-01.jpeg',
        '/Candanal/CANDANAL-02.jpg',
        '/Candanal/CANDANAL-03.jpg',
        '/Candanal/CANDANAL-04.jpg',
        '/Candanal/CANDANAL-05.jpg',
        '/Candanal/CANDANAL-06.jpg',
        '/Candanal/CANDANAL-07.jpg',
        '/Candanal/CANDANAL-08.jpg',
        '/Candanal/CANDANAL-09.jpg',
        '/Candanal/CANDANAL-10.jpg',
        '/Candanal/CANDANAL-11.jpg'
      ],
      location: 'Candanal, Asturias',
      year: '2023',
      area: 'Construida'
    },
    {
      id: 13,
      title: t('items.fachada-ac.title'),
      category: t('items.fachada-ac.category'),
      filterKey: 'fachadas',
      description: t('items.fachada-ac.description'),
      detailedDescription: t('items.fachada-ac.detailedDescription'),
      images: [
        '/Fachada AC/AC-01.webp',
        '/Fachada AC/AC-02.webp',
        '/Fachada AC/AC-03.webp',
        '/Fachada AC/AC-04.webp',
        '/Fachada AC/AC-05.webp',
        '/Fachada AC/AC-06.webp',
        '/Fachada AC/AC-07.webp',
        '/Fachada AC/AC-08.webp'
      ],
      location: 'Salinas, Asturias',
      year: '2019',
      area: 'Construida'
    },
    {
      id: 14,
      title: t('items.playa-8.title'),
      category: t('items.playa-8.category'),
      filterKey: 'fachadas',
      description: t('items.playa-8.description'),
      detailedDescription: t('items.playa-8.detailedDescription'),
      images: [
        '/Playa 8/PLAYA-8-COVER.jpg',
        '/Playa 8/PLAYA-8-01.jpg',
        '/Playa 8/PLAYA-8-02.jpg',
        '/Playa 8/PLAYA-8-03.jpg',
        '/Playa 8/PLAYA-8-04.jpg'
      ],
      location: 'Gijón, Asturias',
      year: '2024',
      area: 'Construida'
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' || project.filterKey === activeFilter
  );

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);
  const hasMoreProjects = filteredProjects.length > 6;

  // Create varied grid layout — first 2 items are large, rest are standard
  const getGridClass = (index: number) => {
    if (index === 0) return 'md:col-span-2 md:row-span-2';
    if (index === 1) return 'md:col-span-1 md:row-span-2';
    return '';
  };

  const getAspectClass = (index: number) => {
    if (index === 0) return 'aspect-[16/10]';
    if (index === 1) return 'aspect-[3/4]';
    return 'aspect-[4/3]';
  };

  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 mb-6 leading-[1.1]">
            {t('title')}
          </h2>
          <div className="w-12 h-px bg-accent mb-8"></div>
          <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Filter Buttons — underline style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-6 sm:gap-8 mb-14"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-sm tracking-wide transition-all duration-300 pb-2 ${
                activeFilter === filter.key
                  ? 'text-stone-900 border-b-2 border-accent'
                  : 'text-stone-400 hover:text-stone-600 border-b-2 border-transparent'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid — varied sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              viewport={{ once: true }}
              className={`group cursor-pointer ${getGridClass(index)}`}
              onClick={() => openModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(project); } }}
              aria-label={`${project.title} - ${project.category}`}
            >
              <div className="relative overflow-hidden bg-stone-200 h-full">
                <div className={`${getAspectClass(index)} relative h-full`}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-500 flex items-end">
                    <div className="p-5 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      <div className="text-white text-base sm:text-lg font-serif leading-tight">{project.title}</div>
                      <div className="text-white/60 text-xs sm:text-sm mt-1">{project.category} · {project.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {hasMoreProjects && !showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button
              onClick={() => setShowAllProjects(true)}
              className="group inline-flex items-center gap-3 text-stone-600 text-sm tracking-wide hover:text-stone-900 transition-colors duration-300"
            >
              <span className="border-b border-stone-300 group-hover:border-stone-900 pb-1">
                {t('viewMore')}
              </span>
              <svg className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
}
