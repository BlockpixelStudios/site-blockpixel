import Link from 'next/link';
import Image from 'next/image';
import { getItemsByFolder } from '@/lib/markdown';

export default function Home() {
  // Pegamos os últimos 3 projetos para exibir um destaque
  const allProjects = getItemsByFolder('projects');
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* --- SEÇÃO HERO --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Brilho de fundo (Aurora) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blockpixel-primary/20 blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="text-center max-w-5xl">
          <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-blockpixel-primary text-sm font-bold mb-6 tracking-widest uppercase animate-bounce">
            O Futuro é Blockpixel
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            CRIANDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blockpixel-primary to-blockpixel-accent">EXPERIÊNCIAS</span> <br /> 
            ALÉM DOS LIMITES.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
            Estúdio criativo especializado em mundos imersivos, inovação e tecnologia para o metaverso e games.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/projects" className="px-10 py-4 bg-blockpixel-primary rounded-full font-bold text-lg hover:bg-blockpixel-accent transition-all hover:scale-105 shadow-lg shadow-blockpixel-primary/20">
              Ver Projetos
            </Link>
            <Link href="/about" className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Nossa História
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-1 h-12 bg-gradient-to-b from-blockpixel-primary to-transparent rounded-full" />
        </div>
      </section>

      {/* --- SEÇÃO NÚMEROS (STATS) --- */}
      <section className="py-20 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Projetos Entregues', value: '+15' },
            { label: 'Jogadores Ativos', value: '50K' },
            { label: 'Países Atingidos', value: '+10' },
            { label: 'Membros no Discord', value: '5K' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blockpixel-primary transition-colors">{stat.value}</h2>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO DESTAQUES (PROJETOS) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">PROJETOS EM <span className="text-blockpixel-primary">FOCO</span></h2>
            <p className="text-white/50 text-lg">Uma seleção do que andamos construindo nos laboratórios da Blockpixel.</p>
          </div>
          <Link href="/projects" className="text-blockpixel-primary font-bold hover:underline">Ver galeria completa →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10">
              <Image 
                src={project.frontmatter.cover} 
                alt={project.frontmatter.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blockpixel-bg via-blockpixel-bg/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 p-8">
                <span className="text-xs font-bold text-blockpixel-primary uppercase tracking-widest">{project.frontmatter.status}</span>
                <h3 className="text-2xl font-bold mt-2">{project.frontmatter.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- SEÇÃO CALL TO ACTION (CTA) --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blockpixel-primary/20 to-blockpixel-accent/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-blockpixel-primary/20 blur-[100px] rounded-full" />
           <h2 className="text-4xl md:text-6xl font-bold mb-8">PRONTO PARA O PRÓXIMO NÍVEL?</h2>
           <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">Seja um parceiro, junte-se à nossa comunidade ou faça parte da nossa equipe.</p>
           <Link href="/community" className="inline-block px-12 py-5 bg-white text-black font-black rounded-full hover:bg-blockpixel-primary hover:text-white transition-all">
             ENTRAR NA COMUNIDADE
           </Link>
        </div>
      </section>
    </main>
  );
        }
                
