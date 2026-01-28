import { getItemsByFolder } from '@/lib/markdown';
import { remark } from 'remark';
import html from 'remark-html';
import Image from 'next/image';

async function getProjectData(slug: string) {
  const projects = getItemsByFolder('projects');
  const project = projects.find(p => p.slug === slug);
  if (!project) return null;

  const processedContent = await remark().use(html).process(project.content);
  return { ...project, contentHtml: processedContent.toString() };
}

// O segredo: params como Promise e await params
export default async function ProjectSingle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);
  
  if (!project) return <div className="pt-40 text-center min-h-screen">Projeto não encontrado.</div>;

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="relative h-[50vh] w-full mb-12">
        <Image src={project.frontmatter.cover} alt={project.frontmatter.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-blockpixel-bg/60 backdrop-blur-sm" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-6">
          <div className="max-w-4xl">
            <span className="text-blockpixel-primary font-bold tracking-[0.2em] uppercase text-sm">{project.frontmatter.status}</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">{project.frontmatter.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 prose prose-invert prose-blockpixel max-w-none" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        
        <aside className="space-y-8">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h3 className="font-bold mb-4 border-b border-white/10 pb-2">Detalhes</h3>
            <ul className="space-y-4 text-sm">
              <li><span className="text-white/40 block">Data:</span> {project.frontmatter.date}</li>
              <li><span className="text-white/40 block">Tecnologias:</span> {Array.isArray(project.frontmatter.tags) ? project.frontmatter.tags.join(', ') : project.frontmatter.tags}</li>
            </ul>
            {project.frontmatter.links && (
              <a href={project.frontmatter.links} target="_blank" rel="noopener noreferrer" className="mt-8 block text-center py-3 bg-blockpixel-primary rounded-xl font-bold hover:bg-blockpixel-accent transition-all">
                Acessar Projeto
              </a>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const projects = getItemsByFolder('projects');
  return projects.map((p) => ({ slug: p.slug }));
        }
