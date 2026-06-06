import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // @ts-ignore
  allowedDevOrigins: ["*"],
};

export default nextConfig;