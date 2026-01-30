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
        fixed inset-0 top-0 bg-blockpixel-bg/40 backdrop-blur-2xl transition-all duration-500 md:hidden z-[-1]
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
        <div className="flex flex-col items-center justify-center h-screen gap-10 text-2xl font-bold bg-gradient-to-b from-blockpixel-bg/80 to-transparent">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={toggleMenu}
              className="hover:text-blockpixel-primary transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/community" 
            onClick={toggleMenu}
            className="px-10 py-4 bg-blockpixel-primary rounded-full shadow-lg shadow-blockpixel-primary/20"
          >
            Comunidade
          </Link>
        </div>
      </div>
