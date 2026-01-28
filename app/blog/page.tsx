import { getItemsByFolder } from '@/lib/markdown';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const posts = getItemsByFolder('blog');

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-center md:text-left">
        NEWS <span className="text-blockpixel-primary">&</span> UPDATES
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blockpixel-primary/50 transition-all">
              <div className="aspect-video relative overflow-hidden">
                <Image 
                  src={post.frontmatter.cover || '/placeholder-blog.jpg'} 
                  alt={post.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-blockpixel-primary font-bold uppercase tracking-widest">{post.frontmatter.date}</span>
                <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-blockpixel-primary transition-colors">{post.frontmatter.title}</h2>
                <p className="text-white/50 text-sm line-clamp-2">{post.frontmatter.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
                  }
  
