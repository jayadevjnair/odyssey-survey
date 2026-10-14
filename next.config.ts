import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 301 redirect for old service slug that Google has indexed/discovered
      {
        source: "/services/building-setting-out",
        destination: "/services/construction-setting-out",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
