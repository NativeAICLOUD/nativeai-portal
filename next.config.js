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
  reactStrictMode: false,
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
  eslint: {
    ignoreDuringBuilds: true,
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
