import type { Metadata } from 'next';
import Link from 'next/link';
import { titleFont } from '../config/fonts';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Cat.rolina Sitter. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  openGraph: {
    title: 'Política de Privacidad | Cat.rolina Sitter',
    description: 'Información sobre cómo recopilamos, usamos y protegemos tus datos personales en Cat.rolina Sitter.',
    images: [
      {
        url: '/imgs/Banner2.png',
        width: 1200,
        height: 630,
        alt: 'Política de Privacidad de Cat.rolina Sitter'
      }
    ],
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#e1d5c5] bg-opacity-90 pt-20 pb-16">
      <article className="max-w-4xl mx-auto px-4 bg-white rounded-lg shadow-md p-8">
        <h1 className={`${titleFont.className} text-3xl font-bold mb-8 text-[#391502]`}>
          Política de Privacidad
        </h1>

        <section className="mb-8">
          <h2 className={`${titleFont.className} text-2xl font-semibold mb-4 text-[#391502]`}>
            1. Información que Recopilamos
          </h2>
          <p className="mb-4 text-[#391502]/80">
            En Cat.rolina Sitter, recopilamos la siguiente información para brindar nuestros servicios:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#391502]/80">
            <li>Información de contacto (nombre, correo electrónico, teléfono)</li>
            <li>Dirección para visitas a domicilio</li>
            <li>Información sobre tu mascota (nombre, edad, necesidades especiales)</li>
            <li>Fotografías tomadas durante nuestro servicio</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`${titleFont.className} text-2xl font-semibold mb-4 text-[#391502]`}>
            2. Uso de la Información
          </h2>
          <p className="mb-4 text-[#391502]/80">
            Utilizamos esta información para:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#391502]/80">
            <li>Proporcionar nuestros servicios de cuidado de mascotas</li>
            <li>Comunicarnos contigo sobre las visitas y el estado de tu mascota</li>
            <li>Enviar actualizaciones y fotos durante nuestro servicio</li>
            <li>Mejorar nuestros servicios y atención al cliente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`${titleFont.className} text-2xl font-semibold mb-4 text-[#391502]`}>
            3. Protección de Datos
          </h2>
          <p className="mb-4 text-[#391502]/80">
            Implementamos medidas de seguridad para proteger tu información personal:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#391502]/80">
            <li>Encriptación de datos sensibles</li>
            <li>Acceso restringido a información personal</li>
            <li>Protocolos de seguridad actualizados</li>
            <li>Retención limitada de datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`${titleFont.className} text-2xl font-semibold mb-4 text-[#391502]`}>
            4. Tus Derechos
          </h2>
          <p className="mb-4 text-[#391502]/80">
            Tienes derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#391502]/80">
            <li>Acceder a tu información personal</li>
            <li>Solicitar correcciones de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al procesamiento de tus datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className={`${titleFont.className} text-2xl font-semibold mb-4 text-[#391502]`}>
            5. Contacto
          </h2>
          <p className="text-[#391502]/80">
            Para cualquier consulta sobre nuestra política de privacidad, puedes contactarnos en{' '}
            <a 
              href="mailto:privacidad@carolinasitter.com"
              className="text-[#c44400] hover:text-[#391502] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded"
            >
              privacidad@carolinasitter.com
            </a>
          </p>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block bg-[#c44400] text-white px-6 py-2 rounded-full hover:bg-[#391502] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] focus:ring-offset-2"
          >
            Volver al Inicio
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Política de Privacidad",
              "description": "Información sobre cómo recopilamos, usamos y protegemos tus datos personales en Cat.rolina Sitter.",
              "publisher": {
                "@type": "ProfessionalService",
                "name": "Cat.rolina Sitter",
                "url": "https://carolinasitter.com"
              },
              "inLanguage": "es",
              "isAccessibleForFree": true,
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "@id": "https://carolinasitter.com",
                      "name": "Inicio"
                    }
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "@id": "https://carolinasitter.com/politica-privacidad",
                      "name": "Política de Privacidad"
                    }
                  }
                ]
              }
            })
          }}
        />
      </article>
    </main>
  );
}