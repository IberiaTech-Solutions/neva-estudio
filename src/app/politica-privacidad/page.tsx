import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 tracking-tight">
            Política de Privacidad
          </h1>
          <div className="w-20 h-px bg-accent mb-12"></div>
          
          <div className="prose prose-lg max-w-none text-stone-700 font-light leading-relaxed">
            <h2 className="text-xl font-light text-stone-900 mb-6">Objeto</h2>
            <p className="mb-6">
              Andrés Suárez Barrientos ha asumido el compromiso de proteger su privacidad y sus datos personales. 
              En esta Política de Privacidad, le informamos de la forma en la que protegemos sus datos personales. 
              Le recomendamos leerla antes de acceder al contenido digital del web.
            </p>
            
            <p className="mb-8">
              Andrés Suárez Barrientos defiende fervientemente los derechos fundamentales a la privacidad y a la 
              protección de los datos personales, así como el cumplimiento de las leyes estatales y europeas 
              relativas a la protección de datos.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Responsable del Tratamiento</h2>
            <p className="mb-6">
              El responsable del tratamiento de los datos personales que nos facilita en el sitio web es 
              Andrés Suárez Barrientos, con domicilio social Calle Ezcurdia 186, 1ºf, 33203 – Gijón, Asturias, 
              con DNI 53646192-A. Los datos de contacto son teléfono (+34) 636 761 306, y correo electrónico 
              estudio@nevaestudio.com.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Datos que recopilamos</h2>
            <p className="mb-6">
              Los datos personales, facilitados por los usuarios, podrán ser tratados por Andrés Suárez Barrientos 
              como responsable del tratamiento, siendo en todo momento conservados y tratados en territorio de la 
              Unión Europea.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Finalidades de los tratamientos</h2>
            <p className="mb-6">
              Los datos personales que nos facilite en el formulario &quot;Contáctanos&quot;, disponible en este sitio web, 
              serán tratados con la finalidad de dar respuesta a la solicitud de contacto realizada por el usuario.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Legitimación</h2>
            <p className="mb-6">
              La base legal para los tratamientos de los datos personales facilitados en los formularios del web, 
              es el consentimiento que le solicitamos nos facilite, al pie de los formularios, para poder tratar 
              sus datos personales y gestionar la solicitud correspondiente y darle respuesta.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Derechos</h2>
            <p className="mb-6">
              Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la 
              rectificación de datos inexactos o, en su caso, solicitar la supresión cuando, entre otros motivos, 
              los datos ya no sean necesarios para la finalidad para la que se facilitaron, así como revocar el 
              consentimiento otorgado.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Contacto</h2>
            <p className="mb-6">
              Para cualquier consulta relacionada con esta política de privacidad, puede contactar con nosotros 
              en estudio@nevaestudio.com.
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
