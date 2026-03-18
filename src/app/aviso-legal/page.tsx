import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 tracking-tight">
            Aviso Legal
          </h1>
          <div className="w-20 h-px bg-accent mb-12"></div>
          
          <div className="prose prose-lg max-w-none text-stone-700 font-light leading-relaxed">
            <div className="bg-stone-50 p-6 mb-8 rounded-none">
              <h2 className="text-lg font-light text-stone-900 mb-4">NEVA</h2>
              <p className="mb-2"><strong>Andrés Suárez Barrientos</strong></p>
              <p className="mb-2">33203 – Gijón, Asturias</p>
              <p className="mb-2">C/ Ezcurdia 186, 1ºf</p>
              <p className="mb-2">53646192-A</p>
              <p className="mb-2">Tel: (+34) 636 761 306</p>
              <p className="mb-2">Mail: estudio@nevaestudio.com</p>
            </div>

            <h2 className="text-xl font-light text-stone-900 mb-6">Información general</h2>
            <p className="mb-6">
              Las condiciones siguientes, de acuerdo con el artículo 10 de la Ley 34/2002, de 11 de julio, 
              de Servicios de la Sociedad de la Información y de Comercio Electrónico, regulan la información 
              y el uso permitido del web con URL https://www.nevaestudio.com/.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Condiciones generales</h2>
            <p className="mb-6">
              Estas condiciones generales tienen por objeto regular el acceso y la utilización del Web que 
              Andrés Suárez Barrientos pone gratuitamente a disposición de los clientes y otros usuarios de Internet.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Condiciones de uso</h2>
            <p className="mb-6">
              El usuario de Internet se obliga a hacer un uso correcto del Web de conformidad con la legislación 
              española y europea vigente y con las condiciones incluidas en este documento.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Propiedad intelectual e industrial</h2>
            <p className="mb-6">
              Los derechos de propiedad intelectual del Web son titularidad de Andrés Suárez Barrientos a quien 
              corresponde el ejercicio exclusivo de los derechos de explotación que incluyen la reproducción, 
              la distribución, la comunicación pública y la transformación.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Protección de datos personales</h2>
            <p className="mb-6">
              Toda la información referente al tratamiento y la protección de los datos personales se encuentra 
              en nuestra Política de Privacidad.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Cookies</h2>
            <p className="mb-6">
              Toda la información sobre las cookies se encuentra en nuestra Política de cookies.
            </p>

            <h2 className="text-xl font-light text-stone-900 mb-6">Jurisdicción</h2>
            <p className="mb-6">
              Las presentes condiciones se interpretarán conforme a la legislación vigente española y europea 
              en la materia. Para la resolución de todas las controversias será aplicable la legislación española 
              y europea vigente.
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
