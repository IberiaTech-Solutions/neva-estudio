'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const [activeTab, setActiveTab] = useState('estudio');
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape key + focus
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  const tabs = [
    { id: 'estudio', label: 'Estudio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'filosofia', label: 'Filosofía' }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Scroll to top of modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
      modalContent.scrollTop = 0;
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-label="NEVA Estudio"
            className="relative bg-white rounded-none shadow-2xl max-w-4xl w-full mx-4 max-h-[85svh] sm:max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-2">NEVA Estudio</h2>
                  <div className="w-16 h-px bg-gray-400"></div>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-none transition-colors border border-gray-200 hover:border-gray-300"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              {/* Tabs */}
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`pb-3 text-sm font-light transition-all duration-300 border-b-2 relative ${
                      activeTab === tab.id
                        ? 'text-gray-900 border-gray-900'
                        : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute -bottom-px left-0 w-full h-px bg-gray-900"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="modal-content px-8 py-8 max-h-[calc(90vh-180px)] overflow-y-auto">
              <AnimatePresence mode="wait">
                {activeTab === 'servicios' && (
                  <motion.div
                    key="servicios"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    {/* Services Overview */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-thin text-gray-900 mb-4">
                        Servicios de arquitectura en Asturias
                      </h3>
                      <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
                      <p className="text-gray-600 font-light max-w-2xl mx-auto">
                        Soluciones de calidad que hacen realidad la visión del cliente
                      </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Residential & Commercial */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                            01
                          </div>
                          <h4 className="text-lg font-light text-gray-900">Proyectos residenciales y comerciales</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Diseñamos espacios diferenciales para viviendas, locales y oficinas, adaptándonos a cada propiedad y cliente.
                        </p>
                      </div>

                      {/* Renovations */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                            02
                          </div>
                          <h4 className="text-lg font-light text-gray-900">Reformas y rehabilitaciones</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Transformamos espacios con un enfoque sostenible y eficiente.
                        </p>
                      </div>

                      {/* Interior Design */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                            03
                          </div>
                          <h4 className="text-lg font-light text-gray-900">Diseño de interiores</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ambientes donde cada elemento cumple un propósito y se integra en el conjunto.
                        </p>
                      </div>

                      {/* Consulting */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                            04
                          </div>
                          <h4 className="text-lg font-light text-gray-900">Consultoría en arquitectura</h4>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Análisis y asesoramiento para definir la propuesta de tu vivienda.
                        </p>
                      </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="border-t border-gray-200 pt-12">
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-thin text-gray-900 mb-4">
                          Arquitectura pensada para el usuario
                        </h3>
                        <div className="w-12 h-px bg-gray-400 mx-auto"></div>
                      </div>
                      
                      <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-gray-600 text-center leading-relaxed">
                          Enfoque humanista y cercano que adapta cada proyecto a su entorno y a las personas que lo habitan.
                        </p>
                        
                        <div className="bg-gray-50 p-8 border-l-4 border-gray-300">
                          <p className="text-gray-700 font-medium italic text-center">
                            &quot;Arquitectura enfocada en la sencillez, el confort y la armonía&quot;
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-900">Proceso colaborativo</h5>
                            <p className="text-gray-600">El cliente forma parte del diseño desde el primer minuto</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className="font-medium text-gray-900">Servicio transparente</h5>
                            <p className="text-gray-600">Desde el encaje inicial hasta la ejecución final</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'filosofia' && (
                  <motion.div
                    key="filosofia"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    {/* Philosophy Overview */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-thin text-gray-900 mb-4">
                        Filosofía de diseño
                      </h3>
                      <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
                      <p className="text-gray-600 font-light max-w-2xl mx-auto">
                        Arquitectura humanista que conecta espacios con personas
                      </p>
                    </div>

                    {/* Core Principles */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                        </div>
                        <h4 className="text-lg font-light text-gray-900">Humanista</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Adaptamos cada proyecto a su entorno y a las personas que lo habitan
                        </p>
                      </div>

                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                        </div>
                        <h4 className="text-lg font-light text-gray-900">Colaborativo</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          El cliente forma parte del proceso desde el primer minuto
                        </p>
                      </div>

                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-8 h-8 bg-gray-900 rounded-full"></div>
                        </div>
                        <h4 className="text-lg font-light text-gray-900">Transparente</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Servicio claro desde el encaje inicial hasta la ejecución final
                        </p>
                      </div>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-gray-50 p-12 border-l-4 border-gray-300">
                      <blockquote className="text-center">
                        <p className="text-gray-700 font-medium italic text-xl mb-4">
                          &quot;Arquitectura pensada para el usuario, enfocada en la sencillez, el confort y la armonía&quot;
                        </p>
                        <footer className="text-gray-500 text-sm font-light">
                          — NEVA Estudio
                        </footer>
                      </blockquote>
                    </div>

                    {/* Vision */}
                    <div className="text-center">
                      <h4 className="text-lg font-light text-gray-900 mb-4">Nuestra visión</h4>
                      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Proyectamos ambientes que inspiran y mejoran la experiencia de quienes los habitan.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'estudio' && (
                  <motion.div
                    key="estudio"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    {/* Timeline */}
                    <div className="text-center mb-12">
                      <h3 className="text-2xl font-thin text-gray-900 mb-4">Nuestra historia</h3>
                      <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
                      <p className="text-gray-600 font-light max-w-2xl mx-auto">
                        Una colaboración que comenzó en la universidad y se consolidó en Gijón
                      </p>
                    </div>

                    {/* Timeline Steps */}
                    <div className="space-y-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                          2016
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-light text-gray-900 mb-2">Beca en Matadero Madrid</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Comenzó nuestra colaboración profesional en el Vivero de Industrias Creativas
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                          2021
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-light text-gray-900 mb-2">Nacimiento de NEVA</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Establecidos en Gijón, creamos nuestra propia marca y estudio de arquitectura
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Name Origin */}
                    <div className="border-t border-gray-200 pt-12">
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-thin text-gray-900 mb-4">Por qué &apos;NEVA&apos;</h3>
                        <div className="w-12 h-px bg-gray-400 mx-auto"></div>
                      </div>
                      
                      <div className="max-w-2xl mx-auto text-center space-y-6">
                        <div className="bg-gray-50 p-8 border-l-4 border-gray-300">
                          <p className="text-gray-700 font-medium italic text-lg mb-2">
                            nevar: v. Cayer nieve [de les nubes]
                          </p>
                          <p className="text-gray-500 text-sm font-light">Asturiano</p>
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          La nieve crea un lienzo en blanco donde cualquier idea es posible, despertando la inspiración. 
                          Su grandeza visual, calma y serenidad invitan al respeto: aquello que creamos debe estar a la altura.
                        </p>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="border-t border-gray-200 pt-12">
                      <div className="text-center mb-8">
                        <h3 className="text-xl font-thin text-gray-900 mb-4">Equipo fundador</h3>
                        <div className="w-12 h-px bg-gray-400 mx-auto"></div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center space-y-4 border border-gray-200 p-8 hover:border-gray-300 transition-colors">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-gray-900 font-light text-lg">LF</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-light text-gray-900">Laín Fernández</h4>
                            <p className="text-sm text-gray-500 font-light">ARQUITECTO</p>
                            <p className="text-sm text-gray-600 mt-2">Socio fundador</p>
                          </div>
                        </div>
                        
                        <div className="text-center space-y-4 border border-gray-200 p-8 hover:border-gray-300 transition-colors">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-gray-900 font-light text-lg">AS</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-light text-gray-900">Andrés Suárez</h4>
                            <p className="text-sm text-gray-500 font-light">ARQUITECTO</p>
                            <p className="text-sm text-gray-600 mt-2">Socio fundador</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
