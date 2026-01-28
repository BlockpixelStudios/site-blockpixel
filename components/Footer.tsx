import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Image 
              src="/logo-icon.png" 
              alt="Blockpixel Icon" 
              width={40} 
              height={40} 
              className="mb-6 opacity-80"
            />
            <p className="text-white/50 max-w-sm leading-relaxed">
              Blockpixel Studios — Transformando pixels em experiências digitais memoráveis e jogos que conectam pessoas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-6 text-white">Explorar</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/projects" className="hover:text-blockpixel-primary">Projetos</Link></li>
              <li><Link href="/blog" className="hover:text-blockpixel-primary">Blog & News</Link></li>
              <li><Link href="/partners" className="hover:text-blockpixel-primary">Parceiros</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-6 text-white">Conecte-se</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="https://discord.gg/EdKAMp7yAJ" target="_blank" className="hover:text-blockpixel-primary transition-colors">Discord</a></li>
              <li><a href="https://youtube.com/@blockpixel_studios" target="_blank" className="hover:text-blockpixel-primary transition-colors">YouTube</a></li>
              <li><a href="https://www.instagram.com/blockpixel_studios" target="_blank" className="hover:text-blockpixel-primary transition-colors">Instagram</a></li>
              <li><a href="https://x.com/blockpixel82420" target="_blank" className="hover:text-blockpixel-primary transition-colors">Twitter / X</a></li>
              <li><a href="https://www.tiktok.com/@blockpixelstudiosbrasil" target="_blank" className="hover:text-blockpixel-primary transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Blockpixel Studios. All Rights Reserved.</p>
          <p>Made with 👾 and Next.js</p>
        </div>
      </div>
    </footer>
  );
                }
            
