import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticaCookies() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 tracking-tight">
            Política de Cookies
          </h1>
          <div className="w-20 h-px bg-accent mb-12"></div>
          
          <div className="prose prose-lg max-w-none text-stone-700 font-light leading-relaxed">
            <h2 className="text-xl font-light text-stone-900 mb-6">Introducción</h2>
            <p className="mb-6">
              Este documento describe la Política de cookies que regula el sitio Web con URL https://www.nevaestudio.com/, 
              en adelante el Web, con el objetivo de garantizar la privacidad de los usuarios de Internet.
            </p>
            
            <p className="mb-8">
              El titular del sitio Web es Andrés Suárez Barrientos, con domicilio social en Calle Ezcurdia 186, 1ºf, 
              33203 – Gijón, Asturias, con DNI 53646192-A. Los datos de contacto son teléfono (+34) 636 761 306, 
              y correo electrónico estudio@nevaestudio.com.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">¿Qué son las cookies?</h2>
            <p className="mb-6">
              Las cookies son pequeños dispositivos de almacenamiento y recuperación de datos (ficheros) que los sitios 
              webs guardan en su ordenador, teléfono inteligente (Smartphone), tablet o cualquier otro dispositivo de 
              acceso a Internet.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">¿Para qué sirven?</h2>
            <p className="mb-6">
              Las cookies sirven para reconocer el dispositivo de los usuarios de Internet cuando vuelven a visitar el 
              sitio Web, facilitándole su uso recordando sus preferencias y configuración de navegación. También sirven 
              para mejorar los servicios que ofrecemos y para poder recopilar información estadística que nos permita 
              entender como los Usuarios de Internet utilizan nuestro sitio Web.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Tipos de cookies</h2>
            <p className="mb-6">
              Según la entidad que las gestione: cookies propias y cookies de terceros.
            </p>
            <p className="mb-6">
              Según el plazo de tiempo: cookies de sesión y cookies persistentes.
            </p>
            <p className="mb-6">
              Según su finalidad: cookies técnicas, cookies de preferencias, cookies de análisis y cookies de publicidad comportamental.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Cookies utilizadas en este web</h2>
            <div className="mb-6">
              <p className="mb-4"><strong>Google Analytics:</strong></p>
              <ul className="list-disc pl-6 mb-4">
                <li>_ga: Cookie de análisis (2 años)</li>
                <li>_ga_#: Cookie de análisis (2 años)</li>
                <li>_gat: Cookie de análisis (1 día)</li>
                <li>_gid: Cookie de análisis (1 día)</li>
              </ul>
            </div>

            <h2 className="text-xl font-light text-stone-900 mb-6">Gestión de cookies</h2>
            <p className="mb-6">
              Puede configurar su navegador de Internet para aceptar o bloquear las cookies, borrar las instaladas, 
              o configurarlo para que se borren automáticamente cuando se cierre el navegador.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Contacto</h2>
            <p className="mb-6">
              Para realizar cualquier tipo de consulta respecto a esta política puede dirigirse a: estudio@nevaestudio.com
            </p>

            <p className="text-sm text-stone-500 mt-12">
              Última actualización: 11/06/2024
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
