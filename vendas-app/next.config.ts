import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 allowedDevOrigins: [
    "http://192.168.18.119:3000",
    "http://192.168.18.*", // Ou use wildcard para toda a rede
  ],
};

export default nextConfig;
