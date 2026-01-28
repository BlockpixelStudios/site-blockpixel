import { getItemsByFolder } from '@/lib/markdown';
import { remark } from 'remark';
import html from 'remark-html';

async function getPostData(slug: string) {
  const posts = getItemsByFolder('blog');
  // Adicionei um console.log aqui para você ver no terminal se o slug está chegando certo
  console.log("Buscando post com slug:", slug);
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) return null;

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return { ...post, contentHtml };
}

// O segredo está no 'await params' abaixo:
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // <--- O Next.js 15/16 exige isso agora!
  const post = await getPostData(slug);

  if (!post) {
    return (
      <div className="pt-40 text-center min-h-screen">
        <h1 className="text-2xl font-bold">Post não encontrado.</h1>
        <p className="text-white/60">Verifique se o arquivo .md existe na pasta /content/blog/</p>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <header className="mb-12">
        <span className="text-blockpixel-primary font-bold">{post.frontmatter.date}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{post.frontmatter.title}</h1>
        {post.frontmatter.description && (
          <p className="text-xl text-white/60 italic">{post.frontmatter.description}</p>
        )}
      </header>
      
      <div 
        className="prose prose-invert prose-blockpixel max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
  );
}

// Dica extra: Adicione isso para ajudar a Vercel a gerar as páginas no build
export async function generateStaticParams() {
  const posts = getItemsByFolder('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
      }
