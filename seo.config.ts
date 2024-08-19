import type { Metadata } from 'next';

const defineMetadata = <T extends Metadata>(metadata: T) => metadata;

const { url, title, description, keywords } = {
  url: 'https://native.cloud',
  title: 'Native.Cloud | Azure Clouds Solutions',
  description:
    'Native.Cloud | Azure Clouds Solutions',
  keywords:
    'azure, cloud, solutions, resolve',
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
        url: '/native.cloud-og.png',
        width: 1395,
        height: 697,
      },
    ],
  },
  twitter: {
    site: 'Native.Cloud',
    creator: 'Native.Cloud',
    card: 'summary_large_image',
    images: ['/native.cloud-og.png'],
    url,
    title,
    description,
  },
});

export default seoConfig;
