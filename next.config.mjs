/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    PUBLIC_FACEBOOK_PIXEL_ID: process.env.PUBLIC_FACEBOOK_PIXEL_ID,
  },
  reactStrictMode: false,
  pageExtensions: ["js", "jsx"], // Ensure Next.js looks for pages with these extensions
};

export default nextConfig;
