import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio | Cuidado profesional de gatos a domicilio',
  description: 'Cat.rolina Sitter ofrece servicios profesionales de cuidado de gatos a domicilio en Santiago. Catsitters certificados, seguimiento diario y atención personalizada.',
  openGraph: {
    title: 'Cat.rolina Sitter | Cuidado profesional de gatos a domicilio',
    description: 'Servicio profesional de cuidadores de gatos certificados en Santiago. Atención personalizada, seguimiento diario y cuidado en el ambiente familiar de tu gato.',
    images: [
      {
        url: '/imgs/Banner1.png',
        width: 1200,
        height: 630,
        alt: 'Cat.rolina Sitter - Servicio profesional de cuidado de gatos'
      }
    ],
    type: 'website',
  },
  alternates: {
    canonical: 'https://carolinasitter.com'
  }
};