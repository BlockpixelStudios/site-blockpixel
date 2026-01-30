'use client'; // Necessário para usar o useState

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Importando ícones bonitos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Links para não repetir código
  const navLinks = [
    { href: '/projects', label: 'Projetos' },
    { href: '/partners', label: 'Parceiros' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'Sobre' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-blockpixel-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => setIsOpen(false)}>
          <img src="/logo-text.png" alt="Blockpixel" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-blockpixel-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/community" 
            className="px-5 py-2 bg-blockpixel-primary rounded-full font-bold hover:bg-blockpixel-accent transition-all"
          >
            Comunidade
          </Link>
        </div>

        {/* Mobile Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 top-20 bg-blockpixel-bg/95 backdrop-blur-xl transition-all duration-300 md:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8 text-2xl font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={toggleMenu}
              className="hover:text-blockpixel-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/community" 
            onClick={toggleMenu}
            className="px-8 py-3 bg-blockpixel-primary rounded-full"
          >
            Comunidade
          </Link>
        </div>
      </div>
    </nav>
  );
            }
              
