'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Manejo de tecla Escape y scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('keydown', handleEscape);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
    };
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
    <header className={`fixed w-full z-50 bg-[--card-background]/90 backdrop-blur-sm transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      {/* Skip Link para accesibilidad */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Saltar al contenido principal
      </a>

      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/LogoCRS.png"
              alt="Cat.rolina Sitter Logo"
              width={40}
              height={40}
              className="transform hover:scale-110 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#servicios"
              className="text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
            >
              Servicios
            </Link>
            <Link
              href="/#catsitters"
              className="text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
            >
              Nuestros Catsitters
            </Link>
            <Link
              href="/#testimonios"
              className="text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
            >
              Testimonios
            </Link>
            <Link
              href="/#contacto"
              className="text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
            >
              Contacto
            </Link>
            <ThemeToggle />
            <button
              className="btn-primary"
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
                element?.focus();
              }}
              aria-label="Reservar servicio de catsitter"
            >
              Reserva Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[--text-primary] hover:text-[--primary] transition-colors p-2 rounded focus:ring-2 focus:ring-[--focus-ring-color] focus:outline-none"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-x-0 top-16 bg-[--card-background] transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="p-4 space-y-4 shadow-lg">
            <Link
              href="/#servicios"
              className="block text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Servicios
            </Link>
            <Link
              href="/#catsitters"
              className="block text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Nuestros Catsitters
            </Link>
            <Link
              href="/#testimonios"
              className="block text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Testimonios
            </Link>
            <Link
              href="/#contacto"
              className="block text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded"
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              Contacto
            </Link>
            <button
              className="w-full text-center btn-primary mt-4"
              onClick={() => {
                setIsMenuOpen(false);
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
                element?.focus();
              }}
              role="menuitem"
              aria-label="Reservar servicio de catsitter"
            >
              Reserva Ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
