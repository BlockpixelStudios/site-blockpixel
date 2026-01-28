// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-blockpixel-bg/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
           <img src="/logo-text.png" alt="Blockpixel" className="h-8 w-auto" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="hover:text-blockpixel-primary transition-colors">Projetos</Link>
          <Link href="/partners" className="hover:text-blockpixel-primary transition-colors">Parceiros</Link>
          <Link href="/blog" className="hover:text-blockpixel-primary transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-blockpixel-primary transition-colors">Sobre</Link>
          <Link href="/community" className="px-5 py-2 bg-blockpixel-primary rounded-full font-bold">Comunidade</Link>
        </div>
      </div>
    </nav>
  );
}
