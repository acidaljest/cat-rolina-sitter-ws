'use client';

import Image from 'next/image';
import { titleFont } from './config/fonts';
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Keyboard, A11y } from 'swiper/modules';
import { useRef, useCallback, useState, useEffect } from 'react';
import { Testimonials } from '@/components/ui/Testimonials';
import { ContactForm } from '@/components/ui/ContactForm';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import SkipLink from '@/components/ui/SkipLink';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

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

// Optimizamos para tener solo una duplicación en lugar de dos
const cats = [...originalCats, ...originalCats.map(cat => ({ ...cat, id: cat.id + 3 }))];

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

// Services Schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": services.map((service, index) => ({
    "@type": "Service",
    "position": index + 1,
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Cat.rolina Sitter",
      "url": "https://carolinasitter.com"
    }
  }))
};

// Team Schema
const teamSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": originalCats.map((cat, index) => ({
    "@type": "Person",
    "position": index + 1,
    "name": cat.name,
    "description": cat.description,
    "image": `https://carolinasitter.com${cat.image}`,
    "jobTitle": "Catsitter Profesional",
    "worksFor": {
      "@type": "ProfessionalService",
      "name": "Cat.rolina Sitter"
    }
  }))
};

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Precargamos las imágenes de manera segura en el navegador
    if (typeof window !== 'undefined') {
      originalCats.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.image;
        img.onload = () => {
          setImagesLoaded(prev => ({...prev, [cat.image]: true}));
        };
      });
    }
  }, []);

  useEffect(() => {
    // Add schema markup dynamically
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(servicesSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(teamSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

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
      {/* Skip Links */}
      <div className="skip-links">
        <SkipLink href="#catsitters">Ir a Catsitters</SkipLink>
        <SkipLink href="#servicios">Ir a Servicios</SkipLink>
        <SkipLink href="#contacto">Ir a Contacto</SkipLink>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center animate-fade-in"
        aria-label="Bienvenida a Cat.rolina Sitter"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#391502] to-[#c44400] opacity-95" aria-hidden="true" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-4 animate-slide-in slide-in-left slide-in-active`}>
            Cat.rolina Sitter
          </h1>
          <p className="text-xl mb-8 animate-slide-in slide-in-right slide-in-active">
            Cuidamos a tu felino como si fuera nuestro
          </p>
          <button 
            className="btn-primary animate-fade-in"
            onClick={() => {
              const element = document.getElementById('contacto');
              element?.scrollIntoView({ behavior: 'smooth' });
              element?.focus();
            }}
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
        tabIndex={-1}
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
          {!isClient ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <SkeletonLoader key={n} />
              ))}
            </div>
          ) : (
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination, Navigation, Autoplay, Keyboard, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              centeredSlides={true}
              pagination={{ 
                clickable: true,
                renderBullet: (index, className) => {
                  return `<button class="${className}" aria-label="Ir a la diapositiva ${index + 1}"></button>`;
                }
              }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              a11y={{
                prevSlideMessage: 'Diapositiva anterior',
                nextSlideMessage: 'Siguiente diapositiva',
                firstSlideMessage: 'Esta es la primera diapositiva',
                lastSlideMessage: 'Esta es la última diapositiva',
                paginationBulletMessage: 'Ir a la diapositiva {{index}}',
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
                    className="card h-[450px] animate-fade-in"
                    role="article"
                    aria-labelledby={`cat-name-${cat.id}`}
                    tabIndex={0}
                  >
                    <div className="relative h-64">
                      {!imagesLoaded[cat.image] && <div className="absolute inset-0 skeleton-box rounded-t-lg" />}
                      <Image
                        src={cat.image}
                        alt={`${cat.name}, ${cat.description}`}
                        fill
                        className={`object-cover transition-opacity duration-300 ${
                          imagesLoaded[cat.image] ? 'opacity-100' : 'opacity-0'
                        }`}
                        priority={cat.id <= 3}
                        onLoad={() => setImagesLoaded(prev => ({...prev, [cat.image]: true}))}
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
          )}
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="servicios" 
        className="bg-white py-16"
        aria-labelledby="services-title"
        tabIndex={-1}
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
                className="text-center animate-slide-in slide-in-left slide-in-active"
                style={{ transitionDelay: `${index * 100}ms` }}
                role="article"
                aria-labelledby={`service-title-${index}`}
                tabIndex={0}
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section with Form */}
      <section 
        id="contacto" 
        className="max-w-7xl mx-auto py-16 px-4"
        aria-labelledby="contact-title"
        tabIndex={-1}
      >
        <div className="text-center mb-12">
          <h2 
            id="contact-title"
            className={`${titleFont.className} text-3xl font-bold mb-4 text-[--text-primary]`}
          >
            ¿Listo para empezar?
          </h2>
          <p className="text-[--text-secondary] mb-8">
            Contáctanos para programar el cuidado de tu felino
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Schema markup stays the same */}
    </main>
  );
}
