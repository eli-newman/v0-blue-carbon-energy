/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/solution",
        destination: "/technology",
        permanent: true,
      },
      {
        source: "/partners",
        destination: "/about",
        permanent: true,
      },
    ]
  },
}

export default nextConfig