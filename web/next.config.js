/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
    // ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: true,
    // ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  output: "export",
  basePath: "/nextjs13-mdx-blog",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
