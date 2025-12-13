import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // true = Code 308 (cacheable), false = Code 307 (temporaire)
      },
    ];
  },
};

export default nextConfig;
