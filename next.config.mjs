/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|webm)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
