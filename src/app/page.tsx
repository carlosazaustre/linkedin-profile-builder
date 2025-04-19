import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Destaca en LinkedIn con un perfil profesional
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Genera una sección &quot;Acerca de&quot; personalizada para tu
              perfil de LinkedIn utilizando inteligencia artificial.
            </p>
            <Link href="/profile-generator">
              <Button className="text-lg px-8 py-3">
                Crear mi perfil ahora
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué usar nuestro generador?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">
                  Personalizado para ti
                </h3>
                <p className="text-gray-600">
                  Genera contenido específico para tu experiencia y habilidades
                  técnicas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2">
                  Soporte multilingüe
                </h3>
                <p className="text-gray-600">
                  Crea tu perfil tanto en español como en inglés para alcanzar
                  audiencias globales.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-blue-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">
                  Adaptado al tono deseado
                </h3>
                <p className="text-gray-600">
                  Elige entre diferentes estilos: profesional, formal,
                  inspiracional, cercano o creativo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4">
              Listo para mejorar tu presencia profesional
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crea tu perfil ahora y aumenta tus posibilidades de ser contactado
              por reclutadores.
            </p>
            <Link href="/profile-generator">
              <Button className="text-lg px-6 py-3">Empezar ahora</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
