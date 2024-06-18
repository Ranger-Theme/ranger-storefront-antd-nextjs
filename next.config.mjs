const isProd = process.env.NODE_ENV === 'production'
const cdnURL = process.env.NEXT_PUBLIC_CDN_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: false,
  distDir: '.next',
  assetPrefix: isProd && cdnURL ? cdnURL : undefined,
  compiler: {
    styledComponents: {
      displayName: !isProd,
      ssr: true,
      minify: isProd,
      ...(isProd ? { namespace: 'ranger' } : {})
    }
  },
  eslint: {
    ignoreDuringBuilds: isProd
  },
  typescript: {
    ignoreBuildErrors: isProd
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**'
      },
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:pathname*',
        destination: '/resolver'
      }
    ]
  }
}

export default nextConfig
