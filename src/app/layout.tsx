import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "NEVA Estudio - Arquitectos en Gijón",
  description: "Estudio de arquitectura en Gijón con más de 10 años de experiencia. Arquitectura cercana y humanista que se adapta a tus necesidades.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/neva-logo.svg",
    shortcut: "/neva-logo.svg",
    apple: "/neva-logo.svg",
  },
  alternates: {
    languages: {
      'es': 'https://nevaestudio.com/es',
      'en': 'https://nevaestudio.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/neva-logo.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/neva-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/neva-logo.svg" />
      </head>
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
