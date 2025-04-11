'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';
import { usePathname } from 'next/navigation';
import { Breadcrumbs } from './Breadcrumbs';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: '/#servicios', label: 'Servicios' },
    { href: '/#catsitters', label: 'Nuestros Catsitters' },
    { href: '/#testimonios', label: 'Testimonios' },
    { href: '/#contacto', label: 'Contacto' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.focus();
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[--card-background]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <div className="max-w-7xl mx-auto px-4 tablet:px-6">
        <nav className="flex items-center justify-between h-16 tablet:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/LogoCRS.WebP"
              alt="Cat.rolina Sitter Logo"
              width={40}
              height={40}
              className="w-10 h-10 tablet:w-12 tablet:h-12 transform hover:scale-110 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 tablet:gap-6 tablet-landscape:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded px-2 py-1 text-base tablet:text-lg"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <button
              className="btn-primary text-base tablet:text-lg"
              onClick={() => scrollToSection('contacto')}
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
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`} />
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden fixed inset-0 top-16 tablet:top-20 bg-[--card-background] transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="h-full overflow-y-auto">
            <div className="p-4 tablet:p-6 space-y-4 tablet:space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[--text-primary] hover:text-[--primary] transition-colors focus:outline-none focus:ring-2 focus:ring-[--focus-ring-color] rounded px-2 py-3 text-lg tablet:text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="w-full text-center btn-primary mt-4 tablet:mt-6 text-lg tablet:text-xl py-3 tablet:py-4"
                onClick={() => scrollToSection('contacto')}
                aria-label="Reservar servicio de catsitter"
              >
                Reserva Ahora
              </button>
            </div>
          </nav>
        </div>
      </div>
      
      <Breadcrumbs />
    </header>
  );
}
