import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { titleFont, geistSans } from "./config/fonts";

export const metadata: Metadata = {
  metadataBase: new URL('https://carolinasitter.com'),
  title: {
    template: '%s | Cat.rolina Sitter',
    default: 'Cat.rolina Sitter | Cuidado profesional para gatos'
  },
  description: "Servicio profesional de cuidado de gatos a domicilio en Santiago. Catsitters certificados y apasionados por los felinos, disponibles 24/7.",
  keywords: [
    "catsitter",
    "cuidado de gatos",
    "servicio de cuidado de mascotas",
    "cuidador de gatos",
    "santiago",
    "chile",
    "catsitter profesional",
    "cuidado de mascotas a domicilio"
  ],
  authors: [{ name: "Cat.rolina Sitter", url: "https://carolinasitter.com" }],
  applicationName: "Cat.rolina Sitter",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#391502",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://carolinasitter.com",
    siteName: "Cat.rolina Sitter",
    title: "Cat.rolina Sitter | Cuidado profesional para gatos",
    description: "Servicio profesional de cuidado de gatos a domicilio en Santiago. Catsitters certificados disponibles 24/7.",
    images: [
      {
        url: "/imgs/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cat.rolina Sitter - Cuidado profesional para gatos"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat.rolina Sitter | Cuidado profesional para gatos',
    description: 'Servicio profesional de cuidado de gatos a domicilio en Santiago',
    images: ['/imgs/twitter-image.jpg'],
    creator: '@carolinasitter'
  },
  alternates: {
    canonical: 'https://carolinasitter.com'
  },
  verification: {
    google: 'google-site-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${titleFont.className} ${geistSans.className}`}>
      <head>
        <link
          rel="preload"
          href="/imgs/Banner1.WebP"
          as="image"
          type="image/webp"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://carolinasitter.com",
              "name": "Cat.rolina Sitter",
              "image": "https://carolinasitter.com/imgs/LogoCRS.png",
              "url": "https://carolinasitter.com",
              "telephone": "+56912345678",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santiago",
                "addressRegion": "Región Metropolitana",
                "addressCountry": "CL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.4489,
                "longitude": -70.6693
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://instagram.com/cat.rolina.sitter",
                "https://facebook.com/cat.rolina.sitter"
              ],
              "description": "Servicio profesional de cuidado de gatos a domicilio en Santiago. Catsitters certificados y apasionados por los felinos.",
              "areaServed": "Santiago Metropolitan Region",
              "serviceType": "Pet Sitting",
              "specialties": ["Cuidado de gatos", "Visitas a domicilio", "Alimentación", "Limpieza de arenero"],
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Cliente Satisfecho"
                }
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <footer role="contentinfo" className="bg-[#391502] text-[#e1d5c5] py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contacto</h2>
                <address className="not-italic">
                  <p>Email: <a href="mailto:info@carolinasitter.com" className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded">info@carolinasitter.com</a></p>
                  <p>Tel: <a href="tel:+56912345678" className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded">+56 9 1234 5678</a></p>
                </address>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Enlaces Rápidos</h2>
                <nav aria-label="Enlaces del pie de página">
                  <ul className="space-y-2">
                    <li><a href="/#servicios" className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded">Servicios</a></li>
                    <li><a href="/#catsitters" className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded">Nuestros Catsitters</a></li>
                    <li><a href="/politica-privacidad" className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded">Política de Privacidad</a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Redes Sociales</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/cat.rolina.sitter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Instagram"
                    className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded p-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://facebook.com/cat.rolina.sitter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Facebook"
                    className="text-white hover:text-[#c44400] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c44400] rounded p-1"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-[#e1d5c5]">
              <p>&copy; {new Date().getFullYear()} Cat.rolina Sitter. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
