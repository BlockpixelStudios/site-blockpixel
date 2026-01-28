"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Projetos', href: '/projects' },
    { name: 'Parceiros', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-blockpixel-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Textual */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo-text.png" 
            alt="Blockpixel Studios" 
            width={180} 
            height={40} 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-white/70 hover:text-blockpixel-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/community" 
            className="px-5 py-2 bg-blockpixel-primary/10 border border-blockpixel-primary/50 text-blockpixel-primary rounded-full text-sm font-bold hover:bg-blockpixel-primary hover:text-white transition-all"
          >
            Comunidade
          </Link>
        </div>

        {/* Mobile Toggle (Opcional simplificado) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
    </nav>
  );
            }
      
