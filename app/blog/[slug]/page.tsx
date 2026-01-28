import { getItemsByFolder } from '@/lib/markdown';
import { remark } from 'remark';
import html from 'remark-html';

async function getPostData(slug: string) {
  const posts = getItemsByFolder('blog');
  const post = posts.find(p => p.slug === slug);
  
  if (!post) return null;

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return { ...post, contentHtml };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) return <div className="pt-40 text-center">Post não encontrado.</div>;

  return (
    <article className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <header className="mb-12">
        <span className="text-blockpixel-primary font-bold">{post.frontmatter.date}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">{post.frontmatter.title}</h1>
        <p className="text-xl text-white/60 italic">{post.frontmatter.description}</p>
      </header>
      
      <div 
        className="prose-blockpixel"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
      />
    </article>
  );
      }

