import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import SetLang from "@/components/SetLang";

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params;
  
  const isSpanish = locale === 'es';
  const baseUrl = 'https://nevaestudio.com'; // Replace with your actual domain
  const currentUrl = `${baseUrl}/${locale}`;
  
  return {
    title: isSpanish 
      ? 'NEVA Estudio - Arquitectos en Gijón | Asturias'
      : 'NEVA Studio - Architects in Gijón | Asturias',
    description: isSpanish
      ? 'Estudio de arquitectura en Gijón con más de 10 años de experiencia. Proyectos residenciales, comerciales, reformas y diseño de interiores en Asturias.'
      : 'Architecture studio in Gijón with over 10 years of experience. Residential and commercial projects, renovations and interior design in Asturias.',
    keywords: isSpanish
      ? 'arquitectos gijón, arquitectura asturias, estudio arquitectura, proyectos residenciales, reformas, diseño interiores, arquitectura sostenible, diseño bioclimático'
      : 'architects gijon, architecture asturias, architecture studio, residential projects, renovations, interior design, sustainable architecture, bioclimatic design',
    authors: [{ name: 'NEVA Estudio' }],
    creator: 'NEVA Estudio',
    publisher: 'NEVA Estudio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'es': `${baseUrl}/es`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: isSpanish ? 'NEVA Estudio - Arquitectos en Gijón' : 'NEVA Studio - Architects in Gijón',
      description: isSpanish ? 'Arquitectura cercana y humanista en Asturias' : 'Close and humanistic architecture in Asturias',
      url: currentUrl,
      siteName: isSpanish ? 'NEVA Estudio' : 'NEVA Studio',
      locale: isSpanish ? 'es_ES' : 'en_US',
      type: "website",
      images: [
        {
          url: '/neva-logo.svg',
          width: 1200,
          height: 630,
          alt: isSpanish ? 'NEVA Estudio - Arquitectos en Gijón' : 'NEVA Studio - Architects in Gijón',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isSpanish ? 'NEVA Estudio - Arquitectos en Gijón' : 'NEVA Studio - Architects in Gijón',
      description: isSpanish ? 'Arquitectura cercana y humanista en Asturias' : 'Close and humanistic architecture in Asturias',
      images: ['/neva-logo.svg'],
      creator: '@nevaestudio', // Replace with actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-stone-900 focus:text-white focus:px-4 focus:py-2 focus:text-sm">
        Skip to content
      </a>
      <SetLang />
      <StructuredData locale={locale} />
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
