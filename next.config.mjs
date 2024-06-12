const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: isProd,
      ssr: true,
      minify: isProd,
      ...(isProd ? { namespace: "ranger" } : {}),
    },
  },
};

export default nextConfig;
