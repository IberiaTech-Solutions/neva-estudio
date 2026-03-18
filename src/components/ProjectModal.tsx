'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from '@/hooks/useTranslations';

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const t = useTranslations('projects');
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape key handler + focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl mx-2 sm:mx-4 bg-warm-white overflow-hidden max-h-[85svh] sm:max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            ref={closeRef}
            aria-label={t('backToProjects')}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 w-11 h-11 bg-white/90 hover:bg-white text-stone-900 flex items-center justify-center transition-all duration-300 border border-stone-200"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Expand Toggle */}
          <button
            onClick={() => setIsImageExpanded(prev => !prev)}
            className="absolute top-3 left-3 sm:top-5 sm:left-5 z-10 w-11 h-11 bg-white/90 hover:bg-white text-stone-900 flex items-center justify-center transition-all duration-300 border border-stone-200"
            aria-label={isImageExpanded ? t('normalView') : t('expandImage')}
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          <div className={`grid gap-0 ${isImageExpanded ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
            {/* Image Carousel */}
            <div className="relative bg-stone-100">
              <div className={`relative ${isImageExpanded ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - ${t('image')} ${currentImageIndex + 1} ${t('of')} ${project.images.length}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 hover:bg-white text-stone-900 flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 hover:bg-white text-stone-900 flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-stone-900/60 text-white px-3 py-1 text-xs tracking-wide">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {project.images.length > 1 && (
                <div className="p-3 bg-stone-50">
                  <div className="flex gap-1.5 overflow-x-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 relative overflow-hidden border-2 transition-colors ${
                          currentImageIndex === index
                            ? 'border-accent'
                            : 'border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${t('thumbnail')} ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="56px"
                          quality={60}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className={`p-5 sm:p-8 lg:p-12 overflow-y-auto max-h-[60svh] sm:max-h-[80vh] bg-warm-white ${isImageExpanded ? 'hidden' : ''}`}>
              <div className="mb-8 sm:mb-10">
                <div className="text-xs text-accent tracking-[0.15em] uppercase mb-3">
                  {project.category}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 mb-6 leading-tight">
                  {project.title}
                </h2>
                <div className="w-12 h-px bg-accent"></div>
              </div>

              {/* Project Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
                {[
                  { label: t('location'), value: project.location },
                  { label: t('year'), value: project.year },
                  { label: t('area'), value: project.area }
                ].map((info) => (
                  <div key={info.label}>
                    <div className="text-xs text-stone-400 tracking-[0.1em] uppercase mb-1">{info.label}</div>
                    <div className="text-sm text-stone-700">{info.value}</div>
                  </div>
                ))}
              </div>

              {project.photographer && (
                <div className="mb-10 py-3 border-t border-b border-stone-200">
                  <span className="text-[11px] text-stone-400 tracking-[0.1em] uppercase">{t('photos')}: </span>
                  <span className="text-sm text-stone-600">{project.photographer}</span>
                </div>
              )}

              <div className="space-y-4 mb-10">
                <p className="text-base text-stone-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-base text-stone-500 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <button
                  onClick={onClose}
                  className="w-full bg-stone-900 text-white px-6 py-3.5 text-sm tracking-wide hover:bg-stone-800 transition-colors duration-300"
                >
                  {t('backToProjects')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
