// Se houver erro de importação no Netlify, converta este arquivo para next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
