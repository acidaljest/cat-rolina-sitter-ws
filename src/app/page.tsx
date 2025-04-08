'use client';

import Image from 'next/image';
import { titleFont } from './config/fonts';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useRef, useCallback } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const originalCats = [
  {
    id: 1,
    name: 'Benito',
    description: 'Experto en mimos y churus',
    image: '/cats/benito-churu.jpg',
  },
  {
    id: 2,
    name: 'Florencia',
    description: 'Especialista en modelaje y siestas',
    image: '/cats/florencia-verde.jpg',
  },
  {
    id: 3,
    name: 'Leo',
    description: 'Perfecta para juegos y diversión',
    image: '/cats/leo-churu.jpg',
  },
];

const cats = [
  ...originalCats,
  ...originalCats.map(cat => ({ ...cat, id: cat.id + 3 })),
  ...originalCats.map(cat => ({ ...cat, id: cat.id + 6 }))
];

const services = [
  {
    icon: '🏠',
    title: 'Cuidado en Casa',
    description: 'Tu gato estará más cómodo en su ambiente familiar',
    ariaLabel: 'Servicio de cuidado en el hogar del gato'
  },
  {
    icon: '⭐',
    title: 'Catsitters Certificados',
    description: 'Personal capacitado y con experiencia',
    ariaLabel: 'Personal certificado para el cuidado de gatos'
  },
  {
    icon: '📱',
    title: 'Actualizaciones Diarias',
    description: 'Fotos y reportes de las actividades de tu gato',
    ariaLabel: 'Servicio de actualizaciones diarias con fotos'
  }
];

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (!swiperRef.current) return;
    
    if (event.key === 'ArrowLeft') {
      swiperRef.current.slidePrev();
    } else if (event.key === 'ArrowRight') {
      swiperRef.current.slideNext();
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#e1d5c5] bg-opacity-90 bg-pattern pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center"
        aria-label="Bienvenida a Cat.rolina Sitter"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#391502] to-[#c44400] opacity-95" aria-hidden="true" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-4`}>Cat.rolina Sitter</h1>
          <p className="text-xl mb-8">Cuidamos a tu felino como si fuera nuestro</p>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Reservar servicio de cuidado de gatos"
          >
            Reserva Ahora
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        id="catsitters" 
        className="max-w-7xl mx-auto py-16 px-4"
        aria-labelledby="catsitters-title"
      >
        <h2 
          id="catsitters-title"
          className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}
        >
          Nuestros Catsitters Profesionales
        </h2>
        <div 
          className="w-full my-8"
          role="region"
          aria-label="Carrusel de catsitters"
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ 
              clickable: true,
              bulletAriaLabel: 'Ir a la diapositiva {{index}}' 
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
            onKeyDown={handleKeyDown}
          >
            {cats.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div 
                  className="card h-[450px]"
                  role="article"
                  aria-labelledby={`cat-name-${cat.id}`}
                >
                  <div className="relative h-64">
                    <Image
                      src={cat.image}
                      alt={`${cat.name}, ${cat.description}`}
                      fill
                      className="object-cover"
                      priority={cat.id <= 3}
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      id={`cat-name-${cat.id}`}
                      className="text-xl font-semibold mb-2 text-[#391502]"
                    >
                      {cat.name}
                    </h3>
                    <p className="text-[#391502]/80 mb-4">{cat.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="servicios" 
        className="bg-white py-16"
        aria-labelledby="services-title"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 
            id="services-title"
            className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}
          >
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="text-center"
                role="article"
                aria-labelledby={`service-title-${index}`}
              >
                <div 
                  className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]"
                  aria-hidden="true"
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 
                  id={`service-title-${index}`}
                  className="text-xl font-semibold mb-2 text-[#391502]"
                >
                  {service.title}
                </h3>
                <p className="text-[#391502]/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contacto" 
        className="max-w-7xl mx-auto py-16 px-4"
        aria-labelledby="contact-title"
      >
        <div className="text-center">
          <h2 
            id="contact-title"
            className={`${titleFont.className} text-3xl font-bold mb-8 text-[#391502]`}
          >
            ¿Listo para empezar?
          </h2>
          <a
            href="https://wa.me/56912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp aria-hidden="true" />
            Contáctanos
          </a>
        </div>
      </section>

      {/* Eliminado el footer duplicado ya que está en layout.tsx */}
    </main>
  );
}
