import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks', '@mantine/form'],
    
  },
  basePath: "/instagrowth-appgit",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
