import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/form'],
    
  },
  basePath: "",
  reactStrictMode: true,
};

export default nextConfig;
