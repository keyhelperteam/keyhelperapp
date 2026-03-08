import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/keyhelperapp",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
