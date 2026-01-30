import { getItemsByFolder } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link'; // Importante para a navegação

export default function PartnersPage() {
  const partners = getItemsByFolder('partners');

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20 relative">
        {/* Um leve brilho atrás do título para combinar com a Aurora Boreal */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blockpixel-primary/20 blur-[80px] -z-10" />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
          NOSSOS <span className="text-blockpixel-primary">PARCEIROS</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg">
          Marcas e comunidades que caminham lado a lado com a Blockpixel Studios.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <Link 
            key={partner.slug} 
            href={`/partners/${partner.slug}`}
            className="group relative bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center hover:bg-blockpixel-primary/5 hover:border-blockpixel-primary/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Efeito de brilho interno no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blockpixel-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative w-28 h-28 mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
              <Image 
                src={partner.frontmatter.cover} 
                alt={partner.frontmatter.title} 
                fill 
                className="object-contain"
              />
            </div>
            
            <h3 className="font-bold text-white/70 group-hover:text-white text-xl transition-colors relative z-10">
              {partner.frontmatter.title}
            </h3>

            {/* Indicador de "Ver mais" que aparece no hover */}
            <span className="mt-4 text-xs font-black uppercase tracking-widest text-blockpixel-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
              Ver Perfil →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
            }
