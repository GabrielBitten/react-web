/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      domains: ['assets.pokemon.com'],
      unoptimized: true,
    },
    trailingSlash: true,
  };
  
  module.exports = nextConfig;
  