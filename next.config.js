/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [], // Añade aquí los dominios de tus imágenes si usas imágenes externas
  },
};

module.exports = nextConfig;