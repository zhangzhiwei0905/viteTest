/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // 对于静态导出启用
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/products': { page: '/products' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
    }
  },
}

module.exports = nextConfig