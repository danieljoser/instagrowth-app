import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/form'],
    
  },
  
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
