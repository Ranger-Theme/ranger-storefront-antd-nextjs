const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      displayName: isProd,
      ssr: true,
      minify: isProd,
      ...(isProd ? { namespace: 'ranger' } : {})
    }
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
