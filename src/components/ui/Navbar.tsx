'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const COLORS = {
  primary: '#c44400',
  secondary: '#391502',
  white: '#ffffff',
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Manejo de tecla Escape para cerrar el menú
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      {/* Skip Link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary"
      >
        Saltar al contenido principal
      </a>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Navegación principal">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" aria-label="Inicio - Cat.rolina Sitter">
              <Image
                src="/imgs/LogoCRS.png"
                alt="Cat.rolina Sitter Logo"
                width={48}
                height={48}
                className="rounded-full h-12 w-12 object-cover border-2 border-[#c44400] hover:border-[#391502] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#c44400] focus:outline-none"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            <Link
              href="/#catsitters"
              className="text-[#391502] hover:text-[#c44400] transition-colors focus:ring-2 focus:ring-[#c44400] focus:outline-none p-2 rounded"
              role="menuitem"
            >
              Catsitters
            </Link>
            <Link
              href="/#servicios"
              className="text-[#391502] hover:text-[#c44400] transition-colors focus:ring-2 focus:ring-[#c44400] focus:outline-none p-2 rounded"
              role="menuitem"
            >
              Servicios
            </Link>
            <Link
              href="/#contacto"
              className="text-[#391502] hover:text-[#c44400] transition-colors focus:ring-2 focus:ring-[#c44400] focus:outline-none p-2 rounded"
              role="menuitem"
            >
              Contacto
            </Link>
            <button
              className="bg-[#c44400] text-white px-4 py-2 rounded-full hover:bg-[#391502] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#c44400] focus:outline-none"
              role="menuitem"
              aria-label="Reservar servicio de catsitter"
            >
              Reserva Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#391502] hover:text-[#c44400] transition-colors p-2 rounded focus:ring-2 focus:ring-[#c44400] focus:outline-none"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-sm border-t border-gray-200`}
        role="menu"
        aria-label="Menú móvil"
      >
        <div className="px-4 pt-2 pb-3 space-y-3">
          <Link
            href="/#catsitters"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2 focus:ring-2 focus:ring-[#c44400] focus:outline-none rounded"
            onClick={() => setIsMenuOpen(false)}
            role="menuitem"
          >
            Catsitters
          </Link>
          <Link
            href="/#servicios"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2 focus:ring-2 focus:ring-[#c44400] focus:outline-none rounded"
            onClick={() => setIsMenuOpen(false)}
            role="menuitem"
          >
            Servicios
          </Link>
          <Link
            href="/#contacto"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2 focus:ring-2 focus:ring-[#c44400] focus:outline-none rounded"
            onClick={() => setIsMenuOpen(false)}
            role="menuitem"
          >
            Contacto
          </Link>
          <button
            className="w-full text-center bg-[#c44400] text-white px-4 py-2 rounded-full hover:bg-[#391502] transition-colors mt-4 focus:ring-2 focus:ring-offset-2 focus:ring-[#c44400] focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            role="menuitem"
            aria-label="Reservar servicio de catsitter"
          >
            Reserva Ahora
          </button>
        </div>
      </div>
    </header>
  );
}
