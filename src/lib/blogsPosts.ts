// Blog data is imported as a module so it is bundled with the server code.
// Do NOT read it from `public/` with fs at request time: on Vercel, files in
// `public/` are served from the CDN and are not present on the serverless
// function's filesystem, so any on-demand render would crash with ENOENT.
// The copy in `public/blogs.json` remains the source of truth because the
// Navbar search and /search fetch it client-side over HTTP.
import blogs from '../../public/blogs.json';

const posts = blogs as IPost[];

export const getBlogPosts = async (): Promise<IPost[]> => {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getSinglePost = async (id: number): Promise<IPost | undefined> => {
  if (!Number.isInteger(id)) return undefined;
  return posts.find((post) => post.id === id);
};
