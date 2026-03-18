import Script from 'next/script'

interface StructuredDataProps {
  locale: string
}

export default function StructuredData({ locale }: StructuredDataProps) {
  const isSpanish = locale === 'es'
  
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": isSpanish ? "NEVA Estudio" : "NEVA Studio",
    "alternateName": isSpanish ? "NEVA Studio" : "NEVA Estudio",
    "description": isSpanish 
      ? "Estudio de arquitectura en Gijón con más de 10 años de experiencia. Proyectos residenciales, comerciales, reformas y diseño de interiores en Asturias."
      : "Architecture studio in Gijón with over 10 years of experience. Residential and commercial projects, renovations and interior design in Asturias.",
    "url": "https://nevaestudio.com",
    "logo": "https://nevaestudio.com/neva-logo.svg",
    "image": "https://nevaestudio.com/neva-logo.svg",
    "telephone": "+34-XXX-XXX-XXX", // Replace with actual phone number
    "email": "info@nevaestudio.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal, 123", // Replace with actual address
      "addressLocality": "Gijón",
      "addressRegion": "Asturias",
      "postalCode": "33201",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5453",
      "longitude": "-5.6619"
    },
    "foundingDate": "2014",
    "founders": [
      {
        "@type": "Person",
        "name": "Andrés Suárez"
      },
      {
        "@type": "Person", 
        "name": "Laín Fernández"
      }
    ],
    "knowsAbout": isSpanish 
      ? ["Arquitectura", "Diseño de interiores", "Reformas", "Proyectos residenciales", "Proyectos comerciales"]
      : ["Architecture", "Interior design", "Renovations", "Residential projects", "Commercial projects"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Gijón"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Asturias"
      },
      {
        "@type": "Country",
        "name": "Spain"
      }
    ],
    "serviceType": isSpanish 
      ? ["Arquitectura residencial", "Arquitectura comercial", "Reformas", "Diseño de interiores"]
      : ["Residential architecture", "Commercial architecture", "Renovations", "Interior design"],
    "sameAs": [
      "https://www.linkedin.com/company/neva-estudio" // Replace with actual social media URLs
    ]
  }

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nevaestudio.com/#organization",
    "name": isSpanish ? "NEVA Estudio" : "NEVA Studio",
    "description": isSpanish 
      ? "Estudio de arquitectura en Gijón especializado en proyectos residenciales y comerciales, reformas y diseño de interiores."
      : "Architecture studio in Gijón specializing in residential and commercial projects, renovations and interior design.",
    "url": "https://nevaestudio.com",
    "telephone": "+34-XXX-XXX-XXX", // Replace with actual phone number
    "email": "info@nevaestudio.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal, 123", // Replace with actual address
      "addressLocality": "Gijón",
      "addressRegion": "Asturias",
      "postalCode": "33201",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5453",
      "longitude": "-5.6619"
    },
    "openingHours": "Mo-Fr 09:00-18:00", // Replace with actual opening hours
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": [
      {
        "@type": "City",
        "name": "Gijón"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Asturias"
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
    </>
  )
}
