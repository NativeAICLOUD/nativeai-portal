'use server-only';

import { promises as fs } from 'fs';

export const getBlogPosts = async (): Promise<IPost[]> => {
  const file = await fs.readFile(process.cwd() + '/public/blogs.json', 'utf8');
  const posts = JSON.parse(file);

  return posts;
}

export const getSinglePost = async (id: number): Promise<IPost> => {
  const posts = await getBlogPosts();
  return posts.find(post => post.id === id) || {} as IPost;
}