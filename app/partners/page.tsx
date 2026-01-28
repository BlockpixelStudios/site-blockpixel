import { getItemsByFolder } from '@/lib/markdown';
import Image from 'next/image';

export default function PartnersPage() {
  const partners = getItemsByFolder('partners');

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">NOSSOS <span className="text-blockpixel-primary">PARCEIROS</span></h1>
        <p className="text-white/50 max-w-2xl mx-auto">Marcas e comunidades que caminham lado a lado com a Blockpixel Studios.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div key={partner.slug} className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center hover:bg-blockpixel-primary/10 hover:border-blockpixel-primary transition-all">
            <div className="relative w-24 h-24 mb-4 grayscale group-hover:grayscale-0 transition-all">
              <Image 
                src={partner.frontmatter.cover} 
                alt={partner.frontmatter.title} 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-white/80">{partner.frontmatter.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
