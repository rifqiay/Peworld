/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  images: {
    domains: ["chosen-shock-production.up.railway.app"],
  },
};

module.exports = nextConfig;
