/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  // Additional configuration to handle manifest issues
  buildExcludes: [/middleware-manifest\.json$/],
  webpack(config, options) {
    if (options.isServer) {
      config.plugins = config.plugins.filter(plugin =>
        plugin.constructor.name !== 'ManifestPlugin' ||
        !plugin.filename.includes('middleware')
      );
    }
    return config;
  }
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  output: 'standalone',
  images: {
    domains: [],
  },
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));