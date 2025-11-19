import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "www.themealdb.com",
      },
    ],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/products/add',
        destination: '/dashboard/products/add',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
