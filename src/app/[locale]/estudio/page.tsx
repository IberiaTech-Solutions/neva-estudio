import { Metadata } from 'next';
import EstudioClient from './EstudioClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  
  const isSpanish = locale === 'es';
  const baseUrl = 'https://nevaestudio.com'; // Replace with your actual domain
  const currentUrl = `${baseUrl}/${locale}/estudio`;
  
  return {
    title: isSpanish 
      ? 'Estudio NEVA - Arquitectos en Gijón | Conoce nuestro equipo'
      : 'NEVA Studio - Architects in Gijón | Meet our team',
    description: isSpanish
      ? 'Conoce a Andrés Suárez y Laín Fernández, arquitectos fundadores de NEVA Estudio. Más de 10 años de experiencia en arquitectura residencial y comercial en Asturias.'
      : 'Meet Andrés Suárez and Laín Fernández, founding architects of NEVA Studio. Over 10 years of experience in residential and commercial architecture in Asturias.',
    keywords: isSpanish
      ? 'arquitectos gijón, equipo neva, andrés suárez, laín fernández, estudio arquitectura, arquitectos asturias, equipo profesional'
      : 'architects gijon, neva team, andres suarez, lain fernandez, architecture studio, asturias architects, professional team',
    alternates: {
      canonical: currentUrl,
      languages: {
        'es': `${baseUrl}/es/estudio`,
        'en': `${baseUrl}/en/estudio`,
      },
    },
    openGraph: {
      title: isSpanish ? 'Estudio NEVA - Conoce nuestro equipo' : 'NEVA Studio - Meet our team',
      description: isSpanish 
        ? 'Arquitectos profesionales en Gijón con más de 10 años de experiencia'
        : 'Professional architects in Gijón with over 10 years of experience',
      url: currentUrl,
      type: "website",
      images: [
        {
          url: '/estudio/LAIN-ANDRES.jpg',
          width: 1200,
          height: 630,
          alt: isSpanish ? 'Equipo NEVA Estudio - Andrés y Laín' : 'NEVA Studio Team - Andrés and Laín',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isSpanish ? 'Estudio NEVA - Conoce nuestro equipo' : 'NEVA Studio - Meet our team',
      description: isSpanish 
        ? 'Arquitectos profesionales en Gijón con más de 10 años de experiencia'
        : 'Professional architects in Gijón with over 10 years of experience',
      images: ['/estudio/LAIN-ANDRES.jpg'],
    },
  };
}

export default async function EstudioPage({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  
  return <EstudioClient />;
}
