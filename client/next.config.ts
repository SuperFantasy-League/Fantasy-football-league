import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["cdn.sportmonks.com, www.larvalabs.com, media.api-sports.io"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.api-sports.io",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
