/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add headers for PDF files
  async headers() {
    return [
      {
        source: '/pdf/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Prashant-Kulkarni-Presskit.pdf"',
          },
        ],
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve 'fs' module on the client to prevent this error
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        path: false,
        os: false,
        snappy: false,
        '@napi-rs/snappy': false,
        '@mongodb-js/zstd': false,
        'mongodb-client-encryption': false,
        kerberos: false,
        'gcp-metadata': false,
        socks: false,
        dns: false,
        'child_process': false,
        'util/types': false,
      }
    }
    return config
  },
  // Ensure server-side modules are only used in server components
  serverExternalPackages: [
    'mongodb',
    'mongodb-client-encryption',
    '@mongodb-js/zstd',
    'snappy',
    '@napi-rs/snappy',
    'kerberos',
    'gcp-metadata',
    'socks',
  ],
  // Mark MongoDB-related files as server-only
  experimental: {
    serverActions: true,
  },
}

export default nextConfig
