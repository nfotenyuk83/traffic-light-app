/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'traffic-light-app'; // Change this to your repo name

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig