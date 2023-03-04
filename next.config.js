/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["ivaylotsochev.com", "cdn.sanity.io"],
  },
};
