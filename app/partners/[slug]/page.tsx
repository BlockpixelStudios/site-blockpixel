import { getItemsByFolder } from '@/lib/markdown';
import Image from 'next/image';

async function getPartnerData(slug: string) {
  const partners = getItemsByFolder('partners');
  return partners.find(p => p.slug === slug);
}

export default async function PartnerSingle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = await getPartnerData(slug);

  if (!partner) return <div className="pt-40 text-center min-h-screen">Parceiro não encontrado.</div>;

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative w-48 h-48 mx-auto mb-8 bg-white/5 rounded-full p-8 border border-white/10">
          <Image 
            src={partner.frontmatter.cover} 
            alt={partner.frontmatter.title} 
            fill 
            className="object-contain p-8"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{partner.frontmatter.title}</h1>
        <div className="prose prose-invert mx-auto text-white/60 text-lg">
          {partner.content} 
        </div>
        
        {partner.frontmatter.website && (
          <a 
            href={partner.frontmatter.website} 
            target="_blank" 
            className="inline-block mt-10 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/20"
          >
            Visitar Website
          </a>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const partners = getItemsByFolder('partners');
  return partners.map((p) => ({ slug: p.slug }));
                               }

