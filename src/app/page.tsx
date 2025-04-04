'use client';

import Image from 'next/image';
import { titleFont } from './config/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

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

// Duplicar los gatos para tener más elementos en el carrusel
const cats = [
  ...originalCats,
  ...originalCats.map(cat => ({ ...cat, id: cat.id + 3 })),
  ...originalCats.map(cat => ({ ...cat, id: cat.id + 6 }))
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e1d5c5] bg-opacity-90 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22%23391502%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22%2F%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#391502] to-[#c44400] opacity-95" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className={`${titleFont.className} text-5xl font-bold mb-4`}>Cat.rolina Sitter</h1>
          <p className="text-xl mb-8">Cuidamos a tu felino como si fuera nuestro</p>
          <button className="bg-white text-[#391502] px-8 py-3 rounded-full font-semibold hover:bg-[#e1d5c5] hover:shadow-[0_2px_4px_rgba(57,21,2,0.1)] transition-all">
            Reserva Ahora
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section id="catsitters" className="max-w-7xl mx-auto py-16 px-4">
        <h2 className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}>
          Nuestros Catsitters Profesionales
        </h2>
        <div className="w-full my-8">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
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
          >
            {cats.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="bg-white rounded-lg shadow-[0_2px_4px_rgba(57,21,2,0.1)] overflow-hidden transform hover:scale-105 hover:shadow-[0_4px_8px_rgba(57,21,2,0.15)] transition-all duration-300 h-[450px]">
                  <div className="relative h-64">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#391502]">{cat.name}</h3>
                    <p className="text-[#391502]/80 mb-4">{cat.description}</p>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Features Section */}
      <section id="servicios" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`${titleFont.className} text-3xl font-bold text-center mb-12 text-[#391502]`}>
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Cuidado en Casa</h3>
              <p className="text-[#391502]/80">Tu gato estará más cómodo en su ambiente familiar</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Catsitters Certificados</h3>
              <p className="text-[#391502]/80">Personal capacitado y con experiencia</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_2px_4px_rgba(57,21,2,0.1)] border-2 border-[#c44400]">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#391502]">Actualizaciones Diarias</h3>
              <p className="text-[#391502]/80">Fotos y reportes de las actividades de tu gato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className={`${titleFont.className} text-3xl font-bold mb-8 text-[#391502]`}>¿Listo para empezar?</h2>
          <button className="bg-[#c44400] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#391502] hover:shadow-[0_2px_4px_rgba(57,21,2,0.1)] transition-all">
            Contáctanos
          </button>
        </div>
      </section>

      <footer className="bg-[#391502] text-white py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className={`${titleFont.className} text-2xl font-bold mb-2`}>Cat-Rolina Sitter</h3>
              <p className="text-white/80">Cuidados felinos con amor y profesionalismo</p>
              <p className="text-white/80 mt-2">Talcahuano, Chile</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/56912345678" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors p-2"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={30} />
                </a>
                <a 
                  href="https://instagram.com/cat-rolina-sitter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400 transition-colors p-2"
                  aria-label="Instagram"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm"> {new Date().getFullYear()} Cat-Rolina Sitter. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
