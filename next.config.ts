import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    env: {
        TASTECOMPASS_BACKEND_URL: process.env.TASTECOMPASS_BACKEND_URL!,
    },
};

export default nextConfig;
