/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
    // ignoreBuildErrors: process.env.ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
    // ignoreDuringBuilds: process.env.ENV === 'production',
  },
};

module.exports = nextConfig;
