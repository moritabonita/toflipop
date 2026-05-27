import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'], // Formats modernos
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimización de calidad
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },
  // Permitir acceso desde la IP de WSL en desarrollo
  allowedDevOrigins: ['172.31.82.232'],
  // Optimización de rendimiento
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
