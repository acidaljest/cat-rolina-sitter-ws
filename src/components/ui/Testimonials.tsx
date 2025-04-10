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
      className="bg-[#f9f5f1] py-12 tablet:py-16 lg:py-20"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4 tablet:px-6">
        <h2 
          id="testimonials-title"
          className="text-2xl tablet:text-3xl lg:text-4xl font-bold text-center mb-8 tablet:mb-12 text-[#391502]"
        >
          Lo que dicen nuestros clientes
        </h2>

        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            renderBullet: (index, className) => {
              return `<button class="${className}" aria-label="Ir al testimonio ${index + 1}"></button>`;
            }
          }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          a11y={{
            prevSlideMessage: 'Testimonio anterior',
            nextSlideMessage: 'Siguiente testimonio',
            firstSlideMessage: 'Este es el primer testimonio',
            lastSlideMessage: 'Este es el último testimonio',
            paginationBulletMessage: 'Ir al testimonio {{index}}'
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            820: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper animate-fade-in !pb-12 tablet:!pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card bg-white rounded-lg shadow-md p-4 tablet:p-6 lg:p-8 flex flex-col h-full border border-[#e1d5c5] hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 tablet:mb-6 text-[#c44400]">
                  <FaQuoteLeft className="w-6 h-6 tablet:w-8 tablet:h-8" aria-hidden="true" />
                </div>
                <blockquote className="flex-grow mb-4 tablet:mb-6">
                  <p className="italic text-[#391502] text-base tablet:text-lg leading-relaxed">{testimonial.text}</p>
                </blockquote>
                <footer className="flex items-center gap-3 tablet:gap-4">
                  <div className="relative w-10 h-10 tablet:w-12 tablet:h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      fill
                      sizes="(max-width: 640px) 40px, (max-width: 1024px) 48px, 48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-[#391502] text-sm tablet:text-base block mb-1">
                      {testimonial.name}
                    </cite>
                    <div 
                      className="flex text-[#c44400] gap-0.5" 
                      aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-base tablet:text-lg">★</span>
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