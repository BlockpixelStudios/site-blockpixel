// lib/markdown.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getItemsByFolder(folder: string) {
  const fullPath = path.join(contentDirectory, folder);
  const fileNames = fs.readdirSync(fullPath);
  
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContents = fs.readFileSync(path.join(fullPath, fileName), 'utf8');
    const { data, content } = matter(fileContents);

    return { slug, frontmatter: data, content };
  });
}

