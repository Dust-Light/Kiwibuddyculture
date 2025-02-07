/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Kiwibuddyculture',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/Kiwibuddyculture/',
  trailingSlash: true,
}

module.exports = nextConfig 