import type { Metadata } from 'next';

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const { url, title, description, keywords } = {
  url: 'https://nativeai.cloud',
  title: 'NativeCloud | AI Agents & Cloud Solutions',
  description:
    'We build AI Agents, RAG pipelines and LLM-powered solutions that work inside your business. Specialising in Azure OpenAI, GPT-4o and cloud-native architecture.',
  keywords:
    'AI agents, LLMs, RAG pipeline, Azure OpenAI, GPT-4o, cloud solutions, AI consulting, Azure, AWS, NativeCloud',
};
const seoConfig = defineMetadata({
  title,
  description,
  keywords,
  manifest: '/site.webmanifest',
  applicationName: title,
  robots: '/robots.txt',
  icons: [
    { rel: 'icon', url: '/favicon.png' },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/icon-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '167x167',
      url: '/icons/icon-152x152.png',
    },
    { rel: 'apple-touch-icon', url: '/icons/icon-512x512.png' },
    { rel: 'mask-icon', url: '/icons/icon-512x512.png' },
    { rel: 'image/x-icon', url: '/icons/icon-512x512.png' },
  ],
  metadataBase: new URL(url),
  openGraph: {
    url,
    title,
    description,
    siteName: title,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/nativeai.cloud-og.png',
        width: 1395,
        height: 697,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/nativeai.cloud-og.png'],
  },
});

export default seoConfig;
