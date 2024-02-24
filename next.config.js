/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "secure.gravatar.com",
      "manumorante.com",
      "user-images.githubusercontent.com",
      "picsum.photos",
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
