import { getItemsByFolder } from '@/lib/markdown';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const projects = getItemsByFolder('projects');

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
          NOSSAS <span className="text-blockpixel-primary">CRIAÇÕES</span>
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto italic">
          De ideias a experiências interativas
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative">
            <article className="relative h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-black/40 transition-all duration-500 hover:border-blockpixel-primary/40">
              
              {/* Imagem de Fundo do Card */}
              <Image 
                src={project.frontmatter.cover || '/placeholder-project.jpg'}
                alt={project.frontmatter.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlay de Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-blockpixel-bg via-blockpixel-bg/20 to-transparent" />

              {/* Conteúdo do Card */}
              <div className="absolute bottom-0 p-8 w-full">
                <div className="flex gap-2 mb-4">
                  {project.frontmatter.tags?.slice(0, 3).map((tag: string) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {project.frontmatter.title}
                </h2>
                <p className="text-white/60 line-clamp-2 text-sm max-w-md">
                  {project.frontmatter.description}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
              }
      
