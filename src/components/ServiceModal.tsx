'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: string;
  onServiceSelect?: (serviceKey: string) => void;
}

export default function ServiceModal({ isOpen, onClose, serviceKey, onServiceSelect }: ServiceModalProps) {
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

  if (!isOpen) return null;

  // Get service-specific content based on the serviceKey
  const getServiceContent = (key: string) => {
    switch (key) {
      case 'residential':
        return {
          title: 'Arquitectura Residencial',
          sections: [
            {
              title: 'Selecciona el servicio que te interesa',
              content: `En Neva Estudio ofrecemos una amplia gama de servicios residenciales. Selecciona el servicio específico que te interesa para obtener información detallada:`,
              phases: [
                'Viviendas Unifamiliares - Proyectos de casas individuales',
                'Vivienda Colectiva - Edificios plurifamiliares y promociones',
                'Cambio de Uso - Conversión de locales a viviendas',
                'Reformas Integrales - Renovación completa de viviendas'
              ]
            }
          ]
        };
      case 'viviendas-unifamiliares':
        return {
          title: 'Viviendas Unifamiliares en Asturias',
          sections: [
            {
              title: 'Viviendas Unifamiliares en Asturias',
              content: `En Neva Estudio desarrollamos proyectos de viviendas unifamiliares en Asturias, combinando el diseño arquitectónico con criterios de eficiencia energética y constructiva, siempre bajo el cumplimiento normativo.

Cada proyecto que realizamos es único, pues surge del estudio meticuloso de las características del entorno y de las necesidades específicas del cliente, garantizando soluciones personalizadas.

Nos adaptamos a ti: El proceso de diseño y construcción de una vivienda unifamiliar comienza con un buen análisis. Estudiamos las condiciones de la parcela, la normativa urbanística vigente y las posibilidades del emplazamiento para definir una propuesta arquitectónica ajustada a tus necesidades.

Desde Neva Estudio coordinamos los aspectos técnicos del proyecto y de la obra, asegurando un control riguroso de cada fase.`,
              phases: []
            },
            {
              title: 'Por qué elegir Neva Estudio',
              content: '',
              phases: [
                'Asesoramiento técnico previo',
                'Proyectos personalizados, con un diseño adaptado a las condiciones de la parcela y su entorno',
                'Realización de infografías 3D interiores y exteriores de la vivienda',
                'Coordinación con todos los agentes intervinientes en la obra',
                'Gestión integral de trámites administrativos y licencias',
                'Supervisión técnica durante la ejecución',
                'Amplio conocimiento del contexto normativo y urbanístico de Asturias',
                'Compromiso con los plazos y la calidad proyectual'
              ]
            },
            {
              title: 'Fases del Proceso',
              content: '',
              phases: [
                'Análisis de la parcela y estudio previo de viabilidad',
                'Diseño arquitectónico y definición del proyecto',
                'Levantamiento 3D e infografías exteriores e interiores de la vivienda',
                'Redacción del Proyecto Básico y de Ejecución',
                'Tramitación de licencias y permisos administrativos',
                'Asesoramiento en la solicitud y análisis de las ofertas de contratas',
                'Dirección de obra',
                'Liquidación y certificado final de obra',
                'Tramitación de cédula de primera ocupación',
                'Asesoramiento técnico continuo durante todo el proceso'
              ]
            }
          ]
        };
      case 'vivienda-colectiva':
        return {
          title: 'Vivienda Colectiva en Asturias',
          sections: [
            {
              title: 'Vivienda Colectiva en Asturias',
              content: `En NEVA Estudio desarrollamos proyectos de vivienda colectiva (edificios plurifamiliares) en Asturias. Abordamos promociones residenciales de pequeña y media escala, optimizando el aprovechamiento del suelo, con soluciones constructivas que garanticen la eficiencia energética y el confort térmico de las viviendas, así como la accesibilidad, cumpliendo siempre con la normativa vigente.

Cada proyecto nace del análisis del lugar y de los requerimientos del promotor, ofreciendo soluciones personalizadas, sostenibles y técnicamente viables.

Nos adaptamos a cada proyecto: El diseño de una vivienda colectiva comienza con una buena base. Estudiamos la edificabilidad del solar, su orientación, los accesos y los condicionantes urbanísticos para sacar el máximo partido al proyecto.

En NEVA Estudio coordinamos todos los aspectos técnicos del proyecto y de la obra, asesorando desde el estudio de viabilidad hasta la finalización de las obras, involucrándonos en todo el proceso de desarrollo de la promoción.

Durante el proceso, definimos materiales, sistemas constructivos e instalaciones, cumpliendo en todo caso con el Código Técnico de la Edificación y la normativa municipal correspondiente.

Nuestro compromiso es ofrecer soluciones viables, adaptadas a cada contexto, con una ejecución técnica rigurosa.`,
              phases: []
            },
            {
              title: 'Fases en el desarrollo de una vivienda colectiva',
              content: 'Nuestro trabajo abarca todas las fases necesarias para desarrollar un edificio de vivienda colectiva:',
              phases: [
                'Análisis urbanístico del solar y estudio de viabilidad',
                'Propuesta de diseño y distribución de viviendas',
                'Modelado 3D e infografías comerciales',
                'Redacción del Proyecto Básico y de Ejecución',
                'Tramitación de licencias y documentación técnica',
                'Asesoramiento en la solicitud y análisis de las ofertas de contratas',
                'Dirección de obra y supervisión técnica',
                'Tramitación del Certificado de Fin de Obra, y obtención de la cédula',
                'Asesoramiento técnico y acompañamiento a la promotora'
              ]
            },
            {
              title: 'Por qué elegir a Neva Estudio',
              content: 'En Neva contamos con un equipo técnico con experiencia en el desarrollo de proyectos residenciales de vivienda colectiva en Asturias. Estas son algunas de las ventajas de trabajar con nosotros:',
              phases: [
                'Asesoramiento técnico desde el inicio',
                'Proyectos personalizados y adaptados al lugar',
                'Coordinación entre promotoras, constructoras e ingenierías',
                'Experiencia en trabajo con metodología BIM',
                'Amplio conocimiento del planeamiento urbanístico asturiano',
                'Gestión de licencias y trámites administrativos',
                'Diseño enfocado en la sostenibilidad, accesibilidad y ahorro energético',
                'Supervisión técnica continua y acompañamiento postventa'
              ]
            },
            {
              title: 'Diseño adaptado al entorno asturiano',
              content: `Diseñamos edificios de vivienda colectiva que respondan a las condiciones topográficas, climáticas y normativas del territorio asturiano.

Asimismo, contamos con un amplio conocimiento de la cultura asturiana y el mercado local, lo que nos permite adaptarnos a los condicionantes particulares en el desarrollo de una promoción en Asturias.

Nuestro conocimiento del urbanismo de los distintos concejos nos permite anticipar limitaciones y optimizar el proyecto desde sus fases más tempranas.

Aplicamos criterios de accesibilidad y sostenibilidad con el objetivo de mejorar la calidad de vida de quienes habiten las viviendas.`,
              phases: []
            }
          ]
        };
      case 'cambio-de-uso':
        return {
          title: 'Cambio de Uso de Local a Vivienda',
          sections: [
            {
              title: 'Cambio de Uso de Local a Vivienda',
              content: `En Neva Estudio te acompañamos en todo el proceso de cambio de uso de local a vivienda en Gijón y en el resto de Asturias.

Convertir un local comercial en vivienda es una oportunidad para adaptar espacios que han quedado en desuso. Nuestro servicio garantiza un procedimiento seguro y adaptado a la normativa vigente.`,
              phases: []
            },
            {
              title: 'En qué consiste el cambio de uso',
              content: `Un cambio de uso sirve para modificar la actividad original de un inmueble: un espacio destinado a comercio, oficina o almacén, por ejemplo, se transforma en vivienda.

Este proceso exige tanto el cumplimiento de la normativa urbanística, de edificación y de habitabilidad para vivienda, como la intervención de un arquitecto para la redacción del correspondiente proyecto.`,
              phases: []
            },
            {
              title: 'Viabilidad técnica del cambio de uso',
              content: 'La conversión de un local en vivienda depende de varios requisitos establecidos por la normativa aplicable:',
              phases: [
                'Que la parcela permita el uso residencial en planta baja según el Plan General de Ordenación (PGO)',
                'Ventilación e iluminación natural según exigencias de salubridad',
                'Altura libre mínima y superficie adecuada para el programa de vivienda: cocina, baños, salón/comedor y dormitorios',
                'Accesibilidad y cumplimiento de los requisitos básicos de habitabilidad y seguridad'
              ]
            },
            {
              title: 'Normativa para el cambio de uso de local a vivienda',
              content: 'Te presentamos la normativa del cambio de uso de local a vivienda en líneas generales, que puede sufrir variaciones según el municipio:',
              phases: [
                'Un proyecto técnico revisado por un arquitecto',
                'Solicitud de licencia urbanística de cambio de uso',
                'Cumplimiento del Código Técnico de la Edificación (CTE)',
                'Justificación de accesibilidad y condiciones de salubridad',
                'Inscripción de la modificación en el Catastro y Registro de la Propiedad'
              ]
            },
            {
              title: 'Fases del proceso con NEVA Estudio',
              content: 'Estas son las fases del proceso para cambiar local a vivienda con NEVA Estudio:',
              phases: [
                'Estudio de viabilidad - Realizamos un análisis del local, así como los condicionantes normativos vigentes',
                'Anteproyecto - Estudios y encaje las posibles distribuciones',
                'Proyecto de cambio de uso - Redactamos el Proyecto Básico y de Ejecución, bajo el cumplimiento de la normativa vigente',
                'Tramitación de licencias - Gestionamos con el Ayuntamiento la solicitud de licencia urbanística para realizar el cambio de uso',
                'Solicitud de ofertas a contratas - Asesoramos en la solicitud y análisis de las ofertas de las distintas contratas',
                'Dirección de obra - Supervisamos y dirigimos la ejecución de la obra',
                'Final de obra - Emitimos el Certificado Final de Obra (CFO)',
                'Cédula de habitabilidad - Tramitamos con el Ayuntamiento la Cédula de primera ocupación'
              ]
            },
            {
              title: 'Por qué elegir Neva Estudio para tu cambio de uso',
              content: 'Somos un estudio de arquitectura con amplia trayectoria en el sector. Nuestro conocimiento de la normativa local en Asturias y experiencia previa en proyectos de Cambio de Uso nos permite ofrecer un servicio integral y con garantías.',
              phases: [
                'Asesoramiento técnico inicial sin compromiso',
                'Proyectos personalizados, con soluciones adaptadas a las necesidades de cada cliente',
                'Gestión de licencias y permisos con la administración',
                'Coordinación con la constructora y otros agentes intervinientes',
                'Amplio conocimiento de la normativa local y autonómica en Asturias'
              ]
            }
          ]
        };
      case 'reformas-integrales':
        return {
          title: 'Reformas en Gijón',
          sections: [
            {
              title: 'Reformas en Gijón',
              content: `En Neva Estudio te ofrecemos la confianza y el acompañamiento profesional que necesitas para llevar a cabo tu reforma en Gijón.

Reformar una vivienda no es solo renovar acabados. Es repensar el espacio en función de cómo se vive, de cómo se quiere habitar, de sacar el máximo provecho del espacio y de la luz.

Somos un estudio de arquitectura en Gijón con años de experiencia en reformas integrales y diseño interior. Entendemos cada reforma como un proyecto de arquitectura en sí mismo: con diseño, estrategia, técnica y detalle.`,
              phases: []
            },
            {
              title: 'Reformar es proyectar: transformamos tu vivienda',
              content: `Muchas viviendas tienen un potencial escondido: distribuciones ineficientes, espacios desaprovechados, falta de luz o relación con el exterior. Reformar es una oportunidad para repensar el espacio desde cero.

Cada propuesta parte de un análisis profundo de la vivienda, del estilo de vida de quien la habita y de sus necesidades actuales y futuras. Nuestro enfoque combina sensibilidad espacial, técnica constructiva y atención al detalle para que cada decisión tenga sentido.`,
              phases: []
            },
            {
              title: 'Nuestro equipo se encarga de todo el proceso',
              content: '',
              phases: [
                'Análisis previo',
                'Proyecto de diseño',
                'Gestión de licencias y trámites administrativos',
                'Coordinación con la solicitud de presupuestos y gestión de contratas',
                'Dirección de obra hasta la entrega final'
              ]
            },
            {
              title: 'Ventajas de reformar tu vivienda con Neva Estudio',
              content: 'Trabajar con nosotros es apostar por un proceso riguroso, cuidado y bien planificado. Cada reforma es única. Por eso apostamos por una arquitectura cercana, pensada para mejorar tu día a día.',
              phases: [
                'Diseño personalizado, adaptado a tu estilo de vida',
                'Distribuciones optimizadas, maximizando la luz natural y amplitud de espacios',
                'Selección cuidada de materiales y acabados',
                'Supervisión durante toda la obra, garantizando el cumplimiento de lo proyectado',
                'Acompañamiento completo, para que tú no tengas que preocuparte por nada'
              ]
            }
          ]
        };
      case 'commercial':
        return {
          title: 'Arquitectura Comercial',
          sections: [
            {
              title: 'Locales Comerciales',
              content: `Trabajamos para potenciar los negocios, adaptándonos a las necesidades de cada marca o cliente.

Nuestro enfoque en arquitectura comercial se basa en entender las particularidades de cada negocio y crear espacios que no solo cumplan con la normativa, sino que potencien la experiencia del cliente y la eficiencia operativa.

Servicios que ofrecemos:
• Cambios de uso para adaptar espacios a nuevas actividades comerciales
• Adecuación de locales para comercio, hostelería, oficinas y otros usos
• Proyectos de actividad para nuevas empresas
• Licencias de apertura y tramitación administrativa completa
• Diseño de espacios comerciales optimizados

Por qué elegir Neva Estudio para tu proyecto comercial:
• Conocimiento profundo de la normativa comercial en Asturias
• Experiencia en diferentes sectores comerciales
• Gestión integral de trámites administrativos
• Diseño adaptado a las necesidades específicas de cada negocio
• Coordinación con todos los agentes intervinientes`,
              phases: [
                'Análisis de necesidades comerciales y normativas aplicables',
                'Diseño adaptado a la marca y actividad específica',
                'Cumplimiento normativo comercial y de accesibilidad',
                'Optimización de espacios comerciales para máxima eficiencia',
                'Gestión de licencias de apertura y permisos',
                'Coordinación con la constructora y otros agentes',
                'Supervisión técnica durante la ejecución'
              ]
            }
          ]
        };
      case 'urbanism':
        return {
          title: 'Urbanismo',
          sections: [
            {
              title: 'Proyectos Urbanísticos',
              content: `Desarrollamos Planes urbanísticos y proyectos específicos de parcelación y urbanización, así como alegaciones y sugerencias a Planes Generales.

Nuestro trabajo en urbanismo se centra en crear entornos urbanos sostenibles, funcionales y adaptados a las necesidades de la comunidad, siempre respetando el entorno natural y cultural de Asturias.

Servicios que ofrecemos:
• Proyectos de parcelación para desarrollo de suelo urbano
• Proyectos de urbanización con infraestructuras completas
• Alegaciones y sugerencias a Planes Generales de Ordenación Urbana
• Estudios de viabilidad urbanística
• Coordinación con administraciones públicas

Nuestro enfoque:
• Desarrollo sostenible respetando el medio ambiente
• Integración con el entorno natural asturiano
• Optimización del uso del suelo
• Cumplimiento de normativas urbanísticas vigentes
• Colaboración estrecha con administraciones locales`,
              phases: [
                'Análisis del suelo y condicionantes urbanísticos',
                'Estudio de viabilidad y propuesta de desarrollo',
                'Redacción del proyecto de parcelación o urbanización',
                'Tramitación administrativa con las administraciones competentes',
                'Coordinación con ingenierías y otros técnicos',
                'Seguimiento del proceso hasta su aprobación definitiva'
              ]
            }
          ]
        };
      case 'energy':
        return {
          title: 'Rehabilitación Energética',
          sections: [
            {
              title: 'Eficiencia Energética en Edificios',
              content: `La eficiencia energética forma parte de nuestra apuesta. Mejoramos la envolvente térmica de edificios para aumentar el confort y reducir el consumo de energía.

En Neva Estudio entendemos que la rehabilitación energética no es solo una obligación normativa, sino una oportunidad para mejorar significativamente la calidad de vida de los usuarios y reducir los costes energéticos a largo plazo.

Nuestros servicios incluyen:
• Mejora de envolventes térmicas de edificios
• Optimización de sistemas de calefacción y refrigeración
• Integración de energías renovables
• Certificados de eficiencia energética
• Asesoramiento en ayudas y subvenciones

Beneficios de la rehabilitación energética:
• Reducción significativa del consumo energético
• Mejora del confort térmico interior
• Reducción de emisiones de CO₂
• Incremento del valor de la propiedad
• Cumplimiento de normativas energéticas vigentes

Nuestro compromiso con la sostenibilidad nos lleva a aplicar siempre los criterios más avanzados en eficiencia energética, adaptándolos a las características específicas de cada edificio y a las condiciones climáticas de Asturias.`,
              phases: [
                'Auditoría energética del edificio',
                'Análisis de la envolvente térmica existente',
                'Propuesta de mejoras energéticas',
                'Redacción del proyecto de rehabilitación energética',
                'Coordinación con instaladores especializados',
                'Dirección de obra y supervisión técnica',
                'Certificación energética final'
              ]
            }
          ]
        };
      case 'other':
        return {
          title: 'Otros Proyectos',
          sections: [
            {
              title: 'Servicios Complementarios',
              content: `En Neva estudio ofrecemos soluciones en todos los ámbitos de la arquitectura.

Nuestra experiencia nos permite abordar proyectos diversos y especializados, siempre con el mismo nivel de profesionalidad y atención al detalle que caracteriza nuestro trabajo.

Servicios que ofrecemos:
• Consultoría y asesoramiento arquitectónico especializado
• Diseño de interiores personalizado
• Proyectos de demolición controlada
• Modelado 3D e infografías para presentaciones
• Peritajes y informes técnicos
• Estudios de viabilidad de proyectos

Nuestro enfoque multidisciplinar:
• Soluciones adaptadas a cada necesidad específica
• Utilización de las últimas tecnologías en diseño
• Coordinación con especialistas de diferentes disciplinas
• Atención personalizada y seguimiento continuo
• Compromiso con la calidad y los plazos acordados

Cada proyecto es único, y por eso adaptamos nuestros servicios a las necesidades específicas de cada cliente, ofreciendo soluciones innovadoras y técnicamente viables.`,
              phases: [
                'Análisis inicial de necesidades y viabilidad',
                'Desarrollo de la propuesta técnica',
                'Coordinación con especialistas externos si es necesario',
                'Redacción del proyecto técnico',
                'Tramitación de permisos y licencias',
                'Dirección de obra y supervisión técnica',
                'Entrega final y seguimiento post-obra'
              ]
            }
          ]
        };
      case 'turnkey':
        return {
          title: 'Servicio Llave en Mano',
          sections: [
            {
              title: 'Gestión Integral de Proyectos',
              content: `Gestionamos integralmente todas las fases de proyecto, desde el inicio hasta la entrega final de la obra. Nuestro objetivo es simplificarle al cliente el proceso, organizando y coordinando los distintos trámites y agentes.

El servicio llave en mano de Neva Estudio es la solución perfecta para aquellos clientes que buscan una gestión completa y profesional de su proyecto, sin tener que preocuparse por los aspectos técnicos, administrativos o de coordinación.

Qué incluye nuestro servicio llave en mano:
• Gestión completa desde el diseño hasta la entrega
• Coordinación de todos los agentes intervinientes
• Tramitación integral de licencias y permisos
• Selección y coordinación de contratistas
• Supervisión técnica continua durante toda la obra
• Gestión de materiales y proveedores
• Control de calidad y cumplimiento de plazos
• Entrega final con todas las certificaciones

Ventajas de nuestro servicio llave en mano:
• Tranquilidad total para el cliente
• Gestión profesional de todos los aspectos del proyecto
• Optimización de costes y plazos
• Calidad garantizada en todas las fases
• Comunicación fluida y transparente
• Resolución rápida de incidencias

Nuestro compromiso es hacer realidad tu proyecto con la máxima profesionalidad, garantizando que cada detalle esté cuidado y que el resultado final supere tus expectativas.`,
              phases: [
                'Análisis inicial y definición de objetivos',
                'Desarrollo del proyecto técnico completo',
                'Tramitación de todas las licencias y permisos',
                'Selección y coordinación de contratistas',
                'Gestión de materiales y proveedores',
                'Dirección de obra y supervisión técnica continua',
                'Control de calidad y cumplimiento de especificaciones',
                'Entrega final con todas las certificaciones'
              ]
            }
          ]
        };
      case 'certificado-obra-nueva-antigua':
        return {
          title: 'Certificado de Obra Nueva Antigua',
          sections: [
            {
              title: 'Certificado de obra nueva antigua',
              content: `En Neva Estudio gestionamos la tramitación completa del Certificado de obra nueva antigua, también conocido como certificado de antigüedad de vivienda, un procedimiento indispensable para la legalización registral de construcciones antiguas que no fueron inscritas en su momento.

Es habitual en edificaciones que han superado el plazo de prescripción urbanística, y que por tanto pueden regularizarse sin necesidad de licencia de obra.

Este trámite permite inscribir la edificación en el Registro de la Propiedad, actualizar el Catastro y garantizar la seguridad jurídica del inmueble.

Cuenta con NEVA Estudio para hacer la declaración de obra nueva y el certificado de antigüedad de vivienda.`,
              phases: []
            },
            {
              title: '¿Qué es el Certificado de Obra Nueva Antigua?',
              content: `El certificado de obra nueva antigua es un documento técnico, emitido por un arquitecto, que acredita la antigüedad de una construcción. Se utiliza como base para realizar la declaración notarial de obra nueva por antigüedad, necesaria para su inscripción registral.

Para que sea viable, debe haber pasado un plazo suficiente desde la finalización de la obra, y no puede existir un procedimiento sancionador en curso.

La base legal se encuentra en el artículo 28.4 del Real Decreto Legislativo 7/2015, por el que se aprueba el texto refundido de la Ley del Suelo y Rehabilitación Urbana.`,
              phases: []
            },
            {
              title: '¿Cuándo se necesita un Certificado de Obra Nueva Antigua?',
              content: 'Este certificado es necesario en los siguientes casos:',
              phases: [
                'Para inscribir construcciones antiguas que no figuran en el Registro de la Propiedad',
                'Para actualizar los datos del Catastro, que no reflejan la realidad construida',
                'En compraventas, herencias o segregaciones, donde se exige regularizar previamente la edificación',
                'Para acceder a financiación o formalizar escrituras ante notario'
              ]
            },
            {
              title: 'Regulariza tu vivienda con la declaración de obra nueva',
              content: `Se necesita la declaración de obra nueva para inscribir una edificación en el registro de la propiedad.

Este trámite es imprescindible en casos donde acabas de construir una vivienda o has realizado ampliaciones sin haberlas declarado previamente.`,
              phases: []
            },
            {
              title: 'Requisitos para la declaración de Obra Nueva Antigua',
              content: 'Para llevar a cabo este procedimiento de declaración de obra antigua, es necesario cumplir con los siguientes requisitos:',
              phases: [
                'Que la construcción esté finalizada desde hace más de 10 años',
                'Que no haya procedimientos sancionadores ni órdenes de demolición en curso',
                'Que el suelo no esté afectado por servidumbres o limitaciones urbanísticas que impidan su legalización',
                'Que se pueda demostrar la antigüedad de la edificación mediante inspección técnica, ortofotos, catastro, etc.'
              ]
            },
            {
              title: 'Costes del certificado',
              content: `El coste de la gestión para obtener el certificado de obra nueva antigua por parte de Neva Estudio parte de 600 €, dependiendo de cada caso, añadiendo también el servicio de levantamiento topográfico, cuyo importe suele rondar los 500 €.

A esto se le suman los honorarios notariales, que pueden variar en cada caso y deberás consultar directamente en la notaría.`,
              phases: []
            },
            {
              title: 'Cómo tramitamos el Certificado de Obra Nueva Antigua en Neva Estudio',
              content: 'En Neva Estudio realizamos la gestión completa del certificado de antigüedad y declaración de obra nueva por antigüedad, adaptado a la normativa urbanística de cada municipio:',
              phases: [
                'Análisis previo de viabilidad - Estudiamos la situación del inmueble y su encaje legal',
                'Inspección técnica y certificado de antigüedad - Evaluación técnica de la construcción',
                'Coordinación con notaría - Gestión de la declaración notarial',
                'Inscripción en el Registro de la Propiedad - Tramitación registral completa',
                'Actualización del Catastro - Regularización de datos catastrales'
              ]
            },
            {
              title: 'Solicita tu Certificado de Obra Nueva Antigua en Gijón y Asturias',
              content: `¿Tienes una vivienda o construcción antigua que no está inscrita en el Registro de la Propiedad? En Neva Estudio te ayudamos a determinar cuál es el procedimiento más adecuado para regularizar tu inmueble: certificado de obra nueva antigua o expediente de legalización.

Contacta con nosotros para un estudio previo sin compromiso y te asesoraremos paso a paso.

Descubre nuestros servicios de arquitectura en Gijón.`,
              phases: []
            }
          ]
        };
      case 'certificado-eficiencia-energetica':
        return {
          title: 'Certificado de Eficiencia Energética',
          sections: [
            {
              title: 'Certificado de Eficiencia Energética',
              content: `El certificado de eficiencia energética en Asturias es un documento oficial que informa sobre el consumo energético de un inmueble y las emisiones de CO₂ que genera. Resulta imprescindible tanto para propietarios como para compradores o arrendatarios, ya que facilita decisiones más conscientes en términos de sostenibilidad, ahorro y valor de mercado.

En Neva Estudio contamos con la experiencia y la formación técnica necesaria para redactar y registrar certificados energéticos en Asturias, garantizando un procedimiento ágil y conforme a la normativa vigente.`,
              phases: []
            },
            {
              title: '¿En qué consiste el certificado de eficiencia energética?',
              content: `El certificado de eficiencia energética es un informe técnico elaborado por un técnico autorizado, que evalúa el comportamiento energético de una vivienda o local en condiciones normales de uso.

La calificación se representa mediante una etiqueta que clasifica los inmuebles desde la letra A (más eficiente) hasta la G (menos eficiente). Esta información aporta transparencia en operaciones inmobiliarias y permite comparar de forma objetiva el consumo entre diferentes inmuebles.`,
              phases: []
            },
            {
              title: 'Obligación de disponer del certificado energético',
              content: 'Según el Real Decreto 235/2013, el certificado de eficiencia energética es obligatorio en los siguientes casos:',
              phases: [
                'Venta de viviendas, locales o edificios completos',
                'Alquiler de inmuebles, tanto residenciales como comerciales',
                'Edificios de nueva construcción',
                'Inmuebles públicos con determinada superficie y afluencia de público'
              ]
            },
            {
              title: 'Pasos para obtener el certificado energético en Asturias',
              content: 'En Neva Estudio seguimos un procedimiento claro para garantizar que tu certificado cumpla con todos los requisitos legales:',
              phases: [
                'Visita al inmueble - Recopilación de datos sobre orientación, materiales, instalaciones y características constructivas',
                'Emisión del informe - Cálculo de la calificación energética y redacción del certificado',
                'Registro en el Principado de Asturias - Inscripción en el organismo autonómico competente, requisito indispensable para su validez oficial'
              ]
            },
            {
              title: 'Beneficios del certificado de eficiencia energética',
              content: 'Además de ser un trámite obligatorio, este documento ofrece ventajas adicionales:',
              phases: [
                'Transparencia en compraventas y alquileres',
                'Mayor valor de mercado para inmuebles con mejor calificación',
                'Recomendaciones técnicas para mejorar la eficiencia y reducir el consumo',
                'Ahorro a medio y largo plazo en facturas de electricidad y climatización',
                'Contribución a la sostenibilidad y a la reducción de emisiones contaminantes'
              ]
            },
            {
              title: 'Precio del certificado de eficiencia energética en Asturias',
              content: `El coste del certificado depende de varios factores: superficie del inmueble, ubicación dentro de Asturias, complejidad constructiva (instalaciones, orientación, tipología), y trabajo técnico requerido para el análisis y registro.

En cualquier caso, se trata de una inversión necesaria y obligatoria para garantizar la legalidad de las operaciones inmobiliarias. En Neva Estudio evaluamos cada caso de manera individual y ofrecemos un presupuesto ajustado.

Te ofrecemos un servicio técnico fiable, adaptado a la normativa y con todas las garantías para que tu certificado energético en Asturias sea válido y útil.`,
              phases: []
            },
            {
              title: '¿Es obligatorio el certificado energético en Asturias?',
              content: `Sí. Todo inmueble que vaya a venderse o alquilarse en Asturias debe disponer de un certificado válido, así como los edificios de nueva construcción y determinados inmuebles públicos.`,
              phases: []
            },
            {
              title: '¿Cómo se solicita el certificado de eficiencia energética?',
              content: `El propietario debe contactar con un técnico acreditado. Tras una visita al inmueble, se emite el certificado con la calificación correspondiente y se registra en el organismo autonómico competente.`,
              phases: []
            }
          ]
        };
      default:
        return {
          title: 'Servicio',
          sections: []
        };
    }
  };

  const serviceContent = getServiceContent(serviceKey);

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
            aria-label="Service details"
            className="relative bg-warm-white rounded-none shadow-2xl max-w-4xl w-full mx-2 sm:mx-4 max-h-[85svh] sm:max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-warm-white border-b border-stone-200 px-4 sm:px-8 py-6 sm:py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-serif text-stone-900 mb-2">{serviceContent.title}</h2>
                  <div className="w-16 h-px bg-accent"></div>
                </div>
                <button
                  ref={closeRef}
                  onClick={onClose}
                  className="p-2 hover:bg-stone-100 rounded-none transition-colors border border-stone-200 hover:border-stone-300"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-stone-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-8 py-6 sm:py-8 max-h-[calc(95vh-160px)] sm:max-h-[calc(90vh-180px)] overflow-y-auto">
              {serviceContent.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-12"
                >
                  {/* Section Header */}
                  <div className="mb-8">
                    <h3 className="text-xl font-serif text-stone-900 mb-4">
                      {section.title}
                    </h3>
                    <div className="w-12 h-px bg-accent"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="text-stone-600 leading-relaxed">
                      {section.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-4 font-light">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  {/* Phases */}
                  {section.phases && section.phases.length > 0 && (
                    <div className="mt-10">
                      <h4 className="text-lg font-serif text-stone-900 mb-6">
                        {serviceKey === 'residential' ? 'Servicios Disponibles' : 'Fases del Proceso'}
                      </h4>
                      <div className="space-y-4">
                        {section.phases.map((phase, phaseIndex) => {
                          const isResidentialSelection = serviceKey === 'residential';
                          const serviceMap: { [key: string]: string } = {
                            'Viviendas Unifamiliares - Proyectos de casas individuales': 'viviendas-unifamiliares',
                            'Vivienda Colectiva - Edificios plurifamiliares y promociones': 'vivienda-colectiva',
                            'Cambio de Uso - Conversión de locales a viviendas': 'cambio-de-uso',
                            'Reformas Integrales - Renovación completa de viviendas': 'reformas-integrales'
                          };
                          
                          if (isResidentialSelection && onServiceSelect) {
                            const mappedKey = serviceMap[phase];
                            return (
                              <button
                                key={phaseIndex}
                                onClick={() => onServiceSelect(mappedKey)}
                                className="group w-full text-left p-6 border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 bg-warm-white hover:bg-stone-50"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-stone-700 group-hover:text-stone-900 font-light text-base">
                                    {phase}
                                  </span>
                                  <ArrowRight className="h-5 w-5 text-accent group-hover:text-stone-600 transition-colors" />
                                </div>
                              </button>
                            );
                          }
                          
                          return (
                            <div key={phaseIndex} className="flex items-start space-x-4 p-4 border border-stone-200 hover:border-stone-300 transition-colors duration-200">
                              <div className="flex-shrink-0 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center text-sm font-light">
                                {phaseIndex + 1}
                              </div>
                              <div className="text-stone-600 font-light text-sm leading-relaxed">
                                {phase}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 border-t border-stone-200"
              >
                <div className="text-center">
                  <h4 className="text-xl font-serif text-stone-900 mb-4">
                    ¿Interesado en este servicio?
                  </h4>
                  <p className="text-stone-600 mb-6 font-light max-w-2xl mx-auto">
                    Contacta con nosotros para obtener más información y un presupuesto personalizado sin compromiso.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      // Scroll to contact section
                      setTimeout(() => {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}
                    className="inline-flex items-center gap-3 bg-stone-900 text-white px-10 py-3 font-light text-base hover:bg-stone-800 transition-all duration-300"
                  >
                    Solicitar Presupuesto
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
