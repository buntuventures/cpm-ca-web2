/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ['fr', 'en'],
  //   defaultLocale: 'fr',
  // },
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
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_FACEBOOK_PIXEL_ID: process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  reactStrictMode: false,
  pageExtensions: ["js", "jsx"],
};

export default nextConfig;
