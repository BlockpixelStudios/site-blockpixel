import Link from 'next/link';
import Image from 'next/image';
import { getItemsByFolder } from '@/lib/markdown';

export default function Home() {
  const featuredProjects = getItemsByFolder('projects').slice(0, 3);
  const latestPosts = getItemsByFolder('blog').slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0A0B1E]">
      {/* --- HERO IMPACTANTE --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background: Imagem de Alta Qualidade */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-fallback.jpg" 
            alt="Blockpixel Hero" 
            fill 
            priority
            className="object-cover opacity-60"
          />
          {/* Overlay para profundidade estilo Aurora */}
          <div className="absolute inset-0 bg-gradient-to-b from-blockpixel-bg/80 via-transparent to-blockpixel-bg" />
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <img 
            src="/logo-icon.png" 
            alt="Blockpixel" 
            className="w-32 h-32 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(63,65,201,0.5)] animate-pulse" 
          />
          <h2 className="text-white/40 tracking-[0.5em] uppercase text-sm font-bold">
            Inovação • Criatividade • Experiência
          </h2>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] uppercase tracking-widest font-bold text-white">Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* --- CRIAÇÕES (PROJETOS) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-black text-blockpixel-primary uppercase tracking-[0.3em] mb-2">Portfolio</h2>
          <h3 className="text-5xl font-bold italic tracking-tighter text-white">CRIAÇÕES.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProjects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`} 
              className="group relative aspect-video overflow-hidden rounded-sm border border-white/5"
            >
              <Image 
                src={project.frontmatter.cover} 
                alt={project.frontmatter.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-bold text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                  {project.frontmatter.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- NOVIDADES (BLOG) --- */}
      <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-black text-blockpixel-primary uppercase tracking-[0.3em] mb-2">Updates</h2>
              <h3 className="text-5xl font-bold italic tracking-tighter text-white">NOVIDADES.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="relative aspect-[16/9] mb-6 overflow-hidden">
                  <Image 
                    src={post.frontmatter.cover} 
                    alt={post.frontmatter.title} 
                    fill 
                    className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                <span className="text-blockpixel-primary text-xs font-bold">{post.frontmatter.date}</span>
                <h4 className="text-2xl font-bold text-white mt-2 group-hover:text-blockpixel-primary transition-colors">
                  {post.frontmatter.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- NOSSOS NÚMEROS --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-wrap justify-between gap-12 text-white">
        {[
          { label: 'Projetos', value: '15+' },
          { label: 'Jogadores', value: '50K+' },
          { label: 'Membros', value: '5K+' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-6xl md:text-8xl font-black outline-text tracking-tighter">
              {stat.value}
            </span>
            <span className="text-blockpixel-primary font-bold uppercase tracking-widest text-xs mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </section>

      {/* --- COMUNIDADE (DISCORD) --- */}
      <section className="py-40 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-transparent via-blockpixel-primary to-transparent">
          <div className="bg-[#0A0B1E] py-20 px-10">
            <h2 className="text-5xl font-black mb-8 tracking-tighter">FAÇA PARTE DO NOSSO DISCORD.</h2>
            <p className="text-white/40 mb-10 text-lg">
              Conecte-se com outros criadores e acompanhe os bastidores em tempo real.
            </p>
            <a 
              href="https://discord.gg/EdKAMp7yAJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-blockpixel-primary rounded-none font-black hover:skew-x-[-10deg] transition-all text-white"
            >
              ENTRAR AGORA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
          }
