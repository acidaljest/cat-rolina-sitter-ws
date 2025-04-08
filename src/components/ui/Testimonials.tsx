'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Ana García',
    text: 'Excelente servicio, mi gato Milo siempre está feliz cuando lo visitan. Las fotos diarias son un detalle encantador.',
    image: '/imgs/testimonial1.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    text: 'Los catsitters son muy profesionales y cariñosos. Mi gata es tímida pero se adaptó muy bien a ellos.',
    image: '/imgs/testimonial2.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'María José López',
    text: 'Me encanta recibir actualizaciones constantes sobre mi gatito. Me da mucha tranquilidad cuando viajo.',
    image: '/imgs/testimonial3.jpg',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section 
      className="bg-[--card-background] py-16"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          id="testimonials-title"
          className="text-3xl font-bold text-center mb-12 text-[--text-primary]"
        >
          Lo que dicen nuestros clientes
        </h2>

        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          a11y={{
            prevSlideMessage: 'Testimonio anterior',
            nextSlideMessage: 'Siguiente testimonio',
            firstSlideMessage: 'Este es el primer testimonio',
            lastSlideMessage: 'Este es el último testimonio',
            paginationBulletMessage: 'Ir al testimonio {{index}}'
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper animate-fade-in"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card flex flex-col h-full">
                <div className="mb-4 text-[--primary]">
                  <FaQuoteLeft className="w-8 h-8" aria-hidden="true" />
                </div>
                <blockquote className="flex-grow mb-6">
                  <p className="italic text-[--text-primary]">{testimonial.text}</p>
                </blockquote>
                <footer className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[--text-primary]">
                      {testimonial.name}
                    </cite>
                    <div className="flex text-[--primary]" aria-label={`${testimonial.rating} de 5 estrellas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </footer>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}