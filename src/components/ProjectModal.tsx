'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const t = useTranslations('projects');
  const closeRef = useRef<HTMLButtonElement>(null);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, nextImage, prevImage]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-50 bg-stone-950"
      >
        <div className="h-full flex flex-col lg:flex-row">
          {/* Left panel — Project info (scrollable) */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0 bg-warm-white overflow-y-auto order-2 lg:order-1 max-h-[40vh] lg:max-h-none"
          >
            <div className="p-6 sm:p-8 lg:p-10 lg:pt-8">
              {/* Close — mobile only (desktop close is on the image side) */}
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div>
                  <div className="text-xs text-accent tracking-[0.15em] uppercase mb-2">
                    {project.category}
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight">
                    {project.title}
                  </h2>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  aria-label={t('backToProjects')}
                  className="lg:hidden w-11 h-11 flex-shrink-0 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors -mr-2 -mt-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="w-12 h-px bg-accent mb-6 lg:mb-8"></div>

              {/* Info rows */}
              <div className="space-y-3 mb-8">
                {[
                  { label: t('location'), value: project.location },
                  { label: t('year'), value: project.year },
                  { label: t('area'), value: project.area },
                  ...(project.photographer ? [{ label: t('photos'), value: project.photographer }] : [])
                ].map((info) => (
                  <div key={info.label} className="flex justify-between items-baseline pb-3 border-b border-stone-100">
                    <span className="text-xs text-stone-400 tracking-[0.1em] uppercase">{info.label}</span>
                    <span className="text-sm text-stone-700 text-right">{info.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 mb-8">
                <p className="text-sm text-stone-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Back button */}
              <button
                onClick={onClose}
                className="w-full bg-stone-900 text-white px-6 py-3.5 text-sm tracking-wide hover:bg-stone-800 transition-colors"
              >
                {t('backToProjects')}
              </button>

              {/* Keyboard hint */}
              <p className="hidden lg:block text-stone-300 text-[10px] tracking-widest uppercase text-center mt-4">
                ← → navigate · esc close
              </p>
            </div>
          </motion.div>

          {/* Right panel — Full image area */}
          <div className="flex-1 relative bg-stone-950 order-1 lg:order-2 min-h-[60vh] lg:min-h-0">
            {/* Close — desktop only */}
            <button
              onClick={onClose}
              aria-label={t('backToProjects')}
              className="hidden lg:flex absolute top-5 right-5 z-20 w-11 h-11 items-center justify-center bg-white/10 hover:bg-white/20 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - ${t('image')} ${currentImageIndex + 1} ${t('of')} ${project.images.length}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    quality={90}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-white/30 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center text-white/30 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Bottom — counter + progress */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-6">
                <span className="text-white/40 text-xs tracking-widest font-light">
                  {String(currentImageIndex + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
                </span>

                <div className="flex gap-1.5">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`${t('image')} ${index + 1}`}
                      className="h-11 flex items-center"
                    >
                      <div
                        className={`h-[2px] transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'w-5 bg-white'
                            : 'w-1.5 bg-white/20 hover:bg-white/40'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
