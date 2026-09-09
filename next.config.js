/** @type {import('next').NextConfig} */
const path = require('path');
const runtimeCaching = require('next-pwa/cache');

const resolvePath = (...paths) => path.resolve(path.join(__dirname, ...paths));

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

const nextConfig = {
  // Allows building into a separate dir (e.g. NEXT_DIST_DIR=.next-build) so a
  // production build can run while `next dev` holds locks on .next
  distDir: process.env.NEXT_DIST_DIR || '.next',
  reactStrictMode: false,
  serverExternalPackages: ["mongoose"],
  experimental: {
    scrollRestoration: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=65540 ; includeSubDomains',
          },
        ],
      },
    ];
  },
  images: {
      remotePatterns: [
          { hostname: 'res.cloudinary.com', protocol: 'https', port: '' }
      ]
  },
  // `next dev` uses Turbopack by default as of Next.js 16. This mirrors the
  // webpack `resolve.fallback` below so Node-only builtins still don't leak
  // into client bundles in dev. Production builds still run on webpack (see
  // the `build` script's `--webpack` flag) because next-pwa only hooks webpack.
  turbopack: {
    resolveAlias: {
      fs: { browser: './scripts/empty-module.js' },
      net: { browser: './scripts/empty-module.js' },
      tls: { browser: './scripts/empty-module.js' },
    },
  },
};

nextConfig.webpack = (config, { webpack }) => {
  config.resolve.fallback = { fs: false, net: false, tls: false };
  // config.externals.push('lokijs', 'encoding');

  return config;
};

module.exports = () => {
  const plugins = [withPWA, withBundleAnalyzer];
  return plugins.reduce((acc, next) => next(acc), nextConfig);
};
