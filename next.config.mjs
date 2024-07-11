/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    PUBLIC_FACEBOOK_PIXEL_ID: process.env.PUBLIC_FACEBOOK_PIXEL_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  },
  reactStrictMode: false,
  pageExtensions: ["js", "jsx"], // Ensure Next.js looks for pages with these extensions
};

export default nextConfig;
