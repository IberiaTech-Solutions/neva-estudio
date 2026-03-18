import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticaAccesibilidad() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 tracking-tight">
            Política de Accesibilidad
          </h1>
          <div className="w-20 h-px bg-accent mb-12"></div>
          
          <div className="prose prose-lg max-w-none text-stone-700 font-light leading-relaxed">
            <h2 className="text-xl font-light text-stone-900 mb-6">Objeto</h2>
            <p className="mb-6">
              Desde NEVA Estudio, ponemos todos los recursos disponibles para que nuestra página web sea accesible, 
              con el fin de posibilitar el acceso a la información y a los distintos tipos de contenido, ya que 
              la accesibilidad a la misma reduce las barreras físicas o técnicas.
            </p>
            
            <p className="mb-6">
              Uno de nuestros objetivos, es que todos los usuarios de la página nevaestudio.com puedan navegar y 
              acceder a la misma, sin dificultades en el acceso y usabilidad, y ello con independencia de las 
              distintas capacidades de todos los usuarios.
            </p>

            <p className="mb-8">
              De esta forma, nevaestudio.com se compromete a proporcionar un sitio web que sea accesible para el 
              mayor número de usuarios, independientemente de las circunstancias y la capacidad.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Estándares de accesibilidad</h2>
            <p className="mb-6">
              Por este motivo, nos adherimos a las Pautas de accesibilidad para el contenido web (WCAG 2.0 nivel AA) 
              publicadas por el World Wide Web Consortium (W3C). Estas Pautas explican cómo hacer que el contenido 
              web sea más accesible para las personas con discapacidad.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Compromiso</h2>
            <p className="mb-6">
              Desde nevaestudio.com nos esforzamos todos los días en cumplir con las pautas y estándares de accesibilidad, 
              y te informamos que todas las páginas del sitio web satisfacen todos los puntos de verificación de 
              adecuación nivel AA definidos en la especificación de pautas de accesibilidad al contenido en la web (WCAG).
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Mejora continua</h2>
            <p className="mb-6">
              Continuamente estamos buscando soluciones que lleven a todas las personas del sitio al mismo nivel 
              de accesibilidad web general.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Contacto</h2>
            <p className="mb-6">
              Si tienes algún comentario o sugerencia relacionada con la mejora de la accesibilidad de nuestro 
              sitio web, no dudes en contactar con nosotros a través del correo estudio@nevaestudio.com, 
              nos ayudarás a mejorar.
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
