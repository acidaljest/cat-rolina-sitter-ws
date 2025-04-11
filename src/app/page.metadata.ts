import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cat.rolina Sitter | Cuidado Profesional de Gatos a Domicilio en Santiago',
  description: 'Servicio premium de cuidado de gatos a domicilio en Santiago. Catsitters certificados 24/7, seguimiento con fotos diarias, y cuidados personalizados en el ambiente seguro del hogar de tu gato. ¡Reserva ahora!',
  keywords: [
    'cuidado de gatos santiago',
    'catsitter profesional',
    'cuidador gatos a domicilio',
    'servicio cuidado mascotas',
    'cat sitter certificado',
    'cuidado felino personalizado',
    'guardería gatos santiago',
    'pet sitter gatos'
  ],
  alternates: {
    canonical: 'https://carolinasitter.com'
  },
  openGraph: {
    title: 'Cat.rolina Sitter | Cuidado Profesional de Gatos a Domicilio',
    description: 'Cuidado experto y personalizado para tu gato en la comodidad de su hogar. Catsitters certificados, seguimiento con fotos diarias y disponibilidad 24/7.',
    images: [
      {
        url: '/imgs/Banner1.WebP',
        width: 1200,
        height: 630,
        alt: 'Cat.rolina Sitter - Servicio profesional de cuidado de gatos'
      }
    ],
    type: 'website',
    locale: 'es_CL',
    url: 'https://carolinasitter.com',
    siteName: 'Cat.rolina Sitter'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cat.rolina Sitter | Cuidado Profesional de Gatos',
    description: 'Cuidado experto para tu gato en la comodidad de su hogar. Catsitters certificados disponibles 24/7.',
    images: ['/imgs/Banner1.WebP'],
    creator: '@carolinasitter'
  }
};