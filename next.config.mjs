/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  rewrites() {
    return [
      {
        source: "/api/models",
        destination: `${process.env.JSON_API_URL}/models`
      },
      {
        source: "/api/models/:path*",
        destination: `${process.env.JSON_API_URL}/models/:path*`
      }
    ]
  }
};

export default nextConfig;
