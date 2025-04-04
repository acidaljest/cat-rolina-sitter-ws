'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/imgs/LogoCRS.png"
                alt="Cat.rolina Sitter Logo"
                width={48}
                height={48}
                className="rounded-full h-12 w-12 object-cover border-2 border-[#c44400] hover:border-[#391502] transition-colors"
                priority
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#catsitters" className="text-[#391502] hover:text-[#c44400] transition-colors">
              Catsitters
            </Link>
            <Link href="/#servicios" className="text-[#391502] hover:text-[#c44400] transition-colors">
              Servicios
            </Link>
            <Link href="/#contacto" className="text-[#391502] hover:text-[#c44400] transition-colors">
              Contacto
            </Link>
            <button className="bg-[#c44400] text-white px-4 py-2 rounded-full hover:bg-[#391502] transition-colors">
              Reserva Ahora
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#391502] hover:text-[#c44400] transition-colors p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
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
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-sm border-t border-gray-200`}
      >
        <div className="px-4 pt-2 pb-3 space-y-3">
          <Link
            href="/#catsitters"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Catsitters
          </Link>
          <Link
            href="/#servicios"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/#contacto"
            className="block text-[#391502] hover:text-[#c44400] transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <button
            className="w-full text-center bg-[#c44400] text-white px-4 py-2 rounded-full hover:bg-[#391502] transition-colors mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserva Ahora
          </button>
        </div>
      </div>
    </nav>
  );
}
